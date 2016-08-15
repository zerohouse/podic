(function () {
  angular.module('Podic.controllers').controller('attackSimulateCtrl', attackSimulateCtrl);
  /* @ng-inject */
  function attackSimulateCtrl($scope, PocketMons, cpCal, text, $ionicPopup, $rootScope, $interval, $stateParams) {

    var trainerLevel = $rootScope.playerStatus ? $rootScope.playerStatus.level : 10;
    $scope.trainer = {level: trainerLevel};

    $scope.left = {
      individual_attack: 15,
      individual_defense: 15,
      individual_stamina: 15,
      level: 15,
      pokemon: PocketMons.all().random()
    };

    $scope.right = {
      individual_attack: 15,
      individual_defense: 15,
      individual_stamina: 15,
      level: 15,
      pokemon: PocketMons.all().random()
    };
    $scope.left.move_1 = $scope.left.pokemon.attacks[0].id;
    $scope.left.move_2 = $scope.left.pokemon.skills[0].id;
    $scope.right.move_1 = $scope.right.pokemon.attacks[0].id;
    $scope.right.move_2 = $scope.right.pokemon.skills[0].id;


    $scope.$on('$locationChangeSuccess', function () {
      if ($stateParams.pokemon) {
        $scope.left.pokemon = PocketMons.get(parseInt($stateParams.pokemon));
        $scope.simulate();
      }
      if ($stateParams.pokemon_id) {
        var pokemon = $rootScope.pokemons.findById(parseInt($stateParams.pokemon_id));
        $scope.left.individual_attack = pokemon.individual_attack;
        $scope.left.individual_defense = pokemon.individual_defense;
        $scope.left.individual_stamina = pokemon.individual_stamina;
        $scope.left.level = cpCal.getLevel(pokemon);
        $scope.left.pokemon = pokemon.pokemon;
        $scope.left.nickname = pokemon.nickname;
        $scope.left.move_1 = pokemon.move_1;
        $scope.left.move_2 = pokemon.move_2;
        $scope.simulate();
      }
    });

    function stop() {
      $interval.cancel($scope.interval);
      $scope.playing = false;
    }

    $scope.play = function () {
      if ($scope.options.ceil === $scope.events.time)
        $scope.events.time = 0;
      $scope.playing = true;
      $scope.interval = $interval(function () {
        $scope.events.time++;
        if ($scope.options.ceil < $scope.events.time) {
          stop();
          $scope.events.time = $scope.options.ceil;
        }
      }, 800);
    };

    $scope.stop = function () {
      stop();
      $scope.events.time = -1;
    };

    $scope.pause = function () {
      stop();
    };

    $scope.simulate = function () {
      $scope.skillHide = false;
      setSkills($scope.left);
      setSkills($scope.right);

      cpCal.setValues($scope.left);
      cpCal.setValues($scope.right);

      calculatePokemon($scope.left, $scope.right);
      calculatePokemon($scope.right, $scope.left);

      $scope.events = {};
      $scope.events.time = -1;

      $scope.events.left = simulateAttack($scope.left, $scope.right);
      $scope.events.right = simulateAttack($scope.right, $scope.left);

      var leftEnd = $scope.events.left.last();
      var rightEnd = $scope.events.right.last();

      $scope.options = {
        floorLabel: text('start'),
        floor: -1, ceil: Math.min(leftEnd.time, rightEnd.time),
        enforceStep: false,
        showSelectionBar: true,
        hidePointerLabels: true,
        hideLimitLabels: true
      };
    };

    $scope.simulate();

    $scope.setSkillHide = function (bool) {
      $scope.skillHide = bool;
    };

    $scope.$watch('events.time', function (time) {
      if (time !== -1)
        $scope.skillHide = true;
      $scope.events.leftLogs = $scope.events.left.filter(function (e) {
        return e.time <= time;
      });
      var leftlast = $scope.events.leftLogs.last();
      if (!leftlast)
        return;
      leftlast.pokemon.energy = leftlast.energy;
      $scope.events.rightLogs = $scope.events.right.filter(function (e) {
        return e.time <= time;
      });
      var rightlast = $scope.events.rightLogs.last();
      if (!rightlast)
        return;
      rightlast.pokemon.energy = rightlast.energy;
      leftlast.pokemon.damageSum = Math.floor(rightlast.damageSum);
      rightlast.pokemon.damageSum = Math.floor(leftlast.damageSum);
      var logs = [];
      logs.pushAll($scope.events.leftLogs);
      logs.pushAll($scope.events.rightLogs);
      logs.sort(function (e1, e2) {
        return e1.time - e2.time;
      });
      $scope.events.logs = [];
      logs.forEach(function (event) {
        if (event.time === -1)
          return;
        $scope.events.logs.push(new Log(event.time, text('eventLog')(event.pokemon, event.skill, event.damage, event.energy)));
        if (event.target.stamina <= event.damageSum) {
          $scope.events.logs.push(new Log(event.time, text('winMessage')(event.pokemon)));
        }
      });
    });

    function Log(time, message) {
      this.time = time;
      this.message = message;
    }


    $scope.selectPokemon = function (pokemon) {
      var scope = $scope.$new();
      scope.pokemon = pokemon;
      scope.pokemons = PocketMons.all();
      var popup = $ionicPopup.show({
        templateUrl: 'templates/simulator/pokemonadjust.html',
        title: text('pokemonAdjust'),
        scope: scope,
        buttons: [
          {text: pokemon.pokemon.name + text('keep'), type: 'button-royal'}
        ]
      });
      scope.select = function (p) {
        pokemon.pokemon = p;
        $scope.simulate();
        popup.close();
      };
    };

    $scope.selectSkill = function (pokemon) {
      var scope = $scope.$new();
      scope.pokemon = pokemon;
      var popup = $ionicPopup.show({
        templateUrl: 'templates/simulator/selectSkill.html',
        title: text('selectSkill'),
        scope: scope,
        buttons: [
          {text: text('done'), type: 'button-royal'}
        ]
      });
      popup.then($scope.simulate);
    };

    $scope.modifylvAndStat = function (pokemon) {
      var scope = $scope.$new();
      scope.pokemon = pokemon;
      scope.trainer = $scope.trainer;
      var popup = $ionicPopup.show({
        templateUrl: 'templates/simulator/modifylvAndStat.html',
        title: text('modifylvAndStat'),
        scope: scope,
        buttons: [
          {text: text('done'), type: 'button-royal'}
        ]
      });
      popup.then(function () {
        $scope.simulate();
      });
    };


    function simulateAttack(p1, p2) {
      var damage = 0;
      var time = 0;
      var energy = 0;
      var events = [new Event(-1, 0, 0, 0, null, p1, p2)];

      function useSkill(skill, calculated) {
        events.push(new Event(time, -1, damage, energy, skill, p1, p2));
        energy += skill.energy;
        damage += calculated.damage;
        time += skill.cooldown;
        events.push(new Event(time, calculated.damage, damage, energy, skill, p1, p2));
      }

      function attack(skill, calculated) {
        energy += skill.energy;
        damage += calculated.damage;
        events.push(new Event(time, calculated.damage, damage, energy, skill, p1, p2));
        time += skill.cooldown;
      }

      while (damage < p2.stamina) {
        if (energy >= -p1.skill_2.energy) {
          useSkill(p1.skill_2, p1.skill_2_calculated);
          continue;
        }
        attack(p1.skill_1, p1.skill_1_calculated);
      }
      return events;
    }

    function Event(time, damage, damageSum, energy, skill, pokemon, target) {
      this.time = time;
      this.damageSum = damageSum;
      this.damage = damage;
      this.pokemon = pokemon;
      this.skill = skill;
      this.target = target;
      this.energy = energy;
    }


    function calculatePokemon(pokemon, target) {
      pokemon.skill_1_calculated = calculateSkill(pokemon.skill_1, pokemon, target);
      pokemon.skill_2_calculated = calculateSkill(pokemon.skill_2, pokemon, target);
    }

    //Attack / defense = 이미 멀티플라이어 곱해져잇음.
    //Damage = Floor(0.5 * (Attack / Defense) * (CpM_Atk / CpM_Def) * STAB(어택의 타입과 어태커의 타입이 같으면 1.25배 보너스) * Type * MovePower(스킬의 파워) + 1
    function calculateSkill(skill, p1, p2) {
      if (!skill || !p1 || !p2)
        return;
      skill.stabBonus = p1.pokemon.attr.contains(skill.type.id) ? 1.25 : 1;

      skill.typeEffectiveness = [];
      skill.type.attack.strong.forEach(function (type) {
        if (p2.pokemon.attr.contains(type))
          skill.typeEffectiveness.push(1.25);
      });

      skill.type.attack.weak.forEach(function (type) {
        if (p2.pokemon.attr.contains(type))
          skill.typeEffectiveness.push(0.8);
      });

      var damage = Math.floor(0.5 * (p1.attack / p2.defense) * skill.stabBonus * skill.attack);
      skill.typeEffectiveness.forEach(function (e) {
        damage = damage * e;
      });

      return new Calculated(damage + 1, (damage + 1) / skill.cooldown);
    }

    function Calculated(damage, dps) {
      this.damage = damage;
      this.dps = dps;
    }

    function setSkills(pokemon) {
      pokemon.skill_1 = pokemon.pokemon.attacks.findById(pokemon.move_1);
      if (!pokemon.skill_1) {
        pokemon.skill_1 = pokemon.pokemon.attacks.random();
        pokemon.move_1 = pokemon.skill_1.id;
      }
      pokemon.skill_2 = pokemon.pokemon.skills.findById(pokemon.move_2);
      if (!pokemon.skill_2) {
        pokemon.skill_2 = pokemon.pokemon.skills.random();
        pokemon.move_2 = pokemon.skill_2.id;
      }
    }
  }
})();

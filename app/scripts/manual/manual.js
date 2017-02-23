angular.module('Podic.controllers').controller('manualCtrl', manualCtrl);
/* @ng-inject */
function manualCtrl($scope, $ionicPopup, Pokemons, text, cpCal, db) {
  $scope.cpmList = [0.094, 0.135137432, 0.16639787, 0.192650919, 0.21573247, 0.236572661, 0.25572005, 0.273530381, 0.29024988, 0.306057378, 0.3210876, 0.335445036, 0.34921268, 0.362457751, 0.37523559, 0.387592406, 0.39956728, 0.411193551, 0.42250001, 0.433511688, 0.44310755, 0.453059959, 0.46279839, 0.472336083, 0.48168495, 0.4908558, 0.49985844, 0.508701765, 0.51739395, 0.525942511, 0.53435433, 0.542635767, 0.55079269, 0.558830576, 0.56675452, 0.574569153, 0.58227891, 0.589887917, 0.59740001, 0.604818814, 0.61215729, 0.619404112, 0.62656713, 0.633649173, 0.64065295, 0.647580967, 0.65443563, 0.661219252, 0.667934, 0.674581896, 0.68116492, 0.687684924, 0.69414365, 0.70054287, 0.70688421, 0.713169119, 0.71939909, 0.725575604, 0.7317, 0.734741036, 0.73776948, 0.740785574, 0.74378943, 0.746781211, 0.74976104, 0.752729087, 0.75568551, 0.758630378, 0.76156384, 0.764486065, 0.76739717, 0.770297266, 0.7731865, 0.776064962, 0.77893275, 0.781790055, 0.78463697, 0.787473578, 0.79030001, 0.793116364];

  var starDust = [200, 200, 200, 200, 400, 400, 400, 400, 600, 600, 600, 600, 800, 800, 800, 800, 1000, 1000, 1000, 1000, 1300, 1300, 1300, 1300, 1600, 1600, 1600, 1600, 1900, 1900, 1900, 1900, 2200, 2200, 2200, 2200, 2500, 2500, 2500, 2500, 3000, 3000, 3000, 3000, 3500, 3500, 3500, 3500, 4000, 4000, 4000, 4000, 4500, 4500, 4500, 4500, 5000, 5000, 5000, 5000, 6000, 6000, 6000, 6000, 7000, 7000, 7000, 7000, 8000, 8000, 8000, 8000, 9000, 9000, 9000, 9000, 10000, 10000, 10000, 10000];

  $scope.etc = db.etc;
  if (!$scope.etc.team)
    $scope.etc.team = "blue";

  $scope.cpCal = cpCal;
  $scope.pokemon = Pokemons.get(147);
  $scope.pokemons = Pokemons.all();

  $scope.options = {cp: 154, hp: 29, starDust: 800, trainerLevel: 10};

  $scope.setValue = function (value) {
    $scope.value = value;
  };

  $scope.getStyle = function (value) {
    if ($scope.value === value)
      return {'font-weight': 900};
  };

  $scope.getLevels = function () {
    var levels = [];
    starDust.forEach(function (st, i) {
      if (st != $scope.options.starDust)
        return;
      if ($scope.options.powerUp) {
        levels.push(i);
        return;
      }
      if (i % 2 == 0)
        levels.push(i);
    });
    return levels;
  };

  $scope.select = function (pokemon) {
    $scope.popup.close();
    $scope.pokemon = pokemon;
    $scope.calculate();
  };

  $scope.calculate = function () {
    var cp = $scope.options.cp;
    var hp = $scope.options.hp;
    var pokemon = $scope.pokemon;
    var levels = $scope.options.byLevel ? [$scope.options.pokemonLevel] : $scope.getLevels();
    var results = $scope.results = [];
    levels.forEach(function (level) {
      var cpm = $scope.cpmList[level];
      var value = cp / (cpm * cpm);
      var staminaz = $scope.getStamina(hp, cpm, pokemon.value[2]);
      staminaz.forEach(function (ivStamina) {
        for (var ivAttack = $scope.options.hatched ? 10 : 0; ivAttack < 16; ivAttack++)
          for (var ivDefense = $scope.options.hatched ? 10 : 0; ivDefense < 16; ivDefense++) {
            if (cp == Math.floor(0.1 * (pokemon.value[0] + ivAttack) * Math.sqrt(pokemon.value[1] + ivDefense) * Math.sqrt(pokemon.value[2] + ivStamina) * cpm * cpm)) {
              if (!results.find(function (r) {
                  return r.a == ivAttack && r.d == ivDefense && r.s == ivStamina
                }))
                results.push({
                  p: (ivAttack + ivDefense + ivStamina) * 100 / 45,
                  iv: ivAttack + ivDefense + ivStamina,
                  a: ivAttack,
                  d: ivDefense,
                  s: ivStamina,
                  best: Math.max(ivAttack, ivDefense, ivStamina),
                  bests: [ivAttack, ivDefense, ivStamina].filter(v => v == Math.max(ivAttack, ivDefense, ivStamina)).length
                });
            }
          }
      });
    });
    return results;
  };

  $scope.getStamina = function (hp, multiplier, staminaSpecies) {
    var results = [];
    for (var i = $scope.options.hatched ? 10 : 0; i < 16; i++) {
      var h = Math.max(Math.floor(multiplier * (staminaSpecies + i)), 10);
      if (h == hp)
        results.push(i);
    }
    return results;
  };

  $scope.pokemonLevel = function (num) {
    $scope.options.pokemonLevel += num;
    if ($scope.options.pokemonLevel < 0)
      $scope.options.pokemonLevel = 0;
    if ($scope.options.pokemonLevel > $scope.options.trainerLevel * 2 + 1)
      $scope.options.pokemonLevel = $scope.options.trainerLevel * 2 + 1;
    if ($scope.options.pokemonLevel > 78)
      $scope.options.pokemonLevel = 78;
    $scope.calculate();
  };

  var buttons = [{
    text: text('close'), type: 'button-dark'
  }];

  $scope.selectPokemon = function () {
    $scope.popup = $ionicPopup.show({
      templateUrl: 'templates/simulator/pokemonadjust.html',
      title: text('selectPokemon'),
      cssClass: 'full',
      scope: $scope,
      buttons: buttons
    });
  };

  $scope.calculate();


  $scope.all = [
    new Comment(0, function (iv) {
      return between(iv.iv, 37, 45)
    }),
    new Comment(1, function (iv) {
      return between(iv.iv, 30, 36)
    }),
    new Comment(2, function (iv) {
      return between(iv.iv, 23, 29)
    }),
    new Comment(3, function (iv) {
      return between(iv.iv, 0, 22)
    })
  ];

  $scope.bests = [
    new Comment(text('attack'), function (iv) {
      return Math.max(iv.a, iv.d, iv.s) === iv.a;
    }),
    new Comment(text('defense'), function (iv) {
      return Math.max(iv.a, iv.d, iv.s) === iv.d;
    }),
    new Comment('HP', function (iv) {
      return Math.max(iv.a, iv.d, iv.s) === iv.s;
    })];

  $scope.bestValues = [
    new Comment(4, function (iv) {
      return iv.best === 15;
    }),
    new Comment(5, function (iv) {
      return between(iv.best, 13, 14);
    }),
    new Comment(6, function (iv) {
      return between(iv.best, 8, 12);
    }),
    new Comment(7, function (iv) {
      return between(iv.best, 0, 7);
    })];

  $scope.filter = {};

  $scope.getValues = function (results) {
    var bestComments = $scope.bests.filter(f => f.select);
    if (bestComments.length > 0) { // 베스트 커맨드가 선택되면
      results = results.filter(r => r.bests == bestComments.length);
      results = results.filter(r => {
        return !bestComments.find(c => !c.condition(r));
      });
    }
    if ($scope.filter.bestValue) { // 최고 평가가 선택 되면
      results = results.filter($scope.filter.bestValue);
    }
    if ($scope.filter.all) { // 전체평가가 선택되면
      results = results.filter($scope.filter.all);
    }
    return results;
  };

  function Comment(value, condition) {
    this.value = value;
    this.condition = condition;
  }

  Comment.prototype.text = function (team) {
    return text(team)[this.value];
  };

  function between(v, min, max) {
    return v >= min && v <= max;
  }

}

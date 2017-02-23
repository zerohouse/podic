(function () {
  angular.module('Podic.controllers').controller('catchSimulator', catchSimulator);
  /* @ng-inject */
  function catchSimulator($scope, Pokemons, cpCal, $ionicPopup, $rootScope, $stateParams, text, $ionicModal) {


    $scope.pokemons = Pokemons.all();
    var trainerLevel = $rootScope.playerStatus && $rootScope.playerStatus.level ? $rootScope.playerStatus.level : 10;
    $scope.trainer = {level: trainerLevel};

    var catchRates = [0, 16, 8, 4, 16, 8, 4, 16, 8, 4, 40, 20, 10, 40, 20, 10, 40, 20, 10, 40, 16, 40, 16, 40, 16, 16, 8, 40, 16, 40, 20, 10, 40, 20, 10, 24, 8, 24, 8, 40, 16, 40, 16, 48, 24, 12, 32, 16, 40, 16, 40, 16, 40, 16, 40, 16, 40, 16, 24, 8, 40, 20, 10, 40, 20, 10, 40, 20, 10, 40, 20, 10, 40, 16, 40, 20, 10, 32, 12, 40, 16, 40, 16, 24, 40, 16, 40, 16, 40, 16, 40, 16, 32, 16, 8, 16, 40, 16, 40, 16, 40, 16, 40, 16, 32, 12, 16, 16, 16, 40, 16, 40, 16, 16, 32, 16, 40, 16, 40, 16, 40, 16, 24, 24, 24, 24, 24, 24, 24, 56, 8, 16, 16, 32, 12, 12, 12, 32, 32, 12, 32, 12, 16, 16, 0, 0, 0, 32, 8, 4, 0, 0];

    $scope.factor = {ball: 'poke', throw: 1, curve: false, razzberry: false};

    function getDefaultRate() {
      var id = $scope.pokemon.pokemon.id;
      var bonus = 1;
      if ($scope.factor.razzberry)
        bonus *= 1.5;
      var cr = 1 / 2 * catchRates[id] / cpCal.getCpMultiplier($scope.pokemon.level) / 100;
      if ($scope.factor.ball === 'great')
        cr = 1.5 * cr - cr * cr / 2;
      if ($scope.factor.ball === 'ultra')
        cr = 2 * cr - cr * cr;
      return cr * bonus;
    }

    $scope.getCatchRate = function () {
      var rate = getDefaultRate();
      rate *= $scope.factor.throw;
      if ($scope.factor.curve)
        rate *= 1.2;
      return Math.min(1, rate);
    };

    $scope.getColor = function () {
      var rate = getDefaultRate();
      if (rate >= 0.66)
        return "green";
      if (rate >= 0.36)
        return "yellow";
      if (rate >= 0.26)
        return "orange";
      return "red";
    };

    $scope.getCp = function () {
      return cpCal.getPokemonCp($scope.pokemon);
    };

    $scope.reset = function () {
      var pokemon = $stateParams.pokemon ? Pokemons.get(parseInt($stateParams.pokemon)) : Pokemons.get(1);
      var attack = $stateParams.attack ? parseInt($stateParams.attack) : 15;
      var defense = $stateParams.defense ? parseInt($stateParams.defense) : 15;
      var stamina = $stateParams.stamina ? parseInt($stateParams.stamina) : 15;
      var level = $stateParams.level ? parseInt($stateParams.level) : 1;
      $scope.pokemon = {
        individual_attack: attack,
        individual_defense: defense,
        individual_stamina: stamina,
        level: level,
        pokemon: pokemon
      };
    };

    $scope.reset();

    $scope.$on('$stateChangeSuccess', function () {
      $scope.reset();
    });

    $scope.getCp = function () {
      return cpCal.getCp($scope.pokemon.pokemon, $scope.pokemon.level, $scope.pokemon.individual_attack, $scope.pokemon.individual_defense, $scope.pokemon.individual_stamina);
    };


    var buttons = [{
      text: text('close'), type: 'button-dark'
    }];
    // if (userService.user.id) {
    //   buttons.unshift({
    //     text: text('selectInMyPokemons'),
    //     type: 'button-royal',
    //     onTap: $ionicModal.fromMyPokemons($scope, function (pokemon) {
    //       $scope.pokemon = {
    //         individual_attack: pokemon.individual_attack,
    //         individual_defense: pokemon.individual_defense,
    //         individual_stamina: pokemon.individual_stamina,
    //         level: cpCal.getLevel(pokemon),
    //         pokemon: pokemon.pokemon
    //       };
    //     })
    //
    //   });
    // }
    $scope.selectPokemon = function () {
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/simulator/pokemonadjust.html',
        title: text('selectPokemon'),
        cssClass: 'full',
        scope: $scope,
        buttons: buttons
      });
    };

    $scope.select = function (pokemon) {
      $scope.popup.close();
      $scope.pokemon.pokemon = pokemon;
    };

  }
})();

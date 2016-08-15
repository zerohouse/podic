(function () {
  angular.module('Podic.controllers').controller('cpSimulator', cpSimulator);
  /* @ng-inject */
  function cpSimulator($scope, PocketMons, cpCal, $ionicPopup, $rootScope, $stateParams, text) {


    $scope.pokemons = PocketMons.all();
    var trainerLevel = $rootScope.playerStatus ? $rootScope.playerStatus.level : 10;
    $scope.trainer = {level: trainerLevel};

    $scope.reset = function () {
      var pokemon = $stateParams.pokemon ? PocketMons.get(parseInt($stateParams.pokemon)) : PocketMons.get(1);
      var attack = $stateParams.attack ? parseInt($stateParams.attack) : 15;
      var defense = $stateParams.defense ? parseInt($stateParams.defense) : 15;
      var stamina = $stateParams.stamina ? parseInt($stateParams.stamina) : 15;
      var level = $stateParams.level ? parseInt($stateParams.level) : 10;
      $scope.pokemon = {
        individual_attack: attack,
        individual_defense: defense,
        individual_stamina: stamina,
        level: level,
        pokemon: pokemon
      };
    };

    $scope.reset();

    $scope.$on('$locationChangeSuccess', function () {
      $scope.reset();
    });

    $scope.powerUp = function () {
      $scope.pokemon.level++;
      $scope.pokemon.level = Math.min($scope.pokemonOptions.ceil, $scope.pokemon.level);
    };


    $scope.getCp = function () {
      return cpCal.getCp($scope.pokemon.pokemon, $scope.pokemon.level, $scope.pokemon.individual_attack, $scope.pokemon.individual_defense, $scope.pokemon.individual_stamina);
    };

    $scope.selectPokemon = function () {
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/herepokemon/pokemons.html',
        title: text('selectPokemon'),
        cssClass: 'full',
        scope: $scope,
        buttons: [
          {text: text('close')}]
      });
    };

    $scope.select = function (pokemon) {
      $scope.popup.close();
      $scope.pokemon.pokemon = pokemon;
    };

  }
})();

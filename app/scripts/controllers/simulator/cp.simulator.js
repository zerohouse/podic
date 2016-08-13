(function () {
  angular.module('Podic.controllers').controller('cpSimulator', cpSimulator);
  /* @ng-inject */
  function cpSimulator($scope, PocketMons, cpCal, $ionicPopup, $rootScope, $stateParams) {

    $scope.pokemons = PocketMons.all();

    $scope.reset = function () {
      var pokemon = $stateParams.pokemon ? PocketMons.get(parseInt($stateParams.pokemon)) : PocketMons.get(1);
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
      var trainerLevel = $rootScope.playerStatus ? $rootScope.playerStatus.level : 10;
      $scope.trainer = {level: trainerLevel};

      $scope.pokemonOptions = {
        floor: 1,
        showSelectionBar: true,
        hidePointerLabels: true,
        hideLimitLabels: true,
        ceil: Math.min(79, $scope.trainer.level * 2),
        getSelectionBarColor: function () {
          return '#2AE02A';
        },
        getPointerColor: function () {
          return '#2AE02A';
        }
      };
    };

    $scope.reset();

    $scope.$on('$locationChangeSuccess', function () {
      $scope.reset();
    });

    $scope.$watch('trainer.level', function () {
      var max = Math.min(79, $scope.trainer.level * 2);
      $scope.pokemonOptions.ceil = max;
      $scope.pokemon.level = Math.min(max, $scope.pokemon.level);
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
        title: '이 포켓몬을 발견했어요!',
        cssClass: 'full',
        scope: $scope,
        buttons: [
          {text: '닫기'}]
      });
    };

    $scope.select = function (pokemon) {
      $scope.popup.close();
      $scope.pokemon.pokemon = pokemon;
    };

    $scope.options = {
      showSelectionBar: true,
      floor: 0,
      ceil: 15
    };

  }
})();

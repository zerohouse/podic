(function () {
  angular.module('Podic.controllers').controller('cpSimulator', cpSimulator);
  /* @ng-inject */
  function cpSimulator($scope, Pokemons, cpCal, $ionicPopup, $rootScope, $stateParams, text, $ionicModal, userService) {


    $scope.pokemons = Pokemons.all();
    var trainerLevel = $rootScope.playerStatus && $rootScope.playerStatus.level ? $rootScope.playerStatus.level : 10;
    $scope.trainer = {level: trainerLevel};

    $scope.starDust = [200, 200, 200, 200, 400, 400, 400, 400, 600, 600, 600, 600, 800, 800, 800, 800, 1000, 1000, 1000, 1000, 1300, 1300, 1300, 1300, 1600, 1600, 1600, 1600, 1900, 1900, 1900, 1900, 2200, 2200, 2200, 2200, 2500, 2500, 2500, 2500, 3000, 3000, 3000, 3000, 3500, 3500, 3500, 3500, 4000, 4000, 4000, 4000, 4500, 4500, 4500, 4500, 5000, 5000, 5000, 5000, 6000, 6000, 6000, 6000, 7000, 7000, 7000, 7000, 8000, 8000, 8000, 8000, 9000, 9000, 9000, 9000, 10000, 10000, 10000, 10000];
    $scope.candies = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12, 15, 15, 15, 15];

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
    if (userService.user.id) {
      buttons.unshift({
        text: text('selectInMyPokemons'),
        type: 'button-royal',
        onTap: $ionicModal.fromMyPokemons($scope, function (pokemon) {
          $scope.pokemon = {
            individual_attack: pokemon.individual_attack,
            individual_defense: pokemon.individual_defense,
            individual_stamina: pokemon.individual_stamina,
            level: cpCal.getLevel(pokemon),
            pokemon: pokemon.pokemon
          };
        })
      });
    }
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

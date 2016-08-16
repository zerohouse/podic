(function () {
  angular.module('Podic.controllers').controller('cpSimulator', cpSimulator);
  /* @ng-inject */
  function cpSimulator($scope, PocketMons, cpCal, $ionicPopup, $rootScope, $stateParams, text, $ionicModal, userService) {


    $scope.pokemons = PocketMons.all();
    var trainerLevel = $rootScope.playerStatus ? $rootScope.playerStatus.level : 10;
    $scope.trainer = {level: trainerLevel};

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
    };

    $scope.reset();

    $scope.$on('$locationChangeSuccess', function () {
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
        type: 'button-positive',
        onTap: function () {
          var scope = $scope.$new();
          scope.pokemons = $rootScope.pokemons;
          $ionicModal.fromTemplateUrl('templates/simulator/mypokemons.html', {
            scope: scope,
            animation: 'slide-in-up'
          }).then(function (modal) {
            scope.modal = modal;
            scope.modal.show();
            scope.search = function () {
              $ionicPopup.searchPopup(scope);
            };
            scope.align = function () {
              $ionicPopup.alignPopup(scope);
            };
            scope.selectPokemon = function (pokemon) {
              $scope.pokemon = {
                individual_attack: pokemon.individual_attack,
                individual_defense: pokemon.individual_defense,
                individual_stamina: pokemon.individual_stamina,
                level: cpCal.getLevel(pokemon),
                pokemon: pokemon.pokemon
              };
              scope.modal.hide();
            };
          });
        }
      });
    }
    $scope.selectPokemon = function () {
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/herepokemon/pokemons.html',
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

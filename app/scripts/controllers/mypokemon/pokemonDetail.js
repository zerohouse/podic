angular.module('Podic.controllers').controller('pokemonCtrl', pokemonCtrl);
/* @ng-inject */
function pokemonCtrl($scope, $stateParams, $rootScope, $ajax, pokemonService, $timeout, cpCal, $state) {
  $scope.$watch(function () {
    return $stateParams.id;
  }, function (id) {
    if (!$rootScope.pokemons) {
      getPokemon(id);
      return;
    }
    $scope.pokemon = $rootScope.pokemons.findById(id);
    if ($scope.pokemon) {
      $scope.loaded = true;
      return;
    }
    getPokemon(id);
  });


  $scope.simulate = function () {
    if (!$scope.pokemon.level)
      $scope.pokemon.level = cpCal.getLevel($scope.pokemon);
    $state.go('app.simulator.cp', {
      pokemon: $scope.pokemon.pokemon_id,
      attack: $scope.pokemon.individual_attack,
      defense: $scope.pokemon.individual_defense,
      stamina: $scope.pokemon.individual_stamina,
      level: $scope.pokemon.level
    });
  };

  function getPokemon(id) {
    $ajax.get('/api/v1/pokemon', {id: id}).then(function (pokemon) {
      pokemonService.setPokemon(pokemon);
      $scope.pokemon = pokemon;
      $timeout(function(){
        $scope.loaded = true;
      });
    });
  }
}

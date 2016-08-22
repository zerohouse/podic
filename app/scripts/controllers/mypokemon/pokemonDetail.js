angular.module('Podic.controllers').controller('pokemonCtrl', pokemonCtrl);
/* @ng-inject */
function pokemonCtrl($scope, $stateParams, $rootScope, $ajax, pokemonService, $timeout, cpCal, $state) {
  $scope.$on("$stateChangeSuccess", function () {
    if (!$rootScope.pokemons) {
      getPokemon($stateParams.id);
      return;
    }
    $scope.pokemon = $rootScope.pokemons.findById($stateParams.id);
    if ($scope.pokemon) {
      $scope.loaded = true;
      return;
    }
    getPokemon($stateParams.id);
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

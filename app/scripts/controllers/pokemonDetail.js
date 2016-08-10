angular.module('Podic.controllers').controller('pokemonCtrl', pokemonCtrl);
/* @ng-inject */
function pokemonCtrl($scope, $stateParams, $rootScope, $ajax, pokemonService, $timeout) {
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

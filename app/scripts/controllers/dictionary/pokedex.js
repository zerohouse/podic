angular.module('Podic.controllers').controller('pokemonDescriptionCtrl', pokemonDescriptionCtrl);
/* @ng-inject */
function pokemonDescriptionCtrl($scope, $stateParams, Pokemons) {
  $scope.getNextName = function (pokemon) {
    return Pokemons.get(pokemon.id + 1).name;
  };

  $scope.$on("$stateChangeSuccess", function () {
    $scope.pokemon = Pokemons.get($stateParams.id);
  });
}

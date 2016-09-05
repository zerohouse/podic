angular.module('Podic.controllers').controller('pokemonDescriptionCtrl', pokemonDescriptionCtrl);
/* @ng-inject */
function pokemonDescriptionCtrl($scope, $stateParams, Pokemons) {
  $scope.$on("$stateChangeSuccess", function () {
    $scope.pokemon = Pokemons.get($stateParams.id);
  });
}

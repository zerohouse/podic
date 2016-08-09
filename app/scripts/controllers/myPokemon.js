angular.module('Podic.controllers').controller('pokemonCtrl', pokemonCtrl);
/* @ng-inject */
function pokemonCtrl($scope, $stateParams, $rootScope) {
  $scope.$watch(function () {
    return $stateParams.index;
  }, function () {
    $scope.pokemon = $rootScope.pokemons[$stateParams.index];
  });
}

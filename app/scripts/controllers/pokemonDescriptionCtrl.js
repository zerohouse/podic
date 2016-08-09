angular.module('Podic.controllers').controller('pokemonDescriptionCtrl', pokemonDescriptionCtrl);
/* @ng-inject */
function pokemonDescriptionCtrl($scope, $stateParams, PocketMons) {
  $scope.$watch(function () {
    return $stateParams.id;
  }, function (id) {
    $scope.pokemondic = PocketMons.get(id);
  });
}

angular.module('Podic.controllers').controller('trainerDetailCtrl', trainerDetailCtrl);
/* @ng-inject */
function trainerDetailCtrl(rankerService, $scope) {
  $scope.rankerService = rankerService;
}

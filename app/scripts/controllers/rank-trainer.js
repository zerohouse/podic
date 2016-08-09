angular.module('Podic.controllers').controller('trainerRankCtrl', trainerRankCtrl);
/* @ng-inject */
function trainerRankCtrl(rankerService, $scope) {
  $scope.rankerService = rankerService;

  $scope.refresh = rankerService.reset;
}

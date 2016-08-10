angular.module('Podic.controllers').controller('trainerRankCtrl', trainerRankCtrl);
/* @ng-inject */
function trainerRankCtrl(rankerService, $scope) {
  $scope.rankerService = rankerService;

  $scope.more = function () {
    rankerService.more();
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.refresh = rankerService.reset;
}

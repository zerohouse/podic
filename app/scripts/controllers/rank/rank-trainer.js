angular.module('Podic.controllers').controller('trainerRankCtrl', trainerRankCtrl);
/* @ng-inject */
function trainerRankCtrl(rankerService, $scope, $ionicPopup, userService, text) {
  $scope.rankerService = rankerService;

  $scope.more = function () {
    rankerService.more();
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.refresh = rankerService.reset;

  $scope.query = {};

  $scope.getDistrict = function () {
    if (rankerService.district)
      return rankerService.district;
    return text('all');
  };

  $scope.selectDistrict = function () {
    var district = rankerService.district;
    var template = '<ion-radio ng-model="rankerService.district" ng-value="0">' +
      text('all') +
      '</ion-radio>';
    userService.user.addressRanks.forEach(function (addressRank) {
      template += '<ion-radio ng-model="rankerService.district" ng-value="\'' +
        addressRank.longName +
        '\'">' +
        addressRank.longName +
        '</ion-radio>';
      $scope.query.district = addressRank.longName;
    });

    var popup = $ionicPopup.show({
      template: template,
      title: text('search'),
      scope: $scope,
      buttons: [
        {text: text('search'), type: 'button-positive'}
      ]
    });

    popup.then(function () {
      if (district !== rankerService.district)
        rankerService.reset();
    });
  };
}


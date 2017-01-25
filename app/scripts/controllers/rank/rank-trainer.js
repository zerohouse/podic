angular.module('Podic.controllers').controller('trainerRankCtrl', trainerRankCtrl);
/* @ng-inject */
function trainerRankCtrl(rankerService, $scope, text, $ionicModal, $window, $ajax) {

  setAddresses();

  function setAddresses() {
    if (!$window.localStorage.addresses) {
      getAddresses();
      return;
    }
    var adressObj = JSON.parse($window.localStorage.addresses);
    if (adressObj.time > new Date().getTime() - 72 * 60 * 60 * 1000) {
      getAddresses();
      return;
    }
    $scope.addresses = adressObj.addresses;
  }

  function getAddresses() {
    $ajax.get('/api/v1/address').then(function (addresses) {
      $scope.addresses = addresses;
      var addressObj = {time: new Date(), addresses: addresses};
      $window.localStorage.addresses = JSON.stringify(addressObj);
    });
  }

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

  $ionicModal.fromTemplateUrl('templates/rankTrainer/district.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  $scope.close = function () {
    $scope.modal.hide();
  };

  $scope.selectDistrict = function () {
    $scope.modal.show();
  };

  $scope.setDistrict = function (district) {
    var isSame = district === rankerService.district;
    rankerService.district = district;
    if (!isSame) {
      rankerService.reset();
    }
    $scope.close();
  };

}

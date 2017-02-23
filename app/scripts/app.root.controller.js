angular.module('Podic.controllers')
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, confirm, text) {

    $ionicModal.fromTemplateUrl('templates/base/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    $scope.login = function () {
      $scope.modal.show();
    };

    $scope.removeAd = function () {
      confirm(text("removeAdSub"), text("removeAd")).then(function () {
        if (ionic.Platform.isIOS())
          window.open('https://itunes.apple.com/kr/app/podocs-podag-gwang-gojegeobeojeon/id1201708308', '_system', 'location=yes');
        else
          window.open('https://play.google.com/store/apps/details?id=net.podocs.podocs.addfree', '_system', 'location=yes');
      });
    };

    $scope.rateTo = function () {
      if (ionic.Platform.isIOS())
        window.open('https://itunes.apple.com/kr/app/podocs-podag-pokesmonsajeon/id1142147983', '_system', 'location=yes');
      else
        window.open('https://play.google.com/store/apps/details?id=net.podocs.podocs', '_system', 'location=yes');
    };


    $ionicModal.fromTemplateUrl('templates/base/ptcLogin.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.ptc = modal;
    });




  });


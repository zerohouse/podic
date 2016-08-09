angular.module('Podic.controllers')
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, userService) {
    $scope.loginData = {};
    $ionicModal.fromTemplateUrl('templates/base/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    $scope.user = userService.user;
    $scope.googleLogin = function () {
      var id = '848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com';
      var ref = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + id + '&redirect_uri=http://localhost/callback&scope=openid email profile https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&response_type=code&access_type=offline', '_blank', 'location=no');
      ref.addEventListener('loadstart', function (event) {
        if ((event.url).startsWith("http://localhost/callback")) {
          var code = (event.url).split("code=")[1].split("&")[0];
          userService.register(code);
          ref.close();
        }
      });
    };

    $scope.logout = function () {
      userService.logout();
    };

    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  });


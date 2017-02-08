angular.module('Podic.controllers')
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, userService, confirm, text, $cordovaGeolocation, ionicToast, $ajax, db, Pokemons, pokemonService) {

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

    $scope.user = userService.user;
    $scope.googleLogin = function () {
      db.etc.provider = 'google';
      var id = '848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com';
      var ref = window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + id + '&redirect_uri=http://localhost/callback&scope=openid email profile https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&response_type=code&access_type=offline', '_blank', 'location=no');
      $scope.closeLogin();
      ref.addEventListener('loadstart', function (event) {
        if ((event.url).startsWith("http://localhost/callback")) {
          var code = (event.url).split("code=")[1].split("&")[0];
          userService.register(code).then(function () {
            pokemonService.refresh();
          });
          ref.close();
        }
      });
    };

    $ionicModal.fromTemplateUrl('templates/base/ptcLogin.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.ptc = modal;
    });

    $scope.registerPTC = function (username, password) {
      ionicToast.alert(text('ptcLoginStart'));
      userService.registerPTC(username, password).then(function () {
        $scope.closeLogin();
        $scope.ptcClose();
        pokemonService.refresh();
      });
    };

    $scope.ptcClose = function () {
      $scope.ptc.hide();
    };


    $scope.ptcLogin = function () {
      db.etc.provider = 'ptc';
      $scope.ptc.show();
    };

    $scope.logout = function () {
      userService.logout();
    };

    $scope.updateLocation = function () {
      confirm(text("updateLocationSub"), text("updateLocationTitle")).then(function () {
        ionicToast.alert(text('requestLocation'));

        $ajax.post('/api/v1/pokemon', pokemonService.getTopPokemons(), true);

        $cordovaGeolocation
          .getCurrentPosition({timeout: 2000, enableHighAccuracy: false})
          .then(function (position) {
            $ajax.post('/api/v1/user/updateLocation', {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }).then(function (user) {
              userService.user.rank = user.rank;
              userService.user.addressRanks = user.addressRanks;
              ionicToast.alert(text('requestLocationDone'));
            });
          }, function () {
            ionicToast.alert(text('requestLocationFail'));
          });
      });
    };

  });


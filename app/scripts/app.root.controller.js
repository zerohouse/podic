angular.module('Podic.controllers')
  .controller('AppCtrl', function ($scope, $ionicModal, $timeout, userService, confirm, text, $cordovaGeolocation, ionicToast, $ajax, db, Pokemons, pokemonService, $ionicPopup) {

    $ionicPopup.alert({
      title: '계정 연동 종료 안내',
      template:
      "안녕하세요. 포닥 개발자입니다.<br>"+
      "2월 15일에 나이앤틱에서 API 변경이 있었습니다.<br>"+
      "<br>"+
      "이번 변경으로  계정 연동 시에 암호화된 해시값을 요구하여, "+
      "계정 연동에 해당하는 행위를 걸러내고 있습니다. "+
      "이로 인해 계정 연동으로 인한 밴의 가능성이 높아 졌습니다. "+
      "<br><br>"+
      "포닥은 이 위험성 때문에 계정 연동을 종료하고 수동 계산기만 남겨두고자 합니다. "+
      "계정 연동 때문에 광고 제거버전을 구매하신 분들은 가능한 경로로 환불해드리겠습니다.<br>"+
      "<br>"+
      "처음 만든 앱이라 부족한 점이 많았는데, 많이 응원해 주시고, 이용해 주셔서 감사합니다.<br><br>"+
      "추후 수동계산기를 개선하는 방향으로 개발해 보겠습니다."
    });

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
            // pokemonService.refresh();
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
      db.etc.username = username;
      db.etc.password = password;
      userService.registerPTC().then(function () {
        $scope.closeLogin();
        $scope.ptcClose();
        // pokemonService.refresh();
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


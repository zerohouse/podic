angular.module('Podic.services').service('userService', userService);
/* @ng-inject */
function userService($ajax, $cordovaDevice, $ionicPlatform, $cordovaGeolocation, $q, $rootScope, db, ionicToast, text) {
  var self = this;

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  self.user = db.user;
  self.newUser = {};

  /*
   디바이스 아이디 설정
   */
  $ionicPlatform.ready(function () {
    try {
      $ajax.headers.deviceId = self.deviceId = $cordovaDevice.getUUID();
      self.getUser();
    }
    catch (err) {
      new Fingerprint2().get(function (result) {
        $ajax.headers.deviceId = self.deviceId = result;
        self.getUser();
      });
    }
  });


  this.getToken = function () {
    if (db.etc.provider === 'ptc')
      return $q(function (ok) {
        ok(db.etc.token);
      });
    return $q(function (ok) {
      if (isTokenExpired()) {
        refreshToken().then(function () {
          ok(self.user.authInfo.id_token);
        });
        return;
      }
      ok(self.user.authInfo.id_token);
    });
  };

  this.update = function (user) {
    $ajax.put('/api/v1/user', user, true).then(function (user) {
      angular.copy(user, self.user);
      ionicToast.show(text('userModfied'), 'bottom', false, 3000);
    });
  };


  this.updatePosition = function () {
    $ajax.post('/api/v1/user/latlng', {lat: self.user.lat, lng: self.user.lng});
  };

  function refreshToken() {
    return $q(function (ok, no) {
      if (self.user.authInfo && self.user.authInfo.refresh_token) {
        var data = {
          client_id: "848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com",
          client_secret: "NCjF1TLi2CcY6t5mt0ZveuL7",
          grant_type: "refresh_token",
          refresh_token: self.user.authInfo.refresh_token
        };
        $ajax.post('https://www.googleapis.com/oauth2/v4/token', data).then(null, function (authInfo) {
          angular.copy(authInfo, self.user.authInfo);
          ok(authInfo);
        });
        return;
      }
      $ajax.post('/api/v1/user/refresh_token').then(function (authInfo) {
        angular.copy(authInfo, self.user.authInfo);
        ok(authInfo);
      }, no);
    });
  }

  function isTokenExpired() {
    if (!self.user.authInfo || !self.user.authInfo.expires_in || !self.user.authInfo.credential_updatedAt)
      return true;
    return self.user.authInfo.credential_updatedAt + (self.user.authInfo.expires_in * 1000) < new Date().getTime();
  }

  this.getLatLng = function () {
    return $q(function (ok) {
      updateLatLng().then(function () {
        ok({lat: self.user.lat, lng: self.user.lng});
      }, function () {
        ok({lat: 38, lng: 127});
      });
    });
  };

  function updateLatLng() {
    return $q(function (ok, no) {
      $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function (position) {
          self.user.lat = position.coords.latitude;
          self.user.lng = position.coords.longitude;
          ok();
        }, no);
    });
  }


  this.getUser = function () {
    $ajax.get('/api/v1/user').then(function (user) {
      setUser(user);
      updateLatLng();
    });
  };

  this.logout = function () {
    $ajax.get('/api/v1/user/logout').then(function () {
      angular.copy({}, self.user);
      $rootScope.$broadcast('userLogout');
    });
  };

  this.register = function (code) {
    $ajax.post('/api/v1/user', {code: code}).then(function (user) {
      setUser(user);
    });
  };

  this.registerPTC = function (username, password) {
    return $q(function (ok) {
      if (!username || !password)
        ionicToast.alert(text("checkEmailPasword"));
      $ajax.post("/api/v1/user/register/ptc", {username: username, password: password}).then(function (obj) {
        if (!obj) {
          ionicToast.alert(text("checkEmailPasword"));
          return;
        }
        self.user.id = obj.id;
        db.etc.token = obj.token;
        ok(self.user);
        ionicToast.alert(text("loginDone"));
      });
    });
  };

  function setUser(user) {
    if (user.authInfo)
      user.authInfo = {};
    if (!user.userInfo)
      user.userInfo = {};
    angular.copy(user, self.user);
    if (user)
      $rootScope.$broadcast('userLoggedIn');
  }
}


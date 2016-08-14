angular.module('Podic.services').service('userService', userService);
/* @ng-inject */
function userService($ajax, $cordovaDevice, $ionicPlatform, $cordovaGeolocation, $q, $rootScope, db, ionicToast, text) {

  var user = 'user';
  var self = this;
  var watchOptions = {
    timeout: 3000,
    enableHighAccuracy: false
  };
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  self.user = {};
  self.newUser = {};
  if (db.is(user))
    self.user = db.get(user);

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
      db.set(user, self.user);
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
          db.set(user, self.user);
          ok(authInfo);
        });
        return;
      }
      $ajax.post('/api/v1/user/refresh_token').then(function (authInfo) {
        angular.copy(authInfo, self.user.authInfo);
        db.set(user, self.user);
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

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function () {
    },
    function (position) {
      self.user.lat = self.user.latitude = position.coords.latitude;
      self.user.lng = self.user.longitude = position.coords.longitude;
    });


  this.getUser = function () {
    $ajax.get('/api/v1/user').then(function (user) {
      setUser(user);
      updateLatLng();
    });
  };

  this.logout = function () {
    $ajax.get('/api/v1/user/logout').then(function () {
      angular.copy({}, self.user);
      db.clear();
      $rootScope.$broadcast('userLogout');
    });
  };

  this.register = function (code) {
    $ajax.post('/api/v1/user', {code: code}).then(function (user) {
      setUser(user);
    });
  };

  function setUser(user) {
    angular.copy(user, self.user);
    db.set(user, self.user);
    if (user)
      $rootScope.$broadcast('userLoggedIn');
  }
}


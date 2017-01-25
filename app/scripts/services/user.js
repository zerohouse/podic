angular.module('Podic.services').service('userService', userService);
/* @ng-inject */
function userService($ajax, $cordovaGeolocation, $q, $rootScope, db, ionicToast, text, $http) {
  var self = this;

  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  self.user = db.user;

  /*
   디바이스 아이디 설정
   */
    if(self.user.userInfo && self.user.userInfo.id)
      $ajax.headers.googleId = self.user.userInfo.id;

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
      var data = {
        client_id: "848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com",
        client_secret: "NCjF1TLi2CcY6t5mt0ZveuL7",
        grant_type: "refresh_token",
        refresh_token: self.user.authInfo.refresh_token
      };
      $ajax.post('https://www.googleapis.com/oauth2/v4/token', data).then(null, function (authInfo) {
        var refresh_token = self.user.authInfo.refresh_token;
        angular.copy(authInfo, self.user.authInfo);
        self.user.authInfo.refresh_token = refresh_token;
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

  this.logout = function () {
    angular.copy({}, self.user);
    $rootScope.$broadcast('userLogout');
    $ajax.get('/api/v1/user/logout');
  };

  this.register = function (code) {
    return $q(function (ok) {
      var data = {
        client_id: "848232511240-73ri3t7plvk96pj4f85uj8otdat2alem.apps.googleusercontent.com",
        client_secret: "NCjF1TLi2CcY6t5mt0ZveuL7",
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost/callback"
      };
      $ajax.post('https://www.googleapis.com/oauth2/v4/token', data).then(null, function (authInfo) {
        if (!self.user.authInfo)
          self.user.authInfo = {};
        angular.copy(authInfo, self.user.authInfo);
        self.user.id = "logged";
        ok();
        $http.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + authInfo.access_token).then(function (r) {
          self.user.userInfo = r.data;
          $ajax.headers.googleId = self.user.userInfo.id;
        });
        $ajax.post('/api/v1/user', authInfo);
      });
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

}


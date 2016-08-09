(function () {
  angular.module('Podic.services').service('traceService', traceService);
  /* @ng-inject */
  function traceService($ajax, PocketMons, $cordovaGeolocation, ionicToast, userService) {

    var self = this;

    self.traces = [];

    self.range = 10;

    function getImage(pocketmon) {
      if (pocketmon)
        return {
          url: pocketmon.img,
          size: new google.maps.Size(60, 60),
          scaledSize: new google.maps.Size(60, 60),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(30, 30)
        };
      return {
        url: 'images/tip.png',
        size: new google.maps.Size(30, 20),
        scaledSize: new google.maps.Size(30, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(15, 10)
      };
    }

    self.page = 0;
    var km = 10 / 88;
    this.refresh = function () {
      if (!userService.user.lat)
        userService.user.lat = 38;
      if (!userService.user.lng)
        userService.user.lng = 128;
      var params = {};
      if (self.range) {
        params.minLat = userService.user.lat - (self.range * km);
        params.maxLat = userService.user.lat + (self.range * km);
        params.minLng = userService.user.lng - (self.range * km);
        params.maxLng = userService.user.lng + (self.range * km);
      }
      params.page = self.page;
      $ajax.get('/api/v1/trace', params).then(function (traces) {
        traces.forEach(function (trace) {
          if (self.traces.findById(trace.id))
            return;
          self.traces.push(trace);
          trace.pokemon = PocketMons.get(trace.pokemonId);
          var opacity = 1 - (new Date().getTime() - trace.createdAt) / 60 / 60 / 1000;
          if (opacity < 0.5)
            opacity = 0.5;
          trace.options = {icon: getImage(trace.pokemon), opacity: opacity};
          trace.position = {latitude: trace.lat, longitude: trace.lng};
        });
      });
    };

    this.sendTrace = function (trace) {
      var posOptions = {timeout: 1000, enableHighAccuracy: false};

      $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        trace.lat = lat;
        trace.lng = long;
        sendTrace(trace);
      }, function () {
        var lat = userService.user.lat;
        var long = userService.user.lng;
        trace.lat = lat;
        trace.lng = long;
        sendTrace(trace);
      });

      function sendTrace(trace) {
        $ajax.post('/api/v1/trace', trace, true).then(function (response) {
          if (response.pokemonId) {
            response.pokemon = PocketMons.get(response.pokemonId);
          }
          response.options = {icon: getImage(response.pokemon)};
          response.position = {latitude: response.lat, longitude: response.lng};
          self.traces.unshift(response);
          trace.message = '';
          ionicToast.show("메세지를 남겼습니다.", 'bottom', false, 3000);
        });
      }
    };
  }
})();

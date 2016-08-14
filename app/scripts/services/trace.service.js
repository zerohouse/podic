(function () {
  angular.module('Podic.services').service('traceService', traceService);
  /* @ng-inject */
  function traceService($ajax, PocketMons, $cordovaGeolocation, ionicToast, userService, text) {

    var self = this;

    self.traces = [];

    self.range = 10;

    self.page = 0;
    var km = 10 / 880;
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
          self.traces.unshift(response);
          trace.message = '';
          ionicToast.show(text("writeTipDone"), 'bottom', false, 3000);
        });
      }
    };
  }
})();

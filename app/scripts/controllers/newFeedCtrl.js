(function () {
  angular.module('Podic.controllers').controller('newsFeedCtrl', newsFeedCtrl);
  /* @ng-inject */
  function newsFeedCtrl($scope, $ajax, $cordovaGeolocation, ionicToast, text, $ionicPopup) {

    $scope.message = {message:''};
    $scope.save = function () {
      $cordovaGeolocation
        .getCurrentPosition({timeout: 2000, enableHighAccuracy: false})
        .then(function (position) {
          $ajax.post('/api/v1/trace', {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            message: $scope.message.message
          }, true).then(function (trace) {
            trace.createdAt = new Date(trace.createdAt - 10000);
            $scope.traces.unshift(trace);
            $scope.message = {message:''};
          });
        }, function () {
          ionicToast.alert(text('requestLocationFail'));
        });
    };

    var position;
    $scope.distance = {dist: 0.01};

    $scope.refresh = function () {
      $scope.notMore = false;
      $scope.page = 0;
      $scope.traces = [];
      $cordovaGeolocation
        .getCurrentPosition({timeout: 2000, enableHighAccuracy: false})
        .then(function (p) {
          position = p;

          $ajax.get('/api/v1/trace', {
            minLat: p.coords.latitude - $scope.distance.dist,
            maxLat: p.coords.latitude + $scope.distance.dist,
            minLng: p.coords.longitude - $scope.distance.dist,
            maxLng: p.coords.longitude + $scope.distance.dist,
            page: $scope.page
          }).then(function (traces) {
            $scope.page++;
            $scope.traces = traces;
            $scope.notMore = traces.length < 10;
          });
        }, function () {
          ionicToast.alert(text('requestLocationFail'));
        });
    };

    $scope.$watch('distance.dist', $scope.refresh);

    $scope.getDistance = function (trace) {
      if (!position || !position.coords)
        return 0;
      var lat1 = trace.lat;
      var lon1 = trace.lng;
      var lat2 = position.coords.latitude;
      var lon2 = position.coords.longitude;
      return getDistanceFromLatLonInM(lat1, lon1, lat2, lon2);
    };

    function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
      var R = 6371; // Radius of the earth in km
      var dLat = deg2rad(lat2 - lat1);  // deg2rad below
      var dLon = deg2rad(lon2 - lon1);
      var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      // Distance in km
      return parseInt(R * c * 100) * 10;
    }

    function deg2rad(deg) {
      return deg * (Math.PI / 180)
    }

    $scope.refresh();

    $scope.getIcon = function () {
      if ($scope.distance.dist === 0.001)
        return "ion-android-walk";
      if ($scope.distance.dist === 0.01)
        return "ion-android-bicycle";
      return "ion-android-bus";
    };

    $scope.selectDistance = function () {
      $ionicPopup.distancePopup($scope);
    };

    $scope.more = function () {
      if (!position || !position.coords)
        return;
      $ajax.get('/api/v1/trace', {
        minLat: position.coords.latitude - $scope.distance.dist,
        maxLat: position.coords.latitude + $scope.distance.dist,
        minLng: position.coords.longitude - $scope.distance.dist,
        maxLng: position.coords.longitude + $scope.distance.dist,
        page: $scope.page
      }).then(function (traces) {
        $scope.traces.pushAll(traces);
        $scope.notMore = traces.length < 10;
      });
    };

  }
})();

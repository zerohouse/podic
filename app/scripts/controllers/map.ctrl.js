(function () {
  angular.module('Podic.controllers').controller('MapCtrl', MapCtrl);
  /* @ng-inject */
  function MapCtrl($scope, traceService, userService) {

    // $scope.stops = pocketStops.stops;

    $scope.stopOptions = {
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 6,
        strokeColor: '#009688'
      }
    };

    $scope.userService = userService;

    $scope.getLatLng = function (obj) {
      var lat = obj.lat || obj.latitude;
      var lng = obj.lng || obj.longitude;
      return {latitude: lat, longitude: lng};
    };

    $scope.map = {
      options: {
        disableDefaultUI: true
      },
      control: {},
      center: {latitude: userService.user.lat, longitude: userService.user.lng}, zoom: 18
    };


    $scope.$watch('userService.user.lat', $scope.setMyPosition);
    $scope.$watch('userService.user.lng', $scope.setMyPosition);

    $scope.setMyPosition = function () {
      if ($scope.map.control.getGMap) {
        $scope.map.control.getGMap().setCenter(userService.user);
      }
    };

    $scope.zoomIn = function () {
      $scope.map.zoom++;
      if ($scope.map.zoom > 20)
        $scope.map.zoom = 20;
    };
    $scope.zoomOut = function () {
      $scope.map.zoom--;
      if ($scope.map.zoom < 10)
        $scope.map.zoom = 10;
    };

    $scope.getUser = function (trace) {
      return trace.user.name ? trace.user.name : "익명의 유저";
    };

    $scope.traceServce = traceService;

    $scope.select = function (trace) {
      traceService.trace = trace;
    };

  }

})
();

(function () {
  angular.module('Podic.controllers').controller('traceDetailCtrl', traceDetailCtrl);
  /* @ng-inject */
  function traceDetailCtrl(traceService, $scope, userService, confirm, $ajax, $state) {
    $scope.traceService = traceService;
    $scope.isRootUser = function () {
      return userService.user.id === traceService.trace.user.id;
    };

    $scope.delete = function () {
      confirm("메세지를 삭제합니다.", "메세지 삭제").then(function () {
        $ajax.delete('/api/v1/trace', {id: traceService.trace.id}).then(function () {
          $state.go('app.herepokemon.list');
          traceService.traces.remove(traceService.trace);
        });
      });
    };
  }
})();

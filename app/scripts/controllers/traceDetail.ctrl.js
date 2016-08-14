(function () {
  angular.module('Podic.controllers').controller('traceDetailCtrl', traceDetailCtrl);
  /* @ng-inject */
  function traceDetailCtrl(traceService, $scope, userService, confirm, $ajax, $state, text) {
    $scope.traceService = traceService;
    $scope.isRootUser = function () {
      return userService.user.id === traceService.trace.user.id;
    };

    $scope.delete = function () {
      confirm(text("deleteMessageSub"), text("deleteMessage")).then(function () {
        $ajax.delete('/api/v1/trace', {id: traceService.trace.id}).then(function () {
          $state.go('app.herepokemon.list');
          traceService.traces.remove(traceService.trace);
        });
      });
    };
  }
})();

(function () {
  angular.module('Podic.directives').directive('rank', rank);
  /* @ng-inject */
  function rank() {
    return {
      restrict: 'E',
      template: '<span ng-if="!text(\'rank\')">#</span>{{rank||"-"}}{{text("rank")}}',
      scope: {
        rank: "="
      },
      controller: function ($scope, text) {
        $scope.text = text;
      }
    };
  }
})();

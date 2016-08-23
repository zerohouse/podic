(function () {
  angular.module('Podic.directives').directive('percentBar', percentBar);
  /* @ng-inject */
  function percentBar() {
    return {
      restrict: 'E',
      scope: {
        max: '=',
        value: '=',
        color: '@',
        prefix: '=',
        labelHide: '='
      },
      template: '<span ng-style="getStyle()"></span><label ng-if="!labelHide">{{prefix}} {{value}}/{{max}}</label>',
      controller: function ($scope) {
        $scope.getStyle = function () {
          return {width: Math.max(0, $scope.value * 100 / $scope.max) + "%", 'background-color': $scope.color};
        };
      }
    };
  }
})();

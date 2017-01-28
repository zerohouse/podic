(function () {
  angular.module('Podic.directives').directive('skillSummary', skillSummary);
  /* @ng-inject */
  function skillSummary() {
    return {
      restrict: 'E',
      template: '<span ng-style="getStyle()">{{skill.name}}(DPS:{{skill.attack/skill.cooldown | number:1}})<i style="font-size:8px" class="ion-star" ng-if="best === skill.id"></i></span>',
      scope: {skill: '=', best: '='},
      controller: function ($scope) {
        $scope.getStyle = function () {
          if ($scope.best === $scope.skill.id) {
            return {color: 'green'};
          }
        };
      }
    };
  }
})();

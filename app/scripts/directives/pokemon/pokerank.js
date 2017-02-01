(function () {
  angular.module('Podic.directives').directive('pokerank', pokerank);
  /* @ng-inject */
  function pokerank() {

    return {
      restrict: 'E',
      template: '<span ng-style="getStyle()">{{getRank()}}</span><span ng-if="!onlyRank" class="small-tail">({{iv*100/45 | number : 0}}%)</span>',
      scope: {
        iv: '=',
        onlyRank: '='
      },
      controller: function ($scope) {
        $scope.getStyle = function () {
          if ($scope.iv === 45)
            return {color: 'red', 'font-weight': 900};
          if ($scope.iv > 42)
            return {color: '#E74C3C', 'font-weight': 900};
          if ($scope.iv > 39)
            return {color: '#00A388', 'font-weight': 900};
          if ($scope.iv > 30)
            return {color: '#01A2A6'};
          if ($scope.iv > 20)
            return {color: '#7E8AA2'};
          if ($scope.iv > 10)
            return {color: '#7E8AA2'};
          return {color: '#7E8AA2'};
        };

        $scope.getRank = function () {
          if ($scope.iv === 45)
            return "SSS";
          if ($scope.iv > 42)
            return "SS";
          if ($scope.iv > 39)
            return "S";
          if ($scope.iv > 30)
            return "A";
          if ($scope.iv > 20)
            return "B";
          if ($scope.iv > 10)
            return "C";
          return "D";
        };

      }
    };
  }
})();

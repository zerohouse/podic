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
          if ($scope.iv > 42)
            return {color: '#E74C3C', 'font-weight': 900};
          else if ($scope.iv > 39)
            return {color: '#00A388', 'font-weight': 900};
          else if ($scope.iv > 30)
            return {color: '#01A2A6'};
          else if ($scope.iv > 20)
            return {color: '#7E8AA2'};
          else if ($scope.iv > 10)
            return {color: '#7E8AA2'};
          else
            return {color: '#7E8AA2'};
        };

        $scope.getRank = function () {
          if ($scope.iv > 42)
            return "SS";
          else if ($scope.iv > 39)
            return "S";
          else if ($scope.iv > 30)
            return "A";
          else if ($scope.iv > 20)
            return "B";
          else if ($scope.iv > 10)
            return "C";
          else
            return "D";
        };

      }
    };
  }
})();

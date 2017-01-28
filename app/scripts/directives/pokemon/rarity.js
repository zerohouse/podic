(function () {
  angular.module('Podic.directives').directive('rarity', rarity);
  /* @ng-inject */
  function rarity(text) {
    return {
      restrict: 'A',
      template: "<span ng-style='getStyle()'>{{getRareWord()}}</span>",
      scope: {
        rarity: '='
      },
      controller: function ($scope, text) {
        $scope.getRareWord = function () {
          var i;
          if ($scope.rarity > 0.3) {
            i = 4;
          }
          else if ($scope.rarity > 0.15) {
            i = 3;
          }
          else if ($scope.rarity > 0.09) {
            i = 2;
          }
          else if ($scope.rarity > 0.03) {
            i = 1;
          }
          else {
            i = 0;
          }
          return text('rareWords')[i];
        };

        $scope.getStyle = function () {
          var color;
          if ($scope.rarity > 0.3) {
            color = '#7E8AA2';
          }
          else if ($scope.rarity > 0.15) {
            color = '#2980B9';
          }
          else if ($scope.rarity > 0.09) {
            color = '#01A2A6';
          }
          else if ($scope.rarity > 0.03) {
            color = '#408075';
          }
          else {
            color = '#E74C3C';
          }
          return {color: color};
        }
      }
    };
  }
})();

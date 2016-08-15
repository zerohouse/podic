(function () {
  angular.module('Podic.directives').directive('energyBar', energyBar);
  /* @ng-inject */
  function energyBar() {
    return {
      restrict: 'E',
      scope: {
        pokemon: '='
      },
      template: '<span ng-style="getStyle()"></span><label>{{pokemon.energy}}/120</label>',
      controller: function ($scope) {
        $scope.getStyle = function () {
          if (!$scope.pokemon)
            return;
          return {width: $scope.pokemon.energy / 120 * 100 + "%"};
        };
      }
    };
  }
})();

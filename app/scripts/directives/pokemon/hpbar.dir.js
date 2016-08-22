(function () {
  angular.module('Podic.directives').directive('hpBar', hpBar);
  /* @ng-inject */
  function hpBar() {
    return {
      restrict: 'E',
      scope: {
        pokemon: '='
      },
      template: '<span ng-style="getStyle()"></span><label>{{getHP()}}/{{pokemon.stamina_max}}</label>',
      controller: function ($scope) {
        $scope.getHP = function () {
          if(!$scope.pokemon)
            return 0;
          return Math.max(0, ($scope.pokemon.stamina - $scope.pokemon.damageSum));
        };

        $scope.getStyle = function () {
          if (!$scope.pokemon)
            return;
          return {width: Math.max(0, ($scope.pokemon.stamina - $scope.pokemon.damageSum) / $scope.pokemon.stamina_max * 100) + "%"};
        };
      }
    };
  }
})();

(function () {
  angular.module('Podic.directives').directive('pokemonStatsAdjust', pokemonStatsAdjust);
  /* @ng-inject */
  function pokemonStatsAdjust() {
    return {
      restrict: 'E',
      scope: {
        pokemon: '=',
        trainer: '=',
        powerUp: '='
      },
      template: "<pokemon-level pokemon-options='pokemonOptions' pokemon='pokemon' trainer='trainer'></pokemon-level>" +
      "<pokemon-iv pokemon='pokemon' trainer='trainer'></pokemon-iv>",
      controller: function ($scope, $rootScope, text) {
        $scope.text = text;
        $scope.powerUp = function () {
          $scope.pokemon.level++;
          $scope.pokemon.level = Math.min($scope.pokemonOptions.ceil, $scope.pokemon.level);
        };

      }
    };
  }
})();

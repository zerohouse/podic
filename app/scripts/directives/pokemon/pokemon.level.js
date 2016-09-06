(function () {
  angular.module('Podic.directives').directive('pokemonLevel', pokemonLevel);
  /* @ng-inject */
  function pokemonLevel() {
    return {
      restrict: 'E',
      scope: {
        pokemon: '=',
        trainer: '='
      },
      template: "<div class=\"slider-wrap\">\n" +
      "      <rzslider rz-slider-model=\"pokemon.level\" rz-slider-options=\"pokemonOptions\"></rzslider>\n" +
      "    </div>\n" +
      "    <div class=\"slider-wrap\">\n" +
      "      <h5>{{text('trainerLevel')}}</h5>\n" +
      "      <rzslider rz-slider-model=\"trainer.level\" rz-slider-options=\"{floor:1, ceil:40, showSelectionBar:true}\"></rzslider>\n" +
      "    </div>",
      controller: function ($scope, $rootScope, text) {
        //
        $scope.text = text;

        $scope.$watch('trainer.level', function (level) {
          if (!level)
            return;
          var max =  $scope.trainer.level * 2 - 1;
          $scope.pokemonOptions.ceil = max;
          $scope.pokemon.level = Math.min(max, $scope.pokemon.level);
        });

        $scope.pokemonOptions = {
          floor: 0,
          showSelectionBar: true,
          hidePointerLabels: true,
          ceil: $scope.trainer.level * 2 - 1,
          hideLimitLabels: true,
          getSelectionBarColor: function () {
            return '#2AE02A';
          },
          getPointerColor: function () {
            return '#2AE02A';
          }
        };

      }
    };
  }
})();

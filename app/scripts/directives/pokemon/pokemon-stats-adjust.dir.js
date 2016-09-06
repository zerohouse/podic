(function () {
  angular.module('Podic.directives').directive('pokemonStatsAdjust', pokemonStatsAdjust);
  /* @ng-inject */
  function pokemonStatsAdjust() {
    return {
      restrict: 'E',
      scope: {
        pokemon: '=',
        trainer: '=',
        powerUp:'='
      },
      template: "<div class=\"slider-wrap\">\n" +
      "      <rzslider rz-slider-model=\"pokemon.level\" rz-slider-options=\"pokemonOptions\"></rzslider>\n" +
      "    </div>\n" +
      "    <div class=\"slider-wrap\">\n" +
      "      <h5>{{text('trainerLevel')}}</h5>\n" +
      "      <rzslider rz-slider-model=\"trainer.level\" rz-slider-options=\"{floor:1, ceil:40, showSelectionBar:true}\"></rzslider>\n" +
      "    </div>\n" +
      "    <div class=\"slider-wrap\">\n" +
      "      <h5>{{text('individualValue')}}</h5>\n" +
      "      <small>{{text('attack')}}</small>\n" +
      "      <rzslider rz-slider-model=\"pokemon.individual_attack\" rz-slider-options=\"options\"></rzslider>\n" +
      "      <small>{{text('defense')}}</small>\n" +
      "      <rzslider rz-slider-model=\"pokemon.individual_defense\" rz-slider-options=\"options\"></rzslider>\n" +
      "      <small>{{text('stamina')}}</small>\n" +
      "      <rzslider rz-slider-model=\"pokemon.individual_stamina\" rz-slider-options=\"options\"></rzslider>\n" +
      "    </div>",
      controller: function ($scope, $rootScope, text) {
        //
        $scope.text = text;

        $scope.options = {
          showSelectionBar: true,
          floor: 0,
          ceil: 15
        };


        $scope.powerUp = function () {
          $scope.pokemon.level++;
          $scope.pokemon.level = Math.min($scope.pokemonOptions.ceil, $scope.pokemon.level);
        };

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

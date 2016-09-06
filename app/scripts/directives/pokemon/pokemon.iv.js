(function () {
  angular.module('Podic.directives').directive('pokemonIv', pokemonIv);
  /* @ng-inject */
  function pokemonIv() {
    return {
      restrict: 'E',
      scope: {
        pokemon: '=',
        trainer: '='
      },
      template: " <div class=\"slider-wrap\">\n" +
      "      <h5>{{text('individualValue')}}</h5>\n" +
      "      <small>{{text('attack')}}</small>\n" +
      "      <rzslider rz-slider-model=\"pokemon.individual_attack\" rz-slider-options=\"options\"></rzslider>\n" +
      "      <small>{{text('defense')}}</small>\n" +
      "      <rzslider rz-slider-model=\"pokemon.individual_defense\" rz-slider-options=\"options\"></rzslider>\n" +
      "      <small>{{text('stamina')}}</small>\n" +
      "      <rzslider rz-slider-model=\"pokemon.individual_stamina\" rz-slider-options=\"options\"></rzslider>\n" +
      "    </div>",
      controller: function ($scope, text) {
        $scope.text = text;
        $scope.options = {
          showSelectionBar: true,
          floor: 0,
          ceil: 15
        };

      }
    };
  }
})();

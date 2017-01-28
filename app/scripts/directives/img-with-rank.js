(function () {
  angular.module('Podic.directives').directive('imgWithRank', imgWithRank);
  /* @ng-inject */
  function imgWithRank() {
    return {
      restrict: 'E',
      template: '<div style="position:relative;text-align: center"><img style="opacity: 0.5" ng-src="{{pokemon.pokemon.img}}">' +
      '<pokerank style="width: 100%;position: absolute;font-size: 40px;color: rgb(1, 162, 166);left: 0;top: 35px;font-weight: bold;text-shadow: 1px 1px 1px silver;" only-rank="true" iv="pokemon.individual_score"></pokerank></div>',
      scope: {
        pokemon: "="
      }
    };
  }
})();

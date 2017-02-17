(function () {
  angular.module('Podic.directives').directive('pokeEvolve', pokeEvolve);
  /* @ng-inject */
  function pokeEvolve() {

    return {
      restrict: 'E',
      templateUrl: 'templates/directives/poke-evolve.html',
      scope: {
        pokemon: '=',
        root: '=?',
        ivPokemon: '=?',
        trainer:'=?'
      },
      controller: function ($scope, cpCal, text, $rootScope) {
        $scope.text = text;
        $scope.getCp = function (ivPokemon, pokemon) {
          return cpCal.getCp(pokemon, ivPokemon.level, ivPokemon.a, ivPokemon.d, ivPokemon.s);
        };
        $scope.getMaxCp = function (ivPokemon, pokemon) {
          return cpCal.getCp(pokemon, 78, ivPokemon.a, ivPokemon.d, ivPokemon.s);
        };
        $scope.getTrainerCp = function (ivPokemon, pokemon) {
          return cpCal.getCp(pokemon, Math.min($scope.trainer * 2 + 1, 78), ivPokemon.a, ivPokemon.d, ivPokemon.s);
        }
      }
    };
  }
})();

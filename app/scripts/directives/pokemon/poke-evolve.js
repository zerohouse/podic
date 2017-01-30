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
        ivPokemon: '=?'
      },
      controller: function ($scope, cpCal, text, $rootScope) {
        $scope.text = text;
        $scope.getCp = function (ivPokemon, pokemon) {
          return cpCal.getCp(pokemon, ivPokemon.level, ivPokemon.individual_attack, ivPokemon.individual_defense, ivPokemon.individual_stamina);
        };
        $scope.getMaxCp = function (ivPokemon, pokemon) {
          return cpCal.getCp(pokemon, 78, ivPokemon.individual_attack, ivPokemon.individual_defense, ivPokemon.individual_stamina);
        };
        $scope.getTrainerCp = function (ivPokemon, pokemon) {
          return cpCal.getCp(pokemon, Math.min($rootScope.playerStatus.level * 2 + 1, 78), ivPokemon.individual_attack, ivPokemon.individual_defense, ivPokemon.individual_stamina);
        }
      }
    };
  }
})();

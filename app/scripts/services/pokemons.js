angular.module('Podic.services').service('pokemonService', pokemonService);
/* @ng-inject */
function pokemonService(Pokemons, cpCal, $rootScope, db) {

  $rootScope.pokemons = [];
  $rootScope.playerStatus = db.playerStatus;

  var self = this;


  this.setPokemon = function (pokemon) {
    pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
    if (pokemon.pokemon)
      pokemon.name = pokemon.nickname + pokemon.pokemon.name + pokemon.pokemon.en;
    pokemon.individual_score = pokemon.individual_attack + pokemon.individual_defense + pokemon.individual_stamina;
    pokemon.maxCp = cpCal.getCpByLevel(pokemon, 78);
    pokemon.level = cpCal.getLevel(pokemon);
    pokemon.maxCpCost = getCost(pokemon.level, 78);
    pokemon.maxTrainerCp = cpCal.getCpByLevel(pokemon, Math.min($rootScope.playerStatus.level * 2 + 1, 78));
    pokemon.maxTrainerCpCost = getCost(pokemon.level, Math.min($rootScope.playerStatus.level * 2 + 1, 78));
  };


  var starDust = [200, 200, 200, 200, 400, 400, 400, 400, 600, 600, 600, 600, 800, 800, 800, 800, 1000, 1000, 1000, 1000, 1300, 1300, 1300, 1300, 1600, 1600, 1600, 1600, 1900, 1900, 1900, 1900, 2200, 2200, 2200, 2200, 2500, 2500, 2500, 2500, 3000, 3000, 3000, 3000, 3500, 3500, 3500, 3500, 4000, 4000, 4000, 4000, 4500, 4500, 4500, 4500, 5000, 5000, 5000, 5000, 6000, 6000, 6000, 6000, 7000, 7000, 7000, 7000, 8000, 8000, 8000, 8000, 9000, 9000, 9000, 9000, 10000, 10000, 10000, 10000];
  var candies = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 8, 8, 8, 8, 10, 10, 10, 10, 12, 12, 12, 12, 15, 15, 15, 15];

  function getCost(from, to) {
    var cost = {
      starDust: 0,
      candy: 0
    };
    for (var i = from; i < to; i++) {
      cost.starDust += starDust[i];
      cost.candy += candies[i];
    }
    return cost;
  }

  var count = 0;

  this.getTopPokemons = function () {
    var params = [];
    angular.copy($rootScope.pokemons, params);
    params.sort(function (p2, p1) {
      return p1.cp - p2.cp;
    });
    params.forEach(function (p) {
      delete p.pokemon;
      delete p.maxCpCost;
      delete p.maxTrainerCpCost;
    });
    return params.splice(0, 6);
  };

  $rootScope.$on('userLoggedIn', this.refresh);

  $rootScope.$on('userLogout', function () {
    angular.copy([], $rootScope.pokemons);
  });

}

angular.module('Podic.services').service('pokemonService', pokemonService);
/* @ng-inject */
function pokemonService(PocketMons, PokemonRequest, $rootScope, db, $ajax, ionicToast) {

  var p = 'pokemons';
  if (db.is(p))
    $rootScope.pokemons = db.get(p);

  var self = this;

  this.refresh = function () {
    self.loading = true;
    PokemonRequest.getInventoryData().then(function (inventories) {
      self.loading = false;
      var pokemons = inventories.filter(function (i) {
        return i.inventory_item_data && i.inventory_item_data.pokemon_data && !i.inventory_item_data.pokemon_data.is_egg;
      }).map(function (i) {
        return i.inventory_item_data.pokemon_data;
      });
      if (!pokemons)
        return;
      $rootScope.pokemons = pokemons;
      pokemons.forEach(function (pokemon) {
        pokemon.pokemon = PocketMons.get(pokemon.pokemon_id);
        pokemon.individual_score = pokemon.individual_attack + pokemon.individual_defense + pokemon.individual_stamina;
        pokemon.skill_1 = PocketMons.skills.findById(pokemon.move_1);
        pokemon.skill_2 = PocketMons.skills.findById(pokemon.move_2);
        if (pokemon.creation_time_ms)
          pokemon.creation_time_ms = pokemon.creation_time_ms.toNumber();
        if (pokemon.id)
          pokemon.id = pokemon.id.toNumber();
      });
      pokemons.sort(function (p2, p1) {
        return p2.individual_score - p1.individual_score;
      });
      db.set(p, pokemons);
      var params = [];
      angular.copy(pokemons, params);
      params.forEach(function (param) {
        param.pokemon = undefined;
        param.captured_cell_id = undefined;
      });
      $ajax.post('/api/v1/pokemon', params, true);
    }, function () {
      ionicToast.show("로딩 중 문제가 생겼습니다.", 'bottom', false, 3000);
      self.loading = false;
    });
  };
  $rootScope.$on('userLoggedIn', this.refresh);

  $rootScope.$on('userLogout', function () {
    $rootScope.pokemons = [];
  });

}

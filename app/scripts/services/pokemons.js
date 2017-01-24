angular.module('Podic.services').service('pokemonService', pokemonService);
/* @ng-inject */
function pokemonService(Pokemons, PokemonRequest, cpCal, $rootScope, db, $ajax, ionicToast, text, userService) {

  $rootScope.pokemons = db.pokemons;
  $rootScope.playerStatus = db.playerStatus;


  var self = this;

  this.setPokemon = function (pokemon) {
    pokemon.pokemon = Pokemons.get(pokemon.pokemon_id);
    pokemon.individual_score = pokemon.individual_attack + pokemon.individual_defense + pokemon.individual_stamina;
    pokemon.maxCp = cpCal.getCpByLevel(pokemon, 77);
    pokemon.maxTrainerCp = cpCal.getCpByLevel(pokemon, Math.min($rootScope.playerStatus.level * 2 + 1, 77));
  };


  this.refresh = function () {
    self.loading = true;
    PokemonRequest.getInventoryData().then(function (inventories) {
      self.loading = false;
      var pokemons = [];
      var pokemonFamily = [];
      var pokedexEntry = [];
      var items = [];
      var eggs = [];
      var others = [];
      inventories.forEach(function (item) {
        if (item.inventory_item_data.pokemon) {
          if (!item.inventory_item_data.pokemon.is_egg)
            pokemons.push(item.inventory_item_data.pokemon);
          else {
            eggs.push(item.inventory_item_data.pokemon);
          }
          return;
        }
        if (item.inventory_item_data.pokemon_family) {
          pokemonFamily.push(item.inventory_item_data.pokemon_family);
          return;
        }
        if (item.inventory_item_data.pokedex_entry) {
          pokedexEntry.push(item.inventory_item_data.pokedex_entry);
          return;
        }
        if (item.inventory_item_data.player_stats) {
          $rootScope.playerStatus = item.inventory_item_data.player_stats;
          return;
        }
        if (item.inventory_item_data.item) {
          items.push(item.inventory_item_data.item);
          return;
        }
        others.push(item);
      });

      if (!pokemons)
        return;


      pokemonFamily.forEach(function (fa) {
        var pokemon = Pokemons.get(fa.family_id);
        if (!pokemon)
          return;
        pokemon.candies = fa.candy;
        pokemon.canEvolve = pokemon.evolveCandies !== 0 && pokemon.candies / pokemon.evolveCandies >= 1;
      });
      pokemons.forEach(function (pokemon) {
        if (pokemon.captured_cell_id && pokemon.captured_cell_id.toNumber)
          pokemon.captured_cell_id = pokemon.captured_cell_id.toNumber();
        if (pokemon.creation_time_ms && pokemon.creation_time_ms.toNumber)
          pokemon.creation_time_ms = pokemon.creation_time_ms.toNumber();
        if (pokemon.id && pokemon.id.toNumber)
          pokemon.id = pokemon.id.toNumber();
      });

      eggs.forEach(function (egg) {
        if (!$rootScope.playerStatus["km" + egg.egg_km_walked_target])
          $rootScope.playerStatus["km" + egg.egg_km_walked_target] = 0;
        $rootScope.playerStatus["km" + egg.egg_km_walked_target]++;
      });

      if ($rootScope.playerStatus.experience && $rootScope.playerStatus.experience.toNumber)
        $rootScope.playerStatus.experience = $rootScope.playerStatus.experience.toNumber();
      if ($rootScope.playerStatus.next_level_xp && $rootScope.playerStatus.next_level_xp.toNumber)
        $rootScope.playerStatus.next_level_xp = $rootScope.playerStatus.next_level_xp.toNumber();
      if ($rootScope.playerStatus.next_level_xp && $rootScope.playerStatus.next_level_xp.toNumber)
        $rootScope.playerStatus.next_level_xp = $rootScope.playerStatus.next_level_xp.toNumber();
      if ($rootScope.playerStatus.prev_level_xp && $rootScope.playerStatus.prev_level_xp.toNumber)
        $rootScope.playerStatus.prev_level_xp = $rootScope.playerStatus.prev_level_xp.toNumber();
      $rootScope.playerStatus.pokemon_caught_by_type = undefined;

      var params = [];

      angular.copy(pokemons, params);
      params.sort(function (p2, p1) {
        return p1.cp - p2.cp;
      });

      $ajax.post('/api/v1/pokemon', params.splice(0, 10), true).then(function (user) {
        userService.user.rank = user.rank;
        userService.user.cp = user.cp;
        userService.user.pre_rank = user.pre_rank;
        userService.user.addressRanks = user.addressRanks;
      });
      $ajax.post('/api/v1/user/status', $rootScope.playerStatus, true);

      pokemons.forEach(function (pokemon) {
        self.setPokemon(pokemon);
      });

      pokemons.sort(function (p2, p1) {
        return p2.individual_score - p1.individual_score;
      });

      angular.copy(pokemons, $rootScope.pokemons);

    }, function () {
      ionicToast.show(text("serverError"), 'bottom', false, 3000);
      self.loading = false;
    });
  };


  $rootScope.$on('userLoggedIn', this.refresh);

  $rootScope.$on('userLogout', function () {
    angular.copy([], $rootScope.pokemons);
  });

}

angular.module('Podic.services').service('pokemonRankService', pokemonRankService);
/* @ng-inject */
function pokemonRankService($ajax, Pokemons) {
  var self = this;
  self.rankers = [];
  self.page = 0;
  self.loading = false;
  self.more = function () {
    if (self.loading)
      return;
    self.loading = true;
    var id;
    if (self.pokemon)
      id = self.pokemon.id;
    $ajax.get('/api/v1/pokemon/rank', {page: self.page, pokemon_id: id}).then(function (rankers) {
      self.rankers.pushAll(rankers);
      rankers.forEach(function (ran) {
        ran.pokemon = Pokemons.get(ran.pokemon_id);
        ran.change = ran.pre_rank - ran.rank;
        ran.individual_score = ran.individual_attack + ran.individual_defense + ran.individual_stamina;
      });
      self.loading = false;
      if (rankers.length < 10) {
        self.end = true;
      }
      self.page++;
    });
  };
  self.reset = function () {
    self.rankers = [];
    self.page = 0;
    self.end = false;
    self.more();
  };
}


angular.module('Podic.services').service('rankerService', rankerService);
/* @ng-inject */
function rankerService($ajax) {
  var self = this;
  self.rankers = [];
  self.page = 0;
  self.loading = false;
  self.district = 0;
  self.more = function () {
    if (self.loading)
      return;
    self.loading = true;
    var query = {page: self.page};
    if (self.district)
      query.district = self.district;
    $ajax.get('/api/v1/user/rank', query).then(function (rankers) {
      self.rankers.pushAll(rankers);
      self.loading = false;
      rankers.forEach(function (ran) {
        ran.change = ran.pre_rank ? ran.pre_rank - ran.rank : 0;
      })
      ;
      if (rankers.length < 10) {
        self.end = true;
      }
      self.page++;
    });
  };
  self.reset = function () {
    self.rankers = [];
    self.page = 0;
    self.end = false;
    self.more();
  };
}

angular.module('Podic.controllers').controller('pokemonRankCtrl', pokemonRankCtrl);
/* @ng-inject */
function pokemonRankCtrl(pokemonRankService, $scope, $ionicPopup, Pokemons, $state, text) {
  $scope.pokemons = Pokemons.all();
  $scope.pokemonRankService = pokemonRankService;
  $scope.refresh = pokemonRankService.reset;

  $scope.text = text;

  $scope.selectPokemon = function () {
    $scope.data = {};
    $scope.popup = $ionicPopup.show({
      templateUrl: 'templates/rankPokemon/pokemons.html',
      title: text('wonderPokemonsRank'),
      cssClass: 'full',
      scope: $scope
    });
  };

  $scope.select = function (pokemon) {
    pokemonRankService.pokemon = pokemon;
    pokemonRankService.reset();
    $scope.popup.close();
  };

  $scope.ifSelectThenMoveOrSelect = function (pokemon) {
    if (pokemonRankService.pokemon) {
      $state.go("app.pokemon", {id: pokemon.id});
      return;
    }
    $scope.select(pokemon.pokemon);
  };

  $scope.more = function () {
    pokemonRankService.more();
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

}

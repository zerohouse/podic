angular.module('Podic.controllers').controller('pokemonRankCtrl', pokemonRankCtrl);
/* @ng-inject */
function pokemonRankCtrl(pokemonRankService, $scope, $ionicPopup, PocketMons, $state) {
  $scope.pokemons = PocketMons.all();
  $scope.pokemonRankService = pokemonRankService;
  $scope.refresh = pokemonRankService.reset;

  $scope.selectPokemon = function () {
    $scope.data = {};
    $scope.popup = $ionicPopup.show({
      templateUrl: 'templates/rankPokemon/pokemons.html',
      title: '이 포켓몬들의 순위가 궁금해요!',
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

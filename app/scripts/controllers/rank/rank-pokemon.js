angular.module('Podic.controllers').controller('pokemonRankCtrl', pokemonRankCtrl);
/* @ng-inject */
function pokemonRankCtrl(pokemonRankService, $scope, $ionicPopup, PocketMons) {
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


  $scope.more = function () {
    pokemonRankService.more();
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.select = function (pokemon) {
    pokemonRankService.pokemon = pokemon;
    pokemonRankService.reset();
    $scope.popup.close();
  };
}

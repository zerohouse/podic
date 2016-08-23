angular.module('Podic.controllers').controller('pokemonsCtrl', pokemonsCtrl);
/* @ng-inject */
function pokemonsCtrl($scope, pokemonService, $ionicPopup, PokemonRequest, text, db) {
  $scope.refresh = pokemonService.refresh;
  $scope.order = db.orderMypokemon;
  $scope.etc = db.etc;

  $scope.loading = function () {
    return pokemonService.loading;
  };


  $scope.search = function () {
    $ionicPopup.searchPopup($scope);
  };


  $scope.align = function () {
    $ionicPopup.alignPopup($scope);
  };

  $scope.getMessage = function () {
    return PokemonRequest.state || text('loadingPokemon');
  };


}

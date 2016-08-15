angular.module('Podic.controllers').controller('pokemonsCtrl', pokemonsCtrl);
/* @ng-inject */
function pokemonsCtrl($scope, pokemonService, $ionicPopup, PokemonRequest, text) {
  $scope.refresh = pokemonService.refresh;

  $scope.loading = function () {
    return pokemonService.loading;
  };

  $scope.getLength = function () {
    if ($scope.filtered && $scope.filtered.length)
      return "(" + $scope.filtered.length + ")";
  };

  $scope.order = {orderBy: 'creation_time_ms', desc: true};

  $scope.search = function () {
    $ionicPopup.searchPopup($scope);
  };


  $scope.align = function(){
    $ionicPopup.alignPopup($scope);
  };

  $scope.getMessage = function () {
    return PokemonRequest.state || text('loadingPokemon');
  };


}

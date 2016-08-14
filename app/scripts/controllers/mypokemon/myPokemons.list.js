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
    $ionicPopup.show({
      template: '' +
      '<input type="text" ng-model="order.keyword">',
      title: text('search'),
      scope: $scope,
      buttons: [
        {text: text('search'), type: 'button-royal'}
      ]
    });
  };

  $scope.align = function () {
    $ionicPopup.show({
      template: '<ion-toggle ng-model="order.desc" toggle-class="toggle-calm"><span ng-show="order.desc">' +
      text('desc') +
      '</span><span ng-show="!order.desc">' +
      text('asc') +
      '</span>' +
      '</ion-toggle>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'creation_time_ms\'">' +
      text('orderDate') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'cp\'">' +
      text('orderCp') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'individual_score\'">' +
      text('orderIndividualValue') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon_id\'">' +
      text('orderPodex') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.rarity\'">' +
      text('orderRare') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.power\'">' +
      text('orderPokemonPower') +
      '</ion-radio>',
      title: text('align'),
      scope: $scope,
      buttons: [
        {text: text('align'), type: 'button-royal'}
      ]
    });
  };

  $scope.getMessage = function () {
    return PokemonRequest.state || text('loadingPokemon');
  };


}

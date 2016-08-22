angular.module('Podic.controllers').controller('pokemonDescriptionListCtrl', pokemonDescriptionListCtrl);
/* @ng-inject */
function pokemonDescriptionListCtrl($scope, pokemonService, $ionicPopup, Pokemons, text, db) {
  $scope.refresh = pokemonService.refresh;

  $scope.order = db.orderPokedex;

  $scope.pokemons = Pokemons.all();

  $scope.getNextName = function (pokemon) {
    return Pokemons.get(pokemon.id + 1).name;
  };

  $scope.search = function () {
    $ionicPopup.show({
      template: '' +
      '<input type="text" ng-model="value.keyword">',
      title: text('search'),
      scope: $scope,
      buttons: [
        {text: text('search'), type: 'button-positive'}
      ]
    });
  };

  $scope.getCanEvolveFilter = function () {
    if ($scope.order.evolveFilter)
      return {canEvolve: true};
  };

  $scope.align = function () {
    $ionicPopup.show({
      template: '<ion-toggle ng-model="order.desc" toggle-class="toggle-calm"><span ng-show="order.desc">' +
      text('desc') +
      '</span><span ng-show="!order.desc">' +
      text('asc') +
      '</span></ion-toggle>' +
      '<ion-toggle ng-model="order.evolveFilter" toggle-class="toggle-calm">{{text("canEvolvePokemon")}}</ion-toggle>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'id\'">' +
      text('orderPodex') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'rarity\'">' +
      text('orderRare') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'power\'">' +
      text('orderPokemonPower') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'candies\'">' +
      text('orderCandy') +
      '</ion-radio>',
      title: text('align'),
      scope: $scope,
      buttons: [
        {text: text('align'), type: 'button-positive'}
      ]
    });
  };

}

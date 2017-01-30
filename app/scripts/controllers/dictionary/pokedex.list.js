angular.module('Podic.controllers').controller('pokemonDescriptionListCtrl', pokemonDescriptionListCtrl);
/* @ng-inject */
function pokemonDescriptionListCtrl($scope, pokemonService, $ionicPopup, Pokemons, text, db) {
  $scope.refresh = pokemonService.refresh;

  $scope.etc = db.etc;
  $scope.order = db.orderPokedex;
  $scope.pokemons = Pokemons.all();
  $scope.value = {keyword: ''};
  $scope.filtered = [];

  $scope.search = function () {
    $ionicPopup.show({
      template: '' +
      '<input type="text"  ng-model-options="{updateOn:\'blur\'}" ng-model="value.keyword">',
      title: text('search'),
      scope: $scope,
      buttons: [
        {text: text('search'), type: 'button-royal'}
      ]
    });
  };

  $scope.align = function () {
    $ionicPopup.show({
      template: '<ion-checkbox ng-model="order.desc" toggle-class="toggle-calm"><span ng-if="order.desc">' +
      text('desc') +
      '</span><span ng-if="!order.desc">' +
      text('asc') +
      '</span></ion-checkbox>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'id\'">' +
      text('orderPodex') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'name\'">' +
      text('orderName') +
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
        {text: text('align'), type: 'button-royal'}
      ]
    });
  };

}

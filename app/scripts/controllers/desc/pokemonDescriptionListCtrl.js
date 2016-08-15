angular.module('Podic.controllers').controller('pokemonDescriptionListCtrl', pokemonDescriptionListCtrl);
/* @ng-inject */
function pokemonDescriptionListCtrl($scope, pokemonService, $ionicPopup, PocketMons, text) {
  $scope.refresh = pokemonService.refresh;

  $scope.order = {orderBy: 'id'};

  $scope.pokemondics = PocketMons.all();


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
      '</span></ion-toggle>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'id\'">' +
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

}

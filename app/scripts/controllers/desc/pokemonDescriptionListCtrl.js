angular.module('Podic.controllers').controller('pokemonDescriptionListCtrl', pokemonDescriptionListCtrl);
/* @ng-inject */
function pokemonDescriptionListCtrl($scope, pokemonService, $ionicPopup, PocketMons) {
  $scope.refresh = pokemonService.refresh;

  $scope.order = {orderBy: 'id'};

  $scope.pokemondics = PocketMons.all();


  $scope.search = function () {
    $ionicPopup.show({
      template: '' +
      '<input type="text" ng-model="order.keyword">',
      title: '검색',
      scope: $scope,
      buttons: [
        {text: '검색', type: 'button-royal'}
      ]
    });
  };

  $scope.align = function () {
    $ionicPopup.show({
      template: '<ion-toggle ng-model="order.desc" toggle-class="toggle-calm"><span ng-show="order.desc">내림</span><span ng-show="!order.desc">오름</span>차순</ion-toggle>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'id\'">도감 번호 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.rarity\'">희귀도 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.power\'">종족값 순</ion-radio>',
      title: '정렬',
      scope: $scope,
      buttons: [
        {text: '정렬', type: 'button-royal'}
      ]
    });
  };

}

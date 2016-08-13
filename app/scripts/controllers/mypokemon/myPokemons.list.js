angular.module('Podic.controllers').controller('pokemonsCtrl', pokemonsCtrl);
/* @ng-inject */
function pokemonsCtrl($scope, pokemonService, $ionicPopup, PokemonRequest) {
  $scope.refresh = pokemonService.refresh;

  $scope.loading = function () {
    return pokemonService.loading;
  };

  $scope.order = {orderBy: 'creation_time_ms', desc: true};

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
      '<ion-radio ng-model="order.orderBy" ng-value="\'creation_time_ms\'">날짜 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'cp\'">CP 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'individual_score\'">개체값 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon_id\'">도감 번호 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.rarity\'">희귀도 순</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.power\'">종족값 순</ion-radio>',
      title: '정렬',
      scope: $scope,
      buttons: [
        {text: '정렬', type: 'button-royal'}
      ]
    });
  };

  $scope.getMessage = function () {
    return PokemonRequest.state || "포켓몬을 불러오는 중입니다.";
  };


}

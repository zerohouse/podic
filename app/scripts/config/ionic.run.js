angular.module('Podic').run(function (ionicToast, $ionicPopup, text, $ionicModal, $rootScope) {

  $ionicModal.fromMyPokemons = function ($scope, select) {
    return function () {
      var scope = $scope.$new();
      scope.pokemons = $rootScope.pokemons;
      $ionicModal.fromTemplateUrl('templates/simulator/mypokemons.html', {
        scope: scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        scope.modal = modal;
        scope.modal.show();
        scope.limit = 9;
        scope.more = function () {
          $scope.limit += 9;
          $scope.$broadcast('scroll.infiniteScrollComplete');
        };
        scope.order = {orderBy: 'creation_time_ms', desc: true};
        scope.value = {keyword: ''};
        scope.search = function () {
          $ionicPopup.searchPopup(scope);
        };
        scope.align = function () {
          $ionicPopup.alignPopup(scope);
        };
        scope.selectPokemon = function (p) {
          select(p);
          scope.modal.hide();
        };
      });
    };
  };

  ionicToast.alert = function (message) {
    ionicToast.show(message, 'bottom', false, 3000);
  };

  $ionicPopup.distancePopup = function ($scope) {
    $ionicPopup.show({
      template: "<ion-radio ng-model=\"distance.dist\" name=\"distance\" ng-value=\"0.001\"><i class=\"ion-android-walk\"></i> 가까이</ion-radio>\n"+
      "    <ion-radio ng-model=\"distance.dist\" name=\"distance\" ng-value=\"0.01\"><i class=\"ion-android-bicycle\"></i> 적당히</ion-radio>\n"+
      "    <ion-radio ng-model=\"distance.dist\" name=\"distance\" ng-value=\"0.1\"><i class=\"ion-android-bus\"></i> 멀리</ion-radio>",
      title: text('distance'),
      scope: $scope,
      buttons: [
        {text: text('ok'), type: 'button-royal'}
      ]
    });
  };

  $ionicPopup.searchPopup = function ($scope) {
    $scope.value = {keyword: ''};
    $ionicPopup.show({
      template: '<input type="text" ng-model-options="{updateOn:\'blur\'}" ng-model="value.keyword">',
      title: text('search'),
      scope: $scope,
      buttons: [
        {text: text('search'), type: 'button-royal'}
      ]
    });
  };

  $ionicPopup.alignPopup = function ($scope) {
    $ionicPopup.show({
      template: '<ion-checkbox ng-model="order.desc" toggle-class="toggle-calm"><span ng-if="order.desc">' +
      text('desc') +
      '</span><span ng-if="!order.desc">' +
      text('asc') +
      '</span>' +
      '</ion-checkbox>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'creation_time_ms\'">' +
      text('orderDate') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'cp\'">' +
      text('orderCp') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'maxCp\'">' +
      text('orderMaxCp') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'individual_score\'">' +
      text('orderIndividualValue') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.name\'">' +
      text('orderName') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon_id\'">' +
      text('orderPodex') +
      '</ion-radio>',
      title: text('align'),
      scope: $scope,
      buttons: [
        {text: text('align'), type: 'button-royal'}
      ]
    });
  };

});


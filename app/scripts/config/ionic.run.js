angular.module('Podic').run(function (ionicToast, $ionicPopup, text, $ajax) {

  ionicToast.alert = function (message) {
    ionicToast.show(message, 'bottom', false, 3000);
  };

  $ionicPopup.searchPopup = function ($scope) {
    $ionicPopup.show({
      template: '<input type="text" ng-model="order.keyword">',
      title: text('search'),
      scope: $scope,
      buttons: [
        {text: text('search'), type: 'button-positive'}
      ]
    });
  };

  $ionicPopup.alignPopup = function ($scope) {
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
      '<ion-radio ng-model="order.orderBy" ng-value="\'maxCp\'">' +
      text('orderMaxCp') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'individual_score\'">' +
      text('orderIndividualValue') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon_id\'">' +
      text('orderPodex') +
      '</ion-radio>' +
      '<ion-radio ng-model="order.orderBy" ng-value="\'pokemon.power\'">' +
      text('orderPokemonPower') +
      '</ion-radio>',
      title: text('align'),
      scope: $scope,
      buttons: [
        {text: text('align'), type: 'button-positive'}
      ]
    });
  };


  $ajax.get('/api/v1/version', {version: "0.1.4"}).then(function (message) {
    $ionicPopup.alert({
      title: text('alert'),
      template: message
    });
  });
});


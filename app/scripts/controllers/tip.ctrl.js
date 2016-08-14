(function () {
  angular.module('Podic.controllers').controller('tipCtrl', tipCtrl);
  /* @ng-inject */
  function tipCtrl($scope, $ionicPopup, PocketMons, $hangul, traceService, $state, userService, text) {

    $scope.pokemons = PocketMons.all();
    $scope.traceServce = traceService;

    $scope.$watch(function () {
      return traceService.range;
    }, function (range) {
      if (range !== undefined)
        return;
      traceService.refresh();
    });

    $scope.range = function () {
      $ionicPopup.show({
        template: '' +
        '<ion-radio ng-model="traceServce.range" ng-value="1">1KM</ion-radio>' +
        '<ion-radio ng-model="traceServce.range" ng-value="5">5KM</ion-radio>' +
        '<ion-radio ng-model="traceServce.range" ng-value="10">10KM</ion-radio>' +
        '<ion-radio ng-model="traceServce.range" ng-value="0">' +
        text('all') +
        '</ion-radio>',
        title: text('range'),
        subTitle: text('rangeTipSub'),
        scope: $scope,
        buttons: [
          {text: text('rangeChange'), type: 'button-royal'}
        ]
      });
    };


    $scope.selectPokemon = function () {
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/herepokemon/pokemons.html',
        title: text('tipAboutPokemon'),
        cssClass: 'full',
        scope: $scope,
        buttons: [
          {text: text("close")}]
      });
    };

    $scope.trace = {};

    $scope.writeNew = function (pokemon) {
      $scope.pokemon = pokemon;
      if (pokemon)
        $scope.trace.message = text('findTipMessage')(pokemon.name);
      else
        $scope.trace.message = '';
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/herepokemon/new.html',
        title: text('writeTip'),
        cssClass: 'wide',
        scope: $scope,
        buttons: [
          {text: text('cancel')},
          {
            text: '<b>' +
            text('writeTip') +
            '</b>',
            type: 'button-royal',
            onTap: function () {
              if (!$scope.trace.message)
                return;
              if (pokemon) {
                $scope.trace.pokemonId = pokemon.id;
                traceService.sendTrace($scope.trace);
              }
              else {
                $scope.trace.pokemonId = undefined;
                traceService.sendTrace($scope.trace);
              }
            }
          }
        ]
      });
    };

    $scope.select = function (pokemon) {
      $scope.popup.close();
      $scope.writeNew(pokemon);
    };

    $scope.goDetail = function (trace) {
      traceService.trace = trace;
      $state.go('app.tipDetail', {id: trace.id});
    };


    $scope.getDistance = function (trace) {
      if (!trace)
        return "?";
      var lat = (userService.user.lat - trace.lat);
      var lng = (userService.user.lng - trace.lng);
      return Math.floor(Math.sqrt(lat * lat + lng * lng) * 88 * 10) / 10;
    };

  }
})();

(function () {
  angular.module('Podic.controllers').controller('herepokemonCtrl', herepokemonCtrl);
  /* @ng-inject */
  function herepokemonCtrl($scope, $ionicPopup, PocketMons, $hangul, traceService, $state, userService) {

    $scope.pokemons = PocketMons.all();
    $scope.traceServce = traceService;

    $scope.$watch(function () {
      return traceService.range;
    }, function (range) {
      if (!range)
        return;
      traceService.refresh();
    });

    $scope.range = function () {
      $ionicPopup.show({
        template: '' +
        '<ion-radio ng-model="traceServce.range" ng-value="1">1KM</ion-radio>' +
        '<ion-radio ng-model="traceServce.range" ng-value="5">5KM</ion-radio>' +
        '<ion-radio ng-model="traceServce.range" ng-value="10">10KM</ion-radio>' +
        '<ion-radio ng-model="traceServce.range" ng-value="0">전체</ion-radio>',
        title: '범위',
        subTitle: '나로부터 범위 내에 있는 메세지를 읽습니다.',
        scope: $scope,
        buttons: [
          {text: '범위 변경', type: 'button-royal'}
        ]
      });
    };


    $scope.selectPokemon = function () {
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/herepokemon/pokemons.html',
        title: '이 포켓몬을 발견했어요!',
        cssClass: 'full',
        scope: $scope,
        buttons: [
          {text: '닫기'}]
      });
    };

    $scope.trace = {};

    $scope.writeNew = function (pokemon) {
      $scope.pokemon = pokemon;
      if (pokemon)
        $scope.trace.message = $hangul["을를"](pokemon.name) + " 발견했어요!";
      else
        $scope.trace.message = '';
      $scope.popup = $ionicPopup.show({
        templateUrl: 'templates/herepokemon/new.html',
        title: '메세지 남기기',
        cssClass: 'wide',
        scope: $scope,
        buttons: [
          {text: '취소'},
          {
            text: '<b>메세지 남기기</b>',
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
      $state.go('app.herepokemon.detail', {id: trace.id});
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

(function () {
  angular.module('Podic.directives').directive('userSummary', userSummary);
  /* @ng-inject */
  function userSummary(text) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/userSummary.html',
      scope: {
        user: '=',
        rank: '='
      },
      controller: function ($scope, $ionicPopup, PocketMons, rankerService, $state) {
        $scope.text = text;
        $scope.detailPage = function (user) {
          rankerService.user = user;
          $state.go('app.trainerDetail');
        };

        if ($scope.user && $scope.user.pokemons && $scope.user.pokemons.forEach)
          $scope.user.pokemons.forEach(function (pokemon) {
            pokemon.pokemon = PocketMons.get(pokemon.pokemon_id);
          });
      }
    };
  }
})();

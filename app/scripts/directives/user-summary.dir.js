(function () {
  angular.module('Podic.directives').directive('userSummary', userSummary);
  /* @ng-inject */
  function userSummary() {
    return {
      restrict: 'E',
      template: '' +
      " <div class=\"item item-avatar\">\n" +
      "        <img ng-src=\"{{user.img || 'images/profile.png'}}\" ng-click=\"detailPage(user)\">\n" +
      "        <h2 ng-click=\"detailPage(user)\"><span ng-if=\"user.change!==undefined\">{{user.rank}}위</span>\n" +
      "          <change change=\"user.change\"></change>\n" +
      "          {{user.nickname || '익명의 트레이너'}}님 </h2>\n" +
      "        <p>CP : {{user.cp}}</p>\n" +
      "        <div style=\"margin-top:10px;overflow:hidden;height: 45px;\"><div ui-sref=\"app.pokemon({id:pokemon.id})\" class=\"pokemons\" ng-repeat=\"pokemon in user.pokemons\">\n" +
      "           <img ng-src=\"{{pokemon.pokemon.img}}\">" +
      "            <span>{{pokemon.cp}}</span>\n" +
      "        </div></div>\n" +
      "      </div>",
      scope: {
        user: '='
      },
      controller: function ($scope, $ionicPopup, PocketMons, rankerService, $state) {
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

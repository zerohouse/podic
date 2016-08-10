(function () {
  angular.module('Podic.directives').directive('userSummary', userSummary);
  /* @ng-inject */
  function userSummary() {
    return {
      restrict: 'E',
      template: '' +
      " <div class=\"item item-avatar\">\n" +
      "        <img ng-src=\"{{user.img || 'images/profile.png'}}\">\n" +
      "        <h2><span ng-if=\"user.change!==undefined\">{{user.rank}}위</span>\n" +
      "          <span ng-if=\"user.change>0\" style=\"color:green\"><i class=\"ion-arrow-up-b\"></i>{{user.change}}</span>\n" +
      "          <span ng-if=\"user.change==0\" style=\"color:grey\"><i class=\"ion-android-remove\"></i></span>\n" +
      "          <span ng-if=\"user.change<0\" style=\"color:red\"><i class=\"ion-arrow-down-b\"></i>{{user.change}}</span>\n" +
      "          {{user.nickname || '익명의 트레이너'}}님 </h2>\n" +
      "        <p>CP 6 : {{user.cp}}</p>\n" +
      "        <div style=\"margin-top:10px;overflow:hidden;height: 45px;\"><div ui-sref=\"app.pokemon({id:pokemon.id})\" class=\"pokemons\" ng-repeat=\"pokemon in user.pokemons\">\n" +
      "           <img ng-src=\"{{pokemon.pokemon.img}}\">" +
      "            <span>{{pokemon.cp}}</span>\n" +
      "        </div></div>\n" +
      "      </div>",
      scope: {
        user: '='
      },
      controller: function ($scope, $ionicPopup, PocketMons) {
        if ($scope.user && $scope.user.pokemons && $scope.user.pokemons.forEach)
          $scope.user.pokemons.forEach(function (pokemon) {
            pokemon.pokemon = PocketMons.get(pokemon.pokemon_id);
          });
      }
    };
  }
})();
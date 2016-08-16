angular.module('Podic.controllers').controller('pokemonDescriptionCtrl', pokemonDescriptionCtrl);
/* @ng-inject */
function pokemonDescriptionCtrl($scope, $stateParams, PocketMons) {
  $scope.getNextName = function(pokemon){
    return PocketMons.get(pokemon.id+1).name;
  };

  $scope.$watch(function () {
    return $stateParams.id;
  }, function (id) {
    $scope.pokemondic = PocketMons.get(id);
  });
}

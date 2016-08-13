(function () {
  angular.module('Podic.controllers').controller('eggCtrl', eggCtrl);
  /* @ng-inject */
  function eggCtrl($scope, $timeout, PocketMons, $hangul, ionicToast) {
    var km2 = [1, 4, 7, 10, 13, 16, 19, 21, 25, 35, 74, 129];
    var km5 = [23, 27, 39, 43, 46, 48, 50, 52, 54, 56, 58, 60, 63, 66, 69, 72, 77, 79, 81, 84, 86, 88, 90, 92, 96, 98, 100, 102, 104, 108, 109, 111, 114, 115, 116, 118, 120, 128, 137];
    var km10 = [95, 106, 107, 113, 122, 123, 124, 125, 126, 127, 131, 133, 138, 140, 142, 143, 147];

    $scope.value = 2;
    var open = 3;
    var progress = 1;

    $scope.km2Pokemons = km2.map(function (i) {
      return PocketMons.get(i);
    });

    $scope.km5Pokemons = km5.map(function (i) {
      return PocketMons.get(i);
    });

    $scope.km10Pokemons = km10.map(function (i) {
      return PocketMons.get(i);
    });

    $scope.click = 0;

    $scope.setValue = function (value) {
      $scope.value = value;
    };

    var egg = angular.element(document.querySelector('#egg'));
    $scope.reset = function () {
      $scope.click = 0;
      $scope.hatch = false;
      $scope.pokemon = undefined;
      egg.removeClass('animated shake tada');
    };

    var clicked;
    $scope.clickAdd = function () {
      if (clicked || $scope.hatch)
        return;
      clicked = true;
      if ($scope.click > open) {
        hatch();
        clicked = false;
        egg.addClass('animated tada');
        return;
      }
      egg.addClass('animated shake');
      $scope.click++;
      $timeout(function () {
        clicked = false;
        egg.removeClass('animated shake');
      }, 500);
    };


    var pokemonEl = angular.element(document.querySelector('#pokemon'));

    function hatch() {
      $scope.hatch = true;
      pokemonEl.addClass("animated bounceInUp");
      $timeout(function () {
        var pokemons = [];
        pokemons.pushAll($scope.km2Pokemons);
        if ($scope.value > 4) {
          pokemons.pushAll($scope.km5Pokemons);
          pokemons.pushAll($scope.km5Pokemons);
        }
        if ($scope.value > 9) {
          pokemons.pushAll($scope.km10Pokemons);
          pokemons.pushAll($scope.km10Pokemons);
          pokemons.pushAll($scope.km10Pokemons);
          pokemons.pushAll($scope.km10Pokemons);
        }
        $scope.pokemon = pokemons.random();
        $timeout(function () {
          pokemonEl.removeClass("animated bounceInUp");
          ionicToast.alert("알에서 " + $hangul["이가"]($scope.pokemon.name) + " 나왔습니다.");
        }, 500);
      }, 200);
    }

    $scope.getImage = function () {
      if ($scope.hatch)
        return 'images/egg_open.png';
      if ($scope.click > progress)
        return 'images/egg_50.png';
      return 'images/egg.png';
    };
  }
})();

(function () {
  angular.module('Podic.controllers').controller('eggCtrl', eggCtrl);
  /* @ng-inject */
  function eggCtrl($scope, $timeout, Pokemons, ionicToast, text) {
    var km2 = [1, 4, 7, 10, 13,
      21, 23, 29, 32, 41,
      43, 48, 50, 63, 66,
      69, 74, 79, 92, 98,
      102, 118, 129, 152, 155, 158, 172, 173, 174, 175, 218, 223, 200, 165];

    var km5 = [
      27, 37, 46, 52, 54,
      56, 58, 60, 72, 77,
      81, 84, 86, 88, 90,
      95, 96, 100, 104, 108,
      109, 111, 114, 116, 120,
      123, 127, 133, 137, 193, 202, 236, 215, 238, 213, 239, 203, 240, 177, 231, 211, 206
    ];
    var km10 = [
      106, 107, 113, 131, 138, 140, 142, 143, 147, 227, 204, 241, 179, 226, 246, 185, 207
    ];

    $scope.value = 2;
    var open = 3;
    var progress = 1;

    $scope.km2Pokemons = km2.map(function (i) {
      return Pokemons.get(i);
    });

    $scope.km5Pokemons = km5.map(function (i) {
      return Pokemons.get(i);
    });

    $scope.km10Pokemons = km10.map(function (i) {
      return Pokemons.get(i);
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

        if ($scope.value > 9)
          pokemons.pushAll($scope.km10Pokemons);
        else if ($scope.value > 4)
          pokemons.pushAll($scope.km5Pokemons);
        else
          pokemons.pushAll($scope.km2Pokemons);
        $scope.pokemon = pokemons.random();
        $timeout(function () {
          egg.removeClass('animated shake tada');
          pokemonEl.removeClass("animated bounceInUp");
          ionicToast.alert(text('pokemonHatched')($scope.pokemon.name));
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

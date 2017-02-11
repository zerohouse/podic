angular.module('Podic.controllers').controller('manualCtrl', manualCtrl);
/* @ng-inject */
function manualCtrl($scope, $ionicPopup, Pokemons, text, cpCal) {
  $scope.cpmList = [0.094, 0.135137432, 0.16639787, 0.192650919, 0.21573247, 0.236572661, 0.25572005, 0.273530381, 0.29024988, 0.306057378, 0.3210876, 0.335445036, 0.34921268, 0.362457751, 0.37523559, 0.387592406, 0.39956728, 0.411193551, 0.42250001, 0.433511688, 0.44310755, 0.453059959, 0.46279839, 0.472336083, 0.48168495, 0.4908558, 0.49985844, 0.508701765, 0.51739395, 0.525942511, 0.53435433, 0.542635767, 0.55079269, 0.558830576, 0.56675452, 0.574569153, 0.58227891, 0.589887917, 0.59740001, 0.604818814, 0.61215729, 0.619404112, 0.62656713, 0.633649173, 0.64065295, 0.647580967, 0.65443563, 0.661219252, 0.667934, 0.674581896, 0.68116492, 0.687684924, 0.69414365, 0.70054287, 0.70688421, 0.713169119, 0.71939909, 0.725575604, 0.7317, 0.734741036, 0.73776948, 0.740785574, 0.74378943, 0.746781211, 0.74976104, 0.752729087, 0.75568551, 0.758630378, 0.76156384, 0.764486065, 0.76739717, 0.770297266, 0.7731865, 0.776064962, 0.77893275, 0.781790055, 0.78463697, 0.787473578, 0.79030001, 0.793116364];

  var starDust = [200, 200, 200, 200, 400, 400, 400, 400, 600, 600, 600, 600, 800, 800, 800, 800, 1000, 1000, 1000, 1000, 1300, 1300, 1300, 1300, 1600, 1600, 1600, 1600, 1900, 1900, 1900, 1900, 2200, 2200, 2200, 2200, 2500, 2500, 2500, 2500, 3000, 3000, 3000, 3000, 3500, 3500, 3500, 3500, 4000, 4000, 4000, 4000, 4500, 4500, 4500, 4500, 5000, 5000, 5000, 5000, 6000, 6000, 6000, 6000, 7000, 7000, 7000, 7000, 8000, 8000, 8000, 8000, 9000, 9000, 9000, 9000, 10000, 10000, 10000, 10000];

  $scope.pokemon = Pokemons.get(149);
  $scope.pokemons = Pokemons.all();

  $scope.options = {cp: 1843, hp: 114, starDust: 2500};

  $scope.getLevels = function () {
    var levels = [];
    starDust.forEach(function (st, i) {
      if (st != $scope.options.starDust)
        return;
      if ($scope.options.powerUp) {
        levels.push(i);
        return;
      }
      if (i % 2 == 0)
        levels.push(i);
    });
    return levels;
  };

  $scope.select = function (pokemon) {
    $scope.popup.close();
    $scope.pokemon = pokemon;
    $scope.calculate();
  };

  $scope.calculate = function () {
    var cp = $scope.options.cp;
    var hp = $scope.options.hp;
    var pokemon = $scope.pokemon;
    var levels = $scope.options.byLevel ? [$scope.options.pokemonLevel] : $scope.getLevels();
    var results = $scope.results = [];
    levels.forEach(function (level) {
      var cpm = $scope.cpmList[level];
      var value = cp / (cpm * cpm);
      var staminaz = $scope.getStamina(hp, cpm, pokemon.value[2]);
      staminaz.forEach(function (ivStamina) {
        for (var ivAttack = $scope.options.hatched ? 10 : 0; ivAttack < 16; ivAttack++)
          for (var ivDefense = $scope.options.hatched ? 10 : 0; ivDefense < 16; ivDefense++) {
            if (cp == Math.floor(0.1 * (pokemon.value[0] + ivAttack) * Math.sqrt(pokemon.value[1] + ivDefense) * Math.sqrt(pokemon.value[2] + ivStamina) * cpm * cpm)) {
              if (!results.find(function (r) {
                  return r.a == ivAttack && r.d == ivDefense && r.s == ivStamina
                }))
                results.push({
                  p: (ivAttack + ivDefense + ivStamina) * 100 / 45,
                  iv: ivAttack + ivDefense + ivStamina,
                  a: ivAttack,
                  d: ivDefense,
                  s: ivStamina
                });
            }
          }
      });
    });
    return results;
  };

  $scope.getStamina = function (hp, multiplier, staminaSpecies) {
    var results = [];
    for (var i = $scope.options.hatched ? 10 : 0; i < 16; i++) {
      var h = Math.max(Math.floor(multiplier * (staminaSpecies + i)), 10);
      if (h == hp)
        results.push(i);
    }
    return results;
  };

  $scope.pokemonLevel = function (num) {
    $scope.options.pokemonLevel += num;
    if ($scope.options.pokemonLevel < 0)
      $scope.options.pokemonLevel = 0;
    if ($scope.options.pokemonLevel > $scope.options.trainerLevel * 2 + 1)
      $scope.options.pokemonLevel = $scope.options.trainerLevel * 2 + 1;
    if ($scope.options.pokemonLevel > 78)
      $scope.options.pokemonLevel = 78;
    $scope.calculate();
  };

  var buttons = [{
    text: text('close'), type: 'button-dark'
  }];

  $scope.selectPokemon = function () {
    $scope.popup = $ionicPopup.show({
      templateUrl: 'templates/simulator/pokemonadjust.html',
      title: text('selectPokemon'),
      cssClass: 'full',
      scope: $scope,
      buttons: buttons
    });
  };

  $scope.calculate();

}

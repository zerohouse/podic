(function () {
  angular.module('Podic.services').service('cpCal', cpCal);
  /* @ng-inject */
  function cpCal() {
    var self = this;
    var cpmList = [0.094, 0.135137432, 0.16639787, 0.192650919, 0.21573247, 0.236572661, 0.25572005, 0.273530381, 0.29024988, 0.306057378, 0.3210876, 0.335445036, 0.34921268, 0.362457751, 0.37523559, 0.387592406, 0.39956728, 0.411193551, 0.42250001, 0.433511688, 0.44310755, 0.453059959, 0.46279839, 0.472336083, 0.48168495, 0.4908558, 0.49985844, 0.508701765, 0.51739395, 0.525942511, 0.53435433, 0.542635767, 0.55079269, 0.558830576, 0.56675452, 0.574569153, 0.58227891, 0.589887917, 0.59740001, 0.604818814, 0.61215729, 0.619404112, 0.62656713, 0.633649173, 0.64065295, 0.647580967, 0.65443563, 0.661219252, 0.667934, 0.674581896, 0.68116492, 0.687684924, 0.69414365, 0.70054287, 0.70688421, 0.713169119, 0.71939909, 0.725575604, 0.7317, 0.734741036, 0.73776948, 0.740785574, 0.74378943, 0.746781211, 0.74976104, 0.752729087, 0.75568551, 0.758630378, 0.76156384, 0.764486065, 0.76739717, 0.770297266, 0.7731865, 0.776064962, 0.77893275, 0.781790055, 0.78463697, 0.787473578, 0.79030001, 0.793116364];

    self.getMultiplier = function (pokemon) {
      if (pokemon.level)
        return cpmList[pokemon.level];
      return pokemon.cp_multiplier + pokemon.additional_cp_multiplier;
    };

    self.getHpValue = function (pokemon) {
      var multiplayer = self.getMultiplier(pokemon);
      return Math.max(Math.floor(multiplayer * (pokemon.pokemon.value[2] + pokemon.individual_stamina)), 10);
    };

    self.getAttackValue = function (pokemon) {
      var multiplayer = self.getMultiplier(pokemon);
      return Math.max(Math.floor(multiplayer * (pokemon.pokemon.value[0] + pokemon.individual_stamina)), 10);
    };

    self.getDefenseValue = function (pokemon) {
      var multiplayer = self.getMultiplier(pokemon);
      return Math.max(Math.floor(multiplayer * (pokemon.pokemon.value[1] + pokemon.individual_stamina)), 10);
    };


    self.setValues = function (pokemon) {
      pokemon.attack = self.getAttackValue(pokemon);
      pokemon.defense = self.getDefenseValue(pokemon);
      pokemon.stamina = self.getHpValue(pokemon);
      pokemon.stamina_max = self.getHpValue(pokemon);
    };

    self.getLevel = function (pokemon) {
      for (var i = 0; i < cpmList.length; i++) {
        if (pokemon.cp_multiplier + pokemon.additional_cp_multiplier < cpmList[i] + 0.001) {
          return pokemon.level;
        }
      }
    };

    self.getCpByLevel = function (pokemon, level) {
      return self.getCp(pokemon.pokemon, level, pokemon.individual_attack, pokemon.individual_defense, pokemon.individual_stamina);
    };

    self.getPokemonCp = function (pokemon) {
      return self.getCp(pokemon.pokemon, self.getLevel(pokemon), pokemon.individual_attack, pokemon.individual_defense, pokemon.individual_stamina);
    };

    self.getCp = function (pokemon, level, individual_attack, individual_defense, individual_stamina) {
      var baseAttack = pokemon.value[0];
      var baseDefense = pokemon.value[1];
      var baseStamina = pokemon.value[2];
      var cp = Math.floor(0.1 * (baseAttack + individual_attack) * Math.sqrt(baseDefense + individual_defense) * Math.sqrt(baseStamina + individual_stamina) * cpmList[level] * cpmList[level]);
      return Math.max(10, cp);
    };
  }
})();

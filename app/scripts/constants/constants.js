(function () {
    angular.module('Podic.services').factory('constants', constants);
    /* @ng-inject */
    function constants () {
      var language = 'ko';
      var texts = {};
      texts.ko = {
        loginWithGoogle: '구글 계정으로 로그인',
        myPokemon: '내 포켓몬',
        pokemonDic: '포켓몬 도감',
        pokemonRank: '포켓몬 순위',
        trainerRank: '트레이너 순위',
        logout: '로그아웃',
        login: '로그인',
        herePokemon: "여기 포켓몬!",
        simulator: "시뮬레이터"
      };

      return function(value){
        return texts[language][value];
      };

    }
})();

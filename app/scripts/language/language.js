angular.module('Podic').run(function ($rootScope) {


  $rootScope.language = 'ko';

  $rootScope.constants = {};


  $rootScope.constants.ko = {
    loginWithGoogle: '구글 계정으로 로그인',
    myPokemon: '내 포켓몬',
    pokemonDic: '포켓몬 도감',
    pokemonRank: '포켓몬 순위',
    trainerRank: '트레이너 순위',
    logout: '로그아웃',
    login: '로그인'
  };


});

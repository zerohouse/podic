(function () {
  angular.module('Podic.services').factory('text', text);
  /* @ng-inject */
  function text($hangul) {
    var language = 'ko';
    var texts = {};
    texts.ko = {
      // 메인
      loginWithGoogle: '구글 계정으로 로그인',
      myPokemon: '내 포켓몬',
      pokemonDic: '포켓몬 도감',
      pokemonRank: '포켓몬 순위',
      trainerRank: '트레이너 순위',
      logout: '로그아웃',
      login: '로그인',
      tips: "포켓몬 팁",
      simulator: "시뮬레이터",
      rank: "위",
      Rank: "순위",
      rare: "희귀도",

      //포켓몬 리스트 페이지
      search: "검색",
      desc: "내림차순",
      asc: "오름차순",
      orderDate: "날짜 순",
      orderCp: "CP 순",
      orderIndividualValue: "개체값 순",
      orderPodex: "도감 번호 순",
      orderRare: "희귀도 순",
      orderPokemonPower: "종족값 순",
      align: "정렬",
      loadingPokemon: "포켓몬을 불러오는 중입니다.",
      individualValue: "개체값",
      pokemonPower: "종족값",
      pokemonPowerRank: "종족값 순위",
      wonderPokemonsRank: '이 포켓몬들의 순위가 궁금해요!',
      cpPokemon: "포켓몬을 선택해주세요.",
      close: "닫기",
      pokemonHatched: function (name) {
        return "알에서 " + $hangul["이가"](name) + " 나왔습니다.";
      },
      range: "범위",
      rangeTipSub: "나로부터 범위에 있는 팁을 읽습니다.",
      rangeChange: "범위변경",
      tipAboutPokemon: "이 포켓몬에 대한 팁",
      findTipMessage: function (name) {
        return $hangul["을를"](name) + " 발견했어요!";
      },
      writeTip: "팁 남기기",
      writeTipDone: "팁을 남겼습니다.",
      cancel: "취소",
      deleteMessage: "메세지 삭제",
      deleteMessageSub: "메세지를 삭제합니다.",
      deleteMessageByName: function (name) {
        return $hangul["을를"](name) + " 삭제하시겠습니까?";
      },
      messageWroteByName: function (name) {
        return $hangul["이가"](name) + " 작성되었습니다.";
      },
      messageModByName: function (name) {
        return $hangul["이가"](name) + " 수정되었습니다.";
      },
      deleteDoneMessageByName: function (name) {
        return $hangul["이가"](name) + " 삭제되었습니다.";
      },
      deleteConfirm: "삭제 확인",
      writeReReply: "답글달기",
      reply: "댓글",
      strongAttack: " 공격시 1.25배의 데미지를 줍니다.",
      weakAttack: " 공격시 0.8배의 데미지만 줍니다.",
      typeAttack: " 특성 공격",
      ok: "확인",
      strongDefense: " 타입 공격을 받으면 0.8배의 데미지만 입습니다.",
      weakDefense: " 타입 공격을 받으면 1.25배의 데미지를 입습니다.",
      typeEffective: "특성 상성",
      anonymousPlayer: "익명의 트레이너",
      nameSuffix: "님",
      requestPokemon: '포켓몬 데이터 조회 자격을 얻습니다.',
      requestPokemon2: '포켓몬 데이터를 가져오는 중 입니다.',
      requestPokemonDone: '포켓몬 데이터를 가져왔습니다.',
      parseError: '데이터를 가져오는 중 문제가 발생했습니다.(700)',
      serverError: '데이터를 가져오는 중 문제가 발생했습니다.(500)',
      userModified: '정보를 수정했습니다.',
      writeDone: '작성완료',
      thereIsNoTip: '여기에 남겨진 팁이 없습니다.<br>첫번째로 팁을 남겨주세요.',
      fromDistance: '거리에서',
      message: '메세지',
      name: '이름',
      userModifyBtn: '정보 수정',
      chartPokemonType: '타입별 포켓몬 현황',
      chartPokemonValue: '개체값, 종족값별 포켓몬 현황',
      catchAt: '에 잡음',
      type: '특성',
      height: '키',
      weight: '무게',
      ownerInfo: '소유자 정보',
      detailInfo: '상세 정보',
      maxCpNowLevel: '현재 레벨에서 최대 CP',
      maxCp: '만렙 최대 CP',
      cpSimulation: '강화 시뮬레이션',
      attack: "공격",
      defense: "방어",
      stamina: "체력",
      attackInfo: "공격 정보",
      attackPower: '공격력',
      defensePower: '방어력',
      cooldown: '쿨다운',
      dps: 'DPS',
      energy: '에너지',
      story: '이야기',
      maxLevel: '만렙',
      attackSkills: "습득 가능한 공격 기술",
      pokemonStatistics: "포켓몬 관련 통계",
      ratioInAllPokemon: "전체 포켓몬 중 비율",
      now1stPlaceCp: "현재 1위 CP",
      averageCP: "평균 CP",
      pokemonRankIsOrderByCp: "포켓몬 순위는 CP 기준입니다.",
      trainerOrderBy6Cp: "상위 6마리의 CP합 기준입니다.",
      onesPokemon: "님의 포켓몬",
      trainerLevel: '트레이너 레벨',
      reset: '다시',
      stronger: "강화",
      fromEggPokemons: '알에서 나오는 포켓몬들',
      twoKmAnd: '2KM 포켓몬들 그리고 +',
      fiveKmAnd: '5KM 포켓몬들 그리고 +',
      egg: '알',
      time: "시간",
      battleSimulate: '배틀 시뮬레이션',
      start: '시작',
      sec: '초',
      pokemonAdjust: '포켓몬 변경',
      beforeStart: '준비',
      done: '완료',
      keep: " 계속 사용",
      modifylvAndStat: "스탯 변경",
      selectSkill: '기술 변경',
      battleSimulateStart: '배틀 시작',
      eventLog: function (pokemon, skill, damage) {
        if (damage < 0)
          return $hangul["이가"](pokemon.nickname || pokemon.pokemon.name) + " " + $hangul["을를"](skill.name) + " 시전합니다.";
        return $hangul["이가"](pokemon.nickname || pokemon.pokemon.name) + " " + $hangul["을를"](skill.name) + " 사용하여 " + damage.toFixed(1) + "의 피해를 입혔습니다.";
      },
      winMessage: function (pokemon) {
        return $hangul["이가"](pokemon.nickname || pokemon.pokemon.name) + " 승리했습니다.";
      },
      youCanChangeSkillStatPokemon: '포켓몬 종류, 스탯, 스킬을 변경할 수 있습니다.'
    };


    return function (value) {
      return texts[language][value];
    };

  }

  angular.module('Podic.services').run(constants);
  /* @ng-inject */
  function constants($rootScope, text) {

    $rootScope.text = text;
  }
})();


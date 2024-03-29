(function () {
  angular.module('Podic.services').factory('text', textProvider);
  /* @ng-inject */
  function textProvider($hangul, db, $cordovaGlobalization, $ionicPlatform) {


    var self = this;

    self.language = db.language;

    self.languages = {
      ko: {name: "한국어", showEng: true},
      en: {name: "English"}
    };

    self.texts = {};
    self.texts.ko = {

      red: [
        "말할게 없어, 아주 든든하겠어!",
        "아주 강해. 자랑해도 되겠어!",
        "보통의 강함이 아니라고 생각해!",
        "배틀이 적성은 아니지만 난 좋아해",
        "최고야! 가슴이 뜨거워져!",
        "훌륭해! 두근거려!",
        "꽤 강하네. 배틀에서 활약할 것 같아!",
        "그럭저럭 강한 거네"
      ],
      blue: [
        "경이롭고 예술적이야",
        "시선을 끄는 뭔가가 있어",
        "보통 이상이야",
        "좀처럼 활약이 어려워보인다.",
        "측정할 수 없을 정도로 높아! 최고야",
        "훌륭해 놀라워.",
        "꽤 강하다",
        "그럭저럭 이라고 말할 수 있군",
      ],
      yellow: [
        "톱 레벨이야!",
        "아주 강해!",
        "보통이야",
        "그저그러네",
        "최고의 부류야!",
        "훌륭해! 정말이야!",
        "꽤 강한데! 내가 보증하지",
        "그럭저럭이야"
      ],

      bestIv:"최고의 개체값",
      overAll: "전체 평가",
      evolveSub: '개체치를 선택하면 진화시 CP를 볼 수 있습니다.',
      NewsFeed: "메세지",
      openChatting: "오픈 채팅",
      hideInRank: "랭킹에서 숨기기",
      removeAd: "광고 제거",
      removeAdSub: "광고 제거 버전은 광고만 제거되며, 추가적인 기능이나 보장은 제공하지 않습니다.",
      rateToPodoc: "포닥에 평점주기",

      updateLocationSub: "내 위치를 업데이트 합니다.",
      updateLocationTitle: "업데이트 확인",
      requestLocation: "위치정보를 요청합니다.",
      requestLocationDone: "위치정보가 갱신되었습니다.",
      requestLocationFail: "위치정보 조회에 실패했습니다.",
      noLocation: "위치를 업데이트 해주세요.",
      checkEmailPasword: '유저네임과 패스워드가 맞지 않습니다.',
      loginDone: '로그인 되었습니다.',
      noPokemon: '포켓몬이 없습니다.',
      ptcLoginStart: '포켓몬 트레이너 클럽으로 로그인합니다.',

      throwType: "판정",
      catchRateFactorEtc: "기타",
      pokeballType: "포켓볼 종류",

      // 메인
      loginWithGoogle: '구글 계정으로 로그인',
      loginWithPTC: "포켓몬 트레이너 클럽 로그인",
      username: '유저명',
      password: '패스워드',
      login: '로그인',
      myPokemon: '내 포켓몬',
      pokemonDetail: '포켓몬 상세정보',
      pokemonChart: '포켓몬 차트',
      myPage: '마이페이지',
      pokemonTips: '포켓몬 팁',
      pokemonTipDetail: '남겨진 팁',
      pokemonDicDetail: '포켓몬 도감 상세 정보',
      pokemonDic: '포켓몬 도감',
      all: '전체',

      pokemonRank: '포켓몬 순위',
      trainerRank: '트레이너 순위',
      email: '이메일',
      kakaoTalk: "카톡 아이디",

      trainerPage: '트레이너 페이지',
      cpSimulator: 'CP 시뮬레이터',
      eggSimulator: '알 시뮬레이터',
      catchRateSimulator: '포획 시뮬레이터',
      battleSimulator: '배틀 시뮬레이터',
      appName: '포닥 - Podocs',

      logout: '로그아웃',
      tips: "포켓몬 팁",
      simulator: "시뮬레이터",
      rank: "위",
      Rank: "순위",
      rare: "희귀도",
      rareWords: ['진귀함', '희귀함', '보통', '흔함', '아주 흔함'],
      rareDescription: "17년 1월 27일 Podocs DB 기준",

      evolveInfo: '진화 정보',
      orderCandy: '캔디순',
      canEvolve: '진화 가능',
      canEvolvePokemon: '진화 가능 포켓몬',
      candy: '캔디',
      needCandies: '진화에 필요',
      nowCandies: '현재',
      isEvolvable: '진화 가능 여부',
      maxCpInList: "최대 CP",
      showSkills: '스킬 보기',

      manual: "개체값 계산기",
      starDustToEvolve: '강화에 드는 스타더스트',
      powerUped: '강화했음',
      hatched: '알에서 나옴',
      individualValueNone: "개체값 계산불가",
      selectComment: "커맨트 선택",

      //포켓몬 리스트 페이지
      noResult: "검색 결과가 없습니다.",
      search: "검색",
      desc: "내림차순",
      asc: "오름차순",
      orderDate: "날짜 순",
      orderName: "포켓몬 이름 순",
      orderCp: "CP 순",

      orderIndividualValue: "개체값 순",
      orderPodex: "도감 번호 순",
      orderRare: "희귀도 순",
      orderMaxCp: "최대 CP순",
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
      requestPokemon: '포켓몬 데이터 조회 자격을 얻습니다. (여기서 멈추실 경우, 스토어에서 웹뷰를 업데이트해주세요.)',
      requestPokemon2: '포켓몬 데이터를 가져오는 중 입니다.',
      requestPokemonDone: '포켓몬 데이터를 가져왔습니다.',
      parseError: '데이터를 가져오는 중 문제가 발생했습니다. 다시 로그인해 주세요.',
      serverError: '데이터를 가져오는 중 문제가 발생했습니다. 다시 로그인해 주세요.',
      userModified: '정보를 수정했습니다.',
      writeDone: '작성완료',
      pullToRefresh: "당겨서 새로고침...",

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
      maxCpNowLevel: '레벨 최대 CP',
      maxCp: '만렙 최대 CP',
      maxCpList: '최대CP',
      cpSimulation: '강화실험',
      battleSimulation: '모의배틀',
      attack: "공격",
      defense: "방어",
      stamina: "체력",
      attackInfo: "공격 정보",
      attackPower: '공격력',
      defensePower: '방어력',
      cooldown: '쿨다운',
      dps: 'DPS',
      eps: 'EPS',
      energy: '에너지',

      level: "레벨",
      story: '이야기',
      maxLevel: '만렙',
      attackSkills: "습득 가능한 공격 기술",
      pokemonStatistics: "포켓몬 관련 통계",
      ratioInAllPokemon: "포켓몬 비율",
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
      alert: '알립니다',
      battleSimulateStart: '배틀 시작',
      eventLog: function (pokemon, skill, damage) {
        if (damage < 0)
          return $hangul["이가"](pokemon.nickname || pokemon.pokemon.name) + " " + $hangul["을를"](skill.name) + " 시전합니다.";
        return $hangul["이가"](pokemon.nickname || pokemon.pokemon.name) + " " + $hangul["을를"](skill.name) + " 사용하여 " + damage.toFixed(1) + "의 피해를 입혔습니다.";
      },
      winMessage: function (pokemon) {
        return $hangul["이가"](pokemon.nickname || pokemon.pokemon.name) + " 승리했습니다.";
      },
      youCanChangeSkillStatPokemon: '포켓몬 종류, 스탯, 스킬을 변경할 수 있습니다.',
      selectInMyPokemons: '내 포켓몬 중에 선택',
      descriptions: ["", "태어날 때부터 등에 있는 이상한 씨앗과 함께 성장하며 자란다. 이상해씨는 며칠 동안 굶어도 이상이 없는데, 그 이유는 씨앗에 영양분이 가득해 진화하기 전까지 등에 자라는 씨앗에서 영양분을 얻을 수 있기 때문이다. 몸이 자라는 만큼 씨앗도 같이 자라며, 이 씨앗은 광합성을 통해 자라기도 한다. 일정 수준이 지나 씨앗이 꽃봉오리가 되면 이상해풀로 진화한다.", "이상해씨였을 때 달려 있던 씨앗이 자라 꽃봉오리가 되었다. 그래서인지 더 이상 두 발로 서는 것이 불가능해진 듯하다. 광합성을 하면 꽃봉오리가 점점 커진다. 꽃봉오리를 받치기 위해 하반신이 강해졌다. 양달에서 시간을 오래 보내고, 꽃봉오리에서 좋은 향기가 나기 시작하면 이상해꽃으로 진화할 징조이다.", "이상해풀이 진화한 포켓몬. 등에 달린 꽃은 이상해풀이었을 때의 꽃봉오리가 자란 것이다. 꽃에서는 황홀한 향기가 나며 적의 전투심을 잠재우며 평온하게 만들어 주고 사람의 마음을 치유하며 비가 내린 다음날은 이 향기가 강해진다. 이 냄새에 유혹된 포켓몬들이 주위에 이끌려 모여든다. 양달을 좋아하며 유혹된 듯 양달로 이동한다. 꽃잎을 펼쳐 태양을 쬐면 에너지로 변환할 수 있어 몸에 힘이 흘러넘치고 햇빛이 더 많은 여름에는 몸이 더더욱 강해진다.", "뜨거운 것을 좋아하는 성격이다. 꼬리에 있는 불꽃은 생명을 나타내는 표시로 건강하면 강한 불꽃이 나오고 건강하지 않으면 약한 불꽃이 나온다. 꼬리의 불꽃은 기분을 나타내기도 하는데, 즐거우면 불꽃이 살랑살랑 흔들리고 화나면 맹렬하게 불타오른다. 꼬리에 물이 적게 닿으면 아무 일 없이 불꽃이 타오르나 비에 꼬리가 젖으면 불꽃 대신 연기만 난다. 타오르는 소리는 조용한 곳에 데려가면 들을 수 있다. 리자드로 진화한다.", "파이리에서 진화했다. 싸우는 것을 좋아하는 성격으로 언제나 격투상대를 찾아다닌다. 흥분하면 작열의 불꽃으로 주위를 불태운다. 강적과 싸움을 계속하며 열정적으로 싸울 땐 때때로 꼬리에서 파란 불꽃이 나오는 일도 있다고 한다. 이기지 않으면 가만히 있지 않고 이겨야만 잠잠해진다. 보통 꼬리를 흔들며 상대를 무너뜨려 날카로운 손톱으로 물러나게 한다. 꼬리를 흔들면 주변의 온도가 점점 올라가며 높은 온도로 상대를 괴롭히는 것도 하나의 전술. 보통 바위산에서 사는데, 이따금 쳐다보면 꼬리의 불꽃이 별처럼 보인다고 한다. 리자몽으로 진화한다.", "전국도감번호로 6번으로 파이리의 최종진화형이다. 거대한 날개와 용과 같은 머리를 가지고 있다. 머리 부분에 2개의 모퉁이가 있고 손가락은 3개이며 긴 꼬리를 질질 끌고 다닌다. 꼬리의 끝에는 적색의 겉불꽃과 황색의 속불꽃을 가진 불이 항상 켜져 있어서 이것이 꺼지면 리자몽은 죽게 된다고 한다. 리자몽이 불꽃을 토할 때에는 꼬리의 불이 격렬하게 타오른다. 날개는 박쥐와 같은 형상을 하고 있어 지상 1400m까지 나는 것도 가능하다. 또한 날개 윗쪽 부분에도 머리부분처럼 롱스톤과 같이 모퉁이가 되어 있는데 날개를 위력있게 펼칠때의 용도로 이용된다. 강한 기술은 꼬리의 힘에 관계있다. 강한 리자몽의 꼬리의 불꽃은 물에도 잘 견디며 단정하다고 한다. 자신보다 약한 포켓몬에는 공격해 오지 않으며 자기보다 강한 상대를 찾아 싸우고 항상 자신보다 강한 상대에게 흥미있는 성격이다. 뿔카노와 울음소리가 비슷하다. 드래곤과 외모가 똑같지만, 드래곤타입은 아니다. 하지만 습득 가능한 드래곤 기술이 많은데다, 실제로 드래곤 교배 그룹의 대표적인 일원이기도 하다.", "꼬마 거북이 포켓몬. 딱딱한 등껍질은 여러모로 쓸모가 많다. 일단 몸을 지키는 것도 있지만 반격을 할 때 더 효과가 좋다고 한다. 그리고 위험해지면 등껍질 안에서 물을 내뿜을 수도 있다. 그리고 등껍질의 홈을 이용해 물의 저항을 줄여 빠르게 헤엄칠 수도 있다고 한다. 태어난 직후에는 연하고 약했던 등껍질도 자라서 단단하고 탄력있는 등껍질로 변한다. 어니부기로 진화한다.", "애완동물로 인기가 높다. 털로 감싸진 꼬리는 장수의 상징으로 노인들에게 인기가 많은데, 어니부기의 수명은 일만년이라고 전해진다. 꼬리는 장수한 정도에 따라 깊은 색상으로 변하고, 등껍질에 이끼가 끼어 있는 것은 특히 장수한 개체라고 한다. 빠르게 움직일 때 귀를 움직여 균형을 맞추고, 맞을 때는 등껍질에 틀어박혀 피한다. 이때 약간정도 꼬리가 나와버린다고 한다.", "거북왕 몸이 무거워져 덮치면 상대를 기절시킨다. 등껍질의 로켓포에서 내뿜는 제트수류는 두툼한 철판도 뚫고나간다. 이 물의 탄환은 정확해서 50미터 떨어진 빈 깡통에도 명중시킨다. 분사한 물의 기세에 지지 않게 체중을 무겁게 하고 있다.", "푸른 피부로 감싸져 있다. 탈피를 반복하면서 자라게 되며 어느 정도까지 성장하면 실을 늘어뜨려 단데기로 진화한다. 발은 짧지만 흡판처럼 되어있어서 비탈이나 벽에서도 잘 움직일 수 있지만 나무를 타기에는 좋지 않다. 하지만 나뭇잎이 주식이기 때문에 필사적으로 나무에 오른다. 몸보다 큰 나뭇잎을 먹어치울 정도로 식욕이 좋으며, 피부와 같은 색의 나뭇잎에 숨어 위장하기도 한다. 머리 끝에 있는 더듬이에서 강렬한 냄새를 내뿜어 몸을 지킨다.", "철판처럼 단단한 껍질에 둘러싸여 있으나 안은 부드러워서 강한 공격에는 견디지 못한다. 심한 충격을 받으면 진화를 준비하고 있는 부드러운 몸이 그대로 노출되어 위험하기 때문에 가능한 움직이지 않으려고 한다. 레벨 10에 버터플로 진화한다.", "날개에는 물을 튕겨내는 인분으로 보호받고 있기 때문에 비가 내려도 하늘을 날 수 있다. 이 인분은 맹독 성분도 포함하고 있기 때문에 빠르게 날개를 움직이면 바람에 인분을 실려보내는 것도 가능하다. 맛있는 꿀을 감별하는 능력이 뛰어나 보금자리에서 10Km 떨어진 곳으로도 찾아오며, 약간의 꽃가루로도 해당 꽃이 핀 장소를 찾아내는 능력도 보유하고 있다. 모은 꿀은 발에 있는 솜털에 묻혀서 둥지로 가져간다.", "뿔충이의 몸 크기는 30cm 정도밖에 안되지만 머리와 꼬리에는 독이 들어있는 강력한 침이 있기 때문에 무작정 다가가는 것은 위험하다. 평소에는 잎사귀 밑에서 숨어 지낸다. 또 뿔충이는 딸기나무를 좋아해서 어쩔땐 딸기나무의 형체가 없어질 정도로 먹는다고 한다.", "딱충이는 최종진화를 하기 위하여 움직임이 별로 없다. 또한 진화를 하기 위하여 주변에 있는 풀들을 먹는다. 딱충이의 몸속에 있는 조직은 자신을 보호하기 위해 계속 재구성되고 있다. 중요한 점은 딱충이가 독침을 날리기 때문에 움직임이 없다고 해서 방심하면 안 된다는 것이다.", "영역 의식이 강하기 때문에 독침붕의 보금자리에 가까이 가는 것은 옳지 않은 행동이다. 화가나면 맹렬한 스피드로 날아와서 양 쪽 팔과 엉덩이에 있는 독바늘로 공격해온다. 집단으로 공격하기 때문에 주의가 필요하다.", "싸움을 싫어하는 온순한 성격이기 때문에 평소에는 적이 오면 날개를 퍼덕거려서 모래를 뿌려 쫓아내지만 어설프게 건드리면 강렬한 반격을 한다. 주로 풀숲에서 작은 벌레를 잡아 먹으며 살며 매우 뛰어난 방향감각 덕분에 아무리 멀리 떨어진 장소라고해도 헤매임 없이 자신의 둥지로 돌아오는 것이 가능하다.", "넓은 세력권을 날면서 정찰한다. 세력권에 들어온 상대는 날카로운 발톱으로 공격해 쫓아낸다. 주 먹이인 아라리를 들고도 100 km 떨어진 둥지로 옮길 수 있다고 한다. 또한 시력도 매우 좋기 때문에 높은 장소에서도 먹이의 움직임을 볼 수가 있다.", "피죤투는 무려 고도 1200미터를 마하2의 스피드로 날아 다닐수 있으며, 항속거리도 대단해서 산에서 사는 피죤투가 바다까지 영역을 차지하는 경우도 있다.", "꼬렛의 특징인 크고 날카로운 이빨은 언제나 자라기 때문에 딱딱한 물건을 갉아먹는다. 또 잡식성인 꼬렛은 먹이나 살수있는 환경이라면 언제나 번식을 한다. 어쩌다가 꼬렛을 발견하면 40마리가 있을수도 있다. 그만큼 번식력이 좋다는 것이다", "앞니는 계속 자라나기 때문에 단단한 것을 긁어서 이빨을 갈아내는 습성을 가지고 있다. 콘크리트로 만든 빌딩도 갉아 무너뜨리는 것이 가능하기 때문에 가끔 집의 벽을 갉아낸 경우도 있다고 한다. 뒷발가락에는 작은 물갈퀴가 있어 강을 헤엄치는 것도 가능하다. 수염으로 몸의 균형을 유지하기 때문에 흐트러지면 움직임이 느려진다고 한다.", "자신의 영역을 지키기 위해 이곳저곳 돌아다니나 높이 나는 것은 서툴고, 날개가 작아 쉴새없이 날개를 치며 날아오른다. 이 날개는 풀숲을 쳐서 먹이인 벌레를 튀어나오게 할 때도 사용한다. 때때로 부리로 풀밭에 있는 먹이를 찾아내기도 한다. 목소리가 크고 날카로워 1Km 밖에까지 들린다. 깨비참 무리 중 누군가가 위험을 발견하면 여기저기서 산발적으로 울음소리가 들린다. 깨비드릴조로 진화한다.", "큰 날개로 온종일 날아다닐 수 있는 체력을 갖고 있다. 날카롭고 긴 부리로 땅 위나 물 안에 있는 먹이를 집어먹으며, 싸움 도구로 사용하기도 한다. 공격할 때는 단숨에 높은 하늘까지 날아오른 다음 급강하로 순식간에 공격해온다.", "주로 풀밭에 많이 서식한다. 혀를 낼름거려서 주위의 움직임과 먹잇감의 냄새를 알아낼 수 있다. 새끼 아보는 아직 이빨에 독이 없어 물려도 약간 아픈 정도로 끝난다. 소리와 기척을 전혀 내지 않고 움직이는 것이 특기이고 주로 구구나 깨비참의 알을 먹는다. 사냥은 방심하고 있는 먹이를 갑자기 덮치는 형식.", "아보크는 상당히 집요한 성격을 가지고 있어서 한 번 노린 상대는 지구끝까지 라도 쫓아간다고 한다. 그리고 독침공격과 꼬리를 이용해서 상대를 포박해서 조이게 하는 공격은 대단해서 화나게 만들면 무섭게 돌변 할 수도 있다고 한다. 아보크의 배에 있는 문양은 상대를 위협할 수 있는 얼굴 형태를 가지고 있는데 사는 장소가 다르면 문양도 달라 진다고 한다.", "붉은 뺨은 전기 주머니이다. 이 전기 주머니에 전기를 모아 자신을 위협하는 천적들을 물리친다. 밤에 잠을 자면 전기가 모이며, 잠이 덜 깬 채로 방전되는 경우도 있다. 숲 속에서 무리를 짓고 사는데, 몇 마리가 모여 있거나 주변의 기척을 느끼기 위해 꼬리를 세우면 맹렬한 전기가 모여 번개가 떨어질 때가 있다. 약해진 동료 피카츄에게 전기를 흘려보내 힘을 나눠주거나 열매를 전기로 구워먹는 등 지혜를 갖추고 있다. 천둥의돌을 사용하면 라이츄로 진화한다.", "작은 체구이지만 힘을 발휘하면 인도코끼리도 단번에 쓰러트리는 굉장한 전기의 소유자. 전기는 10만볼트까지 올라가기 때문에 자신보다 몇 배나 큰 상대도 일격에 기절시킬 수 있다. 자기 자신은 긴 꼬리가 접지선이 되어 몸을 지켜주기 때문에 고전압에도 견딜 수 있다. 전기 주머니가 텅 비면 꼬리를 똑바로 세워서 공기 중의 전기를 모으며, 전기가 충분히 채워지면 두 귀가 곧게 선다. 전기가 지나치게 축전되면 근육이 자극을 받아 공격적인 성격으로 변하고 어두운 곳에서 밝게 빛나기 때문에 간혹 꼬리를 땅에 늘어뜨려 스스로 방전해서 기분을 진정시키곤 한다. 평상시에도 약한 전기를 몸에서 발산하기 때문에 어둠 속에서는 희미하게 빛난다.", "지면에 구멍을 파서 살고 있다. 위험하다 싶으면 몸을 둥글게 말아서 피한다. 만일의 경우에는 모래를 이용하기 위해 주로 비가 거의 내리지 않는 건조한 곳에서 살고 있다. 그런 환경에 익숙해져 피부는 바짝 말라있고 습기를 싫어한다고 한다. 밤에 기온이 떨어지면 몸에 물방울이 생긴다고 한다.", "고지는 주로 건조한 땅에 살고 있는데 땅을 파는 것이 특기이다. 그리고 몸에 새겨진 틈새들이 보이는데 그것은 체온조절과 피부호흡, 흡수한 물을 몸 밖으로 배출하는 효과를 가지고 있다. 또한 웅크리기가 특기인 고지는 몸을 웅크려 외적으로부터 몸을 지킨다. 반대로 공격을 할 때에는 자신의 날카로운 발톱을 이용하는데 땅을 팔 때도 사용한다. 땅을 팔 때의 속도는 눈 깜짝할 사이고 단단한 바위가 있더라도 무참히 파괴시킨다. 배틀을 할 때에는 땅을 파서 생기는 흙먼지로 모습을 감춘다고 한다.", "몸집이 작고 성격이 온순해 싸움을 좋아하지 않지만 화가 나면 뿔 끝에서 나오는 맹독은 소량으로도 생명을 앗아간다.", "평소떄는 가시가 보이지 않지만 긴장하면 온몸의 가시가 곤두선다. 온화한 성격으로 동료애가 강해 동료와 떨어지는 것을 불안해 한다.", "단단한 비늘로 덮인 몸은 대부분의 공격을 견뎌낼 수 있다. 새끼를 목숨걸고 지킨다.", "큰 귀로 매우 작은 소리도 들을 수 있다. 몸집이 작지만 성격이 사납고 뿔에는 맹독이 가득해 위험을 감지하면 뿔을 앞세워 달려든다.", "테스토스테론에 중독되어 정신이 반쯤 나간 포켓몬이다. 발달한 귀로 주변을 살피다 무언가 발견되면 미친듯이 달려가 맹독이 나오는 뿔을 찌른다. 다이아몬드도 뚫을 수 있는 크고 단단한 뿔의 크기는 수컷의 힘에 비례한다.", "니드킹이 되면 전에 없었던 땅타입이 새로 생겨난다. 이로 인하여 피부가 단단해졌고 꼬리는 적을 휘어감아 뼈를 으깰정도의 파워를 가지게 된다. 또 니드킹의 뿔은 다이아몬드 정도의 강도를 가지고 있고 독이 들어있다.", "깜찍한 모습과 몸짓으로 인기가 많지만 쉽게 발견되지 않는다. 보름달이 뜨는 밤에는 단체로 모여 춤을 추는 습성이 있으며 이 모습을 본 사람은 행복해진다고 한다.", "조심성이 많은 성격으로 예민한 귀로 멀리서 나는 소리도 감지해 숨어버려 좀처럼 만나기 힘든 포켓몬이다. 날개를 사용하여 날아가듯 뛰어다니며 물 위를 걸을 수 있다고 한다.", "새하얀 꼬리 한 개를 가지고 태어나 성장하면서 끝이 갈라지고 색이 생겨서 6개로 늘어난다. 털결이 부드럽고 곱슬거린다. 자신보다 강한 상대에게 공격을 받으면 다친 척을 해 속이고 도망친다. 체내에서 불꽃이 타오르며 낮에 기온이 오르면 체온도 올라가 입에서 불꽃을 토해낸다. 이걸 조종해 불구슬처럼 사용하며, 진화 직전이 되면 6개의 꼬리 모두 불타는 것처럼 열을 발산하게 된다. 나인테일로 진화한다.", "9개의 긴 꼬리를 가지고 있다. 오래 산 개체일수록 털이 금빛으로 빛난다. 머리가 좋고 집념이 강한 성격. 천 년을 산다고도 하며, 장난으로 꼬리를 잡으면 천 년 동안 화를 당한다거나, 꼬리 각각에 신비한 힘이 깃들어 있다거나, 9명의 성자(聖者)가 환생하여 이 포켓몬이 되었다는 등 구전이 많은 포켓몬이다.", "둥글고 큰 눈동자로 상대의 주의를 끈 후 노래를 불러 잠들게 한다. 노래할때의 음파는 숙면중의 뇌파와 같은 형태를 하고 있어 푸린의 노랫소리에 잠들지 않는 것은 없다고 한다. 푸린은 노래할때 한번도 숨을 쉬지 않아 노래를 길게 한 후에 힘들어하는 모습을 종종 볼 수 있다.", "생김새와 같이 부드러운 마음을 가진 포켓몬. 커다란 눈은 항상 얇은 눈물막으로 덮여있어 먼지가 쌓이는 일이 없다. 촘촘하고 보들보들한 털로 고급품으로 취급받는 가죽때문에 남획되어 수가 많이 줄어 쉽게 목격되지 않는다.", "눈이 없는듯 보이지만 실제로 눈이 없다. 입에서 나오는 초음파를 이용해 주변의 상황을 파악한다. 열에 약해 태양빛에도 화상을 입기 때문에 낮에는 어둠속에 머무른다.", "단단한 피부도 뚫을 수 있는 예리한 4개의 이빨을 꽂아넣고 한순간에 300cc가량의 피를 빨아들인다. 한번 피를 빨기 시작하면 배가 터지기 직전까지 멈추지 않기 떄문에 몸이 무거워져 비틀거리거나 심지어는 날지 못하게 되기도 한다.", "아르키메데스라는 별명을 가진 식물로 밤이 되면 2개의 뿌리로 씨를 뿌리기 위해 300m나 걷는다고 한다. 낮에는 땅속에 몸을 묻고 잘 움직이지 않는데 이떄 잡초로 오해해 뽑으려고 하면 섬뜩한 울음소리를 내는데 무심코 밟으면 심쿵을 경험할 수 있다.", "입에서 흘러나오는 꿀 냄새를 맡으면 터무니없는 지독함에 기억이 없어진다는 듯 하다. 오히려 이 냄새를 좋아하는 마니아도 있다.", "세계 제일로 큰 꽃잎으로 먹잇감을 유인하여 독 꽃가루를 끼얹는다. 움직이지 않게 된 먹잇감을 붙잡아 먹는다.", "구멍을 파고 나무뿌리에서 영양분을 빨지만 대부분은 등의 버섯에게 뺏긴다. 파라스의 등에서 자라는 버섯은 동충하초라고 불리고 있다. 장수(長寿)의 약이 되는 귀중한 버섯이다.", "진화를 하면서 버섯이 곤충을 차지한 것으로 버섯이 본체이다. 아래 곤충부분은 진화와 함께 빈 껍데기나 다름없게 된다.", "몸을 지키기 위해 가늘고 딱딱한 털이 전신을 둘러싸게 됐다고 전해진다. 작은 먹잇감도 놓치지 않는 눈을 가졌다. 낮에는 숨어서 잠을 자며 보내고 밤에 활동한다.", "콘팡이 진화한 포켓몬으로 독을 가진 거대한 나방이다. 날개짓을 할때마다 독가루가 떨어진다.", "대부분의 농가는 디그다를 키우고 있다. 디그다가 구멍을 판 토지는 알맞게 갈아져서 맛있는 채소를 만들 수 있기 때문이다. 피부가 매우 얇아 햇빛에 약해 보통 땅 속에 살며 주식은 나무뿌리이다.", "팀워크가 뛰어난 디그다 세 쌍둥이. 지하 100km까지 파서 지진을 일으키기도 한다. 한때 충분한 힘을 비축한 디그다를 세조각으로 자르면 세 조각이 모두 살아나 닥트리오로 진화한다는 거짓 소문이 나 수많은 디그다들이 세조각이 나 죽음을 맞았다.", "낮에는 잠을 자고 밤이 되면 눈을 빛내며 주변을 돌아다니는 야행성 포켓몬. 날카로운 손톱을 세우고 살금살금 다녀 발자국을 남기지 않고 걷는다. 둥글고 빛나는 것을 무척 좋아해 시간 모르고 놀다가 지쳐 잠들기도 하며, 밖에 나가면 떨어져 있는 동전을 주워모아 돌아오곤 한다. 좋아하는 것을 발견하면 이마의 금화가 빛난다. 페르시온으로 진화한다.", "이마의 보석이 반짝이며 털결이 아름답고 걷는 모습도 유연해 귀족적인 이미지가 강하다. 애완용으로 기르는 사람이 많으나 자존심이 강하고 변덕스러우며, 먹잇감을 찢으며 갖고 노는 등 성질이 거칠어 기르기가 어렵다. 꼬리를 똑바로 세우면 덮치면서 물겠다는 신호이다. 억센 6개의 수염으로 공기의 흐름을 읽어 주변의 상황을 알아채며, 이 수염을 잡으면 얌전해진다. 부드러운 근육 덕분에 발소리를 내지 않고 걸을 수 있으며 몸놀림도 민첩해 순식간에 먹잇감을 포획할 수 있다. 마니아들 사이에서는 이마의 보석 크기가 화제가 되곤 한다.", "항상 두통에 시달린다. 이 두통이 심해지면 신비한 힘을 사용한다. 그런데 힘을 사용하고 나면 기억을 잊는다고 한다.", "헤엄치는 스피드는 포켓몬 중에서 제일. 폭풍으로 사나운 바다에서도 끄덕없다. 난파선에서 사람을 구하기도 한다. 전력으로 헤엄치거나 이상한 힘을 사용할때 이마에 박힌 보석에서 빛이 난다. 강가에서 흔히 볼 수 있는 포켓몬이었으나 이마의 보석에 특수한 힘이 깃들어 있다는 소문이 나 보석을 노린 사냥꾼들에게 학살 당해 쉽게 볼 수 없게 되었다.", "날렵하여 나무 위에서 생활한다. 사소한 일로 기분이 나빠져서 주위에 있는 것에 덤벼든다. 무리 중 1마리가 화내기 시작하면 모두 아무 의미도 없이 난동부린다.", "왜인지 맹렬하게 화내고 아무리 도망쳐도 끝까지 쫒아오는 성격이다. 실제로 로O씨는 지구의 반바퀴를 도망쳤지만 결국 잡혀서 뚜까맞았다고 한다.", "충실한 성격의 포켓몬이다. 트레이너의 명령이 있기 전까진 한 발짝도 움직이지 않는다. 사람과 쉽게 친해지고 성실한 성격. 적은 짖고 물어서 쫒아내려 한다. 영역권 의식이 무척 강하다. 방심한 채 다가가면 짖고 물어서 혼쭐을 낸다.", "훌륭한 갈기에 반해버린 사람들이 있을 정도로 위풍당당한 중국 전설의 포켓몬이다. 하루 만에 10000km의 거리를 달리는 모습은 많은 사람을 매료시켜왔다.", "소용돌이 모양인 내장이 비칠 정도로 얇은 피부이지만 이빨을 튕겨내는 탄력을 지니고 있다. 생기기 시작한 다리로 걸어다니기에는 힘들기에 항상 물속을 헤엄치고 돌아다닌다.", "육지에서도 수중에서도 살 수 있다. 지상에서는 항상 땀이 나서 피부를 미끈미끈하게 만든다. 배의 소용돌이를 집중해서 보면 점점 졸리게 된다고 한다.", "근육을 전부 사용하는 다이나믹한 헤엄치기가 특기이다. 강인하게 발달된 근육은 아무리 운동해도 지치는 일이 없다. 태평양도 가볍게 횡단할 수 있을 정도다.", "민물 뿐 아니라 바다에서도 생활이 가능해 물에 돌을 던질때는 무심코 던진 돌에 맞은 개구리에게 맞아 죽지 않도록 조심해야 한다.", "위험한 기척을 느끼면 자고 있어도 텔레포트로 도망치도록 스스로 암시를 걸고 하루종일 잔다. 하루 최소 18시간 이상 자지 못하면 수면부족으로 초능력을 쓸 수 없다고 한다.", "초능력 연구를 도와주던 에스퍼 소년이 어느 날 갑자기 윤겔라로 변했다는 소문이 돌고 있다.", "태어나서부터 체험한 모든 것을 기억하고 있을 정도의 기억력을 가지고 있다. IQ가 5000이 넘는다. 트레이너가 멍청한 머리로 같잖은 지시를 내릴때마다 짜증이 나 본 실력을 발휘하지 못한다고 한다.", "데구리를 수없이 들었다 놨다하며전신의 근육을 단련한다.모든 격투기를 사용한다.", "한 손으로 덤프트럭을 들어올린다. 파워를 살려서 사람 대신 힘쓰는 일을 돕는 포켓몬이다. 허리에 찬 파워 세이브 벨트는 근육몬의 남아도는 파워를 제어한다. 위험해서 아무도 벗긴 적이 없다.", "발달한 4개의 팔은 초당 500발의 펀치를 날릴 수 있다. 한 팔로 산을 움직일 수 있다고 한다.", "사람 얼굴처럼 생긴 꽃봉오리로 인해 전설의 맨드레이크의 일종이 아닐까 하는 설이 있다. 작은 벌레를 잡아 먹거나 다리의 뿌리를 써서 수분을 보충한다. 입에서 철도 녹일 수 있는 액체가 나온다.", "대부분의 풀 포켓몬들은 땅 속의 양분이나 물, 빛을 영양분을 만들어 내지만 우츠동은 그것들의 능력이 부족하여 대신 벌레종류를 잡아먹어서 영양분을 섭취한다. 벌레를 잡으면 뭐든지 녹여버리는 용해액이 분비하지만 동시에 용해액을 중화하는 액체도 분비하기 때문에 자신이 녹는 일은 없다고 한다.", "꿀 같은 향기에 꾀어 입 안으로 들어가면 끝장. 용해액에 녹아버린다. 그러나 로켓단의 X이 씨는 우츠보트의 뱃속을 몇번이나 탐험하는 모습을 보여준다.", "몸 대부분이 수분으로 이루어졌다. 2개의 긴 촉수를 적에게 휘감고 촉수 끝에 달린 독침을 쏜다. 80개가 넘는 많은 촉수는 수분을 머금어서 어디까지든 늘여서 휘감을 수 있다. 흥분하면 빨간 구슬이 발광을 하며 발광을 한다.", "둥글어서 들기 쉬우므로 붙잡아 상대에게 내던지는 꼬마돌 싸움이 가능하다. 물론 꼬마돌은 꽤 무겁기 떄문에 맞으면 보통 어딘가 부러지거나 죽거나 하지만 진정한 남자의 놀이로 손색이 없다.", "산기슭에서 산꼭대기까지 오르는 동안 좋아하는 바위를 으드득 씹어먹는다. 정상에 도착하면 다시 굴려내려간다. 산에서 굴러 떨어질 때 몸의 여기저기가 떨어져나가도 신경쓰지 않는 호쾌한 성격이다.", "큰 지진이 일어나면 산에 사는 딱구리 여러 마리가 산기슭까지 데굴데굴 굴러 내려오는 일이 있다. 1년에 1번 탈피해서 커진다. 고의로 몸을 폭발시켜 그 기세를 이용하여 산에서 산으로 날아서 이동한다.", "막 태어나서는 겨우 설 수 있는 정도지만 넘어지면서 부모의 뒤를 쫒아다니는 동안 하반신이 튼튼하게 자라난다. 다리의 발굽은 다이아몬드보다 10배 단단해 어떤 것이라도 납작하게 밟아 부서버린다.", "여하튼 달리기를 매우 좋아해서 자기보다 빠른 것을 발견하면 전속력으로 뒤쫒는다. 시속은 최고 240km.", "항상 멍하게 있는다. 감칠맛이 배어나오는 꼬리에 먹잇감이 물려도 알아채지 못한다. 야돈의 꼬리는 도마뱀처럼 잘려나가도 다시 재생하며 미식가들이 매우 좋아하는 최고급 요리다. 이때문에 특정 집단에서 야돈을 닥치는대로 잡아 꼬리를 잘라 파는 일이 생기기도 했다. 그런데 더 놀라운 것은 대부분의 야돈이 꼬리가 다시 날 때 까지 꼬리가 잘린것을 몰랐다고 한다.", "야돈이 꼬리로 낚시를 하다가 셀러에게 물리면 둘이 합쳐진 채로 진화한다는 포켓몬. 이 때 셀러의 모습도 변한다. 야돈과 셀러가 떨어지지 않는 이유는 상호간에 득을 보는 공생관계이기 때문이다. 셀러가 야돈의 꼬리를 물게 되면 셀러는 진화를 하게 되고, 꼬리가 무거워진 야돈은 균형을 잡을 수 있게 되어 두 발로 설 수 있게 된다.", "선천적으로 중력을 차단하는 능력을 가졌고 전자파를 내뿜으면서 공중을 이동, 전기를 먹고 산다. 정전이 되면 누전차단기를 살펴보자. 코일이 빽빽이 들러붙어 있을지도 모른다.", "3마리의 코일이 자력으로 연결되었다. 강한 전파를 내기 때문에 반경 1km 범위에서는 기온이 2도 올라간다. 강력한 자력선으로 정밀 기계를 망가뜨리기 때문에 몬스터볼에 넣어두지 않으면 주의시키는 마을도 있다고 한다.", "파가 자라는 곳에 산다. 이상하게 수가 적어서 파오리의 수도 줄어들기 시작한 모양이다. 항상 파를 물고 다니기 떄문에 잡으면 즉시 끓여 먹을수 있다.", "식사할 때나 잘 때에도 두 머리 중 하나가 항상 주위를 경계한다. 위험이 닥치면 시속 100km로 도망친다.", "3개인 것은 머리뿐만이 아닌 것 같다. 심장과 폐도 3개라서 숨이 차지 않고 장거리를 달릴 수 있다.", "차가운 바다를 좋아한다. 지상에서는 잘 걸을 수 없지만 수중에선 자유롭게 헤엄칠 수 있다.", "온몸이 눈처럼 새하얗다. 추위에 강하고 얼음이 떠다니는 바다도 가분좋게 헤엄쳐 다닌다. 옛날에 빙산에서 자는 모습을 본 뱃사람이 인어라고 착각했다.", "달로부터 X선을 쬔 진흙이 질퍽이로 변화했다. 냄새가 고약해서 만질 수 없고 지나간 자리에는 잡초도 안 생긴다. 지나간 뒤에 남은 몸의 일부에서 다시 질퍽이가 태어나 주변은 더욱 썩은 냄새가 난다.", "진흙탕이 모인 썩은 장소를 좋아해서 모여들기 때문에 주변은 더욱 역겨운 냄새가 난다. 질뻐기가 지나간 자리에는 맹독이 배어들어 3년이 지나도 풀이 자라지 않는다.", "다이아몬드보다 딱딱한 껍질로 덮였다. 포켓몬들이 가진 무기들은 어지간하면 다이아몬드보다 딱딱한 듯 하다.", "셀러의 진화형. 한번 껍질을 닫아버리면 어떠한 괴력을 소유한 자도 여는 것은 불가능하다. 그 상태에서 몸 전체에 달린 가시를 마구 쏘아대므로 주의가 필요한 포켓몬이다. 껍질 속에 무엇이 들어있는지는 알 수 없다.", "옅은 가스 상태의 생명체. 가스에 둘러싸이면 인도코끼리도 2초만에 쓰러진다. 어지간한 포켓몬에게 인도코끼리 10초컷은 기본 소양인듯 하다.", "혀로 핥아서 목숨을 빨아간다. 몸의 떨림이 멈추지 않게 되고 이윽고 죽음에 이르게 된다고 한다.", "밤중에 사람의 그림자에 숨어들어 조금씩 체온을 빼앗는다. 팬텀의 표적이 되면 한기가 멈추지 않는다.", "평소에는 땅속에서 산다. 땅속을 시속 80km로 파면서 먹이를 찾는다. 성장할수록 몸이 단단해지고 색이 검은색에 가까워진다.", "먹어치운 꿈은 전부 기억하고 있다. 아이들의 꿈 쪽이 맛있기 때문에 좀처럼 어른들의 꿈은 먹지 않는다. 튀어나온 코를 실룩샐룩거리면 어디 사는 누군가가 어떤 꿈을 꾸고 있는지 전부 알 수 있다고 한다. 즐거운 꿈을 꾸고 있었지만 어떤 꿈인지 생각나지 않을 때는 슬리프가 그 꿈을 먹었을 것이다.", "추처럼 생긴 물건을 갖고 다니며 최면술을 건다. 어린이들에게 최면술을 걸어 어딘가로 데려가버린 사건이 있었다. 발견된 아이들은 최면술로 계속 잠을 자 꿈을 생산하고 있었다.", "보다시피 게를 모티브로 한 포켓몬. 양쪽 집게의 크기가 서로 다르며 큰 집게는 본인조차 감당하기 힘들 정도로 크고 아름다운 것이 특징이다. 큰 집게는 떨어져 나가도 다시 자라나지만 수컷에겐 집게의 크고 아름다움이 힘의 상징이기떄문에 목숨을 걸고 지키려 한다.", "한쪽만 거대해진 집게는 강철처럼 단단하고 1만 마력을 지녔으나 너무 무겁다.", "몬스터볼과 똑 닮았다. 무심코 만지면 감전되거나, 약간의 쇼크로 폭발하거나 하기 때문에 위험하다. 정체불명의 생명체.", "대량의 전기 에너지를 지니고 있어서 한가해지면 폭발을 하며 놀기 때문에 위험하다. 발전소에서 대량 발생한다. 전기를 먹어치우기 때문에 가끔씩 인근 마을에서는 대정전이 일어나 큰 소동이 벌어진다.", "뭔가의 알처럼 생겼지만 실은 식물의 씨앗에 가까운 생물이라는 사실이 밝혀졌다. 알 하나하나가 서로를 끌어당겨서 회전하고 있다. 6개가 아니면 안정되지 않는다. 껍질의 금이 늘어나면 진화가 가까워진 것.", "걸어다니는 열대 우림이라고 불린다. 열매 하나하나에 얼굴이 있고 각각 의지를 갖고 있다. 매우 드물게 머리 중 하나가 지면에 떨어지면 아라리가 되어 움직이기 시작한다고 한다. 아라리가 나시로 진화할땐 머리가 6개에서 3개로 변하고 나시의 머리 하나는 6개의 머리가 되어 아라리가 된다. 머리의 연금술사인가?", "죽은 부모의 뼈를 머리에 썼다. 슬플 때와 외로울 때에는 뒤집어쓴 해골이 흔들려 덧없고 허무한 소리가 난다. 살아있는 탕구리의 맨언굴을 본 사람은 없다고 한다.", "세계 어딘가에는 텅구리만의 무덤이 있는 것 같으며 뼈는 그곳에서 주워 온다고 한다. 뼈를 다루는 숙련도가 좋아질수록 성격이 난폭해진다.", "풍부한 균형감각의 소유자. 어떠한 자세에서도 연속으로 발차기를 하는 대단한 녀석이다. 연속으로 킥을 하는 동안 양쪽 다리는 점점 길어져서 도망치려고 하는 상대를 걷어찬다.", "세계 챔피언을 목표했던 복서의 혼이 깃들었다고 하는 홍수몬은 불굴의 정신으로 절대 지쳐 쓰러지지 않는다. 물론 뚜까맞으면 쓰러진다.", "손 대신 신장의 2배로 늘어나는 혓바닥을 사용한다. 끈적끈적한 타액이 무엇이든 달라붙게 한다. 혀는 항상 타액에 젖어 있는데 타액에는 물질을 녹이는 성분이 포함돼 있어 만지면 마비된다. 씻을때 끈적끈적한 긴 혀로 자신의 온몸을 구석구석 꺠끗이 핥는데 노약자나 임산부 어린이에게는 좋지 않은 장면이다.", "음식 쓰레기와 몸의 독소를 화학반응시켜서 맹독 가스를 만들어낸다. 기온이 높을수록 가스가 많이 생긴다. 또가스에게 가까이 가면 얇은 피부를 통해 독가스가 소용돌이치는 모습을 관찰할 수 있다. 약간의 충격으로 대폭발을 일으킨다.", "쌍둥이 몸을 교대로 팽창시켰다 수축시켰다 하면서 독가스를 혼합한다. 혼합할수록 독소가 강해지고 냄새가 고약해진다. 목숨도 위협할 수 있는 강력한 가스지만 극한까지 농도를 낮추면 최고급의 향수가 된다.", "자신이 향하고 있는 방향에 무엇이 있는가 신경쓰지 않는다. 전부 돌진해서 부술 뿐이다. 뇌가 작아서 달리던 이유를 잊어버릴 만큼 머리가 나쁘다.", "온몸을 갑옷 같은 피부로 보호하고 있다. 2000도의 마그마 속에서도 살 수 있다. 드릴이 된 뿔을 가볍게 회전하면 다이아몬드 원석도 쉽게 산산조각 낸다. 특별히 언급할 사항이 있다면 이 포켓몬이야말로 최초의 포켓몬이라는 점이다. 디자이너인 스기모리 켄과의 인터뷰, 그리고 1세대 게임 데이터 내 인덱스 번호에서 1번을 차지하고 있는 것, 또한 이것 때문에 미싱노가 ,진화,하면 이 코뿌리가 될 확률이 제일 높다는 점이 이 사실을 증명한다.", "상처입은 자를 발견하면 영양 만점의 알을 나누어 주는 다정한 포켓몬. 하루에 알을 몇개씩이나 낳는데도 개체수가 매우 적은 포켓몬이다. 알을 돌보지 않고 남에게 나눠주기 때문인듯 하다. 자식을 남에게 식용으로 준다니 극혐. 무정란인가?", "파란 덩굴이 뒤엉켜서 정체불명이다. 다가오는 것을 덩굴로 휘감는다.", "자식을 지키기 위해서라면 어떠한 상처를 입더라도 싸움을 멈추지 않는다. 새끼는 어미의 배에 있는 주머니에서 거의 나오지 않는다. 약 3년이 지나서 자립한다", "위험을 느끼면 반사적으로 입에서 새까만 먹물을 내뿜고 도망친다. 등지느러미를 능숙하게 움직여서 헤엄친다.", "등지느러미를 건드리면 마비돼버린다. 잘 때에는 떠내려가지 않도록 꼬리를 산호에 휘감는다. 수컷이 새끼를 키운다. 그 때 접근하는 것은 맹독 가시를 써서 쫒아낸다. 세포를 조사해보면 쏘드라에게는 없었던 새로운 유전자가 발견되어 화제가 되고있다. 지느러미와 뼈가 한약의 재료로써 귀하게 쓰인다.", "봄이 되면 콘치 집단이 폭포를 올라 상류로 향한다. 뿔 공격이 강렬한다.", "강바닥의 바위에 뿔로 구멍을 뚫는다. 알이 급류로 떠내려가거나 적에게 습격받지 않기 위한 현명한 아이디어. 왕콘치의 뿔은 다이아몬드도 쉽게 뚫는다.", "바닷가에 많이 나타나고 밤이 되면 한가운데가 빨갛게 깜빡거린다. 빨간 핵이 있는 한, 몸이 조각나도 바로 재생한다.", "몸의 중심에 있는 코어라고 불리는 부분이 일곱 빛깔로 빛나는 점에서 바다의 보석이라고 별명이 붙어 고가에 거래되고부터 개체수가 확 줄었다.", "남을 믿어버리도록 만드는 것을 잘 한다. 판토마임으로 만든 벽이 정말로 나타난다고 한다.", "재빠른 움직임이 특기. 상대가 패배 당했다는 사실마저 눈치채치 못할 만큼 빠르게 움직인다.", "울음소리는 마치 인간의 말처럼 들리지만 의미는 전혀 이해할 수 없다. 서양권에서는 디자인상으로(두꺼운 입술, 꺼먼 피부)의도치 않은 인종차별 의혹이 생긴 덕에 북미판에서는 보라색 스프라이트로 바뀌었고, 동양판도 피부색 설정 자체가 보라색으로 바뀌었다. 실제로 이 영향으로 애니메이션 무인편에서 루주라가 등장한 루주라 크리스마스를 기억하라, 얼음 동굴의 포켓몬을 지켜라 등의 일부 에피소드가 짤리기도 했다.", "강한 전기를 즐겨 먹으며 커다란 발전소 등에 자주 나타난다. 발전소 부근에서 모습을 감췄을 때 마을에서 큰 정전이 일어난다고 한다. 폭풍이 오면 나무 위처럼 벼락이 떨어지기 쉬운 높은 장소로 앞다투어 올라간다. 피뢰침 대용으로 쓰는 마을도 있다.", "화산의 분화구 근처에서 발견된다. 입에서 불꽃을 뿜는다. 체온은 1200도나 된다.", "자기 몸무게의 몇배나 되는 상대를 뿔로 끼워 가뿐히 들어올리는 괴력. 추운 곳에서는 몸의 움직임이 둔해진다. 기온이 뚝 떨어지는 밤에는 흙 속에서 잠잔다.", "초식동물로 보이지만 아니다. 노리는 먹이를 포착하면 꼬리로 몸을 때리면서 똑바로 돌진해온다.", "빨간 몸에 긴 수염, 왕관처럼 생긴 등지느러미와 가슴지느러미가 특징. 수염의 색은 수컷이 노랑 암컷이 흰색이다. 물이 있는 곳이라면 어디든지 살 수 있는 생명력을 지니고 있으나 물살이 세지 않은 강에서도 흘러가 버릴 만큼 힘이 거의 없다. 평상시 물이 없는 곳이나 물 근처에 있는 경우 잔다. 오래 산 잉어킹은 산도 넘을 만큼 점프력이 대단하나 적을 쓰러 트릴 만큼의 위력은 못 되며 심지어 점프할 때 피죤이 낚아채 갈 때도 있다. 보통 크기는 90cm이나 100cm가 넘는 대형 잉어킹이 발견되기도 한다.", "잉어킹이 갸라도스로 진화할 때 뇌세포 구조가 변질되어 대단히 흉포하고 야만적이고 난폭한 성격이 되어버렸다. 옛날에 분쟁이 일어난 마을을 다 태워버렸다는 기록도 있으며 어떤 싸움이든 큰 싸움이 되면 나타나서 모두 부숴버린 후 떠난다고 한다. 한 번 난동을 부리면 모든 것을 다 부숴버려야 분노가 가라앉기 때문에 태풍이 휘몰아쳐도 난동을 멈추지 않고 한 달 동안 난동을 부렸다는 기록도 있다 전해진다.", "부드러운 마음, 사람의 말을 이해하는 높은 지능, 아름다운 목소리를 가진 포켓몬. 사람이나 포켓몬을 등에 태우고 바다를 건너는 것을 아주 좋아한다. 좀처럼 싸우려 하지 않았기 때문에 남획되어 수가 줄어들었다.", "상대를 본 순간 몸이 녹는 것처럼 변화하기 시작한다. 거의 똑같은 모습으로 변신한다. 메타몽끼리 마주쳐버리면 상대와 똑같은 모습이 되려고 평소보다 격렬하게 움직인다. 발견하기 매우 힘들다.", "3종류의 포켓몬으로 진화하는 가능성을 지닌 희귀한 포켓몬이다. 진화할 때 모습과 능력이 변하기 때문에 살기 힘든 환경에서도 적응하는 포켓몬.", "아름다운 해변을 좋아한다. 세포가 물의 분자구조와 닮아서 물에 녹는 것도 가능하다. 물을 자유로이 다루는 힘을 지녔다. 이브이의 이름을 Rainer로 바꾸고 진화시키면 샤미드로 진화하는데 한번만 가능하다고 한다.", "공기 중의 마이너스 이온을 빨아들여서 약 1만 볼트의 전기를 뿜을 수 있다. 이브이의 이름을 Sparky로 바꾸고 진화시키면 쥬피썬더로 진화하는데 한번만 가능하다고 한다.", "복슬복슬한 털은 너무 올라간 체온을 공기에 방열해서 낮추는 기능을 지녔다. 체온은 최대 900도까지 오른다. 들이마신 공기의 일부는 체내의 화염주머니에 보내져서 1700도의 화염이 된다. 이브이의 이름을 Pyro로 바꾸고 진화시키면 부스터로 진화하는데 한번만 가능하다고 한다.", "최고의 과학력을 사용해 마침내 인공 포켓몬을 만드는 데 성공했다. 유일하게 우주까지 날아갈 포켓몬으로 기대되고 있지만 성공 사례는 아직 없다. 전자공간을 자유자재로 이동할 수 있는 능력을 지녔다. 호흡을 하지 않으므로 어디서든지 활약할 수 있다고 기대받는 인공 포켓몬.", "현대의 우수한 과학력으로 화석에서 부활한 포켓몬이다. 고대의 바다를 헤엄치고 있었다. 10개의 다리를 능숙하게 굽히며 바다를 헤엄친다.", "촉수를 이용해 먹이를 붙잡는다. 껍질이 너무 커진 탓에 움직임이 둔해져서 멸종했다고 생각된다.", "화석에서 부활한 포켓몬이나 가끔 살아있는 채로 발견되는 투구도 있다. 그 모습은 3억년동안 변하지 않았다.", "여위어서 헤엄치는 것이 빠르다. 먹잇감을 낫으로 자르고 체액을 남김없이 빨아먹는다.", "호박에서 뽑아낸 유전자를 재생해서 부활시킨 공룡시대의 포켓몬. 하늘의 왕이었다고 상상되고 있다.", "하루에 음식을 400kg 먹지 않으면 성이 안 찬다. 다 먹고 나면 잠들어버린다.", "전설의 새 포켓몬 중의 하나. 긴 꼬리를 뻗으며 날아가는 모습은 정말 멋지다. 눈 덮인 산에서 추워서 얼어죽게 될 상황에 나타나 구해준다고 한다. 프리져가 날면 눈이 내린다고 전해진다.", "전설의 새 포켓몬 중의 하나. 날 때에는 뭔가 빠지직 스파크가 튀는 듯한 소리가 난다. 구름 위에서 거대한 벼락을 떨어뜨리며 나타난다.", "전설의 새 포켓몬. 오렌지색의 불타는 듯한 깃털이 보는 이를 압도시킨다. 파이어가 모습을 보인 눈나라는 한 걸음 빠르게 봄이 찾아온다고 전해진다. 몸이 상처를 입으면 화산의 용암 속으로 들어가 온몸을 불태워서 상처를 치료한다고 한다.", "오랫동안 환상의 포켓몬이라 불렸다. 최근 낚시로 잡혀서 그 존재가 확인되었다.", "바다나 호수 등에 산다고 한다. 날개는 없지만 가끔 하늘을 나는 모습이 목격된다. 목격한 사람의 말에 따르면 몸에서 오라가 나와서 신비적이라고 한다. 전신이 오라에 둘러싸일 때는 주위 날씨가 완전히 바뀐다.", "망나뇽은 옛날부터 파괴의 신이라고 불렸었다. 망나뇽은 시속 280km로 비행하며 성체가 되어도 성장이 멈추지 않아 이로써 수십미터의 크기에 달하는 녀석이 존재한다는 것이 확인 되었다.", "뮤의 유전자를 재구성해서 만들어졌다.하지만 크기도 성격도 무서울정도로 다르다.", "모든 포켓몬의 유전자를 가지고 있다고 전해진다. 그렇기 때문에 모든 포켓몬의 조상이라고 여겨진다. 매우 희귀하기 때문에 뮤를 만난 트레이너는 극소수에 불과하다."]
    };

    self.texts.en = {
      red: [
        "Overall, your Pokemon simply amazes me. It can accomplish anything!",
        "Overall, your Pokemon is a strong Pokemon. You should be proud!",
        "Overall, your Pokemon is a decent Pokemon",
        "Overall, your Pokemon may not be great in battle, but I still like it!",
        "I'm blown away by its stats. WOW!",
        "It's got excellent stats! How exciting!",
        "Its stats indicate that in battle, it'll get the job done.",
        "Its stats don't point to greatness in battle."
      ],
      blue: [
        "Overall, your Pokemon is a wonder! What a breathtaking Pokemon!",
        "Overall, your Pokemon has certainly caught my attention.",
        "Overall, your Pokemon is above average.",
        "Overall, your Pokemon is not likely to make much headway in battle",
        "Its stats exceed my calculations. It's incredible!",
        "I am certainly impressed by its stats, I must say.",
        "Its stats are noticeably trending to the positive.",
        "Its stats are not out of the norm, in my estimation.",
      ],
      yellow: [
        "Overall, your Pokemon looks like it can really battle with the best of them!",
        "Overall, your Pokemon is really strong!",
        "Overall, your Pokemon is pretty decent!",
        "Overall, your Pokemon has room for improvement as far as battling goes.",
        "Its stats are the best I've ever seen! No doubt about it!",
        "Its stats are really strong! Impressive.",
        "It's definitely got some good stats. Definitely!",
        "Its stats are all right, but kinda basic, as far as I can see."
      ],

      bestIv:"Best IV",
      // 메인
      overAll: "Over All",
      loginWithGoogle: 'Google Account Login',
      loginWithPTC: 'Pokémon Trainer Club Login',
      login: 'Login',
      username: 'User Name',
      password: 'Password',
      checkEmailPasword: 'Wrong Username Or Password',
      loginDone: 'Login Success',
      noPokemon: 'There is no Pokemon',
      ptcLoginStart: 'Login...',

      myPokemon: 'My Pokémon',
      pokemonDetail: 'Pokémon Details',
      pokemonChart: 'Pokémon Charts',
      myPage: 'My Page',
      pokemonTips: 'Pokémon Tips',
      pokemonTipDetail: 'Tips',
      pokemonDicDetail: 'Pokédex Details',
      pokemonDic: 'Pokédex',
      noLocation: 'Please update Location',

      powerUped: "Power Up",
      pokemonRank: 'Pokémon Ranking',
      trainerRank: 'Trainer Ranking',
      email: 'Email',
      kakaoTalk: "Kakaotalk ID",

      trainerPage: 'Trainer\'s Page',
      cpSimulator: 'CP Simulator',
      eggSimulator: 'Egg Simulator',
      catchRateSimulator: 'Catch Rate Calculator',
      battleSimulator: 'Battle Simulator',
      appName: 'Pokédocs',
      logout: 'Logout',
      tips: "Pokemon Tips",
      simulator: "Simulator",
      rank: "",
      noResult: "No Result",
      throwType: "Throw Judge",
      catchRateFactorEtc: "ETC Factors",
      pokeballType: "Pokeball Type",

      rareDescription: "Jan 27 2017, Source from Podocs DB",
      Rank: "Ranking",
      rare: "Rarity",
      rareWords: ['Rare', 'Uncommon', 'Common', 'Very Common', 'Everywhere'],


      evolveInfo: 'Evolve Information',
      orderCandy: 'Order by Candies',
      canEvolve: 'Evolve available',
      canEvolvePokemon: 'Evolve available Pokemon',
      candy: 'Candy',
      needCandies: 'To Evolve',
      nowCandies: 'In Inventory',
      isEvolvable: 'Is Evolve able',
      maxCpInList: "Max CP",
      showSkills: 'Show Skills',
      updateLocationSub: "Update Location",
      updateLocationTitle: "Update User Location",

      //포켓몬 리스트 페이지
      search: "Search",
      desc: "Descending",
      asc: "Ascending",
      orderDate: "Date",
      orderCp: "CP",
      orderName: "Pokémon Name",
      orderIndividualValue: "IV",
      orderPodex: "Pokédex Number",
      orderRare: "Rarity",
      orderMaxCp: "Max CP",
      orderPokemonPower: "Bast Stats",
      align: "Sort by",
      loadingPokemon: "Loading...",
      individualValue: "IV",
      pokemonPower: "Base Stats",
      pokemonPowerRank: "Base Stats Ranking",
      wonderPokemonsRank: 'Select a Pokemon',
      cpPokemon: "Select a Pokemon",
      close: "Close",
      pokemonHatched: function (name) {
        return "A " + (name) + " hatched from the egg!";
      },
      range: "Range",
      rangeTipSub: "", //나로부터 범위에 있는 팁을 읽습니다.
      rangeChange: "Modify Range",
      tipAboutPokemon: "Tips About Pokemon",
      findTipMessage: function (name) {
        return "find " + name;
      },
      writeTip: "Write a Tip",
      writeTipDone: "Tip written",
      cancel: "Cancel",
      deleteMessage: "Delete a Tip",
      deleteMessageSub: "",
      openChatting: 'Open Chatting',
      hatched: "Hatched",
      starDustToEvolve: "Stardust To Evolve",
      deleteMessageByName: function (name) {
        return "Are you sure want to Delete " + name;
      },
      messageWroteByName: function (name) {
        return name + " done";
      },
      messageModByName: function (name) {
        return name + " is modified.";
      },
      deleteDoneMessageByName: function (name) {
        return name + ' is deleted.';
      },
      deleteConfirm: "Delete Confirm",
      writeReReply: "Write Reply",
      reply: "Reply",
      strongAttack: " Inflicts 1.25X damage",
      weakAttack: " Inflicts 0.8X damage",
      typeAttack: " Type Attack",
      ok: "OK",
      strongDefense: " Receives 0.8x damage from attacks of this type.",
      weakDefense: " Receives 1.25x damage from attacks of this type.",
      typeEffective: "Type Effectiveness",
      anonymousPlayer: "Anonymous Trainer",
      nameSuffix: "",
      requestPokemon: 'Authentification...',
      requestPokemon2: 'Request Pokemon Data...',
      requestPokemonDone: 'Pokemon data loaded',
      parseError: 'Error occur(700)',
      serverError: 'Error occur(500)',
      userModified: 'Modifed',
      writeDone: 'Done',
      thereIsNoTip: 'There are No tips.',
      fromDistance: 'from distance.',
      message: 'Message',
      name: 'Name',
      userModifyBtn: 'User Modify',
      chartPokemonType: 'Pokemons By Type',
      chartPokemonValue: 'Pokemons By IV and Base Stat',
      catchAt: ' caught',
      type: 'Type',
      height: 'Height',
      weight: 'Weight',
      ownerInfo: 'Owner',
      detailInfo: 'Details',
      maxCpNowLevel: 'Max CP (Trainer level)',
      maxCp: 'Max CP(Trainer 40Lv)',
      maxCpList: 'Max CP',
      cpSimulation: 'Power Up Test',
      battleSimulation: 'Battle Test',
      attack: "Attack",
      defense: "Defense",
      stamina: "Stamina",
      attackInfo: "Moves",
      attackPower: 'Damage',
      defensePower: 'Defense',
      cooldown: 'Cooldown',
      dps: 'DPS',
      eps: 'EPS',
      energy: 'Energy',
      all: 'Total',
      manual: 'IV Calculator',
      story: 'Story',
      maxLevel: 'Max Level',
      attackSkills: "Available Moves",
      pokemonStatistics: "Pokemon Statistics",
      ratioInAllPokemon: "Ratio of",
      now1stPlaceCp: "Current Top CP",
      averageCP: "Average CP",
      pokemonRankIsOrderByCp: "Ranked By CP",
      trainerOrderBy6Cp: "Ranked byHighest 6 Pokemon Cumulative CP",
      onesPokemon: "'s Pokemon",
      trainerLevel: 'Trainer Level',
      reset: 'Retry',
      stronger: "Power UP",
      fromEggPokemons: 'Hatched Pokemon',
      twoKmAnd: '2km Pokemon And +',
      fiveKmAnd: '5km Pokemon And +',
      egg: 'Egg',
      time: "Time",
      battleSimulate: 'Battle Simultation',
      start: 'Start',
      sec: 's',
      pokemonAdjust: 'Select Pokemon',
      beforeStart: 'Ready',
      done: 'Done',
      keep: " Keep Using",
      modifylvAndStat: "Stats Modify",
      selectSkill: 'Skills Modify',
      alert: 'Alert',
      battleSimulateStart: 'Battle Start',
      eventLog: function (pokemon, skill, damage) {
        if (damage < 0)
          return (pokemon.nickname || pokemon.pokemon.name) + " perform " + skill.name;
        return (pokemon.nickname || pokemon.pokemon.name) + " performed " + (skill.name) + ", deals " + damage.toFixed(1);
      },
      winMessage: function (pokemon) {
        return (pokemon.nickname || pokemon.pokemon.name) + " Wins";
      },
      youCanChangeSkillStatPokemon: 'You can change Skill, Stats, Pokemon',
      selectInMyPokemons: 'Select In My Pokemons',
      descriptions: []
    };

    var text = function (value) {
      return self.texts[self.language.language][value];
    };
    text.isShowEng = function () {
      return self.languages[self.language.language].showEng;
    };
    text.getLanguage = function () {
      return self.language.language;
    };
    text.setLanguage = function (ln) {
      self.language.language = ln;
      self.language.isSet = true;
      text.onChangeLanguage.forEach(function (fn) {
        fn();
      });
    };
    text.getLanguages = function () {
      return self.languages;
    };
    text.onChangeLanguage = [];


    if (!self.language.isSet)
      $ionicPlatform.ready(function () {
        $cordovaGlobalization.getPreferredLanguage().then(
          function (result) {
            if (result.value === 'ko-KR' || result.value === 'ko') {
              text.setLanguage('ko');
              return;
            }
            text.setLanguage('en');
          });
      });


    return text;

  }

  angular.module('Podic.services').run(constants);
  /* @ng-inject */
  function constants($rootScope, text) {
    $rootScope.text = text;
  }
})();


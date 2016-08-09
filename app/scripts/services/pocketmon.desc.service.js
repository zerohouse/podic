(function () {

  var pocketmons = [{},
    {"name": "이상해씨", "attr": [0, 1], "eng": "Bulbasaur"}, {
      "name": "이상해풀",
      "attr": [0, 1],
      "eng": "Ivysaur"
    }, {"name": "이상해꽃", "attr": [0, 1], "eng": "Venusaur"}, {
      "name": "파이리",
      "attr": [2],
      "eng": "Charmander"
    }, {"name": "리자드", "attr": [2], "eng": "Charmeleon"}, {
      "name": "리자몽",
      "attr": [2, 6],
      "eng": "Charizard"
    }, {"name": "꼬부기", "attr": [3], "eng": "Squirtle"}, {
      "name": "어니부기",
      "attr": [3],
      "eng": "Wartortle"
    }, {"name": "거북왕", "attr": [3], "eng": "Blastoise"}, {
      "name": "캐터피",
      "attr": [11],
      "eng": "Caterpie"
    }, {"name": "단데기", "attr": [11], "eng": "Metapod"}, {
      "name": "버터플",
      "attr": [11, 6],
      "eng": "Butterfree"
    }, {"name": "뿔충이", "attr": [11, 1], "eng": "Weedle"}, {
      "name": "딱충이",
      "attr": [11, 1],
      "eng": "Kakuna"
    }, {"name": "독침붕", "attr": [11, 1], "eng": "Beedrill"}, {
      "name": "구구",
      "attr": [7, 6],
      "eng": "Pidgey"
    }, {"name": "피죤", "attr": [7, 6], "eng": "Pidgeotto"}, {
      "name": "피죤투",
      "attr": [7, 6],
      "eng": "Pidgeot"
    }, {"name": "꼬렛", "attr": [7], "eng": "Rattata"}, {
      "name": "레트라",
      "attr": [7],
      "eng": "Raticate"
    }, {"name": "깨비참", "attr": [7, 6], "eng": "Spearow"}, {
      "name": "깨비드릴조",
      "attr": [7, 6],
      "eng": "Fearow"
    }, {"name": "아보", "attr": [1], "eng": "Ekans"}, {"name": "아보크", "attr": [1], "eng": "Arbok"}, {
      "name": "피카츄",
      "attr": [4],
      "eng": "Pikachu"
    }, {"name": "라이츄", "attr": [4], "eng": "Raichu"}, {
      "name": "모래두지",
      "attr": [12],
      "eng": "Sandshrew"
    }, {"name": "고지", "attr": [12], "eng": "Sandslash"}, {
      "name": "니드런♀",
      "attr": [1],
      "eng": "Nidoran♀"
    }, {"name": "니드리나", "attr": [1], "eng": "Nidorina"}, {
      "name": "니드퀸",
      "attr": [1, 12],
      "eng": "Nidoqueen"
    }, {"name": "니드런♂", "attr": [1], "eng": "Nidoran♂"}, {
      "name": "니드리노",
      "attr": [1],
      "eng": "Nidorino"
    }, {"name": "니드킹", "attr": [1, 12], "eng": "Nidoking"}, {
      "name": "삐삐",
      "attr": [16],
      "eng": "Clefairy"
    }, {"name": "픽시", "attr": [16], "eng": "Clefable"}, {
      "name": "식스테일",
      "attr": [2],
      "eng": "Vulpix"
    }, {"name": "나인테일", "attr": [2], "eng": "Ninetales"}, {
      "name": "푸린",
      "attr": [7, 16],
      "eng": "Jigglypuff"
    }, {"name": "푸크린", "attr": [7, 16], "eng": "Wigglytuff"}, {
      "name": "주뱃",
      "attr": [1, 6],
      "eng": "Zubat"
    }, {"name": "골뱃", "attr": [1, 6], "eng": "Golbat"}, {
      "name": "뚜벅쵸",
      "attr": [0, 1],
      "eng": "Oddish"
    }, {"name": "냄새꼬", "attr": [0, 1], "eng": "Gloom"}, {
      "name": "라플레시아",
      "attr": [0, 1],
      "eng": "Vileplume"
    }, {"name": "파라스", "attr": [11, 0], "eng": "Paras"}, {
      "name": "파라섹트",
      "attr": [11, 0],
      "eng": "Parasect"
    }, {"name": "콘팡", "attr": [11, 1], "eng": "Venonat"}, {
      "name": "도나리",
      "attr": [11, 1],
      "eng": "Venomoth"
    }, {"name": "디그다", "attr": [12], "eng": "Diglett"}, {"name": "닥트리오", "attr": [12], "eng": "Dugtrio"}, {
      "name": "나옹",
      "attr": [7],
      "eng": "Meowth"
    }, {"name": "페르시안", "attr": [7], "eng": "Persian"}, {
      "name": "고라파덕",
      "attr": [3],
      "eng": "Psyduck"
    }, {"name": "골덕", "attr": [3], "eng": "Golduck"}, {"name": "망키", "attr": [13], "eng": "Mankey"}, {
      "name": "성원숭",
      "attr": [13],
      "eng": "Primeape"
    }, {"name": "가디", "attr": [2], "eng": "Growlithe"}, {
      "name": "윈디",
      "attr": [2],
      "eng": "Arcanine"
    }, {"name": "발챙이", "attr": [3], "eng": "Poliwag"}, {
      "name": "수륙챙이",
      "attr": [3],
      "eng": "Poliwhirl"
    }, {"name": "강챙이", "attr": [3, 13], "eng": "Poliwrath"}, {
      "name": "캐이시",
      "attr": [10],
      "eng": "Abra"
    }, {"name": "윤겔라", "attr": [10], "eng": "Kadabra"}, {
      "name": "후딘",
      "attr": [10],
      "eng": "Alakazam"
    }, {"name": "알통몬", "attr": [13], "eng": "Machop"}, {
      "name": "근육몬",
      "attr": [13],
      "eng": "Machoke"
    }, {"name": "괴력몬", "attr": [13], "eng": "Machamp"}, {
      "name": "모다피",
      "attr": [0, 1],
      "eng": "Bellsprout"
    }, {"name": "우츠동", "attr": [0, 1], "eng": "Weepinbell"}, {
      "name": "우츠보트",
      "attr": [0, 1],
      "eng": "Victreebel"
    }, {"name": "왕눈해", "attr": [3, 1], "eng": "Tentacool"}, {
      "name": "독파리",
      "attr": [3, 1],
      "eng": "Tentacruel"
    }, {"name": "꼬마돌", "attr": [5, 12], "eng": "Geodude"}, {
      "name": "데구리",
      "attr": [5, 12],
      "eng": "Graveler"
    }, {"name": "딱구리", "attr": [5, 12], "eng": "Golem"}, {
      "name": "포니타",
      "attr": [2],
      "eng": "Ponyta"
    }, {"name": "날쌩마", "attr": [2], "eng": "Rapidash"}, {
      "name": "야돈",
      "attr": [3, 10],
      "eng": "Slowpoke"
    }, {"name": "야도란", "attr": [3, 10], "eng": "Slowbro"}, {
      "name": "코일",
      "attr": [4, 14],
      "eng": "Magnemite"
    }, {"name": "레어코일", "attr": [4, 14], "eng": "Magneton"}, {
      "name": "파오리",
      "attr": [7, 6],
      "eng": "Farfetch’d"
    }, {"name": "두두", "attr": [7, 6], "eng": "Doduo"}, {
      "name": "두트리오",
      "attr": [7, 6],
      "eng": "Dodrio"
    }, {"name": "쥬쥬", "attr": [3], "eng": "Seel"}, {
      "name": "쥬레곤",
      "attr": [3, 8],
      "eng": "Dewgong"
    }, {"name": "질퍽이", "attr": [1], "eng": "Grimer"}, {"name": "질뻐기", "attr": [1], "eng": "Muk"}, {
      "name": "셀러",
      "attr": [3],
      "eng": "Shellder"
    }, {"name": "파르셀", "attr": [3, 8], "eng": "Cloyster"}, {
      "name": "고오스",
      "attr": [15],
      "eng": "Gastly"
    }, {"name": "고우스트", "attr": [15], "eng": "Haunter"}, {
      "name": "팬텀",
      "attr": [15],
      "eng": "Gengar"
    }, {"name": "롱스톤", "attr": [5, 12], "eng": "Onix"}, {
      "name": "슬리프",
      "attr": [10],
      "eng": "Drowzee"
    }, {"name": "슬리퍼", "attr": [10], "eng": "Hypno"}, {"name": "크랩", "attr": [3], "eng": "Krabby"}, {
      "name": "킹크랩",
      "attr": [3],
      "eng": "Kingler"
    }, {"name": "찌리리공", "attr": [4], "eng": "Voltorb"}, {
      "name": "붐볼",
      "attr": [4],
      "eng": "Electrode"
    }, {"name": "아라리", "attr": [0, 10], "eng": "Exeggcute"}, {
      "name": "나시",
      "attr": [0, 10],
      "eng": "Exeggutor"
    }, {"name": "탕구리", "attr": [12], "eng": "Cubone"}, {"name": "텅구리", "attr": [12], "eng": "Marowak"}, {
      "name": "시라소몬",
      "attr": [13],
      "eng": "Hitmonlee"
    }, {"name": "홍수몬", "attr": [13], "eng": "Hitmonchan"}, {
      "name": "내루미",
      "attr": [7],
      "eng": "Lickitung"
    }, {"name": "또가스", "attr": [1], "eng": "Koffing"}, {
      "name": "또도가스",
      "attr": [1],
      "eng": "Weezing"
    }, {"name": "뿔카노", "attr": [12, 5], "eng": "Rhyhorn"}, {
      "name": "코뿌리",
      "attr": [12, 5],
      "eng": "Rhydon"
    }, {"name": "럭키", "attr": [7], "eng": "Chansey"}, {"name": "덩쿠리", "attr": [0], "eng": "Tangela"}, {
      "name": "캥카",
      "attr": [7],
      "eng": "Kangaskhan"
    }, {"name": "쏘드라", "attr": [3], "eng": "Horsea"}, {"name": "시드라", "attr": [3], "eng": "Seadra"}, {
      "name": "콘치",
      "attr": [3],
      "eng": "Goldeen"
    }, {"name": "왕콘치", "attr": [3], "eng": "Seaking"}, {
      "name": "별가사리",
      "attr": [3],
      "eng": "Staryu"
    }, {"name": "아쿠스타", "attr": [3, 10], "eng": "Starmie"}, {
      "name": "마임맨",
      "attr": [10, 16],
      "eng": "Mr. Mime"
    }, {"name": "스라크", "attr": [11, 6], "eng": "Scyther"}, {
      "name": "루주라",
      "attr": [8, 10],
      "eng": "Jynx"
    }, {"name": "에레브", "attr": [4], "eng": "Electabuzz"}, {
      "name": "마그마",
      "attr": [2],
      "eng": "Magmar"
    }, {"name": "쁘사이저", "attr": [11], "eng": "Pinsir"}, {
      "name": "켄타로스",
      "attr": [7],
      "eng": "Tauros"
    }, {"name": "잉어킹", "attr": [3], "eng": "Magikarp"}, {
      "name": "갸라도스",
      "attr": [3, 6],
      "eng": "Gyarados"
    }, {"name": "라프라스", "attr": [3, 8], "eng": "Lapras"}, {
      "name": "메타몽",
      "attr": [7],
      "eng": "Ditto"
    }, {"name": "이브이", "attr": [7], "eng": "Eevee"}, {
      "name": "샤미드",
      "attr": [3],
      "eng": "Vaporeon"
    }, {"name": "쥬피썬더", "attr": [4], "eng": "Jolteon"}, {
      "name": "부스터",
      "attr": [2],
      "eng": "Flareon"
    }, {"name": "폴리곤", "attr": [7], "eng": "Porygon"}, {
      "name": "암나이트",
      "attr": [5, 0],
      "eng": "Omanyte"
    }, {"name": "암스타", "attr": [5, 0], "eng": "Omastar"}, {
      "name": "투구",
      "attr": [5, 3],
      "eng": "Kabuto"
    }, {"name": "투구푸스", "attr": [5, 3], "eng": "Kabutops"}, {
      "name": "프테라",
      "attr": [5, 6],
      "eng": "Aerodactyl"
    }, {"name": "잠만보", "attr": [7], "eng": "Snorlax"}, {
      "name": "프리져",
      "attr": [8, 6],
      "eng": "Articuno"
    }, {"name": "썬더", "attr": [4, 6], "eng": "Zapdos"}, {
      "name": "파이어",
      "attr": [2, 6],
      "eng": "Moltres"
    }, {"name": "미뇽", "attr": [9], "eng": "Dratini"}, {
      "name": "신뇽",
      "attr": [9],
      "eng": "Dragonair"
    }, {"name": "망나뇽", "attr": [9, 6], "eng": "Dragonite"}, {
      "name": "뮤츠",
      "attr": [10],
      "eng": "Mewtwo"
    }, {"name": "뮤", "attr": [10], "eng": "Mew"}];

  var skills = [
    {
      "id": 13,
      "attack": 25,
      "charge": 5,
      "name": "김밥말이",
      "type": 7,
      "eng": "Wrap",
      "dps": 6.3,
      "power": 25,
      "cooldown": 4,
      "energy": -20
    }, {
      "id": 14,
      "attack": 120,
      "charge": 1,
      "name": "파괴광선",
      "type": 7,
      "eng": "Hyper Beam",
      "dps": 24,
      "power": 120,
      "cooldown": 5,
      "energy": -100
    }, {
      "id": 16,
      "attack": 45,
      "charge": 3,
      "name": "악의 파동",
      "type": 17,
      "eng": "Dark Pulse",
      "dps": 12.9,
      "power": 45,
      "cooldown": 3.5,
      "energy": -33
    }, {
      "id": 18,
      "attack": 30,
      "charge": 4,
      "name": "오물폭탄",
      "type": 1,
      "eng": "Sludge",
      "dps": 11.5,
      "power": 30,
      "cooldown": 2.6,
      "energy": -25
    }, {
      "id": 20,
      "attack": 25,
      "charge": 5,
      "name": "찝기",
      "type": 7,
      "eng": "Vice Grip",
      "dps": 11.9,
      "power": 25,
      "cooldown": 2.1,
      "energy": -20
    }, {
      "id": 21,
      "attack": 40,
      "charge": 4,
      "name": "화염자동차",
      "type": 2,
      "eng": "Flame Wheel",
      "dps": 8.7,
      "power": 40,
      "cooldown": 4.6,
      "energy": -25
    }, {
      "id": 22,
      "attack": 80,
      "charge": 1,
      "name": "메가폰",
      "type": 11,
      "eng": "Megahorn",
      "dps": 25,
      "power": 80,
      "cooldown": 3.2,
      "energy": -100
    }, {
      "id": 24,
      "attack": 55,
      "charge": 2,
      "name": "화염방사",
      "type": 2,
      "eng": "Flamethrower",
      "dps": 19,
      "power": 55,
      "cooldown": 2.9,
      "energy": -50
    }, {
      "id": 26,
      "attack": 70,
      "charge": 3,
      "name": "구멍파기",
      "type": 12,
      "eng": "Dig",
      "dps": 12.1,
      "power": 70,
      "cooldown": 5.8,
      "energy": -33
    }, {
      "id": 28,
      "attack": 60,
      "charge": 1,
      "name": "크로스촙",
      "type": 13,
      "eng": "Cross Chop",
      "dps": 30,
      "power": 60,
      "cooldown": 2,
      "energy": -100
    }, {
      "id": 30,
      "attack": 40,
      "charge": 4,
      "name": "환상빔",
      "type": 10,
      "eng": "Psybeam",
      "dps": 10.5,
      "power": 40,
      "cooldown": 3.8,
      "energy": -25
    }, {
      "id": 31,
      "attack": 100,
      "charge": 1,
      "name": "지진",
      "type": 12,
      "eng": "Earthquake",
      "dps": 23.8,
      "power": 100,
      "cooldown": 4.2,
      "energy": -100
    }, {
      "id": 32,
      "attack": 80,
      "charge": 1,
      "name": "스톤에지",
      "type": 5,
      "eng": "Stone Edge",
      "dps": 25.8,
      "power": 80,
      "cooldown": 3.1,
      "energy": -100
    }, {
      "id": 33,
      "attack": 45,
      "charge": 3,
      "name": "냉동펀치",
      "type": 8,
      "eng": "Ice Punch",
      "dps": 12.9,
      "power": 45,
      "cooldown": 3.5,
      "energy": -33
    }, {
      "id": 34, "attack": 20, "charge": 4, "name": "하트스탬프", "type": 10, "eng": "Heart Stamp"
    }, {
      "id": 35,
      "attack": 35,
      "charge": 3,
      "name": "방전",
      "type": 4,
      "eng": "Discharge",
      "dps": 14,
      "power": 35,
      "cooldown": 2.5,
      "energy": -33
    }, {
      "id": 36,
      "attack": 60,
      "charge": 3,
      "name": "러스터캐논",
      "type": 14,
      "eng": "Flash Cannon",
      "dps": 15.4,
      "power": 60,
      "cooldown": 3.9,
      "energy": -33
    }, {
      "id": 38,
      "attack": 40,
      "charge": 3,
      "name": "회전부리",
      "type": 6,
      "eng": "Drill Peck",
      "dps": 14.8,
      "power": 40,
      "cooldown": 2.7,
      "energy": -33
    }, {
      "id": 39,
      "attack": 65,
      "charge": 2,
      "name": "냉동빔",
      "type": 8,
      "eng": "Ice Beam",
      "dps": 17.8,
      "power": 65,
      "cooldown": 3.65,
      "energy": -50
    }, {
      "id": 40,
      "attack": 100,
      "charge": 1,
      "name": "눈보라",
      "type": 8,
      "eng": "Blizzard",
      "dps": 25.6,
      "power": 100,
      "cooldown": 3.9,
      "energy": -100
    }, {
      "id": 42,
      "attack": 80,
      "charge": 1,
      "name": "열풍",
      "type": 2,
      "eng": "Heat Wave",
      "dps": 21.1,
      "power": 80,
      "cooldown": 3.8,
      "energy": -100
    }, {
      "id": 45,
      "attack": 30,
      "charge": 4,
      "name": "제비반환",
      "type": 6,
      "eng": "Aerial Ace",
      "dps": 10.3,
      "power": 30,
      "cooldown": 2.9,
      "energy": -25
    }, {
      "id": 46,
      "attack": 50,
      "charge": 3,
      "name": "드릴라이너",
      "type": 12,
      "eng": "Drill Run",
      "dps": 14.7,
      "power": 50,
      "cooldown": 3.4,
      "energy": -33
    }, {
      "id": 47,
      "attack": 65,
      "charge": 2,
      "name": "꽃보라",
      "type": 0,
      "eng": "Petal Blizzard",
      "dps": 20.3,
      "power": 65,
      "cooldown": 3.2,
      "energy": -50
    }, {
      "id": 48, "attack": 15, "charge": 5, "name": "메가드레인", "type": 0, "eng": "Mega Drain"
    }, {
      "id": 49,
      "attack": 75,
      "charge": 2,
      "name": "벌레의야단법석",
      "type": 11,
      "eng": "Bug Buzz",
      "dps": 17.6,
      "power": 75,
      "cooldown": 4.25,
      "energy": -50
    }, {
      "id": 50,
      "attack": 25,
      "charge": 5,
      "name": "독엄니",
      "type": 1,
      "eng": "Poison Fang",
      "dps": 10.4,
      "power": 25,
      "cooldown": 2.4,
      "energy": -20
    }, {
      "id": 51,
      "attack": 30,
      "charge": 4,
      "name": "깜짝베기",
      "type": 17,
      "eng": "Night Slash",
      "dps": 11.1,
      "power": 30,
      "cooldown": 2.7,
      "energy": -25
    }, {
      "id": 53,
      "attack": 30,
      "charge": 4,
      "name": "거품광선",
      "type": 3,
      "eng": "Bubble Beam",
      "dps": 10.3,
      "power": 30,
      "cooldown": 2.9,
      "energy": -25
    }, {
      "id": 54,
      "attack": 30,
      "charge": 3,
      "name": "지옥의바퀴",
      "type": 13,
      "eng": "Submission",
      "dps": 14.3,
      "power": 30,
      "cooldown": 2.1,
      "energy": -33
    }, {
      "id": 56,
      "attack": 30,
      "charge": 4,
      "name": "로킥",
      "type": 13,
      "eng": "Low Sweep",
      "dps": 13.3,
      "power": 30,
      "cooldown": 2.25,
      "energy": -25
    }, {
      "id": 57,
      "attack": 25,
      "charge": 5,
      "name": "아쿠아제트",
      "type": 3,
      "eng": "Aqua Jet",
      "dps": 10.6,
      "power": 25,
      "cooldown": 2.35,
      "energy": -20
    }, {
      "id": 58,
      "attack": 45,
      "charge": 2,
      "name": "아쿠아테일",
      "type": 3,
      "eng": "Aqua Tail",
      "dps": 19.1,
      "power": 45,
      "cooldown": 2.35,
      "energy": -50
    }, {
      "id": 59,
      "attack": 40,
      "charge": 3,
      "name": "씨폭탄",
      "type": 0,
      "eng": "Seed Bomb",
      "dps": 16.7,
      "power": 40,
      "cooldown": 2.4,
      "energy": -33
    }, {
      "id": 60,
      "attack": 40,
      "charge": 3,
      "name": "사이코쇼크",
      "type": 10,
      "eng": "Psyshock",
      "dps": 14.8,
      "power": 40,
      "cooldown": 2.7,
      "energy": -33
    }, {
      "id": 62,
      "attack": 35,
      "charge": 4,
      "name": "원시의힘",
      "type": 5,
      "eng": "Ancient Power",
      "dps": 9.7,
      "power": 35,
      "cooldown": 3.6,
      "energy": -25
    }, {
      "id": 63,
      "attack": 30,
      "charge": 4,
      "name": "암석봉인",
      "type": 5,
      "eng": "Rock Tomb",
      "dps": 8.8,
      "power": 30,
      "cooldown": 3.4,
      "energy": -25
    }, {
      "id": 64,
      "attack": 50,
      "charge": 3,
      "name": "스톤샤워",
      "type": 5,
      "eng": "Rock Slide",
      "dps": 15.6,
      "power": 50,
      "cooldown": 3.2,
      "energy": -33
    }, {
      "id": 65,
      "attack": 40,
      "charge": 3,
      "name": "파워젬",
      "type": 5,
      "eng": "Power Gem",
      "dps": 13.8,
      "power": 40,
      "cooldown": 2.9,
      "energy": -33
    }, {
      "id": 66, "attack": 15, "charge": 5, "name": "야습", "type": 15, "eng": "Shadow Sneak"
    }, {
      "id": 67,
      "attack": 20,
      "charge": 4,
      "name": "섀도펀치",
      "type": 15,
      "eng": "Shadow Punch"
    }, {
      "id": 69,
      "attack": 30,
      "charge": 4,
      "name": "괴상한바람",
      "type": 15,
      "eng": "Ominous Wind",
      "dps": 9.7,
      "power": 30,
      "cooldown": 3.1,
      "energy": -25
    }, {
      "id": 70,
      "attack": 45,
      "charge": 3,
      "name": "섀도볼",
      "type": 15,
      "eng": "Shadow Ball",
      "dps": 14.6,
      "power": 45,
      "cooldown": 3.08,
      "energy": -33
    }, {
      "id": 72,
      "attack": 30,
      "charge": 4,
      "name": "마그넷봄",
      "type": 14,
      "eng": "Magnet Bomb",
      "dps": 10.7,
      "power": 30,
      "cooldown": 2.8,
      "energy": -25
    }, {
      "id": 74,
      "attack": 30,
      "charge": 3,
      "name": "아이언헤드",
      "type": 14,
      "eng": "Iron Head",
      "dps": 15,
      "power": 30,
      "cooldown": 2,
      "energy": -33
    }, {
      "id": 75, "attack": 15, "charge": 5, "name": "파라볼라차지", "type": 4, "eng": "Parabolic Charge"
    }, {
      "id": 77,
      "attack": 40,
      "charge": 3,
      "name": "번개펀치",
      "type": 4,
      "eng": "Thunder Punch",
      "dps": 16.7,
      "power": 40,
      "cooldown": 2.4,
      "energy": -33
    }, {
      "id": 78,
      "attack": 100,
      "charge": 1,
      "name": "번개",
      "type": 4,
      "eng": "Thunder",
      "dps": 23.3,
      "power": 100,
      "cooldown": 4.3,
      "energy": -100
    }, {
      "id": 79,
      "attack": 55,
      "charge": 2,
      "name": "10만볼트",
      "type": 4,
      "eng": "Thunderbolt",
      "dps": 20.4,
      "power": 55,
      "cooldown": 2.7,
      "energy": -50
    }, {
      "id": 80,
      "attack": 25,
      "charge": 5,
      "name": "회오리",
      "type": 9,
      "eng": "Twister",
      "dps": 9.3,
      "power": 25,
      "cooldown": 2.7,
      "energy": -20
    }, {
      "id": 82,
      "attack": 65,
      "charge": 2,
      "name": "용의파동",
      "type": 9,
      "eng": "Dragon Pulse",
      "dps": 18.1,
      "power": 65,
      "cooldown": 3.6,
      "energy": -50
    }, {
      "id": 83,
      "attack": 35,
      "charge": 2,
      "name": "드래곤크루",
      "type": 9,
      "eng": "Dragon Claw",
      "dps": 21.9,
      "power": 35,
      "cooldown": 1.6,
      "energy": -50
    }, {
      "id": 84,
      "attack": 25,
      "charge": 5,
      "name": "차밍보이스",
      "type": 16,
      "eng": "Disarming Voice",
      "dps": 6.4,
      "power": 25,
      "cooldown": 3.9,
      "energy": -20
    }, {
      "id": 85,
      "attack": 25,
      "charge": 5,
      "name": "드레인키스",
      "type": 16,
      "eng": "Draining Kiss",
      "dps": 8.9,
      "power": 25,
      "cooldown": 2.8,
      "energy": -20
    }, {
      "id": 86,
      "attack": 55,
      "charge": 3,
      "name": "매지컬샤인",
      "type": 16,
      "eng": "Dazzling Gleam",
      "dps": 13.1,
      "power": 55,
      "cooldown": 4.2,
      "energy": -33
    }, {
      "id": 87,
      "attack": 85,
      "charge": 1,
      "name": "문포스",
      "type": 16,
      "eng": "Moonblast",
      "dps": 20.7,
      "power": 85,
      "cooldown": 4.1,
      "energy": -100
    }, {
      "id": 88,
      "attack": 55,
      "charge": 2,
      "name": "치근거리기",
      "type": 16,
      "eng": "Play Rough",
      "dps": 19,
      "power": 55,
      "cooldown": 2.9,
      "energy": -50
    }, {
      "id": 89,
      "attack": 25,
      "charge": 4,
      "name": "크로스포이즌",
      "type": 1,
      "eng": "Cross Poison",
      "dps": 16.7,
      "power": 25,
      "cooldown": 1.5,
      "energy": -25
    }, {
      "id": 90,
      "attack": 55,
      "charge": 2,
      "name": "오물폭탄",
      "type": 1,
      "eng": "Sludge Bomb",
      "dps": 21.2,
      "power": 55,
      "cooldown": 2.6,
      "energy": -50
    }, {
      "id": 91,
      "attack": 70,
      "charge": 1,
      "name": "오물웨이브",
      "type": 1,
      "eng": "Sludge Wave",
      "dps": 20.6,
      "power": 70,
      "cooldown": 3.4,
      "energy": -100
    }, {
      "id": 92,
      "attack": 65,
      "charge": 1,
      "name": "더스트슈트",
      "type": 1,
      "eng": "Gunk Shot",
      "dps": 21.7,
      "power": 65,
      "cooldown": 3,
      "energy": -100
    }, {
      "id": 94,
      "attack": 25,
      "charge": 4,
      "name": "뼈다귀치기",
      "type": 12,
      "eng": "Bone Club",
      "dps": 15.6,
      "power": 25,
      "cooldown": 1.6,
      "energy": -25
    }, {
      "id": 95,
      "attack": 35,
      "charge": 4,
      "name": "땅고르기",
      "type": 12,
      "eng": "Bulldoze",
      "dps": 10.3,
      "power": 35,
      "cooldown": 3.4,
      "energy": -25
    }, {
      "id": 96,
      "attack": 30,
      "charge": 4,
      "name": "진흙폭탄",
      "type": 12,
      "eng": "Mud Bomb",
      "dps": 11.5,
      "power": 30,
      "cooldown": 2.6,
      "energy": -25
    }, {
      "id": 99,
      "attack": 45,
      "charge": 3,
      "name": "시그널빔",
      "type": 11,
      "eng": "Signal Beam",
      "dps": 14.5,
      "power": 45,
      "cooldown": 3.1,
      "energy": -33
    }, {
      "id": 100,
      "attack": 35,
      "charge": 3,
      "name": "시저크로스",
      "type": 11,
      "eng": "X-Scissor",
      "dps": 16.7,
      "power": 35,
      "cooldown": 2.1,
      "energy": -33
    }, {
      "id": 101,
      "attack": 25,
      "charge": 5,
      "name": "니트로차지",
      "type": 2,
      "eng": "Flame Charge",
      "dps": 8.1,
      "power": 25,
      "cooldown": 3.1,
      "energy": -20
    }, {
      "id": 102,
      "attack": 30,
      "charge": 4,
      "name": "불꽃튀기기",
      "type": 2,
      "eng": "Flame Burst",
      "dps": 14.3,
      "power": 30,
      "cooldown": 2.1,
      "energy": -25
    }, {
      "id": 103,
      "attack": 100,
      "charge": 1,
      "name": "불대문자",
      "type": 2,
      "eng": "Fire Blast",
      "dps": 24.4,
      "power": 100,
      "cooldown": 4.1,
      "energy": -100
    }, {
      "id": 104,
      "attack": 25,
      "charge": 4,
      "name": "소금물",
      "type": 3,
      "eng": "Brine",
      "dps": 6.3,
      "power": 15,
      "cooldown": 2.4,
      "energy": -25
    }, {
      "id": 105,
      "attack": 35,
      "charge": 4,
      "name": "물의파동",
      "type": 3,
      "eng": "Water Pulse",
      "dps": 10.6,
      "power": 35,
      "cooldown": 3.3,
      "energy": -25
    }, {
      "id": 106,
      "attack": 55,
      "charge": 3,
      "name": "열탕",
      "type": 3,
      "eng": "Scald",
      "dps": 13.8,
      "power": 55,
      "cooldown": 4,
      "energy": -33
    }, {
      "id": 107,
      "attack": 90,
      "charge": 1,
      "name": "하이드로펌프",
      "type": 3,
      "eng": "Hydro Pump",
      "dps": 23.7,
      "power": 90,
      "cooldown": 3.8,
      "energy": -100
    }, {
      "id": 108,
      "attack": 55,
      "charge": 2,
      "name": "사이코키네시스",
      "type": 10,
      "eng": 10,
      "dps": 19.6,
      "power": 55,
      "cooldown": 2.8,
      "energy": -50
    }, {
      "id": 109, "attack": 70, "charge": 1, "name": "사이코브레이크", "type": 10, "eng": "Psystrike"
    }, {
      "id": 111,
      "attack": 25,
      "charge": 5,
      "name": "얼다바람",
      "type": 8,
      "eng": "Icy Wind",
      "dps": 6.6,
      "power": 25,
      "cooldown": 3.8,
      "energy": -20
    }, {
      "id": 114, "attack": 35, "charge": 3, "name": "기가드레인", "type": 0, "eng": "Giga Drain"
    }, {
      "id": 115,
      "attack": 40,
      "charge": 3,
      "name": "불꽃펀치",
      "type": 2,
      "eng": "Fire Punch",
      "dps": 14.3,
      "power": 40,
      "cooldown": 2.8,
      "energy": -33
    }, {
      "id": 116,
      "attack": 120,
      "charge": 1,
      "name": "솔라빔",
      "type": 0,
      "eng": "Solar Beam",
      "dps": 24.5,
      "power": 120,
      "cooldown": 4.9,
      "energy": -100
    }, {
      "id": 117,
      "attack": 45,
      "charge": 2,
      "name": "리프블레이드",
      "type": 0,
      "eng": "Leaf Blade",
      "dps": 19.6,
      "power": 55,
      "cooldown": 2.8,
      "energy": -50
    }, {
      "id": 118,
      "attack": 70,
      "charge": 1,
      "name": "파워휩",
      "type": 0,
      "eng": "Power Whip",
      "dps": 25,
      "power": 70,
      "cooldown": 2.8,
      "energy": -100
    }, {
      "id": 121,
      "attack": 30,
      "charge": 4,
      "name": "에어컷터",
      "type": 6,
      "eng": "Air Cutter",
      "dps": 9.1,
      "power": 30,
      "cooldown": 3.3,
      "energy": -25
    }, {
      "id": 122,
      "attack": 80,
      "charge": 1,
      "name": "폭풍",
      "type": 6,
      "eng": "Hurricane",
      "dps": 25,
      "power": 80,
      "cooldown": 3.2,
      "energy": -100
    }, {
      "id": 123,
      "attack": 30,
      "charge": 3,
      "name": "깨트리다",
      "type": 13,
      "eng": "Brick Break",
      "dps": 18.8,
      "power": 30,
      "cooldown": 1.6,
      "energy": -33
    }, {
      "id": 125,
      "attack": 30,
      "charge": 4,
      "name": "스피드스타",
      "type": 7,
      "eng": "Swift",
      "dps": 10,
      "power": 30,
      "cooldown": 3,
      "energy": -25
    }, {
      "id": 126,
      "attack": 25,
      "charge": 4,
      "name": "뿔찌르기",
      "type": 7,
      "eng": "Horn Attack",
      "dps": 11.4,
      "power": 25,
      "cooldown": 2.2,
      "energy": -25
    }, {
      "id": 127,
      "attack": 30,
      "charge": 4,
      "name": "짓밟기",
      "type": 7,
      "eng": "Stomp",
      "dps": 14.3,
      "power": 30,
      "cooldown": 2.1,
      "energy": -25
    }, {
      "id": 129,
      "attack": 35,
      "charge": 3,
      "name": "필살앞니",
      "type": 7,
      "eng": "Hyper Fang",
      "dps": 16.7,
      "power": 35,
      "cooldown": 2.1,
      "energy": -33
    }, {
      "id": 131,
      "attack": 40,
      "charge": 2,
      "name": "누르기",
      "type": 7,
      "eng": "Body Slam",
      "dps": 25.6,
      "power": 40,
      "cooldown": 1.56,
      "energy": -50
    }, {
      "id": 132, "attack": 35, "charge": 3, "name": "잠자기", "type": 7, "eng": "Rest"
    }, {
      "id": 133,
      "attack": 15,
      "charge": 5,
      "name": "발버둥",
      "type": 7,
      "eng": "Struggle",
      "dps": 8.8,
      "power": 15,
      "cooldown": 1.7,
      "energy": -20
    }, {
      "id": 134,
      "attack": 35,
      "charge": 3,
      "name": "열탕",
      "type": 3,
      "eng": "Scald*",
      "dps": 13.8,
      "power": 55,
      "cooldown": 4,
      "energy": -33
    }, {
      "id": 135,
      "attack": 60,
      "charge": 1,
      "name": "하이드로펌프",
      "type": 3,
      "eng": "Hydro Pump*",
      "dps": 23.7,
      "power": 90,
      "cooldown": 3.8,
      "energy": -100
    }, {
      "id": 136,
      "attack": 15,
      "charge": 5,
      "name": "김밥말이",
      "type": 7,
      "eng": "Wrap*",
      "dps": 6.3,
      "power": 25,
      "cooldown": 4,
      "energy": -20
    }, {
      "id": 137,
      "attack": 15,
      "charge": 5,
      "name": "김밥말이",
      "type": 7,
      "eng": "Wrap*",
      "dps": 6.3,
      "power": 25,
      "cooldown": 4,
      "energy": -20
    }, {
      "id": 200,
      "attack": 3,
      "name": "연속자르기",
      "type": 11,
      "eng": "Fury Cutter",
      "charge": null,
      "dps": 7.5,
      "power": 3,
      "cooldown": 0.4,
      "energy": 12
    }, {
      "id": 201,
      "attack": 5,
      "name": "벌레먹음",
      "type": 11,
      "eng": "Bug Bite",
      "charge": null,
      "dps": 11.1,
      "power": 5,
      "cooldown": 0.45,
      "energy": 7
    }, {
      "id": 202,
      "attack": 6,
      "name": "물기",
      "type": 17,
      "eng": "Bite",
      "charge": null,
      "dps": 12,
      "power": 6,
      "cooldown": 0.5,
      "energy": 7
    }, {
      "id": 203,
      "attack": 7,
      "name": "기습",
      "type": 17,
      "eng": "Sucker Punch",
      "charge": null,
      "dps": 10,
      "power": 7,
      "cooldown": 0.7,
      "energy": 4
    }, {
      "id": 204,
      "attack": 6,
      "name": "용의숨결",
      "type": 9,
      "eng": "Dragon Breath",
      "charge": null,
      "dps": 12,
      "power": 6,
      "cooldown": 0.5,
      "energy": 7
    }, {
      "id": 205,
      "attack": 5,
      "name": "전기쇼크",
      "type": 4,
      "eng": "Thunder Shock",
      "charge": null,
      "dps": 8.3,
      "power": 5,
      "cooldown": 0.6,
      "energy": 7
    }, {
      "id": 206,
      "attack": 7,
      "name": "스파크",
      "type": 4,
      "eng": "Spark",
      "charge": null,
      "dps": 10,
      "power": 7,
      "cooldown": 0.7,
      "energy": 4
    }, {
      "id": 207,
      "attack": 5,
      "name": "안다리걸기",
      "type": 13,
      "eng": "Low Kick",
      "charge": null,
      "dps": 8.3,
      "power": 5,
      "cooldown": 0.6,
      "energy": 7
    }, {
      "id": 208,
      "attack": 6,
      "name": "태권당수",
      "type": 13,
      "eng": "Karate Chop",
      "charge": null,
      "dps": 7.5,
      "power": 6,
      "cooldown": 0.8,
      "energy": 7
    }, {
      "id": 209,
      "attack": 10,
      "name": "불꽃세례",
      "type": 2,
      "eng": "Ember",
      "charge": null,
      "dps": 9.5,
      "power": 10,
      "cooldown": 1.05,
      "energy": 7
    }, {
      "id": 210,
      "attack": 9,
      "name": "날개치기",
      "type": 6,
      "eng": "Wing Attack",
      "charge": null,
      "dps": 12,
      "power": 9,
      "cooldown": 0.75,
      "energy": 7
    }, {
      "id": 211,
      "attack": 10,
      "name": "쪼기",
      "type": 6,
      "eng": "Peck",
      "charge": null,
      "dps": 8.7,
      "power": 10,
      "cooldown": 1.15,
      "energy": 10
    }, {
      "id": 212,
      "attack": 5,
      "name": "핥기",
      "type": 15,
      "eng": "Lick",
      "charge": null,
      "dps": 10,
      "power": 5,
      "cooldown": 0.5,
      "energy": 7
    }, {
      "id": 213,
      "attack": 11,
      "name": "섀도크루",
      "type": 15,
      "eng": "Shadow Claw",
      "charge": null,
      "dps": 11.6,
      "power": 11,
      "cooldown": 0.95,
      "energy": 7
    }, {
      "id": 214,
      "attack": 7,
      "name": "덩굴채찍",
      "type": 0,
      "eng": "Vine Whip",
      "charge": null,
      "dps": 10.8,
      "power": 7,
      "cooldown": 0.65,
      "energy": 7
    }, {
      "id": 215,
      "attack": 15,
      "name": "잎날가르기",
      "type": 0,
      "eng": "Razor Leaf",
      "charge": null,
      "dps": 10.3,
      "power": 15,
      "cooldown": 1.45,
      "energy": 7
    }, {
      "id": 216,
      "attack": 6,
      "name": "머드숏",
      "type": 12,
      "eng": "Mud Shot",
      "charge": null,
      "dps": 10.9,
      "power": 6,
      "cooldown": 0.55,
      "energy": 7
    }, {
      "id": 217,
      "attack": 15,
      "name": "얼음뭉치",
      "type": 8,
      "eng": "Ice Shard",
      "charge": null,
      "dps": 10.7,
      "power": 15,
      "cooldown": 1.4,
      "energy": 7
    }, {
      "id": 218,
      "attack": 9,
      "name": "얼음숨결",
      "type": 8,
      "eng": "Frost Breath",
      "charge": null,
      "dps": 11.1,
      "power": 9,
      "cooldown": 0.81,
      "energy": 7
    }, {
      "id": 219,
      "attack": 10,
      "name": "전광석화",
      "type": 7,
      "eng": "Quick Attack",
      "charge": null,
      "dps": 7.5,
      "power": 10,
      "cooldown": 1.33,
      "energy": 7
    }, {
      "id": 220,
      "attack": 6,
      "name": "할퀴기",
      "type": 7,
      "eng": "Scratch",
      "charge": null,
      "dps": 12,
      "power": 6,
      "cooldown": 0.5,
      "energy": 7
    }, {
      "id": 221,
      "attack": 12,
      "name": "몸통박치기",
      "type": 7,
      "eng": "Tackle",
      "charge": null,
      "dps": 10.9,
      "power": 12,
      "cooldown": 1.1,
      "energy": 7
    }, {
      "id": 222,
      "attack": 7,
      "name": "막치기",
      "type": 7,
      "eng": "Pound",
      "charge": null,
      "dps": 13,
      "power": 7,
      "cooldown": 0.54,
      "energy": 7
    }, {
      "id": 223,
      "attack": 12,
      "name": "풀베기",
      "type": 7,
      "eng": "Cut",
      "charge": null,
      "dps": 10.6,
      "power": 12,
      "cooldown": 1.13,
      "energy": 7
    }, {
      "id": 224,
      "attack": 12,
      "name": "독찌르기",
      "type": 1,
      "eng": "Poison Jab",
      "charge": null,
      "dps": 11.4,
      "power": 12,
      "cooldown": 1.05,
      "energy": 7
    }, {
      "id": 225,
      "attack": 10,
      "name": "용해액",
      "type": 1,
      "eng": "Acid",
      "charge": null,
      "dps": 9.5,
      "power": 10,
      "cooldown": 1.05,
      "energy": 7
    }, {
      "id": 226,
      "attack": 7,
      "name": "사이코커터",
      "type": 10,
      "eng": "Psycho Cut",
      "charge": null,
      "dps": 12.3,
      "power": 7,
      "cooldown": 0.57,
      "energy": 7
    }, {
      "id": 227,
      "attack": 12,
      "name": "돌떨구기",
      "type": 5,
      "eng": "Rock Throw",
      "charge": null,
      "dps": 8.8,
      "power": 12,
      "cooldown": 1.36,
      "energy": 7
    }, {
      "id": 228,
      "attack": 8,
      "name": "메탈크로우",
      "type": 14,
      "eng": "Metal Claw",
      "charge": null,
      "dps": 12.7,
      "power": 8,
      "cooldown": 0.63,
      "energy": 7
    }, {
      "id": 229,
      "attack": 10,
      "name": "불릿펀치",
      "type": 14,
      "eng": "Bullet Punch",
      "charge": null,
      "dps": 8.3,
      "power": 10,
      "cooldown": 1.2,
      "energy": 7
    }, {
      "id": 230,
      "attack": 6,
      "name": "물대포",
      "type": 3,
      "eng": "Water Gun",
      "charge": null,
      "dps": 12,
      "power": 6,
      "cooldown": 0.5,
      "energy": 7
    }, {
      "id": 231,
      "attack": 0,
      "name": "튀어오르기",
      "type": 3,
      "eng": "Splash",
      "charge": null,
      "dps": 0,
      "power": 0,
      "cooldown": 1.23,
      "energy": 7
    }, {
      "id": 232,
      "attack": 10,
      "name": "물대포",
      "type": 3,
      "eng": "Water Gun*",
      "charge": null,
      "dps": 12,
      "power": 6,
      "cooldown": 0.5,
      "energy": 7
    }, {
      "id": 233,
      "attack": 15,
      "name": "진흙뿌리기",
      "type": 12,
      "eng": "Mud Slap",
      "charge": null,
      "dps": 11.1,
      "power": 15,
      "cooldown": 1.35,
      "energy": 9
    }, {
      "id": 234,
      "attack": 12,
      "name": "사념의박치기",
      "type": 10,
      "eng": "Zen Headbutt",
      "charge": null,
      "dps": 11.4,
      "power": 12,
      "cooldown": 1.05,
      "energy": 4
    }, {
      "id": 235,
      "attack": 15,
      "name": "염동력",
      "type": 10,
      "eng": "Confusion",
      "charge": null,
      "dps": 9.9,
      "power": 15,
      "cooldown": 1.51,
      "energy": 7
    }, {
      "id": 236,
      "attack": 6,
      "name": "독침",
      "type": 1,
      "eng": "Poison Sting",
      "charge": null,
      "dps": 10.3,
      "power": 6,
      "cooldown": 0.58,
      "energy": 4
    }, {
      "id": 237,
      "attack": 25,
      "name": "거품",
      "type": 3,
      "eng": "Bubble",
      "charge": null,
      "dps": 10.9,
      "power": 25,
      "cooldown": 2.3,
      "energy": 15
    }, {
      "id": 238,
      "attack": 12,
      "name": "속여때리기",
      "type": 17,
      "eng": "Feint Attack",
      "charge": null,
      "dps": 11.5,
      "power": 12,
      "cooldown": 1.04,
      "energy": 7
    }, {
      "id": 239,
      "attack": 15,
      "name": "강철날개",
      "type": 14,
      "eng": "Steel Wing",
      "charge": null,
      "dps": 11.3,
      "power": 15,
      "cooldown": 1.33,
      "energy": 4
    }, {
      "id": 240,
      "attack": 10,
      "name": "불꽃엄니",
      "type": 2,
      "eng": "Fire Fang",
      "charge": null,
      "dps": 11.9,
      "power": 10,
      "cooldown": 0.84,
      "energy": 4
    }, {
      "id": 241,
      "attack": 15,
      "name": "바위깨기",
      "type": 13,
      "eng": "Rock Smash",
      "charge": null,
      "dps": 10.6,
      "power": 15,
      "cooldown": 1.41,
      "energy": 7
    }
  ];


  var attrs = [{
    "name": "풀",
    "eng": "Grass",
    "attack": {"strong": [12, 5, 3], "weak": [11, 9, 2, 6, 0, 1, 14]},
    "defense": {"strong": [0, 3, 4, 12], "weak": [1, 2, 6, 8, 9, 11]},
    "id": 0
  }, {
    "name": "독",
    "eng": "Poison",
    "attack": {"strong": [16, 0], "weak": [10, 12, 1, 5]},
    "defense": {"strong": [0, 1, 11, 13, 16], "weak": [10, 12, 15]},
    "id": 1
  }, {
    "name": "불",
    "eng": "Fire",
    "attack": {"strong": [11, 0, 8, 14], "weak": [9, 2, 5, 3]},
    "defense": {"strong": [0, 2, 8, 11, 14, 16], "weak": [3, 5, 9, 12]},
    "id": 2
  }, {
    "name": "물",
    "eng": "Water",
    "attack": {"strong": [2, 5, 12], "weak": [9, 0, 3]},
    "defense": {"strong": [2, 3, 8, 14], "weak": [0, 4, 9]},
    "id": 3
  }, {
    "name": "전기",
    "eng": "Electric",
    "attack": {"strong": [6, 3], "weak": [9, 4, 0]},
    "defense": {"strong": [4, 6, 14], "weak": [9, 12]},
    "id": 4
  }, {
    "name": "바위",
    "eng": "Rock",
    "attack": {"strong": [11, 2, 6, 8], "weak": [13, 14, 12]},
    "defense": {"strong": [1, 2, 6, 7], "weak": [0, 3, 12, 13, 14]},
    "id": 5
  }, {
    "name": "비행",
    "eng": "Flying",
    "attack": {"strong": [13, 11, 0], "weak": [4, 5, 14]},
    "defense": {"strong": [0, 11, 13], "weak": [4, 5, 8]},
    "id": 6
  }, {
    "name": "노말",
    "eng": "Normal",
    "attack": {"strong": [], "weak": [5, 14]},
    "defense": {"strong": [], "weak": [13]},
    "id": 7
  }, {
    "name": "얼음",
    "eng": "Ice",
    "attack": {"strong": [9, 6, 0, 12], "weak": [2, 8, 14, 3]},
    "defense": {"strong": [8, 9], "weak": [2, 5, 13, 14]},
    "id": 8
  }, {
    "name": "드래곤",
    "eng": "Dragon",
    "attack": {"strong": [4, 2, 0, 3], "weak": [9, 16, 8]},
    "defense": {"strong": [0, 2, 3, 4, 9], "weak": [8, 16]},
    "id": 9
  }, {
    "name": "에스퍼",
    "eng": "Psychic",
    "attack": {"strong": [13, 1], "weak": [10, 14]},
    "defense": {"strong": [1, 10, 13], "weak": [11, 17]},
    "id": 10
  }, {
    "name": "벌레",
    "eng": "Bug",
    "attack": {"strong": [10, 0, 17], "weak": [16, 13, 2, 6, 15, 1, 14]},
    "defense": {"strong": [0, 12, 13], "weak": [2, 5, 6, 15]},
    "id": 11
  }, {
    "name": "땅",
    "eng": "Ground",
    "attack": {"strong": [4, 2, 1, 5, 14], "weak": [11, 0]},
    "defense": {"strong": [1, 5], "weak": [0, 3, 8]},
    "id": 12
  }, {
    "name": "격투",
    "eng": "Fighting",
    "attack": {"strong": [7, 8, 5, 14, 17], "weak": [11, 16, 6, 10, 1]},
    "defense": {"strong": [5, 11, 17], "weak": [6, 10, 16]},
    "id": 13
  }, {
    "name": "강철",
    "eng": "Steel",
    "attack": {"strong": [16, 8, 5], "weak": [4, 2, 14, 3]},
    "defense": {"strong": [0, 5, 6, 7, 8, 10, 11, 14, 16], "weak": [2, 12, 13]},
    "id": 14
  }, {
    "name": "고스트",
    "eng": "Ghost",
    "attack": {"strong": [11, 1], "weak": [15, 17]},
    "defense": {"strong": [11, 15], "weak": [17]},
    "id": 15
  }, {
    "name": "요정",
    "eng": "Fairy",
    "attack": {"strong": [9, 13, 17], "weak": [2, 1, 14]},
    "defense": {"strong": [9, 11, 13, 17], "weak": [1, 14]},
    "id": 16
  },
    {
      "name": "암흑",
      "eng": "Dark",
      "attack": {"strong": [15, 10], "weak": [17, 16, 13]},
      "defense": {"strong": [17, 15], "weak": [11, 16, 13]},
      "id": 17
    }
  ];

  skills.forEach(function (skill) {
    skill.type = attrs[skill.type];
  });

  var descriptions = [
    null,
    "태어날 때부터 등에 있는 이상한 씨앗과 함께 성장하며 자란다. 이상해씨는 며칠 동안 굶어도 이상이 없는데, 그 이유는 씨앗에 영양분이 가득해 진화하기 전까지 등에 자라는 씨앗에서 영양분을 얻을 수 있기 때문이다. 몸이 자라는 만큼 씨앗도 같이 자라며, 이 씨앗은 광합성을 통해 자라기도 한다. 일정 수준이 지나 씨앗이 꽃봉오리가 되면 이상해풀로 진화한다.\n",
    "이상해씨였을 때 달려 있던 씨앗이 자라 꽃봉오리가 되었다. 그래서인지 더 이상 두 발로 서는 것이 불가능해진 듯하다. 광합성을 하면 꽃봉오리가 점점 커진다. 꽃봉오리를 받치기 위해 하반신이 강해졌다. 양달에서 시간을 오래 보내고, 꽃봉오리에서 좋은 향기가 나기 시작하면 이상해꽃으로 진화할 징조이다.\n",
    "이상해풀이 진화한 포켓몬. 등에 달린 꽃은 이상해풀이었을 때의 꽃봉오리가 자란 것이다. 꽃에서는 황홀한 향기가 나며 적의 전투심을 잠재우며 평온하게 만들어 주고 사람의 마음을 치유하며 비가 내린 다음날은 이 향기가 강해진다. 이 냄새에 유혹된 포켓몬들이 주위에 이끌려 모여든다. 양달을 좋아하며 유혹된 듯 양달로 이동한다. 꽃잎을 펼쳐 태양을 쬐면 에너지로 변환할 수 있어 몸에 힘이 흘러넘치고 햇빛이 더 많은 여름에는 몸이 더더욱 강해진다.",
    "뜨거운 것을 좋아하는 성격이다. 꼬리에 있는 불꽃은 생명을 나타내는 표시로 건강하면 강한 불꽃이 나오고 건강하지 않으면 약한 불꽃이 나온다. 꼬리의 불꽃은 기분을 나타내기도 하는데, 즐거우면 불꽃이 살랑살랑 흔들리고 화나면 맹렬하게 불타오른다. 꼬리에 물이 적게 닿으면 아무 일 없이 불꽃이 타오르나 비에 꼬리가 젖으면 불꽃 대신 연기만 난다. 타오르는 소리는 조용한 곳에 데려가면 들을 수 있다. 리자드로 진화한다.\n",
    "파이리에서 진화했다. 싸우는 것을 좋아하는 성격으로 언제나 격투상대를 찾아다닌다. 흥분하면 작열의 불꽃으로 주위를 불태운다. 강적과 싸움을 계속하며 열정적으로 싸울 땐 때때로 꼬리에서 파란 불꽃이 나오는 일도 있다고 한다. 이기지 않으면 가만히 있지 않고 이겨야만 잠잠해진다. 보통 꼬리를 흔들며 상대를 무너뜨려 날카로운 손톱으로 물러나게 한다. 꼬리를 흔들면 주변의 온도가 점점 올라가며 높은 온도로 상대를 괴롭히는 것도 하나의 전술. 보통 바위산에서 사는데, 이따금 쳐다보면 꼬리의 불꽃이 별처럼 보인다고 한다. 리자몽으로 진화한다.\n",
    "전국도감번호로 6번으로 파이리의 최종진화형이다. 거대한 날개와 용과 같은 머리를 가지고 있다. 머리 부분에 2개의 모퉁이가 있고 손가락은 3개이며 긴 꼬리를 질질 끌고 다닌다. 꼬리의 끝에는 적색의 겉불꽃과 황색의 속불꽃을 가진 불이 항상 켜져 있어서 이것이 꺼지면 리자몽은 죽게 된다고 한다. 리자몽이 불꽃을 토할 때에는 꼬리의 불이 격렬하게 타오른다. 날개는 박쥐와 같은 형상을 하고 있어 지상 1400m까지 나는 것도 가능하다. 또한 날개 윗쪽 부분에도 머리부분처럼 롱스톤과 같이 모퉁이가 되어 있는데 날개를 위력있게 펼칠때의 용도로 이용된다. 강한 기술은 꼬리의 힘에 관계있다. 강한 리자몽의 꼬리의 불꽃은 물에도 잘 견디며 단정하다고 한다. 자신보다 약한 포켓몬에는 공격해 오지 않으며 자기보다 강한 상대를 찾아 싸우고 항상 자신보다 강한 상대에게 흥미있는 성격이다. 뿔카노와 울음소리가 비슷하다. 드래곤과 외모가 똑같지만, 드래곤타입은 아니다. 하지만 습득 가능한 드래곤 기술이 많은데다, 실제로 드래곤 교배 그룹의 대표적인 일원이기도 하다.",
    "꼬마 거북이 포켓몬. 딱딱한 등껍질은 여러모로 쓸모가 많다. 일단 몸을 지키는 것도 있지만 반격을 할 때 더 효과가 좋다고 한다. 그리고 위험해지면 등껍질 안에서 물을 내뿜을 수도 있다. 그리고 등껍질의 홈을 이용해 물의 저항을 줄여 빠르게 헤엄칠 수도 있다고 한다. 태어난 직후에는 연하고 약했던 등껍질도 자라서 단단하고 탄력있는 등껍질로 변한다. 어니부기로 진화한다.\n",
    "애완동물로 인기가 높다. 털로 감싸진 꼬리는 장수의 상징으로 노인들에게 인기가 많은데, 어니부기의 수명은 일만년이라고 전해진다. 꼬리는 장수한 정도에 따라 깊은 색상으로 변하고, 등껍질에 이끼가 끼어 있는 것은 특히 장수한 개체라고 한다. 빠르게 움직일 때 귀를 움직여 균형을 맞추고, 맞을 때는 등껍질에 틀어박혀 피한다. 이때 약간정도 꼬리가 나와버린다고 한다.\n",
    "거북왕 몸이 무거워져 덮치면 상대를 기절시킨다. 등껍질의 로켓포에서 내뿜는 제트수류는 두툼한 철판도 뚫고나간다. 이 물의 탄환은 정확해서 50미터 떨어진 빈 깡통에도 명중시킨다. 분사한 물의 기세에 지지 않게 체중을 무겁게 하고 있다.\n",
    "푸른 피부로 감싸져 있다. 탈피를 반복하면서 자라게 되며 어느 정도까지 성장하면 실을 늘어뜨려 단데기로 진화한다. 발은 짧지만 흡판처럼 되어있어서 비탈이나 벽에서도 잘 움직일 수 있지만 나무를 타기에는 좋지 않다. 하지만 나뭇잎이 주식이기 때문에 필사적으로 나무에 오른다. 몸보다 큰 나뭇잎을 먹어치울 정도로 식욕이 좋으며, 피부와 같은 색의 나뭇잎에 숨어 위장하기도 한다. 머리 끝에 있는 더듬이에서 강렬한 냄새를 내뿜어 몸을 지킨다.\n",
    "철판처럼 단단한 껍질에 둘러싸여 있으나 안은 부드러워서 강한 공격에는 견디지 못한다. 심한 충격을 받으면 진화를 준비하고 있는 부드러운 몸이 그대로 노출되어 위험하기 때문에 가능한 움직이지 않으려고 한다. 레벨 10에 버터플로 진화한다.\n",
    "날개에는 물을 튕겨내는 인분으로 보호받고 있기 때문에 비가 내려도 하늘을 날 수 있다. 이 인분은 맹독 성분도 포함하고 있기 때문에 빠르게 날개를 움직이면 바람에 인분을 실려보내는 것도 가능하다. 맛있는 꿀을 감별하는 능력이 뛰어나 보금자리에서 10Km 떨어진 곳으로도 찾아오며, 약간의 꽃가루로도 해당 꽃이 핀 장소를 찾아내는 능력도 보유하고 있다. 모은 꿀은 발에 있는 솜털에 묻혀서 둥지로 가져간다.\n",
    "뿔충이의 몸 크기는 30cm 정도밖에 안되지만 머리와 꼬리에는 독이 들어있는 강력한 침이 있기 때문에 무작정 다가가는 것은 위험하다. 평소에는 잎사귀 밑에서 숨어 지낸다. 또 뿔충이는 딸기나무를 좋아해서 어쩔땐 딸기나무의 형체가 없어질 정도로 먹는다고 한다.\n",
    "딱충이는 최종진화를 하기 위하여 움직임이 별로 없다. 또한 진화를 하기 위하여 주변에 있는 풀들을 먹는다. 딱충이의 몸속에 있는 조직은 자신을 보호하기 위해 계속 재구성되고 있다. 중요한 점은 딱충이가 독침을 날리기 때문에 움직임이 없다고 해서 방심하면 안 된다는 것이다.\n",
    "영역 의식이 강하기 때문에 독침붕의 보금자리에 가까이 가는 것은 옳지 않은 행동이다. 화가나면 맹렬한 스피드로 날아와서 양 쪽 팔과 엉덩이에 있는 독바늘로 공격해온다. 집단으로 공격하기 때문에 주의가 필요하다.\n",
    "싸움을 싫어하는 온순한 성격이기 때문에 평소에는 적이 오면 날개를 퍼덕거려서 모래를 뿌려 쫓아내지만 어설프게 건드리면 강렬한 반격을 한다. 주로 풀숲에서 작은 벌레를 잡아 먹으며 살며 매우 뛰어난 방향감각 덕분에 아무리 멀리 떨어진 장소라고해도 헤매임 없이 자신의 둥지로 돌아오는 것이 가능하다.\n",
    "넓은 세력권을 날면서 정찰한다. 세력권에 들어온 상대는 날카로운 발톱으로 공격해 쫓아낸다. 주 먹이인 아라리를 들고도 100 km 떨어진 둥지로 옮길 수 있다고 한다. 또한 시력도 매우 좋기 때문에 높은 장소에서도 먹이의 움직임을 볼 수가 있다.\n",
    "피죤투는 무려 고도 1200미터를 마하2의 스피드로 날아 다닐수 있으며, 항속거리도 대단해서 산에서 사는 피죤투가 바다까지 영역을 차지하는 경우도 있다.\n",
    "꼬렛의 특징인 크고 날카로운 이빨은 언제나 자라기 때문에 딱딱한 물건을 갉아먹는다. 또 잡식성인 꼬렛은 먹이나 살수있는 환경이라면 언제나 번식을 한다. 어쩌다가 꼬렛을 발견하면 40마리가 있을수도 있다. 그만큼 번식력이 좋다는 것이다. ",
    "앞니는 계속 자라나기 때문에 단단한 것을 긁어서 이빨을 갈아내는 습성을 가지고 있다. 콘크리트로 만든 빌딩도 갉아 무너뜨리는 것이 가능하기 때문에 가끔 집의 벽을 갉아낸 경우도 있다고 한다. 뒷발가락에는 작은 물갈퀴가 있어 강을 헤엄치는 것도 가능하다. 수염으로 몸의 균형을 유지하기 때문에 흐트러지면 움직임이 느려진다고 한다. ",
    "자신의 영역을 지키기 위해 이곳저곳 돌아다니나 높이 나는 것은 서툴고, 날개가 작아 쉴새없이 날개를 치며 날아오른다. 이 날개는 풀숲을 쳐서 먹이인 벌레를 튀어나오게 할 때도 사용한다. 때때로 부리로 풀밭에 있는 먹이를 찾아내기도 한다. 목소리가 크고 날카로워 1Km 밖에까지 들린다. 깨비참 무리 중 누군가가 위험을 발견하면 여기저기서 산발적으로 울음소리가 들린다. 깨비드릴조로 진화한다.\n",
    "큰 날개로 온종일 날아다닐 수 있는 체력을 갖고 있다. 날카롭고 긴 부리로 땅 위나 물 안에 있는 먹이를 집어먹으며, 싸움 도구로 사용하기도 한다. 공격할 때는 단숨에 높은 하늘까지 날아오른 다음 급강하로 순식간에 공격해온다.\n",
    "주로 풀밭에 많이 서식한다. 혀를 낼름거려서 주위의 움직임과 먹잇감의 냄새를 알아낼 수 있다. 새끼 아보는 아직 이빨에 독이 없어 물려도 약간 아픈 정도로 끝난다. 소리와 기척을 전혀 내지 않고 움직이는 것이 특기이고 주로 구구나 깨비참의 알을 먹는다. 사냥은 방심하고 있는 먹이를 갑자기 덮치는 형식.\n",
    "아보크는 상당히 집요한 성격을 가지고 있어서 한 번 노린 상대는 지구끝까지 라도 쫓아간다고 한다. 그리고 독침공격과 꼬리를 이용해서 상대를 포박해서 조이게 하는 공격은 대단해서 화나게 만들면 무섭게 돌변 할 수도 있다고 한다. 아보크의 배에 있는 문양은 상대를 위협할 수 있는 얼굴 형태를 가지고 있는데 사는 장소가 다르면 문양도 달라 진다고 한다.\n",
    "붉은 뺨은 전기 주머니이다. 이 전기 주머니에 전기를 모아 자신을 위협하는 천적들을 물리친다. 밤에 잠을 자면 전기가 모이며, 잠이 덜 깬 채로 방전되는 경우도 있다. 숲 속에서 무리를 짓고 사는데, 몇 마리가 모여 있거나 주변의 기척을 느끼기 위해 꼬리를 세우면 맹렬한 전기가 모여 번개가 떨어질 때가 있다. 약해진 동료 피카츄에게 전기를 흘려보내 힘을 나눠주거나 열매를 전기로 구워먹는 등 지혜를 갖추고 있다. 천둥의돌을 사용하면 라이츄로 진화한다.\n",
    "◾작은 체구이지만 힘을 발휘하면 인도코끼리도 단번에 쓰러트리는 굉장한 전기의 소유자. 전기는 10만볼트까지 올라가기 때문에 자신보다 몇 배나 큰 상대도 일격에 기절시킬 수 있다. 자기 자신은 긴 꼬리가 접지선이 되어 몸을 지켜주기 때문에 고전압에도 견딜 수 있다. 전기 주머니가 텅 비면 꼬리를 똑바로 세워서 공기 중의 전기를 모으며, 전기가 충분히 채워지면 두 귀가 곧게 선다. 전기가 지나치게 축전되면 근육이 자극을 받아 공격적인 성격으로 변하고 어두운 곳에서 밝게 빛나기 때문에 간혹 꼬리를 땅에 늘어뜨려 스스로 방전해서 기분을 진정시키곤 한다. 평상시에도 약한 전기를 몸에서 발산하기 때문에 어둠 속에서는 희미하게 빛난다.",
    "지면에 구멍을 파서 살고 있다. 위험하다 싶으면 몸을 둥글게 말아서 피한다. 만일의 경우에는 모래를 이용하기 위해 주로 비가 거의 내리지 않는 건조한 곳에서 살고 있다. 그런 환경에 익숙해져 피부는 바짝 말라있고 습기를 싫어한다고 한다. 밤에 기온이 떨어지면 몸에 물방울이 생긴다고 한다.\n",
    "고지는 주로 건조한 땅에 살고 있는데 땅을 파는 것이 특기이다. 그리고 몸에 새겨진 틈새들이 보이는데 그것은 체온조절과 피부호흡, 흡수한 물을 몸 밖으로 배출하는 효과를 가지고 있다. 또한 웅크리기가 특기인 고지는 몸을 웅크려 외적으로부터 몸을 지킨다. 반대로 공격을 할 때에는 자신의 날카로운 발톱을 이용하는데 땅을 팔 때도 사용한다. 땅을 팔 때의 속도는 눈 깜짝할 사이고 단단한 바위가 있더라도 무참히 파괴시킨다. 배틀을 할 때에는 땅을 파서 생기는 흙먼지로 모습을 감춘다고 한다.\n",
    null,
    "니드런♀가 진화한 포켓몬.\n",
    "니드리나가 진화한 포켓몬.\n",
    null,
    "니드런♂이 진화한 포켓몬.\n",
    "니드킹이 되면 전에 없었던 땅타입이 새로 생겨난다. 이로 인하여 피부가 단단해졌고 꼬리는 적을 휘어감아 뼈를 으깰정도의 파워를 가지게 된다. 또 니드킹의 뿔은 다이아몬드 정도의 강도를 가지고 있고 독이 들어있다.\n",
    null,
    null,
    "새하얀 꼬리 한 개를 가지고 태어나 성장하면서 끝이 갈라지고 색이 생겨서 6개로 늘어난다. 털결이 부드럽고 곱슬거린다. 자신보다 강한 상대에게 공격을 받으면 다친 척을 해 속이고 도망친다. 체내에서 불꽃이 타오르며 낮에 기온이 오르면 체온도 올라가 입에서 불꽃을 토해낸다. 이걸 조종해 불구슬처럼 사용하며, 진화 직전이 되면 6개의 꼬리 모두 불타는 것처럼 열을 발산하게 된다. 나인테일로 진화한다.\n",
    "9개의 긴 꼬리를 가지고 있다. 오래 산 개체일수록 털이 금빛으로 빛난다. 머리가 좋고 집념이 강한 성격. 천 년을 산다고도 하며, 장난으로 꼬리를 잡으면 천 년 동안 화를 당한다거나, 꼬리 각각에 신비한 힘이 깃들어 있다거나, 9명의 성자(聖者)가 환생하여 이 포켓몬이 되었다는 등 구전이 많은 포켓몬이다.\n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "진화를 하면서 버섯이 곤충을 차지한 것으로 버섯이 본체이다. 아래 곤충부분은 진화와 함께 빈 껍데기나 다름없게 된다.\n",
    null,
    "콘팡이 진화한 포켓몬으로 독을 가진 거대한 나방이다.\n",
    null,
    null,
    "낮에는 잠을 자고 밤이 되면 눈을 빛내며 주변을 돌아다니는 야행성 포켓몬. 날카로운 손톱을 세우고 살금살금 다녀 발자국을 남기지 않고 걷는다. 둥글고 빛나는 것을 무척 좋아해 시간 모르고 놀다가 지쳐 잠들기도 하며, 밖에 나가면 떨어져 있는 동전을 주워모아 돌아오곤 한다. 좋아하는 것을 발견하면 이마의 금화가 빛난다. 페르시온으로 진화한다.\n",
    "이마의 보석이 반짝이며 털결이 아름답고 걷는 모습도 유연해 귀족적인 이미지가 강하다. 애완용으로 기르는 사람이 많으나 자존심이 강하고 변덕스러우며, 먹잇감을 찢으며 갖고 노는 등 성질이 거칠어 기르기가 어렵다. 꼬리를 똑바로 세우면 덮치면서 물겠다는 신호이다. 억센 6개의 수염으로 공기의 흐름을 읽어 주변의 상황을 알아채며, 이 수염을 잡으면 얌전해진다. 부드러운 근육 덕분에 발소리를 내지 않고 걸을 수 있으며 몸놀림도 민첩해 순식간에 먹잇감을 포획할 수 있다. 마니아들 사이에서는 이마의 보석 크기가 화제가 되곤 한다.\n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "데구리를 수없이 들었다 놨다하며\n전신의 근육을 단련한다.\n모든 격투기를 사용한다.\n",
    null,
    null,
    null,
    "대부분의 풀 포켓몬들은 땅 속의 양분이나 물, 빛을 영양분을 만들어 내지만 우츠동은 그것들의 능력이 부족하여 대신 벌레종류를 잡아먹어서 영양분을 섭취한다. 벌레를 잡으면 뭐든지 녹여버리는 용해액이 분비하지만 동시에 용해액을 중화하는 액체도 분비하기 때문에 자신이 녹는 일은 없다고 한다.\n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "셀러에게는 4가지 모습이 존재한다. \n",
    "셀러의 진화형. 한번 껍질을 닫아버리면 어떠한 괴력을 소유한 자도 여는 것은 불가능하다. 그 상태에서 몸 전체에 달린 가시를 마구 쏘아대므로 주의가 필요한 포켓몬이다. 껍질 속에 무엇이 들어있는지는 알 수 없다.\n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "몬스터볼과 똑 닮았다. 무심코 만지면 감전되거나, 약간의 쇼크로 폭발하거나 하기 때문에 위험하다. 정체불명의 생명체.\n",
    null,
    null,
    null,
    null,
    "포켓몬타워에서 꼭대기 층으로 가는 곳 계단에 죽은 암컷 텅구리가 유령으로 나온다. 실프스코프가 있지 않으면 포켓몬이 겁에 질려 싸울 수 없다.  \n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "별가사리가 물의돌로 진화한 포켓몬. \n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "빨간 몸에 긴 수염, 왕관처럼 생긴 등지느러미와 가슴지느러미가 특징. 수염의 색은 수컷이 노랑 암컷이 흰색이다. 물이 있는 곳이라면 어디든지 살 수 있는 생명력을 지니고 있으나 물살이 세지 않은 강에서도 흘러가 버릴 만큼 힘이 거의 없다. 평상시 물이 없는 곳이나 물 근처에 있는 경우 잔다. 오래 산 잉어킹은 산도 넘을 만큼 점프력이 대단하나 적을 쓰러 트릴 만큼의 위력은 못 되며 심지어 점프할 때 피죤이 낚아채 갈 때도 있다. 보통 크기는 90cm이나 100cm가 넘는 대형 잉어킹이 발견되기도 한다.\n",
    "잉어킹이 갸라도스로 진화할 때 뇌세포 구조가 변질되어 대단히 흉포하고 야만적이고 난폭한 성격이 되어버렸다. 옛날에 분쟁이 일어난 마을을 다 태워버렸다는 기록도 있으며 어떤 싸움이든 큰 싸움이 되면 나타나서 모두 부숴버린 후 떠난다고 한다. 한 번 난동을 부리면 모든 것을 다 부숴버려야 분노가 가라앉기 때문에 태풍이 휘몰아쳐도 난동을 멈추지 않고 한 달 동안 난동을 부렸다는 기록도 있다 전해진다.\n",
    "부드러운 마음, 사람의 말을 이해하는 높은 지능, 아름다운 목소리를 가진 포켓몬. 사람이나 포켓몬을 등에 태우고 바다를 건너는 것을 아주 좋아한다. 좀처럼 싸우려 하지 않았기 때문에 남획되어 수가 줄어들었다.\n",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "프리져, 파이어와 함께 전설의 새 포켓몬중 한마리이다.\n",
    "썬더, 프리져와 함께 전설의 새 포켓몬중 한마리이다.\n",
    null,
    null,
    "망나뇽은 옛날부터 파괴의 신이라고 불렸었다. 망나뇽은 시속 280km로 비행하며 성체가 되어도 성장이 멈추지 않아 이로써 수십미터의 크기에 달하는 녀석이 존재한다는 것이 확인 되었다.\n",
    "뮤의 유전자를 재구성해서 만들어졌다.하지만 크기도 성격도 무서울정도로 다르다.\n",
    "모든 포켓몬의 유전자를 가지고 있다고 전해진다. 그렇기 때문에 모든 포켓몬의 조상이라고 여겨진다. 매우 희귀하기 때문에 뮤를 만난 트레이너는 극소수에 불과하다.\n"
  ];

  var rare = [
    0,
    2,
    6,
    7,
    2,
    6,
    7,
    2,
    6,
    7,
    1,
    2,
    3,
    1,
    2,
    4,
    1,
    2,
    4,
    1,
    2,
    2,
    3,
    1,
    2,
    2,
    5,
    1,
    2,
    1,
    3,
    5,
    1,
    3,
    5,
    2,
    7,
    2,
    3,
    2,
    3,
    1,
    2,
    1,
    3,
    5,
    1,
    3,
    1,
    5,
    2,
    3,
    1,
    2,
    2,
    3,
    1,
    3,
    2,
    4,
    1,
    3,
    5,
    2,
    3,
    5,
    1,
    2,
    3,
    1,
    4,
    5,
    2,
    3,
    1,
    2,
    3,
    2,
    4,
    1,
    4,
    1,
    2,
    4,
    2,
    3,
    2,
    5,
    2,
    4,
    2,
    3,
    1,
    2,
    5,
    4,
    2,
    3,
    1,
    4,
    1,
    2,
    2,
    4,
    2,
    5,
    2,
    3,
    3,
    2,
    3,
    2,
    4,
    3,
    4,
    5,
    2,
    3,
    1,
    3,
    2,
    3,
    4,
    3,
    2,
    5,
    4,
    4,
    7,
    1,
    5,
    5,
    8,
    1,
    5,
    4,
    4,
    6,
    6,
    7,
    3,
    5,
    6,
    4,
    8,
    8,
    8,
    3,
    5,
    7,
    8,
    8];

  var rareWord = [0,
    '아주 흔함',
    '흔함',
    '보통',
    '특별함',
    '희귀함',
    '진귀함',
    '에픽',
    '전설'
  ];

  var speciesValue = [[], [126, 126, 90, 117], [156, 158, 120, 75], [198, 200, 160, 19], [128, 108, 78, 125], [160, 140, 116, 80], [212, 182, 156, 21], [112, 142, 88, 116], [144, 176, 118, 72], [186, 222, 158, 16], [62, 66, 90, 148], [56, 86, 100, 144], [144, 144, 120, 82], [68, 64, 80, 150], [62, 82, 90, 147], [144, 130, 130, 87], [94, 90, 80, 142], [126, 122, 126, 99], [170, 166, 166, 39], [92, 86, 60, 145], [146, 150, 110, 86], [102, 78, 80, 143], [168, 146, 130, 69], [112, 112, 70, 134], [166, 166, 120, 60], [166, 166, 120, 62], [200, 154, 120, 51], [90, 114, 100, 130], [150, 172, 150, 52], [100, 104, 110, 127], [132, 136, 140, 81], [184, 190, 180, 20], [100, 104, 110, 126], [142, 128, 122, 91], [204, 170, 162, 26], [116, 124, 140, 97], [178, 178, 190, 22], [106, 118, 76, 132], [176, 194, 146, 35], [98, 54, 230, 95], [98, 54, 230, 94], [98, 54, 230, 93], [164, 164, 150, 50], [134, 130, 90, 108], [162, 158, 120, 71], [202, 190, 150, 24], [122, 120, 70, 128], [162, 170, 120, 61], [108, 118, 120, 113], [172, 154, 140, 55], [108, 86, 20, 149], [148, 140, 70, 105], [104, 94, 80, 141], [156, 146, 130, 76], [132, 112, 100, 114], [194, 176, 160, 28], [122, 96, 80, 133], [178, 150, 130, 58], [156, 110, 110, 98], [230, 180, 180, 11], [108, 98, 80, 137], [132, 132, 130, 89], [180, 202, 180, 17], [110, 76, 50, 146], [150, 112, 80, 115], [186, 152, 110, 64], [118, 96, 140, 107], [154, 144, 160, 57], [198, 180, 180, 18], [158, 78, 100, 118], [190, 110, 130, 77], [222, 152, 160, 27], [106, 136, 80, 120], [170, 196, 160, 32], [106, 118, 80, 131], [142, 156, 110, 84], [142, 156, 110, 83], [168, 138, 100, 85], [200, 170, 130, 41], [110, 110, 180, 88], [184, 198, 190, 15], [128, 138, 50, 123], [186, 180, 100, 53], [138, 132, 104, 100], [126, 96, 70, 136], [182, 150, 120, 63], [104, 138, 130, 101], [156, 192, 180, 30], [124, 110, 160, 90], [180, 188, 210, 13], [120, 112, 60, 135], [196, 196, 100, 45], [136, 82, 60, 140], [172, 118, 90, 96], [204, 156, 120, 49], [90, 186, 70, 112], [104, 140, 120, 102], [162, 196, 170, 31], [116, 110, 60, 138], [178, 168, 110, 59], [102, 124, 80, 129], [150, 174, 120, 66], [110, 132, 120, 103], [232, 164, 190, 12], [102, 150, 100, 110], [140, 202, 120, 56], [148, 172, 100, 79], [138, 204, 100, 70], [126, 160, 180, 54], [136, 142, 80, 106], [190, 198, 130, 34], [110, 116, 160, 92], [166, 160, 210, 25], [40, 60, 500, 10], [164, 152, 130, 65], [142, 178, 210, 29], [122, 100, 60, 139], [176, 150, 110, 74], [112, 126, 90, 119], [172, 160, 160, 46], [130, 128, 60, 122], [194, 192, 120, 36], [154, 196, 80, 78], [176, 180, 140, 43], [172, 134, 130, 73], [198, 160, 130, 47], [214, 158, 130, 38], [184, 186, 130, 42], [148, 184, 150, 48], [42, 84, 40, 151], [192, 196, 190, 14], [186, 190, 260, 5], [110, 110, 96, 124], [114, 128, 110, 109], [186, 168, 260, 8], [192, 174, 130, 44], [238, 178, 130, 23], [156, 158, 130, 68], [132, 160, 70, 104], [180, 202, 140, 33], [148, 142, 60, 111], [190, 190, 120, 40], [182, 162, 160, 37], [180, 180, 320, 2], [198, 242, 180, 6], [232, 194, 180, 9], [242, 194, 180, 7], [128, 110, 82, 121], [170, 152, 122, 67], [250, 212, 182, 3], [284, 202, 212, 1], [220, 220, 200, 4]];
  var canGetAttacks = [[], [214, 221], [215, 214], [215, 214], [209, 220], [209, 220], [209, 210], [237, 221], [230, 202], [230, 202], [201, 221], [201, 221], [201, 235], [201, 236], [201, 236], [201, 224], [219, 221], [210, 239], [210, 239], [221, 219], [202, 219], [211, 219], [211, 239], [236, 225], [202, 225], [205, 219], [205, 206], [220, 216], [228, 216], [202, 236], [202, 236], [224, 202], [211, 236], [224, 236], [224, 200], [222, 234], [222, 234], [219, 209], [238, 209], [222, 238], [222, 238], [219, 202], [210, 202], [50, 121, 69], [215, 225], [215, 225], [220, 201], [201, 200], [201, 235], [201, 235], [216, 220], [203, 216], [31, 96, 32], [220, 238], [230, 234], [230, 235], [208, 220], [207, 208], [209, 202], [240, 202], [237, 216], [237, 216], [237, 216], [234], [226, 235], [226, 235], [207, 208], [207, 208], [229, 208], [214, 225], [215, 225], [215, 225], [237, 236], [225, 224], [227, 221], [227, 216], [227, 216], [221, 209], [207, 209], [230, 235], [230, 235], [206, 205], [206, 205], [223, 200], [45, 121, 117], [238, 239], [217, 230], [218, 217], [225, 233], [225, 224], [217, 221], [218, 217], [212, 203], [69, 16, 90], [203, 213], [227, 221], [222, 235], [30, 60, 108], [237, 216], [228, 216], [206, 221], [206, 221], [235], [235, 234], [233, 241], [233, 241], [207, 241], [229, 241], [212, 234], [225, 221], [225, 221], [233, 241], [233, 241], [222, 234], [214], [233, 207], [230, 237], [230, 204], [211, 216], [211, 224], [219, 230], [219, 230], [235, 234], [200, 239], [218, 222], [205, 207], [209, 208], [241, 200], [221, 234], [231], [204, 202], [218, 217], [222], [219, 221], [230], [205], [209], [219, 221], [230, 216], [227, 230], [220, 216], [216, 200], [239, 202], [234, 212], [218], [205], [209], [204], [204], [204, 239], [226, 235], [222]];
  var canGetSkills = [[], [90, 59, 118], [90, 116, 118], [90, 47, 116], [101, 102, 24], [115, 102, 24], [103, 83, 24], [57, 58, 105], [57, 39, 107], [36, 39, 107], [133], [133], [49, 108, 99], [133], [133], [90, 45, 100], [80, 45, 121], [80, 45, 121], [122, 45, 121], [26, 129, 131], [26, 129, 14], [45, 38, 80], [45, 46, 80], [13, 90, 92], [16, 91, 92], [35, 79, 78], [123, 77, 78], [26, 64, 63], [31, 63, 95], [50, 131, 90], [50, 26, 90], [31, 91, 32], [126, 131, 90], [126, 26, 90], [31, 91, 22], [84, 131, 87], [86, 108, 87], [131, 24, 101], [42, 24, 103], [84, 131, 88], [86, 14, 88], [50, 121, 90], [50, 121, 69], [59, 90, 87], [47, 90, 87], [47, 116, 87], [89, 100, 59], [89, 100, 116], [50, 30, 99], [50, 108, 49], [26, 96, 63], [31, 96, 32], [51, 16, 131], [51, 65, 88], [30, 58, 28], [108, 107, 39], [28, 56, 123], [28, 56, 51], [21, 131, 24], [103, 24, 95], [53, 96, 131], [106, 96, 53], [107, 54, 33], [60, 99, 70], [30, 86, 70], [108, 86, 70], [56, 123, 28], [54, 123, 28], [32, 54, 28], [118, 90, 13], [118, 90, 59], [117, 90, 116], [53, 105, 13], [107, 91, 40], [64, 63, 26], [26, 32, 64], [32, 62, 31], [101, 21, 103], [103, 46, 42], [105, 60, 108], [105, 108, 39], [35, 72, 79], [35, 72, 36], [45, 121, 117], [38, 45, 125], [38, 45, 121], [57, 111, 58], [111, 57, 40], [18, 96, 90], [16, 92, 91], [53, 105, 111], [111, 107, 40], [69, 16, 90], [70, 16, 90], [70, 16, 91], [64, 32, 74], [30, 60, 108], [60, 108, 70], [20, 53, 105], [20, 100, 105], [35, 79, 99], [35, 79, 14], [59, 108, 62], [59, 108, 116], [94, 26, 95], [94, 26, 31], [127, 56, 32], [115, 33, 77, 123], [14, 127, 118], [18, 90, 16], [90, 70, 16], [95, 126, 127], [22, 31, 32], [108, 30, 86], [118, 90, 116], [123, 31, 127], [53, 82, 36], [40, 82, 107], [105, 126, 58], [111, 46, 22], [125, 53, 65], [107, 65, 30], [30, 108, 70], [51, 100, 49], [85, 33, 60], [77, 79, 78], [103, 115, 24], [20, 100, 54], [126, 74, 31], [133], [107, 80, 82], [82, 39, 40], [133], [26, 125, 131], [105, 107, 58], [35, 79, 78], [103, 24, 42], [30, 99, 35], [62, 104, 63], [62, 107, 64], [62, 57, 63], [62, 105, 32], [62, 74, 14], [131, 14, 31], [39, 111, 40], [35, 79, 78], [103, 42, 24], [13, 80, 58], [13, 58, 82], [82, 14, 83], [108, 70, 14], [122, 31, 108, 82, 78, 87, 103, 116, 14]];

  angular.module('Podic.services')
    .factory('PocketMons', function () {
      var imgPath = "images/pocketmons/";
      pocketmons.forEach(function (pokemon, i) {
        pokemon.id = i;
        if (i > 99)
          pokemon.img = imgPath + (i) + ".png";
        else if (i > 9)
          pokemon.img = imgPath + "0" + (i) + ".png";
        else
          pokemon.img = imgPath + "00" + (i) + ".png";

        if (descriptions[i]) {
          pokemon.desc = descriptions[i];
        }
        pokemon.rarity = rare[i];
        pokemon.rare = rareWord[rare[i]];
        pokemon.value = speciesValue[i];
        pokemon.power = speciesValue[i][0] + speciesValue[i][1] + speciesValue[i][2];
        pokemon.skills = canGetSkills[i].map(function (id) {
          return skills.findById(id);
        });
        pokemon.attacks = canGetAttacks[i].map(function (id) {
          return skills.findById(id);
        });
        if (pokemon.attr)
          pokemon.types = pokemon.attr.map(function (id) {
            return attrs[id];
          });
      });
      return {
        all: function () {
          return pocketmons;
        },
        get: function (i) {
          return pocketmons[i];
        },
        skills: skills,
        attrs: attrs
      };
    });
})();

(function () {

  var Pokemons = [{"evolve": [], "candy": 0, "maxCp": null, "maxCpRank": 252}, {
    "ko": "이상해씨",
    "attr": [0, 1],
    "en": "Bulbasaur",
    "evolve": [2],
    "candy": 25,
    "maxCp": 981,
    "maxCpRank": 186
  }, {
    "ko": "이상해풀",
    "attr": [0, 1],
    "en": "Ivysaur",
    "evolve": [3],
    "candy": 100,
    "maxCp": 1552,
    "maxCpRank": 129
  }, {
    "ko": "이상해꽃",
    "attr": [0, 1],
    "en": "Venusaur",
    "evolve": [],
    "candy": 0,
    "maxCp": 2568,
    "maxCpRank": 36
  }, {
    "ko": "파이리",
    "attr": [2],
    "en": "Charmander",
    "evolve": [5],
    "candy": 25,
    "maxCp": 831,
    "maxCpRank": 209
  }, {
    "ko": "리자드",
    "attr": [2],
    "en": "Charmeleon",
    "evolve": [6],
    "candy": 100,
    "maxCp": 1484,
    "maxCpRank": 140
  }, {
    "ko": "리자몽",
    "attr": [2, 6],
    "en": "Charizard",
    "evolve": [],
    "candy": 0,
    "maxCp": 2686,
    "maxCpRank": 31
  }, {
    "ko": "꼬부기",
    "attr": [3],
    "en": "Squirtle",
    "evolve": [8],
    "candy": 25,
    "maxCp": 808,
    "maxCpRank": 211
  }, {
    "ko": "어니부기",
    "attr": [3],
    "en": "Wartortle",
    "evolve": [9],
    "candy": 100,
    "maxCp": 1324,
    "maxCpRank": 150
  }, {
    "ko": "거북왕",
    "attr": [3],
    "en": "Blastoise",
    "evolve": [],
    "candy": 0,
    "maxCp": 2291,
    "maxCpRank": 68
  }, {
    "ko": "캐터피",
    "attr": [11],
    "en": "Caterpie",
    "evolve": [11],
    "candy": 12,
    "maxCp": 393,
    "maxCpRank": 246
  }, {
    "ko": "단데기",
    "attr": [11],
    "en": "Metapod",
    "evolve": [12],
    "candy": 50,
    "maxCp": 357,
    "maxCpRank": 248
  }, {
    "ko": "버터플",
    "attr": [11, 6],
    "en": "Butterfree",
    "evolve": [],
    "candy": 0,
    "maxCp": 1701,
    "maxCpRank": 119
  }, {
    "ko": "뿔충이",
    "attr": [11, 1],
    "en": "Weedle",
    "evolve": [14],
    "candy": 12,
    "maxCp": 397,
    "maxCpRank": 244
  }, {
    "ko": "딱충이",
    "attr": [11, 1],
    "en": "Kakuna",
    "evolve": [15],
    "candy": 50,
    "maxCp": 392,
    "maxCpRank": 247
  }, {
    "ko": "독침붕",
    "attr": [11, 1],
    "en": "Beedrill",
    "evolve": [],
    "candy": 0,
    "maxCp": 1777,
    "maxCpRank": 112
  }, {
    "ko": "구구",
    "attr": [7, 6],
    "en": "Pidgey",
    "evolve": [17],
    "candy": 12,
    "maxCp": 580,
    "maxCpRank": 236
  }, {
    "ko": "피죤",
    "attr": [7, 6],
    "en": "Pidgeotto",
    "evolve": [18],
    "candy": 50,
    "maxCp": 1085,
    "maxCpRank": 174
  }, {
    "ko": "피죤투",
    "attr": [7, 6],
    "en": "Pidgeot",
    "evolve": [],
    "candy": 0,
    "maxCp": 1994,
    "maxCpRank": 94
  }, {
    "ko": "꼬렛",
    "attr": [7],
    "en": "Rattata",
    "evolve": [20],
    "candy": 25,
    "maxCp": 588,
    "maxCpRank": 234
  }, {
    "ko": "레트라",
    "attr": [7],
    "en": "Raticate",
    "evolve": [],
    "candy": 0,
    "maxCp": 1549,
    "maxCpRank": 130
  }, {
    "ko": "깨비참",
    "attr": [7, 6],
    "en": "Spearow",
    "evolve": [22],
    "candy": 50,
    "maxCp": 673,
    "maxCpRank": 230
  }, {
    "ko": "깨비드릴조",
    "attr": [7, 6],
    "en": "Fearow",
    "evolve": [],
    "candy": 0,
    "maxCp": 1814,
    "maxCpRank": 111
  }, {
    "ko": "아보",
    "attr": [1],
    "en": "Ekans",
    "evolve": [24],
    "candy": 50,
    "maxCp": 778,
    "maxCpRank": 216
  }, {"ko": "아보크", "attr": [1], "en": "Arbok", "evolve": [], "candy": 0, "maxCp": 1737, "maxCpRank": 115}, {
    "ko": "피카츄",
    "attr": [4],
    "en": "Pikachu",
    "evolve": [26],
    "candy": 50,
    "maxCp": 787,
    "maxCpRank": 214
  }, {
    "ko": "라이츄",
    "attr": [4],
    "en": "Raichu",
    "evolve": [],
    "candy": 0,
    "maxCp": 2025,
    "maxCpRank": 92
  }, {
    "ko": "모래두지",
    "attr": [12],
    "en": "Sandshrew",
    "evolve": [28],
    "candy": 50,
    "maxCp": 1194,
    "maxCpRank": 163
  }, {
    "ko": "고지",
    "attr": [12],
    "en": "Sandslash",
    "evolve": [],
    "candy": 0,
    "maxCp": 2328,
    "maxCpRank": 65
  }, {
    "ko": "니드런♀",
    "attr": [1],
    "en": "Nidoran♀",
    "evolve": [30],
    "candy": 25,
    "maxCp": 736,
    "maxCpRank": 220
  }, {
    "ko": "니드리나",
    "attr": [1],
    "en": "Nidorina",
    "evolve": [31],
    "candy": 100,
    "maxCp": 1218,
    "maxCpRank": 160
  }, {
    "ko": "니드퀸",
    "attr": [1, 12],
    "en": "Nidoqueen",
    "evolve": [],
    "candy": 0,
    "maxCp": 2338,
    "maxCpRank": 64
  }, {
    "ko": "니드런♂",
    "attr": [1],
    "en": "Nidoran♂",
    "evolve": [33],
    "candy": 25,
    "maxCp": 739,
    "maxCpRank": 218
  }, {
    "ko": "니드리노",
    "attr": [1],
    "en": "Nidorino",
    "evolve": [34],
    "candy": 100,
    "maxCp": 1252,
    "maxCpRank": 157
  }, {
    "ko": "니드킹",
    "attr": [1, 12],
    "en": "Nidoking",
    "evolve": [],
    "candy": 0,
    "maxCp": 2386,
    "maxCpRank": 58
  }, {
    "ko": "삐삐",
    "attr": [16],
    "en": "Clefairy",
    "evolve": [36],
    "candy": 50,
    "maxCp": 1085,
    "maxCpRank": 173
  }, {
    "ko": "픽시",
    "attr": [16],
    "en": "Clefable",
    "evolve": [],
    "candy": 0,
    "maxCp": 2353,
    "maxCpRank": 62
  }, {
    "ko": "식스테일",
    "attr": [2],
    "en": "Vulpix",
    "evolve": [38],
    "candy": 50,
    "maxCp": 774,
    "maxCpRank": 217
  }, {
    "ko": "나인테일",
    "attr": [2],
    "en": "Ninetales",
    "evolve": [],
    "candy": 0,
    "maxCp": 2157,
    "maxCpRank": 83
  }, {
    "ko": "푸린",
    "attr": [7, 16],
    "en": "Jigglypuff",
    "evolve": [40],
    "candy": 50,
    "maxCp": 713,
    "maxCpRank": 223
  }, {
    "ko": "푸크린",
    "attr": [7, 16],
    "en": "Wigglytuff",
    "evolve": [],
    "candy": 0,
    "maxCp": 1906,
    "maxCpRank": 103
  }, {
    "ko": "주뱃",
    "attr": [1, 6],
    "en": "Zubat",
    "evolve": [42],
    "candy": 50,
    "maxCp": 569,
    "maxCpRank": 238
  }, {
    "ko": "골뱃",
    "attr": [1, 6],
    "en": "Golbat",
    "evolve": [169],
    "candy": 0,
    "maxCp": 1830,
    "maxCpRank": 109
  }, {
    "ko": "뚜벅쵸",
    "attr": [0, 1],
    "en": "Oddish",
    "evolve": [44],
    "candy": 25,
    "maxCp": 1069,
    "maxCpRank": 177
  }, {
    "ko": "냄새꼬",
    "attr": [0, 1],
    "en": "Gloom",
    "evolve": [45, 182],
    "candy": 100,
    "maxCp": 1512,
    "maxCpRank": 135
  }, {
    "ko": "라플레시아",
    "attr": [0, 1],
    "en": "Vileplume",
    "evolve": [],
    "candy": 0,
    "maxCp": 2367,
    "maxCpRank": 61
  }, {
    "ko": "파라스",
    "attr": [11, 0],
    "en": "Paras",
    "evolve": [47],
    "candy": 50,
    "maxCp": 836,
    "maxCpRank": 208
  }, {
    "ko": "파라섹트",
    "attr": [11, 0],
    "en": "Parasect",
    "evolve": [],
    "candy": 0,
    "maxCp": 1657,
    "maxCpRank": 123
  }, {
    "ko": "콘팡",
    "attr": [11, 1],
    "en": "Venonat",
    "evolve": [49],
    "candy": 50,
    "maxCp": 902,
    "maxCpRank": 199
  }, {
    "ko": "도나리",
    "attr": [11, 1],
    "en": "Venomoth",
    "evolve": [],
    "candy": 0,
    "maxCp": 1937,
    "maxCpRank": 99
  }, {
    "ko": "디그다",
    "attr": [12],
    "en": "Diglett",
    "evolve": [51],
    "candy": 50,
    "maxCp": 465,
    "maxCpRank": 242
  }, {
    "ko": "닥트리오",
    "attr": [12],
    "en": "Dugtrio",
    "evolve": [],
    "candy": 0,
    "maxCp": 1333,
    "maxCpRank": 149
  }, {
    "ko": "나옹",
    "attr": [7],
    "en": "Meowth",
    "evolve": [53],
    "candy": 50,
    "maxCp": 638,
    "maxCpRank": 231
  }, {
    "ko": "페르시안",
    "attr": [7],
    "en": "Persian",
    "evolve": [],
    "candy": 0,
    "maxCp": 1539,
    "maxCpRank": 132
  }, {
    "ko": "고라파덕",
    "attr": [3],
    "en": "Psyduck",
    "evolve": [55],
    "candy": 50,
    "maxCp": 966,
    "maxCpRank": 189
  }, {"ko": "골덕", "attr": [3], "en": "Golduck", "evolve": [], "candy": 0, "maxCp": 2270, "maxCpRank": 70}, {
    "ko": "망키",
    "attr": [13],
    "en": "Mankey",
    "evolve": [57],
    "candy": 50,
    "maxCp": 1002,
    "maxCpRank": 184
  }, {
    "ko": "성원숭",
    "attr": [13],
    "en": "Primeape",
    "evolve": [],
    "candy": 0,
    "maxCp": 2105,
    "maxCpRank": 87
  }, {
    "ko": "가디",
    "attr": [2],
    "en": "Growlithe",
    "evolve": [59],
    "candy": 50,
    "maxCp": 1110,
    "maxCpRank": 168
  }, {
    "ko": "윈디",
    "attr": [2],
    "en": "Arcanine",
    "evolve": [],
    "candy": 0,
    "maxCp": 2839,
    "maxCpRank": 25
  }, {
    "ko": "발챙이",
    "attr": [3],
    "en": "Poliwag",
    "evolve": [61],
    "candy": 25,
    "maxCp": 695,
    "maxCpRank": 227
  }, {
    "ko": "수륙챙이",
    "attr": [3],
    "en": "Poliwhirl",
    "evolve": [62, 186],
    "candy": 100,
    "maxCp": 1313,
    "maxCpRank": 152
  }, {
    "ko": "강챙이",
    "attr": [3, 13],
    "en": "Poliwrath",
    "evolve": [],
    "candy": 0,
    "maxCp": 2441,
    "maxCpRank": 53
  }, {
    "ko": "캐이시",
    "attr": [10],
    "en": "Abra",
    "evolve": [64],
    "candy": 25,
    "maxCp": 1148,
    "maxCpRank": 167
  }, {
    "ko": "윤겔라",
    "attr": [10],
    "en": "Kadabra",
    "evolve": [65],
    "candy": 100,
    "maxCp": 1859,
    "maxCpRank": 108
  }, {
    "ko": "후딘",
    "attr": [10],
    "en": "Alakazam",
    "evolve": [],
    "candy": 0,
    "maxCp": 2887,
    "maxCpRank": 24
  }, {
    "ko": "알통몬",
    "attr": [13],
    "en": "Machop",
    "evolve": [67],
    "candy": 25,
    "maxCp": 1199,
    "maxCpRank": 162
  }, {
    "ko": "근육몬",
    "attr": [13],
    "en": "Machoke",
    "evolve": [68],
    "candy": 100,
    "maxCp": 1910,
    "maxCpRank": 101
  }, {
    "ko": "괴력몬",
    "attr": [13],
    "en": "Machamp",
    "evolve": [],
    "candy": 0,
    "maxCp": 2889,
    "maxCpRank": 23
  }, {
    "ko": "모다피",
    "attr": [0, 1],
    "en": "Bellsprout",
    "evolve": [70],
    "candy": 25,
    "maxCp": 916,
    "maxCpRank": 198
  }, {
    "ko": "우츠동",
    "attr": [0, 1],
    "en": "Weepinbell",
    "evolve": [71],
    "candy": 100,
    "maxCp": 1475,
    "maxCpRank": 141
  }, {
    "ko": "우츠보트",
    "attr": [0, 1],
    "en": "Victreebel",
    "evolve": [],
    "candy": 0,
    "maxCp": 2268,
    "maxCpRank": 71
  }, {
    "ko": "왕눈해",
    "attr": [3, 1],
    "en": "Tentacool",
    "evolve": [73],
    "candy": 50,
    "maxCp": 956,
    "maxCpRank": 192
  }, {
    "ko": "독파리",
    "attr": [3, 1],
    "en": "Tentacruel",
    "evolve": [],
    "candy": 0,
    "maxCp": 2374,
    "maxCpRank": 59
  }, {
    "ko": "꼬마돌",
    "attr": [5, 12],
    "en": "Geodude",
    "evolve": [75],
    "candy": 25,
    "maxCp": 1193,
    "maxCpRank": 164
  }, {
    "ko": "데구리",
    "attr": [5, 12],
    "en": "Graveler",
    "evolve": [76],
    "candy": 100,
    "maxCp": 1815,
    "maxCpRank": 110
  }, {
    "ko": "딱구리",
    "attr": [5, 12],
    "en": "Golem",
    "evolve": [],
    "candy": 0,
    "maxCp": 2916,
    "maxCpRank": 21
  }, {
    "ko": "포니타",
    "attr": [2],
    "en": "Ponyta",
    "evolve": [78],
    "candy": 50,
    "maxCp": 1502,
    "maxCpRank": 136
  }, {
    "ko": "날쌩마",
    "attr": [2],
    "en": "Rapidash",
    "evolve": [],
    "candy": 0,
    "maxCp": 2252,
    "maxCpRank": 74
  }, {
    "ko": "야돈",
    "attr": [3, 10],
    "en": "Slowpoke",
    "evolve": [80, 199],
    "candy": 50,
    "maxCp": 1204,
    "maxCpRank": 161
  }, {
    "ko": "야도란",
    "attr": [3, 10],
    "en": "Slowbro",
    "evolve": [],
    "candy": 0,
    "maxCp": 2482,
    "maxCpRank": 44
  }, {
    "ko": "코일",
    "attr": [4, 14],
    "en": "Magnemite",
    "evolve": [82],
    "candy": 50,
    "maxCp": 1083,
    "maxCpRank": 175
  }, {
    "ko": "레어코일",
    "attr": [4, 14],
    "en": "Magneton",
    "evolve": [],
    "candy": 0,
    "maxCp": 2237,
    "maxCpRank": 75
  }, {
    "ko": "파오리",
    "attr": [7, 6],
    "en": "Farfetch’d",
    "evolve": [],
    "candy": 0,
    "maxCp": 1092,
    "maxCpRank": 171
  }, {
    "ko": "두두",
    "attr": [7, 6],
    "en": "Doduo",
    "evolve": [85],
    "candy": 50,
    "maxCp": 1011,
    "maxCpRank": 179
  }, {
    "ko": "두트리오",
    "attr": [7, 6],
    "en": "Dodrio",
    "evolve": [],
    "candy": 0,
    "maxCp": 2138,
    "maxCpRank": 86
  }, {"ko": "쥬쥬", "attr": [3], "en": "Seel", "evolve": [87], "candy": 50, "maxCp": 899, "maxCpRank": 200}, {
    "ko": "쥬레곤",
    "attr": [3, 8],
    "en": "Dewgong",
    "evolve": [],
    "candy": 0,
    "maxCp": 1894,
    "maxCpRank": 105
  }, {
    "ko": "질퍽이",
    "attr": [1],
    "en": "Grimer",
    "evolve": [89],
    "candy": 50,
    "maxCp": 1269,
    "maxCpRank": 156
  }, {"ko": "질뻐기", "attr": [1], "en": "Muk", "evolve": [], "candy": 0, "maxCp": 2709, "maxCpRank": 29}, {
    "ko": "셀러",
    "attr": [3],
    "en": "Shellder",
    "evolve": [91],
    "candy": 50,
    "maxCp": 958,
    "maxCpRank": 190
  }, {
    "ko": "파르셀",
    "attr": [3, 8],
    "en": "Cloyster",
    "evolve": [],
    "candy": 0,
    "maxCp": 2475,
    "maxCpRank": 46
  }, {
    "ko": "고오스",
    "attr": [15],
    "en": "Gastly",
    "evolve": [93],
    "candy": 25,
    "maxCp": 1002,
    "maxCpRank": 183
  }, {
    "ko": "고우스트",
    "attr": [15],
    "en": "Haunter",
    "evolve": [94],
    "candy": 100,
    "maxCp": 1716,
    "maxCpRank": 118
  }, {"ko": "팬텀", "attr": [15], "en": "Genar", "evolve": [], "candy": 0, "maxCp": 2619, "maxCpRank": 34}, {
    "ko": "롱스톤",
    "attr": [5, 12],
    "en": "Onix",
    "evolve": [208],
    "candy": 0,
    "maxCp": 1002,
    "maxCpRank": 182
  }, {
    "ko": "슬리프",
    "attr": [10],
    "en": "Drowzee",
    "evolve": [97],
    "candy": 50,
    "maxCp": 992,
    "maxCpRank": 185
  }, {"ko": "슬리퍼", "attr": [10], "en": "Hypno", "evolve": [], "candy": 0, "maxCp": 2048, "maxCpRank": 90}, {
    "ko": "크랩",
    "attr": [3],
    "en": "Krabby",
    "evolve": [99],
    "candy": 50,
    "maxCp": 1386,
    "maxCpRank": 146
  }, {
    "ko": "킹크랩",
    "attr": [3],
    "en": "Kingler",
    "evolve": [],
    "candy": 0,
    "maxCp": 2694,
    "maxCpRank": 30
  }, {
    "ko": "찌리리공",
    "attr": [4],
    "en": "Voltorb",
    "evolve": [101],
    "candy": 50,
    "maxCp": 857,
    "maxCpRank": 206
  }, {
    "ko": "붐볼",
    "attr": [4],
    "en": "Electrode",
    "evolve": [],
    "candy": 0,
    "maxCp": 1900,
    "maxCpRank": 104
  }, {
    "ko": "아라리",
    "attr": [0, 10],
    "en": "Exeggcute",
    "evolve": [103],
    "candy": 50,
    "maxCp": 1102,
    "maxCpRank": 169
  }, {
    "ko": "나시",
    "attr": [0, 10],
    "en": "Exeggutor",
    "evolve": [],
    "candy": 0,
    "maxCp": 2916,
    "maxCpRank": 20
  }, {
    "ko": "탕구리",
    "attr": [12],
    "en": "Cubone",
    "evolve": [],
    "candy": 50,
    "maxCp": 943,
    "maxCpRank": 194
  }, {
    "ko": "텅구리",
    "attr": [12],
    "en": "Marowak",
    "evolve": [105],
    "candy": 0,
    "maxCp": 1691,
    "maxCpRank": 120
  }, {
    "ko": "시라소몬",
    "attr": [13],
    "en": "Hitmonlee",
    "evolve": [],
    "candy": 0,
    "maxCp": 2406,
    "maxCpRank": 56
  }, {
    "ko": "홍수몬",
    "attr": [13],
    "en": "Hitmonchan",
    "evolve": [],
    "candy": 0,
    "maxCp": 2098,
    "maxCpRank": 89
  }, {
    "ko": "내루미",
    "attr": [7],
    "en": "Lickitung",
    "evolve": [],
    "candy": 0,
    "maxCp": 1322,
    "maxCpRank": 151
  }, {
    "ko": "또가스",
    "attr": [1],
    "en": "Koffing",
    "evolve": [110],
    "candy": 50,
    "maxCp": 1091,
    "maxCpRank": 172
  }, {
    "ko": "또도가스",
    "attr": [1],
    "en": "Weezing",
    "evolve": [],
    "candy": 0,
    "maxCp": 2183,
    "maxCpRank": 80
  }, {
    "ko": "뿔카노",
    "attr": [12, 5],
    "en": "Rhyhorn",
    "evolve": [112],
    "candy": 50,
    "maxCp": 1679,
    "maxCpRank": 122
  }, {
    "ko": "코뿌리",
    "attr": [12, 5],
    "en": "Rhydon",
    "evolve": [],
    "candy": 0,
    "maxCp": 3300,
    "maxCpRank": 9
  }, {
    "ko": "럭키",
    "attr": [7],
    "en": "Chansey",
    "evolve": [242],
    "candy": 0,
    "maxCp": 1469,
    "maxCpRank": 142
  }, {"ko": "덩쿠리", "attr": [0], "en": "Tangela", "evolve": [], "candy": 0, "maxCp": 2208, "maxCpRank": 76}, {
    "ko": "캥카",
    "attr": [7],
    "en": "Kangaskhan",
    "evolve": [],
    "candy": 0,
    "maxCp": 2463,
    "maxCpRank": 49
  }, {
    "ko": "쏘드라",
    "attr": [3],
    "en": "Horsea",
    "evolve": [117],
    "candy": 50,
    "maxCp": 921,
    "maxCpRank": 197
  }, {
    "ko": "시드라",
    "attr": [3],
    "en": "Seadra",
    "evolve": [230],
    "candy": 0,
    "maxCp": 1979,
    "maxCpRank": 96
  }, {
    "ko": "콘치",
    "attr": [3],
    "en": "Goldeen",
    "evolve": [119],
    "candy": 50,
    "maxCp": 1006,
    "maxCpRank": 181
  }, {
    "ko": "왕콘치",
    "attr": [3],
    "en": "Seaking",
    "evolve": [],
    "candy": 0,
    "maxCp": 2040,
    "maxCpRank": 91
  }, {
    "ko": "별가사리",
    "attr": [3],
    "en": "Staryu",
    "evolve": [121],
    "candy": 50,
    "maxCp": 926,
    "maxCpRank": 196
  }, {
    "ko": "아쿠스타",
    "attr": [3, 10],
    "en": "Starmie",
    "evolve": [],
    "candy": 0,
    "maxCp": 2303,
    "maxCpRank": 67
  }, {
    "ko": "마임맨",
    "attr": [10, 16],
    "en": "Mr. Mime",
    "evolve": [],
    "candy": 0,
    "maxCp": 1984,
    "maxCpRank": 95
  }, {
    "ko": "스라크",
    "attr": [11, 6],
    "en": "Scyther",
    "evolve": [212],
    "candy": 0,
    "maxCp": 2464,
    "maxCpRank": 48
  }, {
    "ko": "루주라",
    "attr": [8, 10],
    "en": "Jynx",
    "evolve": [],
    "candy": 0,
    "maxCp": 2512,
    "maxCpRank": 40
  }, {
    "ko": "에레브",
    "attr": [4],
    "en": "Electabuzz",
    "evolve": [],
    "candy": 0,
    "maxCp": 2196,
    "maxCpRank": 78
  }, {
    "ko": "마그마",
    "attr": [2],
    "en": "Magmar",
    "evolve": [],
    "candy": 0,
    "maxCp": 2254,
    "maxCpRank": 73
  }, {
    "ko": "쁘사이저",
    "attr": [11],
    "en": "Pinsir",
    "evolve": [],
    "candy": 0,
    "maxCp": 2770,
    "maxCpRank": 27
  }, {
    "ko": "켄타로스",
    "attr": [7],
    "en": "Tauros",
    "evolve": [],
    "candy": 0,
    "maxCp": 2488,
    "maxCpRank": 43
  }, {
    "ko": "잉어킹",
    "attr": [3],
    "en": "Magikarp",
    "evolve": [130],
    "candy": 400,
    "maxCp": 220,
    "maxCpRank": 251
  }, {
    "ko": "갸라도스",
    "attr": [3, 6],
    "en": "Gyarados",
    "evolve": [],
    "candy": 0,
    "maxCp": 3281,
    "maxCpRank": 11
  }, {
    "ko": "라프라스",
    "attr": [3, 8],
    "en": "Lapras",
    "evolve": [],
    "candy": 0,
    "maxCp": 2980,
    "maxCpRank": 16
  }, {"ko": "메타몽", "attr": [7], "en": "Ditto", "evolve": [], "candy": 0, "maxCp": 718, "maxCpRank": 222}, {
    "ko": "이브이",
    "attr": [7],
    "en": "Eevee",
    "evolve": [134, 135, 136, 196, 197],
    "candy": 25,
    "maxCp": 969,
    "maxCpRank": 188
  }, {
    "ko": "샤미드",
    "attr": [3],
    "en": "Vaporeon",
    "evolve": [],
    "candy": 0,
    "maxCp": 3157,
    "maxCpRank": 13
  }, {
    "ko": "쥬피썬더",
    "attr": [4],
    "en": "Jolteon",
    "evolve": [],
    "candy": 0,
    "maxCp": 2730,
    "maxCpRank": 28
  }, {
    "ko": "부스터",
    "attr": [2],
    "en": "Flareon",
    "evolve": [],
    "candy": 0,
    "maxCp": 2904,
    "maxCpRank": 22
  }, {
    "ko": "폴리곤",
    "attr": [7],
    "en": "Porygon",
    "evolve": [233],
    "candy": 0,
    "maxCp": 1567,
    "maxCpRank": 128
  }, {
    "ko": "암나이트",
    "attr": [5, 0],
    "en": "Omanyte",
    "evolve": [139],
    "candy": 50,
    "maxCp": 1345,
    "maxCpRank": 148
  }, {
    "ko": "암스타",
    "attr": [5, 0],
    "en": "Omastar",
    "evolve": [],
    "candy": 0,
    "maxCp": 2685,
    "maxCpRank": 32
  }, {
    "ko": "투구",
    "attr": [5, 3],
    "en": "Kabuto",
    "evolve": [141],
    "candy": 50,
    "maxCp": 1172,
    "maxCpRank": 166
  }, {
    "ko": "투구푸스",
    "attr": [5, 3],
    "en": "Kabutops",
    "evolve": [],
    "candy": 0,
    "maxCp": 2517,
    "maxCpRank": 39
  }, {
    "ko": "프테라",
    "attr": [5, 6],
    "en": "Aerodactyl",
    "evolve": [],
    "candy": 0,
    "maxCp": 2608,
    "maxCpRank": 35
  }, {"ko": "잠만보", "attr": [7], "en": "Snorlax", "evolve": [], "candy": 0, "maxCp": 3355, "maxCpRank": 6}, {
    "ko": "프리져",
    "attr": [8, 6],
    "en": "Articuno",
    "evolve": [],
    "candy": 0,
    "maxCp": 2933,
    "maxCpRank": 18
  }, {
    "ko": "썬더",
    "attr": [4, 6],
    "en": "Zapdos",
    "evolve": [],
    "candy": 0,
    "maxCp": 3330,
    "maxCpRank": 8
  }, {
    "ko": "파이어",
    "attr": [2, 6],
    "en": "Moltres",
    "evolve": [],
    "candy": 0,
    "maxCp": 3272,
    "maxCpRank": 12
  }, {
    "ko": "미뇽",
    "attr": [9],
    "en": "Dratini",
    "evolve": [148],
    "candy": 25,
    "maxCp": 860,
    "maxCpRank": 205
  }, {
    "ko": "신뇽",
    "attr": [9],
    "en": "Dragonair",
    "evolve": [149],
    "candy": 100,
    "maxCp": 1609,
    "maxCpRank": 127
  }, {
    "ko": "망나뇽",
    "attr": [9, 6],
    "en": "Dragonite",
    "evolve": [],
    "candy": 0,
    "maxCp": 3581,
    "maxCpRank": 5
  }, {"ko": "뮤츠", "attr": [10], "en": "Mewtwo", "evolve": [], "candy": 0, "maxCp": 4760, "maxCpRank": 2}, {
    "ko": "뮤",
    "attr": [10],
    "en": "Mew",
    "evolve": [150],
    "candy": 0,
    "maxCp": 3090,
    "maxCpRank": 14
  }, {"ko": "치코리타", "en": "Chikorita", "attr": [0], "evolve": [153], "maxCp": 794, "maxCpRank": 213}, {
    "ko": "베이리프",
    "en": "Bayleef",
    "attr": [0],
    "evolve": [154],
    "maxCp": 1286,
    "maxCpRank": 155
  }, {"ko": "메가니움", "en": "Meganium", "attr": [0], "evolve": [], "maxCp": 2178, "maxCpRank": 81}, {
    "ko": "브케인",
    "en": "Cyndaquil",
    "attr": [2],
    "evolve": [156],
    "maxCp": 700,
    "maxCpRank": 226
  }, {"ko": "마그케인", "en": "Quilava", "attr": [2], "evolve": [157], "maxCp": 1291, "maxCpRank": 153}, {
    "ko": "블레이범",
    "en": "Typhlosion",
    "attr": [2],
    "evolve": [],
    "maxCp": 2277,
    "maxCpRank": 69
  }, {"ko": "리아코", "en": "Totodile", "attr": [3], "evolve": [159], "maxCp": 944, "maxCpRank": 193}, {
    "ko": "엘리게이터",
    "en": "Croconaw",
    "attr": [3],
    "evolve": [160],
    "maxCp": 1498,
    "maxCpRank": 137
  }, {"ko": "장크로다일", "en": "Feraligatr", "attr": [3], "evolve": [], "maxCp": 2495, "maxCpRank": 42}, {
    "ko": "꼬리선",
    "en": "Sentret",
    "attr": [7],
    "evolve": [162],
    "maxCp": 493,
    "maxCpRank": 241
  }, {"ko": "다꼬리", "en": "Furret", "attr": [7], "evolve": [], "maxCp": 1776, "maxCpRank": 113}, {
    "ko": "부우부",
    "en": "Hoothoot",
    "attr": [6, 7],
    "evolve": [164],
    "maxCp": 822,
    "maxCpRank": 210
  }, {"ko": "야부엉", "en": "Noctowl", "attr": [6, 7], "evolve": [], "maxCp": 2481, "maxCpRank": 45}, {
    "ko": "레디바",
    "en": "Ledyba",
    "attr": [6, 11],
    "evolve": [166],
    "maxCp": 693,
    "maxCpRank": 229
  }, {"ko": "레디안", "en": "Ledian", "attr": [6, 11], "evolve": [], "maxCp": 1290, "maxCpRank": 154}, {
    "ko": "페이검",
    "en": "Spinarak",
    "attr": [1, 11],
    "evolve": [168],
    "maxCp": 609,
    "maxCpRank": 233
  }, {"ko": "아리아도스", "en": "Ariados", "attr": [1, 11], "evolve": [], "maxCp": 1546, "maxCpRank": 131}, {
    "ko": "크로뱃",
    "en": "Crobat",
    "attr": [1, 6],
    "evolve": [],
    "maxCp": 2320,
    "maxCpRank": 66
  }, {"ko": "초라기", "en": "Chinchou", "attr": [3, 4], "evolve": [171], "maxCp": 1246, "maxCpRank": 158}, {
    "ko": "랜턴",
    "en": "Lanturn",
    "attr": [3, 4],
    "evolve": [],
    "maxCp": 2664,
    "maxCpRank": 33
  }, {"ko": "피츄", "en": "Pichu", "attr": [4], "evolve": [25], "maxCp": 290, "maxCpRank": 250}, {
    "ko": "삐",
    "en": "Cleffa",
    "attr": [],
    "evolve": [35],
    "maxCp": 701,
    "maxCpRank": 225
  }, {"ko": "푸푸린", "en": "Igglybuff", "attr": [7], "evolve": [39], "maxCp": 781, "maxCpRank": 215}, {
    "ko": "토게피",
    "en": "Togepi",
    "attr": [],
    "evolve": [176],
    "maxCp": 550,
    "maxCpRank": 239
  }, {"ko": "토게틱", "en": "Togetic", "attr": [6], "evolve": [], "maxCp": 1395, "maxCpRank": 145}, {
    "ko": "네이티",
    "en": "Natu",
    "attr": [6, 10],
    "evolve": [178],
    "maxCp": 738,
    "maxCpRank": 219
  }, {"ko": "네이티오", "en": "Xatu", "attr": [6, 10], "evolve": [], "maxCp": 1653, "maxCpRank": 125}, {
    "ko": "메리프",
    "en": "Mareep",
    "attr": [4],
    "evolve": [180],
    "maxCp": 873,
    "maxCpRank": 204
  }, {"ko": "보송송", "en": "Flaaffy", "attr": [4], "evolve": [181], "maxCp": 1379, "maxCpRank": 147}, {
    "ko": "전룡",
    "en": "Ampharos",
    "attr": [4],
    "evolve": [],
    "maxCp": 2503,
    "maxCpRank": 41
  }, {"ko": "아르코", "en": "Bellossom", "attr": [0], "evolve": [], "maxCp": 1996, "maxCpRank": 93}, {
    "ko": "마릴",
    "en": "Marill",
    "attr": [3],
    "evolve": [184],
    "maxCp": 725,
    "maxCpRank": 221
  }, {"ko": "마릴리", "en": "Azumarill", "attr": [3], "evolve": [], "maxCp": 1955, "maxCpRank": 98}, {
    "ko": "꼬지모",
    "en": "Sudowoodo",
    "attr": [5],
    "evolve": [],
    "maxCp": 1906,
    "maxCpRank": 102
  }, {"ko": "왕구리", "en": "Politoed", "attr": [3], "evolve": [], "maxCp": 2408, "maxCpRank": 55}, {
    "ko": "통통코",
    "en": "Hoppip",
    "attr": [0, 6],
    "evolve": [188],
    "maxCp": 517,
    "maxCpRank": 240
  }, {"ko": "두코", "en": "Skiploom", "attr": [0, 6], "evolve": [189], "maxCp": 957, "maxCpRank": 191}, {
    "ko": "솜솜코",
    "en": "Jumpluff",
    "attr": [0, 6],
    "evolve": [],
    "maxCp": 1730,
    "maxCpRank": 116
  }, {"ko": "에이팜", "en": "Aipom", "attr": [7], "evolve": [], "maxCp": 1081, "maxCpRank": 176}, {
    "ko": "해너츠",
    "en": "Sunkern",
    "attr": [0],
    "evolve": [192],
    "maxCp": 327,
    "maxCpRank": 249
  }, {"ko": "해루미", "en": "Sunflora", "attr": [0], "evolve": [], "maxCp": 1860, "maxCpRank": 107}, {
    "ko": "왕자리",
    "en": "Yanma",
    "attr": [6, 11],
    "evolve": [],
    "maxCp": 1229,
    "maxCpRank": 159
  }, {"ko": "우파", "en": "Wooper", "attr": [3, 12], "evolve": [195], "maxCp": 702, "maxCpRank": 224}, {
    "ko": "누오",
    "en": "Quagsire",
    "attr": [3, 12],
    "evolve": [],
    "maxCp": 2138,
    "maxCpRank": 85
  }, {"ko": "에브이", "en": "Espeon", "attr": [10], "evolve": [], "maxCp": 2175, "maxCpRank": 82}, {
    "ko": "블래키",
    "en": "Umbreon",
    "attr": [17],
    "evolve": [],
    "maxCp": 2474,
    "maxCpRank": 47
  }, {"ko": "니로우", "en": "Murkrow", "attr": [6, 17], "evolve": [], "maxCp": 1173, "maxCpRank": 165}, {
    "ko": "야도킹",
    "en": "Slowking",
    "attr": [3, 10],
    "evolve": [],
    "maxCp": 2564,
    "maxCpRank": 37
  }, {"ko": "무우마", "en": "Misdreavus", "attr": [15], "evolve": [], "maxCp": 1534, "maxCpRank": 134}, {
    "ko": "안농",
    "en": "Unown",
    "attr": [10],
    "evolve": [],
    "maxCp": 877,
    "maxCpRank": 203
  }, {"ko": "마자용", "en": "Wobbuffet", "attr": [10], "evolve": [], "maxCp": 2350, "maxCpRank": 63}, {
    "ko": "키링키",
    "en": "Girafarig",
    "attr": [7, 10],
    "evolve": [],
    "maxCp": 1653,
    "maxCpRank": 124
  }, {"ko": "피콘", "en": "Pineco", "attr": [11], "evolve": [205], "maxCp": 1010, "maxCpRank": 180}, {
    "ko": "쏘콘",
    "en": "Forretress",
    "attr": [11, 14],
    "evolve": [],
    "maxCp": 2191,
    "maxCpRank": 79
  }, {"ko": "노고치", "en": "Dunsparce", "attr": [7], "evolve": [], "maxCp": 1960, "maxCpRank": 97}, {
    "ko": "글라이거",
    "en": "Gligar",
    "attr": [6, 12],
    "evolve": [],
    "maxCp": 1684,
    "maxCpRank": 121
  }, {"ko": "강철톤", "en": "Steelix", "attr": [12, 14], "evolve": [], "maxCp": 2454, "maxCpRank": 51}, {
    "ko": "블루",
    "en": "Snubbull",
    "attr": [],
    "evolve": [210],
    "maxCp": 1060,
    "maxCpRank": 178
  }, {"ko": "그랑블루", "en": "Granbull", "attr": [], "evolve": [], "maxCp": 2262, "maxCpRank": 72}, {
    "ko": "침바루",
    "en": "Qwilfish",
    "attr": [1, 3],
    "evolve": [],
    "maxCp": 1718,
    "maxCpRank": 117
  }, {"ko": "핫삼", "en": "Scizor", "attr": [11, 14], "evolve": [], "maxCp": 2201, "maxCpRank": 77}, {
    "ko": "단단지",
    "en": "Shuckle",
    "attr": [5, 11],
    "evolve": [],
    "maxCp": 393,
    "maxCpRank": 245
  }, {"ko": "헤라크로스", "en": "Heracross", "attr": [11, 13], "evolve": [], "maxCp": 2463, "maxCpRank": 50}, {
    "ko": "포푸니",
    "en": "Sneasel",
    "attr": [8, 17],
    "evolve": [],
    "maxCp": 1462,
    "maxCpRank": 143
  }, {"ko": "깜지곰", "en": "Teddiursa", "attr": [7], "evolve": [217], "maxCp": 1097, "maxCpRank": 170}, {
    "ko": "링곰",
    "en": "Ursaring",
    "attr": [7],
    "evolve": [],
    "maxCp": 2433,
    "maxCpRank": 54
  }, {"ko": "마그마그", "en": "Slugma", "attr": [2], "evolve": [219], "maxCp": 634, "maxCpRank": 232}, {
    "ko": "마그카르고",
    "en": "Magcargo",
    "attr": [2, 5],
    "evolve": [],
    "maxCp": 1645,
    "maxCpRank": 126
  }, {"ko": "꾸꾸리", "en": "Swinub", "attr": [8, 12], "evolve": [221], "maxCp": 694, "maxCpRank": 228}, {
    "ko": "메꾸리",
    "en": "Piloswine",
    "attr": [8, 12],
    "evolve": [],
    "maxCp": 2392,
    "maxCpRank": 57
  }, {"ko": "코산호", "en": "Corsola", "attr": [3, 5], "evolve": [], "maxCp": 1439, "maxCpRank": 144}, {
    "ko": "총어",
    "en": "Remoraid",
    "attr": [3],
    "evolve": [],
    "maxCp": 579,
    "maxCpRank": 237
  }, {"ko": "대포무노", "en": "Octillery", "attr": [3], "evolve": [], "maxCp": 1874, "maxCpRank": 106}, {
    "ko": "딜리버드",
    "en": "Delibird",
    "attr": [6, 8],
    "evolve": [],
    "maxCp": 803,
    "maxCpRank": 212
  }, {"ko": "만타인", "en": "Mantine", "attr": [3, 6], "evolve": [], "maxCp": 2453, "maxCpRank": 52}, {
    "ko": "무장조",
    "en": "Skarmory",
    "attr": [6, 14],
    "evolve": [],
    "maxCp": 1923,
    "maxCpRank": 100
  }, {"ko": "델빌", "en": "Houndour", "attr": [2, 17], "evolve": [229], "maxCp": 880, "maxCpRank": 202}, {
    "ko": "헬가",
    "en": "Houndoom",
    "attr": [2, 17],
    "evolve": [],
    "maxCp": 2101,
    "maxCpRank": 88
  }, {"ko": "킹드라", "en": "Kingdra", "attr": [3, 9], "evolve": [], "maxCp": 2153, "maxCpRank": 84}, {
    "ko": "코코리",
    "en": "Phanpy",
    "attr": [12],
    "evolve": [232],
    "maxCp": 1485,
    "maxCpRank": 139
  }, {"ko": "코리갑", "en": "Donphan", "attr": [12], "evolve": [], "maxCp": 2789, "maxCpRank": 26}, {
    "ko": "폴리곤2",
    "en": "Porygon2",
    "attr": [7],
    "evolve": [],
    "maxCp": 2372,
    "maxCpRank": 60
  }, {"ko": "노라키", "en": "Stantler", "attr": [7], "evolve": [], "maxCp": 1754, "maxCpRank": 114}, {
    "ko": "루브도",
    "en": "Smeargle",
    "attr": [7],
    "evolve": [],
    "maxCp": 587,
    "maxCpRank": 235
  }, {
    "ko": "배루키",
    "en": "Tyrogue",
    "attr": [13],
    "evolve": [106, 107, 237],
    "maxCp": 419,
    "maxCpRank": 243
  }, {"ko": "카포에라", "en": "Hitmontop", "attr": [13], "evolve": [], "maxCp": 1490, "maxCpRank": 138}, {
    "ko": "뽀뽀라",
    "en": "Smoochum",
    "attr": [8, 10],
    "evolve": [124],
    "maxCp": 972,
    "maxCpRank": 187
  }, {"ko": "에레키드", "en": "Elekid", "attr": [4], "evolve": [125], "maxCp": 897, "maxCpRank": 201}, {
    "ko": "마그비",
    "en": "Magby",
    "attr": [2],
    "evolve": [126],
    "maxCp": 937,
    "maxCpRank": 195
  }, {"ko": "밀탱크", "en": "Miltank", "attr": [7], "evolve": [], "maxCp": 2531, "maxCpRank": 38}, {
    "ko": "해피너스",
    "en": "Blissey",
    "attr": [7],
    "evolve": [],
    "maxCp": 6146,
    "maxCpRank": 1
  }, {"ko": "라이코", "en": "Raikou", "attr": [4], "evolve": [], "maxCp": 2923, "maxCpRank": 19}, {
    "ko": "앤테이",
    "en": "Entei",
    "attr": [2],
    "evolve": [],
    "maxCp": 3343,
    "maxCpRank": 7
  }, {"ko": "스이쿤", "en": "Suicune", "attr": [3], "evolve": [], "maxCp": 2964, "maxCpRank": 17}, {
    "ko": "애버라스",
    "en": "Larvitar",
    "attr": [5, 12],
    "evolve": [247],
    "maxCp": 851,
    "maxCpRank": 207
  }, {"ko": "데기라스", "en": "Pupitar", "attr": [5, 12], "evolve": [248], "maxCp": 1535, "maxCpRank": 133}, {
    "ko": "마기라스",
    "en": "Tyranitar",
    "attr": [5, 17],
    "evolve": [],
    "maxCp": 3299,
    "maxCpRank": 10
  }, {"ko": "루기아", "en": "Lugia", "attr": [6, 10], "evolve": [], "maxCp": 3759, "maxCpRank": 4}, {
    "ko": "칠색조",
    "en": "Ho-oh",
    "attr": [2, 6],
    "evolve": [],
    "maxCp": 4202,
    "maxCpRank": 3
  }, {"ko": "세레비", "en": "Celebi", "attr": [0, 10], "evolve": [], "candy": 0, "maxCp": 3021, "maxCpRank": 15}];


  var skills = [{"id": 13, "attack": 25, "ko": "김밥말이", "type": 7, "en": "Wrap", "cooldown": 4, "energy": -20}, {
    "id": 14,
    "attack": 120,
    "ko": "파괴광선",
    "type": 7,
    "en": "Hyper Beam",
    "cooldown": 5,
    "energy": -100
  }, {"id": 16, "attack": 45, "ko": "악의 파동", "type": 17, "en": "Dark Pulse", "cooldown": 3.5, "energy": -33}, {
    "id": 18,
    "attack": 30,
    "ko": "오물폭탄",
    "type": 1,
    "en": "Sludge",
    "cooldown": 2.6,
    "energy": -25
  }, {"id": 20, "attack": 25, "ko": "찝기", "type": 7, "en": "Vice Grip", "cooldown": 2.1, "energy": -20}, {
    "id": 21,
    "attack": 40,
    "ko": "화염자동차",
    "type": 2,
    "en": "Flame Wheel",
    "cooldown": 4.6,
    "energy": -25
  }, {"id": 22, "attack": 80, "ko": "메가폰", "type": 11, "en": "Megahorn", "cooldown": 3.2, "energy": -100}, {
    "id": 24,
    "attack": 55,
    "ko": "화염방사",
    "type": 2,
    "en": "Flamethrower",
    "cooldown": 2.9,
    "energy": -50
  }, {"id": 26, "attack": 70, "ko": "구멍파기", "type": 12, "en": "Dig", "cooldown": 5.8, "energy": -33}, {
    "id": 28,
    "attack": 60,
    "ko": "크로스촙",
    "type": 13,
    "en": "Cross Chop",
    "cooldown": 2,
    "energy": -100
  }, {"id": 30, "attack": 40, "ko": "환상빔", "type": 10, "en": "Psybeam", "cooldown": 3.8, "energy": -25}, {
    "id": 31,
    "attack": 100,
    "ko": "지진",
    "type": 12,
    "en": "Earthquake",
    "cooldown": 4.2,
    "energy": -100
  }, {"id": 32, "attack": 80, "ko": "스톤에지", "type": 5, "en": "Stone Edge", "cooldown": 3.1, "energy": -100}, {
    "id": 33,
    "attack": 45,
    "ko": "냉동펀치",
    "type": 8,
    "en": "Ice Punch",
    "cooldown": 3.5,
    "energy": -33
  }, {"id": 34, "attack": 20, "ko": "하트스탬프", "type": 10, "en": "Heart Stamp"}, {
    "id": 35,
    "attack": 35,
    "ko": "방전",
    "type": 4,
    "en": "Discharge",
    "cooldown": 2.5,
    "energy": -33
  }, {
    "id": 36,
    "attack": 60,
    "ko": "러스터캐논",
    "type": 14,
    "en": "Flash Cannon",
    "cooldown": 3.9,
    "energy": -33
  }, {"id": 38, "attack": 40, "ko": "회전부리", "type": 6, "en": "Drill Peck", "cooldown": 2.7, "energy": -33}, {
    "id": 39,
    "attack": 65,
    "ko": "냉동빔",
    "type": 8,
    "en": "Ice Beam",
    "cooldown": 3.65,
    "energy": -50
  }, {"id": 40, "attack": 100, "ko": "눈보라", "type": 8, "en": "Blizzard", "cooldown": 3.9, "energy": -100}, {
    "id": 42,
    "attack": 80,
    "ko": "열풍",
    "type": 2,
    "en": "Heat Wave",
    "cooldown": 3.8,
    "energy": -100
  }, {"id": 45, "attack": 30, "ko": "제비반환", "type": 6, "en": "Aerial Ace", "cooldown": 2.9, "energy": -25}, {
    "id": 46,
    "attack": 50,
    "ko": "드릴라이너",
    "type": 12,
    "en": "Drill Run",
    "cooldown": 3.4,
    "energy": -33
  }, {"id": 47, "attack": 65, "ko": "꽃보라", "type": 0, "en": "Petal Blizzard", "cooldown": 3.2, "energy": -50}, {
    "id": 48,
    "attack": 15,
    "ko": "메가드레인",
    "type": 0,
    "en": "Mega Drain"
  }, {
    "id": 49,
    "attack": 75,
    "ko": "벌레의 야단법석",
    "type": 11,
    "en": "Bug Buzz",
    "cooldown": 4.25,
    "energy": -50
  }, {"id": 50, "attack": 25, "ko": "독엄니", "type": 1, "en": "Poison Fang", "cooldown": 2.4, "energy": -20}, {
    "id": 51,
    "attack": 30,
    "ko": "깜짝베기",
    "type": 17,
    "en": "Night Slash",
    "cooldown": 2.7,
    "energy": -25
  }, {"id": 53, "attack": 30, "ko": "거품광선", "type": 3, "en": "Bubble Beam", "cooldown": 2.9, "energy": -25}, {
    "id": 54,
    "attack": 30,
    "ko": "지옥의 바퀴",
    "type": 13,
    "en": "Submission",
    "cooldown": 2.1,
    "energy": -33
  }, {"id": 56, "attack": 30, "ko": "로킥", "type": 13, "en": "Low Sweep", "cooldown": 2.25, "energy": -25}, {
    "id": 57,
    "attack": 25,
    "ko": "아쿠아제트",
    "type": 3,
    "en": "Aqua Jet",
    "cooldown": 2.35,
    "energy": -20
  }, {"id": 58, "attack": 45, "ko": "아쿠아테일", "type": 3, "en": "Aqua Tail", "cooldown": 2.35, "energy": -50}, {
    "id": 59,
    "attack": 40,
    "ko": "씨폭탄",
    "type": 0,
    "en": "Seed Bomb",
    "cooldown": 2.4,
    "energy": -33
  }, {"id": 60, "attack": 40, "ko": "사이코쇼크", "type": 10, "en": "Psyshock", "cooldown": 2.7, "energy": -33}, {
    "id": 62,
    "attack": 35,
    "ko": "원시의힘",
    "type": 5,
    "en": "Ancient Power",
    "cooldown": 3.6,
    "energy": -25
  }, {"id": 63, "attack": 30, "ko": "암석봉인", "type": 5, "en": "Rock Tomb", "cooldown": 3.4, "energy": -25}, {
    "id": 64,
    "attack": 50,
    "ko": "스톤샤워",
    "type": 5,
    "en": "Rock Slide",
    "cooldown": 3.2,
    "energy": -33
  }, {"id": 65, "attack": 40, "ko": "파워젬", "type": 5, "en": "Power Gem", "cooldown": 2.9, "energy": -33}, {
    "id": 66,
    "attack": 15,
    "ko": "야습",
    "type": 15,
    "en": "Shadow Sneak"
  }, {"id": 67, "attack": 20, "ko": "섀도펀치", "type": 15, "en": "Shadow Punch"}, {
    "id": 69,
    "attack": 30,
    "ko": "괴상한바람",
    "type": 15,
    "en": "Ominous Wind",
    "cooldown": 3.1,
    "energy": -25
  }, {"id": 70, "attack": 45, "ko": "섀도볼", "type": 15, "en": "Shadow Ball", "cooldown": 3.08, "energy": -33}, {
    "id": 72,
    "attack": 30,
    "ko": "마그넷봄",
    "type": 14,
    "en": "Magnet Bomb",
    "cooldown": 2.8,
    "energy": -25
  }, {"id": 74, "attack": 30, "ko": "아이언헤드", "type": 14, "en": "Iron Head", "cooldown": 2, "energy": -33}, {
    "id": 75,
    "attack": 15,
    "ko": "파라볼라차지",
    "type": 4,
    "en": "Parabolic Charge"
  }, {"id": 77, "attack": 40, "ko": "번개펀치", "type": 4, "en": "Thunder Punch", "cooldown": 2.4, "energy": -33}, {
    "id": 78,
    "attack": 100,
    "ko": "번개",
    "type": 4,
    "en": "Thunder",
    "cooldown": 4.3,
    "energy": -100
  }, {"id": 79, "attack": 55, "ko": "10만볼트", "type": 4, "en": "Thunderbolt", "cooldown": 2.7, "energy": -50}, {
    "id": 80,
    "attack": 25,
    "ko": "회오리",
    "type": 9,
    "en": "Twister",
    "cooldown": 2.7,
    "energy": -20
  }, {"id": 82, "attack": 65, "ko": "용의파동", "type": 9, "en": "Dragon Pulse", "cooldown": 3.6, "energy": -50}, {
    "id": 83,
    "attack": 35,
    "ko": "드래곤크루",
    "type": 9,
    "en": "Dragon Claw",
    "cooldown": 1.6,
    "energy": -50
  }, {
    "id": 84,
    "attack": 25,
    "ko": "차밍보이스",
    "type": 16,
    "en": "Disarming Voice",
    "cooldown": 3.9,
    "energy": -20
  }, {
    "id": 85,
    "attack": 25,
    "ko": "드레인키스",
    "type": 16,
    "en": "Draining Kiss",
    "cooldown": 2.8,
    "energy": -20
  }, {
    "id": 86,
    "attack": 55,
    "ko": "매지컬샤인",
    "type": 16,
    "en": "Dazzling Gleam",
    "cooldown": 4.2,
    "energy": -33
  }, {"id": 87, "attack": 85, "ko": "문포스", "type": 16, "en": "Moonblast", "cooldown": 4.1, "energy": -100}, {
    "id": 88,
    "attack": 55,
    "ko": "치근거리기",
    "type": 16,
    "en": "Play Rough",
    "cooldown": 2.9,
    "energy": -50
  }, {
    "id": 89,
    "attack": 25,
    "ko": "크로스포이즌",
    "type": 1,
    "en": "Cross Poison",
    "cooldown": 1.5,
    "energy": -25
  }, {"id": 90, "attack": 55, "ko": "오물폭탄", "type": 1, "en": "Sludge Bomb", "cooldown": 2.6, "energy": -50}, {
    "id": 91,
    "attack": 70,
    "ko": "오물웨이브",
    "type": 1,
    "en": "Sludge Wave",
    "cooldown": 3.4,
    "energy": -100
  }, {"id": 92, "attack": 65, "ko": "더스트슈트", "type": 1, "en": "Gunk Shot", "cooldown": 3, "energy": -100}, {
    "id": 94,
    "attack": 25,
    "ko": "뼈다귀치기",
    "type": 12,
    "en": "Bone Club",
    "cooldown": 1.6,
    "energy": -25
  }, {"id": 95, "attack": 35, "ko": "땅고르기", "type": 12, "en": "Bulldoze", "cooldown": 3.4, "energy": -25}, {
    "id": 96,
    "attack": 30,
    "ko": "진흙폭탄",
    "type": 12,
    "en": "Mud Bomb",
    "cooldown": 2.6,
    "energy": -25
  }, {"id": 99, "attack": 45, "ko": "시그널빔", "type": 11, "en": "Signal Beam", "cooldown": 3.1, "energy": -33}, {
    "id": 100,
    "attack": 35,
    "ko": "시저크로스",
    "type": 11,
    "en": "X-Scissor",
    "cooldown": 2.1,
    "energy": -33
  }, {
    "id": 101,
    "attack": 25,
    "ko": "니트로차지",
    "type": 2,
    "en": "Flame Charge",
    "cooldown": 3.1,
    "energy": -20
  }, {
    "id": 102,
    "attack": 30,
    "ko": "불꽃튀기기",
    "type": 2,
    "en": "Flame Burst",
    "cooldown": 2.1,
    "energy": -25
  }, {
    "id": 103,
    "attack": 100,
    "ko": "불대문자",
    "type": 2,
    "en": "Fire Blast",
    "cooldown": 4.1,
    "energy": -100
  }, {"id": 104, "attack": 25, "ko": "소금물", "type": 3, "en": "Brine", "cooldown": 2.4, "energy": -25}, {
    "id": 105,
    "attack": 35,
    "ko": "물의파동",
    "type": 3,
    "en": "Water Pulse",
    "cooldown": 3.3,
    "energy": -25
  }, {"id": 106, "attack": 55, "ko": "열탕", "type": 3, "en": "Scald", "cooldown": 4, "energy": -33}, {
    "id": 107,
    "attack": 90,
    "ko": "하이드로펌프",
    "type": 3,
    "en": "Hydro Pump",
    "cooldown": 3.8,
    "energy": -100
  }, {"id": 108, "attack": 55, "ko": "사이코키네시스", "type": 10, "en": "Psychic", "cooldown": 2.8, "energy": -50}, {
    "id": 109,
    "attack": 70,
    "ko": "사이코브레이크",
    "type": 10,
    "en": "Psystrike"
  }, {"id": 111, "attack": 25, "ko": "얼다바람", "type": 8, "en": "Icy Wind", "cooldown": 3.8, "energy": -20}, {
    "id": 114,
    "attack": 35,
    "ko": "기가드레인",
    "type": 0,
    "en": "Giga Drain"
  }, {"id": 115, "attack": 40, "ko": "불꽃펀치", "type": 2, "en": "Fire Punch", "cooldown": 2.8, "energy": -33}, {
    "id": 116,
    "attack": 120,
    "ko": "솔라빔",
    "type": 0,
    "en": "Solar Beam",
    "cooldown": 4.9,
    "energy": -100
  }, {
    "id": 117,
    "attack": 45,
    "ko": "리프블레이드",
    "type": 0,
    "en": "Leaf Blade",
    "cooldown": 2.8,
    "energy": -50
  }, {"id": 118, "attack": 70, "ko": "파워휩", "type": 0, "en": "Power Whip", "cooldown": 2.8, "energy": -100}, {
    "id": 121,
    "attack": 30,
    "ko": "에어컷터",
    "type": 6,
    "en": "Air Cutter",
    "cooldown": 3.3,
    "energy": -25
  }, {"id": 122, "attack": 80, "ko": "폭풍", "type": 6, "en": "Hurricane", "cooldown": 3.2, "energy": -100}, {
    "id": 123,
    "attack": 30,
    "ko": "깨트리다",
    "type": 13,
    "en": "Brick Break",
    "cooldown": 1.6,
    "energy": -33
  }, {"id": 125, "attack": 30, "ko": "스피드스타", "type": 7, "en": "Swift", "cooldown": 3, "energy": -25}, {
    "id": 126,
    "attack": 25,
    "ko": "뿔찌르기",
    "type": 7,
    "en": "Horn Attack",
    "cooldown": 2.2,
    "energy": -25
  }, {"id": 127, "attack": 30, "ko": "짓밟기", "type": 7, "en": "Stomp", "cooldown": 2.1, "energy": -25}, {
    "id": 129,
    "attack": 35,
    "ko": "필살앞니",
    "type": 7,
    "en": "Hyper Fang",
    "cooldown": 2.1,
    "energy": -33
  }, {"id": 131, "attack": 40, "ko": "누르기", "type": 7, "en": "Body Slam", "cooldown": 1.56, "energy": -50}, {
    "id": 132,
    "attack": 35,
    "ko": "잠자기",
    "type": 7,
    "en": "Rest"
  }, {"id": 133, "attack": 15, "ko": "발버둥", "type": 7, "en": "Struggle", "cooldown": 1.7, "energy": -20}, {
    "id": 134,
    "attack": 35,
    "ko": "열탕",
    "type": 3,
    "en": "Scald*",
    "cooldown": 4,
    "energy": -33
  }, {
    "id": 135,
    "attack": 60,
    "ko": "하이드로펌프",
    "type": 3,
    "en": "Hydro Pump*",
    "cooldown": 3.8,
    "energy": -100
  }, {"id": 136, "attack": 15, "ko": "김밥말이", "type": 7, "en": "Wrap*", "cooldown": 4, "energy": -20}, {
    "id": 137,
    "attack": 15,
    "ko": "김밥말이",
    "type": 7,
    "en": "Wrap*",
    "cooldown": 4,
    "energy": -20
  }, {"id": 200, "attack": 3, "ko": "연속자르기", "type": 11, "en": "Fury Cutter", "cooldown": 0.4, "energy": 6}, {
    "id": 201,
    "attack": 5,
    "ko": "벌레먹음",
    "type": 11,
    "en": "Bug Bite",
    "cooldown": 0.45,
    "energy": 7
  }, {"id": 202, "attack": 6, "ko": "물기", "type": 17, "en": "Bite", "cooldown": 0.5, "energy": 7}, {
    "id": 203,
    "attack": 7,
    "ko": "기습",
    "type": 17,
    "en": "Sucker Punch",
    "cooldown": 0.7,
    "energy": 9
  }, {"id": 204, "attack": 6, "ko": "용의숨결", "type": 9, "en": "Dragon Breath", "cooldown": 0.5, "energy": 7}, {
    "id": 205,
    "attack": 5,
    "ko": "전기쇼크",
    "type": 4,
    "en": "Thunder Shock",
    "cooldown": 0.6,
    "energy": 8
  }, {"id": 206, "attack": 7, "ko": "스파크", "type": 4, "en": "Spark", "cooldown": 0.7, "energy": 8}, {
    "id": 207,
    "attack": 5,
    "ko": "안다리걸기",
    "type": 13,
    "en": "Low Kick",
    "cooldown": 0.6,
    "energy": 7
  }, {"id": 208, "attack": 6, "ko": "태권당수", "type": 13, "en": "Karate Chop", "cooldown": 0.8, "energy": 8}, {
    "id": 209,
    "attack": 10,
    "ko": "불꽃세례",
    "type": 2,
    "en": "Ember",
    "cooldown": 1.05,
    "energy": 10
  }, {"id": 210, "attack": 9, "ko": "날개치기", "type": 6, "en": "Wing Attack", "cooldown": 0.75, "energy": 7}, {
    "id": 211,
    "attack": 10,
    "ko": "쪼기",
    "type": 6,
    "en": "Peck",
    "cooldown": 1.15,
    "energy": 10
  }, {"id": 212, "attack": 5, "ko": "핥기", "type": 15, "en": "Lick", "cooldown": 0.5, "energy": 6}, {
    "id": 213,
    "attack": 11,
    "ko": "섀도크루",
    "type": 15,
    "en": "Shadow Claw",
    "cooldown": 0.95,
    "energy": 8
  }, {"id": 214, "attack": 7, "ko": "덩굴채찍", "type": 0, "en": "Vine Whip", "cooldown": 0.65, "energy": 7}, {
    "id": 215,
    "attack": 15,
    "ko": "잎날가르기",
    "type": 0,
    "en": "Razor Leaf",
    "cooldown": 1.45,
    "energy": 12
  }, {"id": 216, "attack": 6, "ko": "머드숏", "type": 12, "en": "Mud Shot", "cooldown": 0.55, "energy": 7}, {
    "id": 217,
    "attack": 15,
    "ko": "얼음뭉치",
    "type": 8,
    "en": "Ice Shard",
    "cooldown": 1.4,
    "energy": 7
  }, {"id": 218, "attack": 9, "ko": "얼음숨결", "type": 8, "en": "Frost Breath", "cooldown": 0.81, "energy": 7}, {
    "id": 219,
    "attack": 10,
    "ko": "전광석화",
    "type": 7,
    "en": "Quick Attack",
    "cooldown": 1.33,
    "energy": 7
  }, {"id": 220, "attack": 6, "ko": "할퀴기", "type": 7, "en": "Scratch", "cooldown": 0.5, "energy": 7}, {
    "id": 221,
    "attack": 12,
    "ko": "몸통박치기",
    "type": 7,
    "en": "Tackle",
    "cooldown": 1.1,
    "energy": 10
  }, {"id": 222, "attack": 7, "ko": "막치기", "type": 7, "en": "Pound", "cooldown": 0.54, "energy": 7}, {
    "id": 223,
    "attack": 12,
    "ko": "풀베기",
    "type": 7,
    "en": "Cut",
    "cooldown": 1.13,
    "energy": 10
  }, {"id": 224, "attack": 12, "ko": "독찌르기", "type": 1, "en": "Poison Jab", "cooldown": 1.05, "energy": 10}, {
    "id": 225,
    "attack": 10,
    "ko": "용해액",
    "type": 1,
    "en": "Acid",
    "cooldown": 1.05,
    "energy": 10
  }, {"id": 226, "attack": 7, "ko": "사이코커터", "type": 10, "en": "Psycho Cut", "cooldown": 0.57, "energy": 7}, {
    "id": 227,
    "attack": 12,
    "ko": "돌떨구기",
    "type": 5,
    "en": "Rock Throw",
    "cooldown": 1.36,
    "energy": 15
  }, {"id": 228, "attack": 8, "ko": "메탈크로우", "type": 14, "en": "Metal Claw", "cooldown": 0.63, "energy": 7}, {
    "id": 229,
    "attack": 10,
    "ko": "불릿펀치",
    "type": 14,
    "en": "Bullet Punch",
    "cooldown": 1.2,
    "energy": 10
  }, {"id": 230, "attack": 6, "ko": "물대포", "type": 3, "en": "Water Gun", "cooldown": 0.5, "energy": 7}, {
    "id": 231,
    "attack": 0,
    "ko": "튀어오르기",
    "type": 3,
    "en": "Splash",
    "cooldown": 1.23,
    "energy": 10
  }, {"id": 232, "attack": 6, "ko": "물대포", "type": 3, "en": "Water Gun*", "cooldown": 0.5, "energy": 7}, {
    "id": 233,
    "attack": 15,
    "ko": "진흙뿌리기",
    "type": 12,
    "en": "Mud Slap",
    "cooldown": 1.35,
    "energy": 12
  }, {
    "id": 234,
    "attack": 12,
    "ko": "사념의박치기",
    "type": 10,
    "en": "Zen Headbutt",
    "cooldown": 1.05,
    "energy": 9
  }, {"id": 235, "attack": 15, "ko": "염동력", "type": 10, "en": "Confusion", "cooldown": 1.51, "energy": 14}, {
    "id": 236,
    "attack": 6,
    "ko": "독침",
    "type": 1,
    "en": "Poison Sting",
    "cooldown": 0.58,
    "energy": 8
  }, {"id": 237, "attack": 25, "ko": "거품", "type": 3, "en": "Bubble", "cooldown": 2.3, "energy": 25}, {
    "id": 238,
    "attack": 12,
    "ko": "속여때리기",
    "type": 17,
    "en": "Feint Attack",
    "cooldown": 1.04,
    "energy": 10
  }, {"id": 239, "attack": 15, "ko": "강철날개", "type": 14, "en": "Steel Wing", "cooldown": 1.33, "energy": 12}, {
    "id": 240,
    "attack": 10,
    "ko": "불꽃엄니",
    "type": 2,
    "en": "Fire Fang",
    "cooldown": 0.84,
    "energy": 8
  }, {"id": 241, "attack": 15, "ko": "바위깨기", "type": 13, "en": "Rock Smash", "cooldown": 1.41, "energy": 7}, {
    "id": 242,
    "attack": 0,
    "ko": "변신",
    "type": 7,
    "en": "Transform",
    "cooldown": 1.73,
    "energy": 0
  }];


  var attrs = [{
    "ko": "풀",
    "en": "Grass",
    "attack": {"strong": [12, 5, 3], "weak": [11, 9, 2, 6, 0, 1, 14]},
    "defense": {"strong": [0, 3, 4, 12], "weak": [1, 2, 6, 8, 9, 11]},
    "id": 0
  }, {
    "ko": "독",
    "en": "Poison",
    "attack": {"strong": [16, 0], "weak": [10, 12, 1, 5]},
    "defense": {"strong": [0, 1, 11, 13, 16], "weak": [10, 12, 15]},
    "id": 1
  }, {
    "ko": "불",
    "en": "Fire",
    "attack": {"strong": [11, 0, 8, 14], "weak": [9, 2, 5, 3]},
    "defense": {"strong": [0, 2, 8, 11, 14, 16], "weak": [3, 5, 9, 12]},
    "id": 2
  }, {
    "ko": "물",
    "en": "Water",
    "attack": {"strong": [2, 5, 12], "weak": [9, 0, 3]},
    "defense": {"strong": [2, 3, 8, 14], "weak": [0, 4, 9]},
    "id": 3
  }, {
    "ko": "전기",
    "en": "Electric",
    "attack": {"strong": [6, 3], "weak": [9, 4, 0]},
    "defense": {"strong": [4, 6, 14], "weak": [9, 12]},
    "id": 4
  }, {
    "ko": "바위",
    "en": "Rock",
    "attack": {"strong": [11, 2, 6, 8], "weak": [13, 14, 12]},
    "defense": {"strong": [1, 2, 6, 7], "weak": [0, 3, 12, 13, 14]},
    "id": 5
  }, {
    "ko": "비행",
    "en": "Flying",
    "attack": {"strong": [13, 11, 0], "weak": [4, 5, 14]},
    "defense": {"strong": [0, 11, 13], "weak": [4, 5, 8]},
    "id": 6
  }, {
    "ko": "노말",
    "en": "Normal",
    "attack": {"strong": [], "weak": [5, 14]},
    "defense": {"strong": [], "weak": [13]},
    "id": 7
  }, {
    "ko": "얼음",
    "en": "Ice",
    "attack": {"strong": [9, 6, 0, 12], "weak": [2, 8, 14, 3]},
    "defense": {"strong": [8, 9], "weak": [2, 5, 13, 14]},
    "id": 8
  }, {
    "ko": "드래곤",
    "en": "Dragon",
    "attack": {"strong": [4, 2, 0, 3], "weak": [9, 16, 8]},
    "defense": {"strong": [0, 2, 3, 4, 9], "weak": [8, 16]},
    "id": 9
  }, {
    "ko": "에스퍼",
    "en": "Psychic",
    "attack": {"strong": [13, 1], "weak": [10, 14]},
    "defense": {"strong": [1, 10, 13], "weak": [11, 17]},
    "id": 10
  }, {
    "ko": "벌레",
    "en": "Bug",
    "attack": {"strong": [10, 0, 17], "weak": [16, 13, 2, 6, 15, 1, 14]},
    "defense": {"strong": [0, 12, 13], "weak": [2, 5, 6, 15]},
    "id": 11
  }, {
    "ko": "땅",
    "en": "Ground",
    "attack": {"strong": [4, 2, 1, 5, 14], "weak": [11, 0]},
    "defense": {"strong": [1, 5], "weak": [0, 3, 8]},
    "id": 12
  }, {
    "ko": "격투",
    "en": "Fighting",
    "attack": {"strong": [7, 8, 5, 14, 17], "weak": [11, 16, 6, 10, 1]},
    "defense": {"strong": [5, 11, 17], "weak": [6, 10, 16]},
    "id": 13
  }, {
    "ko": "강철",
    "en": "Steel",
    "attack": {"strong": [16, 8, 5], "weak": [4, 2, 14, 3]},
    "defense": {"strong": [0, 5, 6, 7, 8, 10, 11, 14, 16], "weak": [2, 12, 13]},
    "id": 14
  }, {
    "ko": "고스트",
    "en": "Ghost",
    "attack": {"strong": [11, 1], "weak": [15, 17]},
    "defense": {"strong": [11, 15], "weak": [17]},
    "id": 15
  }, {
    "ko": "요정",
    "en": "Fairy",
    "attack": {"strong": [9, 13, 17], "weak": [2, 1, 14]},
    "defense": {"strong": [9, 11, 13, 17], "weak": [1, 14]},
    "id": 16
  },
    {
      "ko": "암흑",
      "en": "Dark",
      "attack": {"strong": [15, 10], "weak": [17, 16, 13]},
      "defense": {"strong": [17, 15], "weak": [11, 16, 13]},
      "id": 17
    }
  ];

  skills.forEach(function (skill) {
    skill.type = attrs[skill.type];
  });


  var rare = [0, 0.69, 0.042, 0.017, 0.253, 0.012, 0.0031, 0.58, 0.034, 0.0067, 3.032, 0.187, 0.022, 7.12, 0.44, 0.051, 15.98, 1.02, 0.13, 13.05, 0.41, 4.73, 0.15, 2.27, 0.072, 0.21, 0.0076, 1.11, 0.037, 1.38, 0.088, 0.012, 1.31, 0.083, 0.017, 0.92, 0.012, 0.22, 0.0077, 0.39, 0.018, 6.52, 0.42, 1.02, 0.064, 0.0097, 2.36, 0.074, 2.28, 0.072, 0.4, 0.014, 0.86, 0.022, 2.54, 0.087, 0.92, 0.031, 0.92, 0.017, 2.19, 0.13, 0.011, 0.42, 0.027, 0.0073, 0.49, 0.034, 0.0068, 1.15, 0.072, 0.0059, 0.81, 0.082, 1.19, 0.071, 0.0047, 0.51, 0.011, 1.05, 0.036, 0.71, 0.023, 0.0212, 0.52, 0.22, 0.28, 0.013, 0.052, 0.0031, 0.52, 0.015, 0.79, 0.052, 0.0067, 0.1, 3.21, 0.1, 2.12, 0.062, 0.65, 0.02, 0.78, 0.014, 0.61, 0.02, 0.02, 0.022, 0.011, 0.2, 0.016, 0.63, 0.022, 0.013, 0.228, 0.0086, 1.13, 0.034, 2.18, 0.08, 1.95, 0.034, 0.0031, 0.14, 0.35, 0.074, 0.1, 0.99, 0.12, 4.78, 0.0032, 0.006, 0, 2.75, 0.014, 0.012, 0.017, 0.012, 0.14, 0.0061, 0.1, 0.0032, 0.018, 0.016, 0, 0, 0, 0.3, 0.02, 0.0011, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.003, 0.005, 0.006, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01, 0.006, 0.009, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var speciesValue = [[], [118, 118, 90, 196], [151, 151, 120, 142], [198, 198, 160, 48], [116, 96, 78, 216], [158, 129, 116, 146], [223, 176, 156, 49], [94, 122, 88, 208], [126, 155, 118, 149], [171, 210, 158, 63], [55, 62, 90, 246], [45, 64, 100, 245], [167, 151, 120, 131], [63, 55, 80, 248], [46, 86, 90, 243], [169, 150, 130, 125], [85, 76, 80, 237], [117, 108, 126, 180], [166, 157, 166, 97], [103, 70, 60, 241], [161, 144, 110, 144], [112, 61, 80, 234], [182, 135, 130, 127], [110, 102, 70, 223], [167, 158, 120, 128], [112, 101, 70, 222], [193, 165, 120, 106], [126, 145, 100, 164], [182, 202, 150, 69], [86, 94, 110, 218], [117, 126, 140, 160], [180, 174, 180, 70], [105, 76, 92, 225], [137, 112, 122, 165], [204, 157, 162, 79], [107, 116, 140, 170], [178, 171, 190, 64], [96, 122, 76, 215], [169, 204, 146, 81], [80, 44, 230, 179], [156, 93, 280, 75], [83, 76, 80, 238], [161, 153, 150, 115], [131, 116, 90, 189], [153, 139, 120, 145], [202, 170, 150, 80], [121, 99, 70, 219], [165, 146, 120, 132], [100, 102, 120, 198], [179, 150, 140, 111], [109, 88, 20, 244], [167, 147, 70, 159], [92, 81, 80, 235], [150, 139, 130, 143], [122, 96, 100, 199], [191, 163, 160, 84], [148, 87, 80, 202], [207, 144, 130, 103], [136, 96, 110, 188], [227, 166, 180, 34], [101, 82, 80, 231], [130, 130, 130, 157], [182, 187, 180, 53], [195, 103, 50, 182], [232, 138, 80, 124], [271, 194, 110, 32], [137, 88, 140, 169], [177, 130, 160, 113], [234, 162, 180, 31], [139, 64, 100, 211], [172, 95, 130, 154], [207, 138, 160, 89], [97, 182, 80, 173], [166, 237, 160, 42], [132, 163, 80, 163], [164, 196, 110, 110], [211, 229, 160, 24], [170, 132, 100, 148], [207, 167, 130, 92], [109, 109, 180, 151], [177, 194, 190, 43], [165, 128, 50, 186], [223, 182, 100, 88], [124, 118, 104, 184], [158, 88, 70, 201], [218, 145, 120, 102], [85, 128, 130, 187], [139, 184, 180, 93], [135, 90, 160, 158], [190, 184, 210, 26], [116, 168, 60, 185], [186, 323, 100, 22], [186, 70, 60, 200], [223, 112, 90, 138], [261, 156, 120, 66], [85, 288, 70, 129], [89, 158, 120, 167], [144, 215, 170, 74], [181, 156, 60, 152], [240, 214, 110, 39], [109, 114, 80, 210], [173, 179, 120, 108], [107, 140, 120, 168], [233, 158, 190, 28], [90, 165, 100, 176], [144, 200, 120, 117], [224, 211, 100, 67], [193, 212, 100, 90], [108, 137, 180, 137], [119, 164, 80, 171], [174, 221, 130, 78], [140, 157, 160, 119], [222, 206, 210, 11], [60, 176, 500, 4], [183, 205, 130, 82], [181, 165, 210, 47], [129, 125, 60, 203], [187, 182, 110, 105], [123, 115, 90, 194], [175, 154, 160, 96], [137, 112, 60, 204], [210, 184, 120, 83], [192, 233, 80, 87], [218, 170, 140, 76], [223, 182, 130, 68], [198, 173, 130, 94], [206, 169, 130, 91], [238, 197, 130, 38], [198, 197, 150, 56], [29, 102, 40, 250], [237, 197, 190, 15], [186, 190, 260, 12], [91, 91, 96, 224], [104, 121, 110, 192], [205, 177, 260, 9], [232, 201, 130, 40], [246, 204, 130, 29], [153, 139, 130, 141], [155, 174, 70, 150], [207, 227, 140, 33], [148, 162, 60, 166], [220, 203, 120, 58], [221, 164, 160, 57], [190, 190, 320, 6], [192, 249, 180, 17], [253, 188, 180, 16], [251, 184, 180, 21], [119, 94, 82, 213], [163, 138, 122, 140], [263, 201, 182, 8], [330, 200, 212, 3], [210, 210, 200, 19], [92, 122, 90, 209], [122, 155, 120, 155], [168, 202, 160, 72], [116, 96, 78, 217], [158, 129, 116, 147], [223, 176, 156, 50], [117, 116, 100, 193], [150, 151, 130, 134], [205, 197, 170, 35], [79, 77, 70, 242], [148, 130, 170, 126], [67, 101, 120, 220], [161, 179, 200, 61], [72, 142, 80, 214], [107, 209, 110, 136], [105, 73, 80, 233], [161, 130, 140, 133], [194, 178, 170, 59], [106, 106, 150, 172], [146, 146, 250, 60], [77, 63, 40, 249], [75, 91, 100, 229], [69, 34, 180, 221], [67, 116, 70, 236], [140, 191, 110, 130], [134, 89, 80, 212], [192, 146, 130, 112], [114, 82, 110, 207], [145, 112, 140, 153], [211, 172, 180, 41], [169, 189, 150, 85], [37, 93, 140, 226], [112, 152, 200, 116], [167, 198, 140, 86], [174, 192, 180, 54], [67, 101, 70, 239], [91, 127, 110, 195], [118, 197, 150, 114], [136, 112, 110, 175], [55, 55, 60, 251], [185, 148, 150, 101], [154, 94, 130, 162], [75, 75, 110, 232], [152, 152, 190, 95], [261, 194, 130, 25], [126, 250, 190, 37], [175, 87, 120, 161], [177, 194, 190, 44], [167, 167, 120, 122], [136, 91, 96, 197], [60, 106, 380, 55], [182, 133, 140, 121], [108, 146, 100, 178], [161, 242, 150, 51], [131, 131, 200, 118], [143, 204, 130, 107], [148, 333, 150, 13], [137, 89, 120, 183], [212, 137, 180, 73], [184, 166, 130, 104], [236, 191, 140, 36], [17, 396, 40, 123], [234, 189, 160, 27], [189, 157, 110, 120], [142, 93, 120, 177], [236, 144, 180, 45], [118, 71, 80, 227], [155, 209, 120, 100], [90, 74, 100, 230], [181, 147, 200, 77], [118, 175, 130, 139], [127, 69, 70, 228], [197, 141, 150, 98], [128, 90, 90, 205], [149, 260, 170, 30], [149, 260, 130, 62], [152, 93, 90, 190], [224, 159, 150, 71], [194, 194, 150, 65], [107, 107, 180, 156], [214, 214, 180, 23], [198, 183, 170, 52], [192, 132, 146, 109], [40, 88, 110, 240], [64, 64, 70, 247], [173, 214, 100, 99], [153, 116, 90, 174], [135, 110, 90, 191], [151, 108, 90, 181], [158, 211, 190, 46], [129, 229, 510, 1], [241, 210, 180, 14], [235, 176, 230, 10], [180, 235, 200, 20], [115, 93, 100, 206], [155, 133, 140, 135], [251, 212, 200, 7], [193, 323, 212, 5], [263, 301, 212, 2], [210, 210, 200, 18]];
  var bestAttacks = [0, 214, 214, 214, 220, 220, 210, 237, 230, 230, 201, 201, 201, 201, 201, 224, 221, 210, 210, 221, 202, 211, 239, 236, 202, 205, 206, 216, 216, 236, 236, 224, 236, 224, 224, 222, 222, 209, 209, 222, 222, 202, 210, 215, 215, 215, 201, 201, 201, 201, 233, 233, 220, 220, 230, 230, 220, 207, 202, 240, 237, 237, 237, 234, 226, 226, 207, 207, 208, 214, 215, 215, 237, 224, 227, 233, 233, 209, 209, 230, 230, 206, 206, 223, 211, 238, 217, 218, 224, 224, 221, 218, 212, 213, 213, 227, 222, 234, 237, 228, 206, 206, 235, 234, 233, 233, 241, 241, 234, 221, 221, 233, 233, 222, 214, 233, 230, 230, 216, 224, 230, 230, 234, 239, 218, 205, 209, 241, 221, 231, 202, 218, 242, 221, 230, 205, 209, 221, 230, 230, 220, 216, 202, 234, 218, 205, 209, 204, 204, 204, 235, 222];
  var bestSkills = [0, 118, 116, 116, 24, 24, 103, 58, 107, 107, 133, 133, 49, 133, 133, 90, 45, 45, 122, 131, 14, 38, 46, 92, 92, 78, 78, 26, 31, 90, 90, 31, 131, 90, 31, 87, 87, 24, 103, 131, 14, 90, 121, 90, 90, 116, 59, 116, 99, 49, 26, 32, 131, 88, 28, 107, 28, 28, 24, 103, 131, 106, 107, 60, 70, 108, 28, 28, 28, 118, 118, 116, 105, 107, 64, 32, 32, 103, 103, 108, 108, 79, 36, 117, 38, 38, 58, 40, 90, 92, 105, 40, 90, 90, 90, 32, 108, 108, 105, 100, 79, 14, 108, 116, 94, 31, 32, 123, 14, 90, 90, 127, 32, 14, 116, 31, 82, 107, 58, 22, 65, 107, 108, 49, 60, 78, 103, 100, 31, 133, 107, 40, 133, 131, 107, 78, 103, 99, 62, 107, 57, 32, 14, 131, 40, 78, 103, 58, 82, 83, 108, 40];
  var canGetAttacks = [[], [214, 221], [214, 215], [214, 215], [220, 209], [220, 209], [210, 209], [237, 221], [230, 202], [230, 202], [201, 221], [201, 221], [201, 235], [201, 236], [201, 236], [224, 201], [221, 219], [210, 239], [210, 239], [221, 219], [202, 219], [211, 219], [239, 211], [236, 225], [202, 225], [205, 219], [206, 205], [216, 220], [216, 228], [236, 202], [236, 202], [224, 202], [236, 211], [224, 236], [224, 200], [222, 234], [222, 234], [209, 219], [209, 238], [222, 238], [222, 238], [202, 219], [210, 202], [215, 225], [215, 225], [215, 225], [201, 220], [201, 200], [201, 235], [201, 235], [233, 216, 220], [233, 216, 203], [220, 202], [220, 238], [230, 234], [230, 235], [220, 208], [207, 208], [202, 209], [240, 202], [237, 216], [237, 216], [237, 216], [234], [226, 235], [226, 235], [207, 208], [207, 208], [208, 229], [214, 225], [215, 225], [215, 225], [237, 236], [224, 225], [227, 221], [233, 216, 227], [233, 216, 227], [209, 221], [209, 207], [230, 235], [230, 235], [206, 205], [206, 205], [223, 200], [211, 219], [238, 239], [230, 217, 212], [218, 217], [224, 225, 233], [224, 225, 212], [221, 217], [218, 217], [212, 203], [213, 212], [213, 203], [227, 221], [222, 235], [234, 235], [237, 216], [228, 216], [206, 221], [206, 221], [235], [234, 235], [233, 241], [233, 241], [241, 207], [241, 229], [234, 212], [225, 221], [225, 221], [233, 241], [233, 241], [222, 234], [214], [233, 207], [230, 237], [230, 204], [216, 211], [224, 211], [230, 221, 219], [230, 221, 219], [234, 235], [239, 200], [218, 222], [205, 207], [209, 208], [241, 200], [221, 234], [231], [202, 204], [218, 217], [242], [221, 219], [230], [205], [209], [221, 234, 219], [230, 216], [230, 227, 216], [220, 216], [216, 200], [202, 239], [234, 212], [218], [205], [209], [204], [204], [204, 239], [226, 235], [222], [215, 221], [215, 221], [214, 215], [209, 221], [209, 221], [209, 213], [230, 220], [230, 220], [230, 202], [220, 219], [203, 219], [221, 211], [221, 211], [201, 221], [201, 221], [201, 236], [201, 236], [210, 202], [237, 206], [230, 206], [205, 219], [222, 234], [222, 238], [234, 211], [234, 239], [211], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [234, 235], [202, 238], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [241, 207], [221], [218, 222], [205, 207], [209, 208], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221], [221]];
  var canGetSkills = [[], [118, 90, 59], [118, 116, 90], [116, 90, 47], [24, 102, 101], [24, 102, 115], [103, 24, 83], [58, 57, 105], [107, 39, 57], [107, 39, 36], [133], [133], [49, 108, 99], [133], [133], [90, 100, 45], [45, 121, 80], [45, 121, 80], [122, 45, 121], [131, 129, 26], [14, 129, 26], [38, 45, 80], [46, 45, 80], [92, 90, 13], [92, 91, 16], [78, 79, 35], [78, 77, 123], [64, 26, 63], [31, 95, 63], [90, 131, 50], [90, 50, 26], [31, 32, 91], [90, 131, 126], [90, 26, 126], [31, 91, 22], [87, 131, 84], [87, 108, 86], [131, 24, 101], [103, 42, 24], [131, 88, 86, 84], [14, 88, 86], [90, 50, 121], [50, 121, 69], [90, 59, 87], [90, 47, 87], [116, 47, 87], [59, 100, 89], [116, 100, 89], [99, 50, 30], [49, 108, 50], [26, 96, 63], [31, 32, 96], [131, 16, 51], [88, 65, 51], [28, 58, 30], [107, 108, 39], [28, 123, 56], [28, 56, 51], [131, 24, 21], [103, 24, 95], [131, 53, 96], [106, 53, 96], [107, 54, 33], [60, 70, 99], [70, 30, 86], [108, 70, 86], [28, 123, 56], [28, 123, 54], [28, 32, 54], [118, 90, 13], [118, 90, 59], [116, 90, 117], [105, 53, 13], [107, 91, 40], [64, 26, 63], [32, 64, 26], [32, 31, 62], [103, 21, 101], [103, 42, 46], [108, 60, 105], [108, 39, 105], [79, 35, 72], [36, 35, 72], [117, 45, 121], [38, 45, 125], [38, 45, 121], [58, 57, 111], [40, 57, 111], [90, 18, 96], [92, 91, 16], [105, 53, 111], [40, 107, 111], [90, 16, 69], [90, 70, 16], [90, 91, 70, 16], [32, 64, 74], [108, 60, 30], [108, 60, 70], [105, 53, 20], [100, 105, 20], [79, 35, 99], [79, 14, 35], [108, 59, 62], [116, 108, 59], [94, 26, 95], [31, 94, 26], [32, 123, 56, 127], [123, 77, 115, 33], [14, 118, 127], [90, 18, 16], [90, 70, 16], [127, 95, 126], [32, 31, 22], [14, 108, 86, 30], [118, 116, 90], [31, 123, 127], [82, 36, 53], [107, 40, 82], [58, 105, 126], [22, 46, 111], [65, 53, 125], [107, 108, 65, 30], [108, 70, 30], [49, 100, 51], [60, 33, 85], [78, 79, 77], [103, 24, 115], [100, 54, 20], [31, 74, 126], [133], [107, 82, 80], [40, 39, 82], [133], [131, 125, 26], [107, 58, 105], [78, 79, 35], [103, 42, 24], [99, 35, 30], [104, 62, 63], [107, 64, 62], [57, 62, 63], [32, 105, 62], [14, 74, 62], [131, 14, 31], [40, 39, 111], [78, 79, 35], [103, 42, 24], [58, 80, 13], [82, 58, 13], [83, 14, 82], [108, 14, 70], [40, 122, 108, 116, 103, 14, 31, 78, 87, 82], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [79, 77, 84], [131, 108, 99], [131, 108, 70], [86, 60, 62], [86, 45, 62], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [131, 123, 56], [133], [39, 60, 33], [79, 77, 35], [24, 123, 115], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133], [133]];
  // var canEvolveCandies = [0, 25, 100, 0, 25, 100, 0, 25, 100, 0, 12, 50, 0, 12, 25, 0, 12, 50, 0, 25, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 25, 100, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 25, 100, 0, 25, 100, 0, 25, 100, 0, 50, 0, 25, 100, 0, 50, 0, 50, 0, 50, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 400, 0, 0, 0, 25, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 25, 100, 0, 0, 0];
  // var buddyCandies = [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 3, 1, 1, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  angular.module('Podic.services')
    .factory('Pokemons', function ($ajax, text, cpCal) {

      var imgPath = "images/pokemons/";

      var languageSet = function () {
        var language = text.getLanguage();
        skills.forEach(function (o) {
          o.name = o[language];
        });
        attrs.forEach(function (o) {
          o.name = o[language];
        });
        Pokemons.forEach(function (o, i) {
          o.name = o[language];
          var descriptions = text('descriptions');
          if (descriptions[i]) {
            o.desc = descriptions[i];
          }
        });
      };
      languageSet();

      text.onChangeLanguage.push(languageSet);


      Pokemons.forEach(function (pokemon, i) {
        pokemon.id = i;
        if (i > 151)
          pokemon.img = "https://pokemongo.gamepress.gg/sites/default/files/styles/240w/public/2016-09/" + i + ".png";
        else if (i > 99)
          pokemon.img = imgPath + i + ".png";
        else if (i > 9)
          pokemon.img = imgPath + "0" + (i) + ".png";
        else
          pokemon.img = imgPath + "00" + (i) + ".png";
        pokemon.candies = 0;
        pokemon.rarity = rare[i];
        pokemon.evolvePokemons = pokemon.evolve.map(function (id) {
          return Pokemons[id];
        });
        pokemon.value = speciesValue[i];
        pokemon.power = speciesValue[i][0] + speciesValue[i][1] + speciesValue[i][2];
        pokemon.bestAttack = bestAttacks[i];
        pokemon.bestSkill = bestSkills[i];
        if (canGetSkills[i])
          pokemon.skills = canGetSkills[i].map(function (id) {
            return skills.findById(id);
          });
        if (canGetAttacks[i])
          pokemon.attacks = canGetAttacks[i].map(function (id) {
            return skills.findById(id);
          });
        if (pokemon.attr)
          pokemon.types = pokemon.attr.map(function (id) {
            return attrs[id];
          });
        pokemon.maxCp = cpCal.getCp(pokemon, 78, 15, 15, 15);

      });

      $ajax.get('/api/v1/pokemon/stastic').then(function (statics) {
        statics.forEach(function (data) {
          if (!data)
            return;
          var pokemon = Pokemons.findById(data.id);
          pokemon.data = data;
          try {
            pokemon.data.skills = JSON.parse(data.skillMap);
          }
          catch (e) {
          }
        });
      });

      return {
        all: function () {
          return Pokemons;
        },
        get: function (i) {
          return Pokemons[i];
        },
        skills: skills,
        attrs: attrs
      };
    });
})();

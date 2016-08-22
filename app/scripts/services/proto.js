(function () {
  var protoString =
    "message RequestEnvelop {\n"+
    "  required int32 unknown1 = 1;\n"+
    "  optional int64 rpc_id = 3;\n"+
    "  repeated Requests requests = 4;\n"+
    "  optional Unknown6 unknown6 = 6;\n"+
    "  optional double latitude = 7;\n"+
    "  optional double longitude = 8;\n"+
    "  optional double altitude = 9;\n"+
    "  optional AuthInfo auth = 10;\n"+
    "  optional AuthTicket auth_ticket = 11;\n"+
    "  optional int64 unknown12 = 12;\n"+
    "\n"+
    "  message Requests {\n"+
    "    required int32 type = 1;\n"+
    "    optional bytes message = 2;\n"+
    "  }\n"+
    "\n"+
    "  message Unknown3 {\n"+
    "    required string unknown4 = 1;\n"+
    "  }\n"+
    "\n"+
    "  message Unknown6 {\n"+
    "    required int32 unknown1 = 1;\n"+
    "    required Unknown2 unknown2 = 2;\n"+
    "\n"+
    "    message Unknown2 {\n"+
    "      required bytes unknown1 = 1;\n"+
    "    }\n"+
    "\n"+
    "  }\n"+
    "\n"+
    "  message AuthTicket {\n"+
    "\t\toptional bytes start = 1;\n"+
    "\t\toptional uint64 expire_timestamp_ms = 2;\n"+
    "\t\toptional bytes end = 3;\n"+
    "\t}\n"+
    "\n"+
    "  message AuthInfo {\n"+
    "    required string provider = 1;\n"+
    "    required JWT token = 2;\n"+
    "\n"+
    "    message JWT {\n"+
    "      required string contents = 1;\n"+
    "      required int32 unknown13  = 2;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message MessageQuad {\n"+
    "    repeated uint64 f1 = 1 [packed=true];\n"+
    "    repeated int64 f2 = 2 [packed=true];\n"+
    "    required double lat = 3;\n"+
    "    required double long = 4;\n"+
    "  }\n"+
    "\n"+
    "  message CatchPokemonMessage {\n"+
    "    required fixed64 encounter_id = 1;\n"+
    "    required int32 pokeball = 2;\n"+
    "    required double normalized_reticle_size = 3;\n"+
    "    required string spawnpoint_id = 4;\n"+
    "    required bool hit_pokemon = 5;\n"+
    "    required double spin_modifier = 6;\n"+
    "    required double normalized_hit_position = 7;\n"+
    "   }\n"+
    "\n"+
    "  message EvolvePokemonMessage {\n"+
    "    required fixed64 PokemonId = 1;\n"+
    "  }\n"+
    "\n"+
    "  message TransferPokemonMessage {\n"+
    "    required fixed64 PokemonId = 1;\n"+
    "  }\n"+
    "\n"+
    "  message LevelUpRewardsMessage {\n"+
    "\t\trequired int32 level = 1;\n"+
    "\t}\n"+
    "\n"+
    "  message UseItemEggIncubatorMessage {\n"+
    "    required string item_id = 1;\n"+
    "    required uint64 PokemonId = 2;\n"+
    "\t}\n"+
    "\n"+
    "  message GetHatchedEggsMessage {\n"+
    "  // nothin..\n"+
    "  }\n"+
    "  message UseItemXpBoostMessage {\n"+
    "\t\trequired int32 item_id = 1;\n"+
    "\t}\n"+
    "\n"+
    "  message EncounterMessage {\n"+
    "    repeated fixed64 encounter_id = 1;\n"+
    "    required string spawnpoint_id = 2;\n"+
    "    required double player_latitude = 3;\n"+
    "    required double player_longitude = 4;\n"+
    "  }\n"+
    "\n"+
    "  message FortSearchMessage {\n"+
    "\t  required string fort_id = 1;\n"+
    "\t  required double player_latitude = 2;\n"+
    "\t  required double player_longitude = 3;\n"+
    "\t  required double fort_latitude = 4;\n"+
    "    required double fort_longitude = 5;\n"+
    "  }\n"+
    "\n"+
    "\tmessage FortDetailsRequest\n"+
    "\t{\n"+
    "  \trequired string fort_id = 1;\n"+
    " \t  required double fort_latitude = 2;\n"+
    "    required double fort_longitude = 3;\n"+
    "\t}\n"+
    "\n"+
    "  //rpc id : 137\n"+
    "  message RecycleInventoryItemMessage {\n"+
    "      required int32 item_id = 1;\n"+
    "      required int32 count = 2;\n"+
    "  }\n"+
    "\n"+
    "  message ReleasePokemonMessage {\n"+
    "    optional fixed64 pokemon_id = 1;\n"+
    "    repeated fixed64 pokemon_ids = 2;\n"+
    "  }\n"+
    "\n"+
    "  message ActionLogMessage {\n"+
    "  \t// No message needed.\n"+
    "  }\n"+
    "}\n"+
    "\n"+
    "message ResponseEnvelop {\n"+
    "  optional int32 unknown1 = 1;\n"+
    "  optional int64 unknown2 = 2;\n"+
    "  optional string api_url = 3;\n"+
    "  optional Unknown6 unknown6 = 6;\n"+
    "  optional AuthTicket auth_ticket = 7;\n"+
    "  repeated bytes payload = 100;\n"+
    "\n"+
    "  message Unknown6 {\n"+
    "    required int32 unknown1 = 1;\n"+
    "    required Unknown2 unknown2 = 2;\n"+
    "\n"+
    "    message Unknown2 {\n"+
    "      optional uint64 unknown1 = 1;\n"+
    "      repeated bytes storeitems = 2;\n"+
    "      repeated bytes currencies = 3;\n"+
    "      optional string unknown4 = 4;\n"+
    "    }\n"+
    "\n"+
    "  }\n"+
    "\n"+
    "  message AuthTicket {\n"+
    "\t\toptional bytes start = 1;\n"+
    "\t\toptional uint64 expire_timestamp_ms = 2;\n"+
    "\t\toptional bytes end = 3;\n"+
    "\t}\n"+
    "\n"+
    "  message HeartbeatPayload {\n"+
    "    repeated ClientMapCell cells = 1;\n"+
    "  }\n"+
    "\n"+
    "  message ClientMapCell {\n"+
    "    required uint64 S2CellId = 1;\n"+
    "    required int64 AsOfTimeMs = 2;\n"+
    "    repeated PokemonFortProto Fort = 3;\n"+
    "    repeated ClientSpawnPointProto SpawnPoint = 4;\n"+
    "    repeated WildPokemonProto WildPokemon = 5;\n"+
    "    //unknown DeletedObject = 6;\n"+
    "    optional bool IsTruncatedList = 7;\n"+
    "    repeated PokemonSummaryFortProto FortSummary = 8;\n"+
    "    repeated ClientSpawnPointProto DecimatedSpawnPoint = 9;\n"+
    "    repeated MapPokemonProto MapPokemon = 10;\n"+
    "    repeated NearbyPokemonProto NearbyPokemon = 11;\n"+
    "  }\n"+
    "\n"+
    "  message MapPokemonProto {\n"+
    "    required string SpawnPointId = 1;\n"+
    "    required fixed64 EncounterId = 2;\n"+
    "    required int32 PokedexTypeId = 3;\n"+
    "    required int64 ExpirationTimeMs = 4;\n"+
    "    optional double Latitude = 5;\n"+
    "    optional double Longitude = 6;\n"+
    "  }\n"+
    "\n"+
    "  message PokemonFortProto {\n"+
    "    required string FortId = 1;\n"+
    "    required int64 LastModifiedMs = 2;\n"+
    "    required double Latitude = 3;\n"+
    "    required double Longitude = 4;\n"+
    "    optional int32 Team = 5;\n"+
    "    optional int32 GuardPokemonId = 6;\n"+
    "    optional int32 GuardPokemonLevel = 7;\n"+
    "    required bool Enabled = 8;\n"+
    "    // ENUM.Holoholo.Rpc.FortType FortType = 9;\n"+
    "    optional int32 FortType = 9;\n"+
    "    optional int64 GymPoints = 10;\n"+
    "    optional bool IsInBattle = 11;\n"+
    "    optional bytes ActiveFortModifier = 12;\n"+
    "    optional FortLureInfoProto LureInfo = 13;\n"+
    "    optional int64 CooldownCompleteMs = 14;\n"+
    "    // ENUM.Holoholo.Rpc.Sponsor.Types.FortSponsor.Sponsor Sponsor = 15;\n"+
    "    optional int32 Sponsor = 15;\n"+
    "    // ENUM.Holoholo.Rpc.RenderingType.Types.FortRenderingType.RenderingType RenderingType = 16;\n"+
    "    optional int32 RenderingType = 16;\n"+
    "  }\n"+
    "\n"+
    "   //based on : https://github.com/AHAAAAAAA/PokemonGo-Map/blob/master/pokemon.proto\n"+
    "  message FortLureInfoProto {\n"+
    "    required string FortId = 1;\n"+
    "    required double unknown2 = 2;\n"+
    "    required int32 ActivePokemonId = 3;\n"+
    "    required int64 LureExpiresTimestampMs = 4;\n"+
    "    optional string DeployerPlayerCodename = 5;\n"+
    "  }\n"+
    "\n"+
    "  message PokemonSummaryFortProto {\n"+
    "    required string FortSummaryId = 1;\n"+
    "    required int64 LastModifiedMs = 2;\n"+
    "    required double Latitude = 3;\n"+
    "    required double Longitude = 4;\n"+
    "  }\n"+
    "\n"+
    "  message ClientSpawnPointProto {\n"+
    "    required double Latitude = 2;\n"+
    "    required double Longitude = 3;\n"+
    "  }\n"+
    "\n"+
    "  message WildPokemonProto {\n"+
    "    optional fixed64 EncounterId = 1;\n"+
    "    optional int64 LastModifiedMs = 2;\n"+
    "    optional double Latitude = 3;\n"+
    "    optional double Longitude = 4;\n"+
    "    optional string SpawnPointId = 5;\n"+
    "    optional Pokemon pokemon = 7;\n"+
    "    optional int32 TimeTillHiddenMs = 11;\n"+
    "\n"+
    "    message Pokemon {\n"+
    "      optional uint64 Id = 1;\n"+
    "      optional PokemonId PokemonId = 2;\n"+
    "      optional int32 cp = 3;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message NearbyPokemonProto {\n"+
    "    optional PokemonId PokedexNumber = 1;\n"+
    "    optional float DistanceMeters = 2;\n"+
    "    optional fixed64 EncounterId = 3;\n"+
    "  }\n"+
    "\n"+
    "  message ProfilePayload {\n"+
    "    repeated int32 unknown1 = 1;\n"+
    "    optional Profile profile = 2;\n"+
    "  }\n"+
    "\n"+
    "  message Profile {\n"+
    "    required int64 creation_time = 1;\n"+
    "    optional string username = 2;\n"+
    "    optional int32 team = 5;\n"+
    "    optional bytes tutorial = 7;\n"+
    "    optional AvatarDetails avatar = 8;\n"+
    "    optional int32 poke_storage = 9;\n"+
    "    optional int32 item_storage = 10;\n"+
    "    optional DailyBonus daily_bonus = 11;\n"+
    "    optional bytes unknown12 = 12;\n"+
    "    optional bytes unknown13 = 13;\n"+
    "    repeated Currency currency = 14;\n"+
    "\n"+
    "    message AvatarDetails {\n"+
    "      optional int32 skin = 2;\n"+
    "      optional int32 hair = 3;\n"+
    "      optional int32 tshirt = 4;\n"+
    "      optional int32 trousers = 5;\n"+
    "      optional int32 cap = 6;\n"+
    "      optional int32 boots = 7;\n"+
    "      optional int32 gender = 8;\n"+
    "      optional int32 eyes = 9;\n"+
    "      optional int32 backpack = 10;\n"+
    "    }\n"+
    "\n"+
    "    message DailyBonus {\n"+
    "      optional int64 NextCollectTimestampMs = 1;\n"+
    "      optional int64 NextDefenderBonusCollectTimestampMs = 2;\n"+
    "    }\n"+
    "\n"+
    "    message Currency {\n"+
    "      required string type = 1;\n"+
    "      optional int32 amount = 2;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message GetInventoryResponse {\n"+
    "    optional bool success = 1;\n"+
    "    optional InventoryDelta inventory_delta = 2;\n"+
    "  }\n"+
    "\n"+
    "  message InventoryDelta {\n"+
    "    optional int64 original_timestamp_ms = 1;\n"+
    "    optional int64 new_timestamp_ms = 2;\n"+
    "    repeated InventoryItem inventory_items = 3;\n"+
    "  }\n"+
    "\n"+
    "  message InventoryItem {\n"+
    "    optional int64 modified_timestamp_ms = 1;\n"+
    "    optional int64 deleted_item_key = 2;\n"+
    "    optional InventoryItemData inventory_item_data = 3;\n"+
    "  }\n"+
    "\n"+
    "  message InventoryItemData {\n"+
    "    optional PokemonData pokemon = 1;\n"+
    "    optional Item item = 2;\n"+
    "    optional PokedexEntry pokedex_entry = 3;\n"+
    "    optional PlayerStats player_stats = 4;\n"+
    "    optional PlayerCurrency player_currency = 5;\n"+
    "    optional PlayerCamera player_camera = 6;\n"+
    "    optional InventoryUpgrades inventory_upgrades = 7;\n"+
    "    optional AppliedItems applied_items = 8;\n"+
    "    optional EggIncubators egg_incubators = 9;\n"+
    "    optional PokemonFamily pokemon_family = 10;\n"+
    "  }\n"+
    "\n"+
    "  message PokemonData {\n"+
    "    optional fixed64 id = 1;\n"+
    "    optional PokemonId pokemon_id = 2;\n"+
    "    optional int32 cp = 3;\n"+
    "    optional int32 stamina = 4;\n"+
    "    optional int32 stamina_max = 5;\n"+
    "    optional PokemonMove move_1 = 6;\n"+
    "    optional PokemonMove move_2 = 7;\n"+
    "    optional string deployed_fort_id = 8;\n"+
    "    optional string owner_name = 9;\n"+
    "    optional bool is_egg = 10;\n"+
    "    optional double egg_km_walked_target = 11;\n"+
    "    optional double egg_km_walked_start = 12;\n"+
    "    optional int32 origin = 14;\n"+
    "    optional float height_m = 15;\n"+
    "    optional float weight_kg = 16;\n"+
    "    optional int32 individual_attack = 17;\n"+
    "    optional int32 individual_defense = 18;\n"+
    "    optional int32 individual_stamina = 19;\n"+
    "    optional float cp_multiplier = 20;\n"+
    "    optional ItemId pokeball = 21;\n"+
    "    optional uint64 captured_cell_id = 22;\n"+
    "    optional int32 battles_attacked = 23;\n"+
    "    optional int32 battles_defended = 24;\n"+
    "    optional string egg_incubator_id = 25;\n"+
    "    optional uint64 creation_time_ms = 26;\n"+
    "    optional int32 num_upgrades = 27;\n"+
    "    optional float additional_cp_multiplier = 28;\n"+
    "    optional int32 favorite = 29;\n"+
    "    optional string nickname = 30;\n"+
    "    optional int32 from_fort = 31;\n"+
    "  }\n"+
    "\n"+
    "  message Pokemon {\n"+
    "    optional int32 id = 1;\n"+
    "    optional PokemonId pokemon_type = 2;\n"+
    "    optional int32 cp = 3;\n"+
    "    optional int32 stamina = 4;\n"+
    "    optional int32 stamina_max = 5;\n"+
    "    optional PokemonMove move_1 = 6;\n"+
    "    optional PokemonMove move_2 = 7;\n"+
    "    optional int32 deployed_fort_id = 8;\n"+
    "    optional string owner_name = 9;\n"+
    "    optional bool is_egg = 10;\n"+
    "    optional int32 egg_km_walked_target = 11;\n"+
    "    optional int32 egg_km_walked_start = 12;\n"+
    "    optional int32 origin = 14;\n"+
    "    optional float height_m = 15;\n"+
    "    optional float weight_kg = 16;\n"+
    "    optional int32 individual_attack = 17;\n"+
    "    optional int32 individual_defense = 18;\n"+
    "    optional int32 individual_stamina = 19;\n"+
    "    optional int32 cp_multiplier = 20;\n"+
    "    optional int32 pokeball = 21;\n"+
    "    optional uint64 captured_cell_id = 22;\n"+
    "    optional int32 battles_attacked = 23;\n"+
    "    optional int32 battles_defended = 24;\n"+
    "    optional int32 egg_incubator_id = 25;\n"+
    "    optional uint64 creation_time_ms = 26;\n"+
    "    optional int32 num_upgrades = 27;\n"+
    "    optional int32 additional_cp_multiplier = 28;\n"+
    "    optional int32 favorite = 29;\n"+
    "    optional string nickname = 30;\n"+
    "    optional int32 from_fort = 31;\n"+
    "  }\n"+
    "\n"+
    "  enum TeamColor {\n"+
    "    NEUTRAL = 0;\n"+
    "    BLUE = 1;\n"+
    "    RED = 2;\n"+
    "    YELLOW = 3;\n"+
    "  }\n"+
    "\n"+
    "  enum  PokemonMove {\n"+
    "      MOVE_UNSET = 0;\n"+
    "      THUNDER_SHOCK = 1;\n"+
    "      QUICK_ATTACK = 2;\n"+
    "      SCRATCH = 3;\n"+
    "      EMBER = 4;\n"+
    "      VINE_WHIP = 5;\n"+
    "      TACKLE = 6;\n"+
    "      RAZOR_LEAF = 7;\n"+
    "      TAKE_DOWN = 8;\n"+
    "      WATER_GUN = 9;\n"+
    "      BITE = 10;\n"+
    "      POUND = 11;\n"+
    "      DOUBLE_SLAP = 12;\n"+
    "      WRAP = 13;\n"+
    "      HYPER_BEAM = 14;\n"+
    "      LICK = 15;\n"+
    "      DARK_PULSE = 16;\n"+
    "      SMOG = 17;\n"+
    "      SLUDGE = 18;\n"+
    "      METAL_CLAW = 19;\n"+
    "      VICE_GRIP = 20;\n"+
    "      FLAME_WHEEL = 21;\n"+
    "      MEGAHORN = 22;\n"+
    "      WING_ATTACK = 23;\n"+
    "      FLAMETHROWER = 24;\n"+
    "      SUCKER_PUNCH = 25;\n"+
    "      DIG = 26;\n"+
    "      LOW_KICK = 27;\n"+
    "      CROSS_CHOP = 28;\n"+
    "      PSYCHO_CUT = 29;\n"+
    "      PSYBEAM = 30;\n"+
    "      EARTHQUAKE = 31;\n"+
    "      STONE_EDGE = 32;\n"+
    "      ICE_PUNCH = 33;\n"+
    "      HEART_STAMP = 34;\n"+
    "      DISCHARGE = 35;\n"+
    "      FLASH_CANNON = 36;\n"+
    "      PECK = 37;\n"+
    "      DRILL_PECK = 38;\n"+
    "      ICE_BEAM = 39;\n"+
    "      BLIZZARD = 40;\n"+
    "      AIR_SLASH = 41;\n"+
    "      HEAT_WAVE = 42;\n"+
    "      TWINEEDLE = 43;\n"+
    "      POISON_JAB = 44;\n"+
    "      AERIAL_ACE = 45;\n"+
    "      DRILL_RUN = 46;\n"+
    "      PETAL_BLIZZARD = 47;\n"+
    "      MEGA_DRAIN = 48;\n"+
    "      BUG_BUZZ = 49;\n"+
    "      POISON_FANG = 50;\n"+
    "      NIGHT_SLASH = 51;\n"+
    "      SLASH = 52;\n"+
    "      BUBBLE_BEAM = 53;\n"+
    "      SUBMISSION = 54;\n"+
    "      KARATE_CHOP = 55;\n"+
    "      LOW_SWEEP = 56;\n"+
    "      AQUA_JET = 57;\n"+
    "      AQUA_TAIL = 58;\n"+
    "      SEED_BOMB = 59;\n"+
    "      PSYSHOCK = 60;\n"+
    "      ROCK_THROW = 61;\n"+
    "      ANCIENT_POWER = 62;\n"+
    "      ROCK_TOMB = 63;\n"+
    "      ROCK_SLIDE = 64;\n"+
    "      POWER_GEM = 65;\n"+
    "      SHADOW_SNEAK = 66;\n"+
    "      SHADOW_PUNCH = 67;\n"+
    "      SHADOW_CLAW = 68;\n"+
    "      OMINOUS_WIND = 69;\n"+
    "      SHADOW_BALL = 70;\n"+
    "      BULLET_PUNCH = 71;\n"+
    "      MAGNET_BOMB = 72;\n"+
    "      STEEL_WING = 73;\n"+
    "      IRON_HEAD = 74;\n"+
    "      PARABOLIC_CHARGE = 75;\n"+
    "      SPARK = 76;\n"+
    "      THUNDER_PUNCH = 77;\n"+
    "      THUNDER = 78;\n"+
    "      THUNDERBOLT = 79;\n"+
    "      TWISTER = 80;\n"+
    "      DRAGON_BREATH = 81;\n"+
    "      DRAGON_PULSE = 82;\n"+
    "      DRAGON_CLAW = 83;\n"+
    "      DISARMING_VOICE = 84;\n"+
    "      DRAINING_KISS = 85;\n"+
    "      DAZZLING_GLEAM = 86;\n"+
    "      MOONBLAST = 87;\n"+
    "      PLAY_ROUGH = 88;\n"+
    "      CROSS_POISON = 89;\n"+
    "      SLUDGE_BOMB = 90;\n"+
    "      SLUDGE_WAVE = 91;\n"+
    "      GUNK_SHOT = 92;\n"+
    "      MUD_SHOT = 93;\n"+
    "      BONE_CLUB = 94;\n"+
    "      BULLDOZE = 95;\n"+
    "      MUD_BOMB = 96;\n"+
    "      FURY_CUTTER = 97;\n"+
    "      BUG_BITE = 98;\n"+
    "      SIGNAL_BEAM = 99;\n"+
    "      X_SCISSOR = 100;\n"+
    "      FLAME_CHARGE = 101;\n"+
    "      FLAME_BURST = 102;\n"+
    "      FIRE_BLAST = 103;\n"+
    "      BRINE = 104;\n"+
    "      WATER_PULSE = 105;\n"+
    "      SCALD = 106;\n"+
    "      HYDRO_PUMP = 107;\n"+
    "      PSYCHIC = 108;\n"+
    "      PSYSTRIKE = 109;\n"+
    "      ICE_SHARD = 110;\n"+
    "      ICY_WIND = 111;\n"+
    "      FROST_BREATH = 112;\n"+
    "      ABSORB = 113;\n"+
    "      GIGA_DRAIN = 114;\n"+
    "      FIRE_PUNCH = 115;\n"+
    "      SOLAR_BEAM = 116;\n"+
    "      LEAF_BLADE = 117;\n"+
    "      POWER_WHIP = 118;\n"+
    "      SPLASH = 119;\n"+
    "      ACID = 120;\n"+
    "      AIR_CUTTER = 121;\n"+
    "      HURRICANE = 122;\n"+
    "      BRICK_BREAK = 123;\n"+
    "      CUT = 124;\n"+
    "      SWIFT = 125;\n"+
    "      HORN_ATTACK = 126;\n"+
    "      STOMP = 127;\n"+
    "      HEADBUTT = 128;\n"+
    "      HYPER_FANG = 129;\n"+
    "      SLAM = 130;\n"+
    "      BODY_SLAM = 131;\n"+
    "      REST = 132;\n"+
    "      STRUGGLE = 133;\n"+
    "      SCALD_BLASTOISE = 134;\n"+
    "      HYDRO_PUMP_BLASTOISE = 135;\n"+
    "      WRAP_GREEN = 136;\n"+
    "      WRAP_PINK = 137;\n"+
    "      FURY_CUTTER_FAST = 200;\n"+
    "      BUG_BITE_FAST = 201;\n"+
    "      BITE_FAST = 202;\n"+
    "      SUCKER_PUNCH_FAST = 203;\n"+
    "      DRAGON_BREATH_FAST = 204;\n"+
    "      THUNDER_SHOCK_FAST = 205;\n"+
    "      SPARK_FAST = 206;\n"+
    "      LOW_KICK_FAST = 207;\n"+
    "      KARATE_CHOP_FAST = 208;\n"+
    "      EMBER_FAST = 209;\n"+
    "      WING_ATTACK_FAST = 210;\n"+
    "      PECK_FAST = 211;\n"+
    "      LICK_FAST = 212;\n"+
    "      SHADOW_CLAW_FAST = 213;\n"+
    "      VINE_WHIP_FAST = 214;\n"+
    "      RAZOR_LEAF_FAST = 215;\n"+
    "      MUD_SHOT_FAST = 216;\n"+
    "      ICE_SHARD_FAST = 217;\n"+
    "      FROST_BREATH_FAST = 218;\n"+
    "      QUICK_ATTACK_FAST = 219;\n"+
    "      SCRATCH_FAST = 220;\n"+
    "      TACKLE_FAST = 221;\n"+
    "      POUND_FAST = 222;\n"+
    "      CUT_FAST = 223;\n"+
    "      POISON_JAB_FAST = 224;\n"+
    "      ACID_FAST = 225;\n"+
    "      PSYCHO_CUT_FAST = 226;\n"+
    "      ROCK_THROW_FAST = 227;\n"+
    "      METAL_CLAW_FAST = 228;\n"+
    "      BULLET_PUNCH_FAST = 229;\n"+
    "      WATER_GUN_FAST = 230;\n"+
    "      SPLASH_FAST = 231;\n"+
    "      WATER_GUN_FAST_BLASTOISE = 232;\n"+
    "      MUD_SLAP_FAST = 233;\n"+
    "      ZEN_HEADBUTT_FAST = 234;\n"+
    "      CONFUSION_FAST = 235;\n"+
    "      POISON_STING_FAST = 236;\n"+
    "      BUBBLE_FAST = 237;\n"+
    "      FEINT_ATTACK_FAST = 238;\n"+
    "      STEEL_WING_FAST = 239;\n"+
    "      FIRE_FANG_FAST = 240;\n"+
    "      ROCK_SMASH_FAST = 241;\n"+
    "  }\n"+
    "\n"+
    "  enum PokemonId {\n"+
    "      MISSINGNO = 0;\n"+
    "      BULBASAUR = 1;\n"+
    "      IVYSAUR = 2;\n"+
    "      VENUSAUR = 3;\n"+
    "      CHARMENDER = 4;\n"+
    "      CHARMELEON = 5;\n"+
    "      CHARIZARD = 6;\n"+
    "      SQUIRTLE = 7;\n"+
    "      WARTORTLE = 8;\n"+
    "      BLASTOISE = 9;\n"+
    "      CATERPIE = 10;\n"+
    "      METAPOD = 11;\n"+
    "      BUTTERFREE = 12;\n"+
    "      WEEDLE = 13;\n"+
    "      KAKUNA = 14;\n"+
    "      BEEDRILL = 15;\n"+
    "      PIDGEY = 16;\n"+
    "      PIDGEOTTO = 17;\n"+
    "      PIDGEOT = 18;\n"+
    "      RATTATA = 19;\n"+
    "      RATICATE = 20;\n"+
    "      SPEAROW = 21;\n"+
    "      FEAROW = 22;\n"+
    "      EKANS = 23;\n"+
    "      ARBOK = 24;\n"+
    "      PIKACHU = 25;\n"+
    "      RAICHU = 26;\n"+
    "      SANDSHREW = 27;\n"+
    "      SANDLASH = 28;\n"+
    "      NIDORAN_FEMALE = 29;\n"+
    "      NIDORINA = 30;\n"+
    "      NIDOQUEEN = 31;\n"+
    "      NIDORAN_MALE = 32;\n"+
    "      NIDORINO = 33;\n"+
    "      NIDOKING = 34;\n"+
    "      CLEFARY = 35;\n"+
    "      CLEFABLE = 36;\n"+
    "      VULPIX = 37;\n"+
    "      NINETALES = 38;\n"+
    "      JIGGLYPUFF = 39;\n"+
    "      WIGGLYTUFF = 40;\n"+
    "      ZUBAT = 41;\n"+
    "      GOLBAT = 42;\n"+
    "      ODDISH = 43;\n"+
    "      GLOOM = 44;\n"+
    "      VILEPLUME = 45;\n"+
    "      PARAS = 46;\n"+
    "      PARASECT = 47;\n"+
    "      VENONAT = 48;\n"+
    "      VENOMOTH = 49;\n"+
    "      DIGLETT = 50;\n"+
    "      DUGTRIO = 51;\n"+
    "      MEOWTH = 52;\n"+
    "      PERSIAN = 53;\n"+
    "      PSYDUCK = 54;\n"+
    "      GOLDUCK = 55;\n"+
    "      MANKEY = 56;\n"+
    "      PRIMEAPE = 57;\n"+
    "      GROWLITHE = 58;\n"+
    "      ARCANINE = 59;\n"+
    "      POLIWAG = 60;\n"+
    "      POLIWHIRL = 61;\n"+
    "      POLIWRATH = 62;\n"+
    "      ABRA = 63;\n"+
    "      KADABRA = 64;\n"+
    "      ALAKHAZAM = 65;\n"+
    "      MACHOP = 66;\n"+
    "      MACHOKE = 67;\n"+
    "      MACHAMP = 68;\n"+
    "      BELLSPROUT = 69;\n"+
    "      WEEPINBELL = 70;\n"+
    "      VICTREEBELL = 71;\n"+
    "      TENTACOOL = 72;\n"+
    "      TENTACRUEL = 73;\n"+
    "      GEODUGE = 74;\n"+
    "      GRAVELER = 75;\n"+
    "      GOLEM = 76;\n"+
    "      PONYTA = 77;\n"+
    "      RAPIDASH = 78;\n"+
    "      SLOWPOKE = 79;\n"+
    "      SLOWBRO = 80;\n"+
    "      MAGNEMITE = 81;\n"+
    "      MAGNETON = 82;\n"+
    "      FARFETCHD = 83;\n"+
    "      DODUO = 84;\n"+
    "      DODRIO = 85;\n"+
    "      SEEL = 86;\n"+
    "      DEWGONG = 87;\n"+
    "      GRIMER = 88;\n"+
    "      MUK = 89;\n"+
    "      SHELLDER = 90;\n"+
    "      CLOYSTER = 91;\n"+
    "      GASTLY = 92;\n"+
    "      HAUNTER = 93;\n"+
    "      GENGAR = 94;\n"+
    "      ONIX = 95;\n"+
    "      DROWZEE = 96;\n"+
    "      HYPNO = 97;\n"+
    "      KRABBY = 98;\n"+
    "      KINGLER = 99;\n"+
    "      VOLTORB = 100;\n"+
    "      ELECTRODE = 101;\n"+
    "      EXEGGCUTE = 102;\n"+
    "      EXEGGUTOR = 103;\n"+
    "      CUBONE = 104;\n"+
    "      MAROWAK = 105;\n"+
    "      HITMONLEE = 106;\n"+
    "      HITMONCHAN = 107;\n"+
    "      LICKITUNG = 108;\n"+
    "      KOFFING = 109;\n"+
    "      WEEZING = 110;\n"+
    "      RHYHORN = 111;\n"+
    "      RHYDON = 112;\n"+
    "      CHANSEY = 113;\n"+
    "      TANGELA = 114;\n"+
    "      KANGASKHAN = 115;\n"+
    "      HORSEA = 116;\n"+
    "      SEADRA = 117;\n"+
    "      GOLDEEN = 118;\n"+
    "      SEAKING = 119;\n"+
    "      STARYU = 120;\n"+
    "      STARMIE = 121;\n"+
    "      MR_MIME = 122;\n"+
    "      SCYTHER = 123;\n"+
    "      JYNX = 124;\n"+
    "      ELECTABUZZ = 125;\n"+
    "      MAGMAR = 126;\n"+
    "      PINSIR = 127;\n"+
    "      TAUROS = 128;\n"+
    "      MAGIKARP = 129;\n"+
    "      GYARADOS = 130;\n"+
    "      LAPRAS = 131;\n"+
    "      DITTO = 132;\n"+
    "      EEVEE = 133;\n"+
    "      VAPOREON = 134;\n"+
    "      JOLTEON = 135;\n"+
    "      FLAREON = 136;\n"+
    "      PORYGON = 137;\n"+
    "      OMANYTE = 138;\n"+
    "      OMASTAR = 139;\n"+
    "      KABUTO = 140;\n"+
    "      KABUTOPS = 141;\n"+
    "      AERODACTYL = 142;\n"+
    "      SNORLAX = 143;\n"+
    "      ARTICUNO = 144;\n"+
    "      ZAPDOS = 145;\n"+
    "      MOLTRES = 146;\n"+
    "      DRATINI = 147;\n"+
    "      DRAGONAIR = 148;\n"+
    "      DRAGONITE = 149;\n"+
    "      MEWTWO = 150;\n"+
    "      MEW = 151;\n"+
    "  }\n"+
    "\n"+
    "  message Item {\n"+
    "      optional ItemId item_id = 1;\n"+
    "      optional int32 count = 2;\n"+
    "      optional bool unseen = 3;\n"+
    "  }\n"+
    "\n"+
    "  enum ItemType {\n"+
    "      ITEM_TYPE_NONE = 0;\n"+
    "      ITEM_TYPE_POKEBALL = 1;\n"+
    "      ITEM_TYPE_POTION = 2;\n"+
    "      ITEM_TYPE_REVIVE = 3;\n"+
    "      ITEM_TYPE_MAP = 4;\n"+
    "      ITEM_TYPE_BATTLE = 5;\n"+
    "      ITEM_TYPE_FOOD = 6;\n"+
    "      ITEM_TYPE_CAMERA = 7;\n"+
    "      ITEM_TYPE_DISK = 8;\n"+
    "      ITEM_TYPE_INCUBATOR = 9;\n"+
    "      ITEM_TYPE_INCENSE = 10;\n"+
    "      ITEM_TYPE_XP_BOOST = 11;\n"+
    "      ITEM_TYPE_INVENTORY_UPGRADE = 12;\n"+
    "  }\n"+
    "\n"+
    "  message PokedexEntry {\n"+
    "      optional int32 pokedex_entry_number = 1;\n"+
    "      optional int32 times_encountered = 2;\n"+
    "      optional int32 times_captured = 3;\n"+
    "      optional int32 evolution_stone_pieces = 4;\n"+
    "      optional int32 evolution_stones = 5;\n"+
    "  }\n"+
    "\n"+
    "  message PlayerStats {\n"+
    "      optional int32 level = 1;\n"+
    "      optional int64 experience = 2;\n"+
    "      optional int64 prev_level_xp = 3;\n"+
    "      optional int64 next_level_xp = 4;\n"+
    "      optional float km_walked = 5;\n"+
    "      optional int32 pokemons_encountered = 6;\n"+
    "      optional int32 unique_pokedex_entries = 7;\n"+
    "      optional int32 pokemons_captured = 8;\n"+
    "      optional int32 evolutions = 9;\n"+
    "      optional int32 poke_stop_visits = 10;\n"+
    "      optional int32 pokeballs_thrown = 11;\n"+
    "      optional int32 eggs_hatched = 12;\n"+
    "      optional int32 big_magikarp_caught = 13;\n"+
    "      optional int32 battle_attack_won = 14;\n"+
    "      optional int32 battle_attack_total = 15;\n"+
    "      optional int32 battle_defended_won = 16;\n"+
    "      optional int32 battle_training_won = 17;\n"+
    "      optional int32 battle_training_total = 18;\n"+
    "      optional int32 prestige_raised_total = 19;\n"+
    "      optional int32 prestige_dropped_total = 20;\n"+
    "      optional int32 pokemon_deployed = 21;\n"+
    "      optional bytes pokemon_caught_by_type = 22; // TODO: repeated PokemonType ??\n"+
    "      optional int32 small_rattata_caught = 23;\n"+
    "  }\n"+
    "\n"+
    "  message PlayerCurrency {\n"+
    "      optional int32 gems = 1;\n"+
    "  }\n"+
    "\n"+
    "  message PlayerCamera {\n"+
    "      optional bool is_default_camera = 1;\n"+
    "  }\n"+
    "\n"+
    "  message InventoryUpgrades {\n"+
    "      repeated InventoryUpgrade inventory_upgrades = 1;\n"+
    "  }\n"+
    "\n"+
    "  message InventoryUpgrade {\n"+
    "      optional ItemType item = 1;\n"+
    "      optional InventoryUpgradeType upgrade_type = 2;\n"+
    "      optional int32 additional_storage = 3;\n"+
    "  }\n"+
    "\n"+
    "  enum InventoryUpgradeType {\n"+
    "      UPGRADE_UNSET = 0;\n"+
    "      INCREASE_ITEM_STORAGE = 1;\n"+
    "      INCREASE_POKEMON_STORAGE = 2;\n"+
    "  }\n"+
    "\n"+
    "  message AppliedItems {\n"+
    "      optional AppliedItem item = 4;\n"+
    "  }\n"+
    "\n"+
    "  message AppliedItem {\n"+
    "      optional ItemId item_type = 1;\n"+
    "      optional ItemType item_type_category = 2;\n"+
    "      optional int64 expire_ms = 3;\n"+
    "      optional int64 applied_ms = 4;\n"+
    "  }\n"+
    "\n"+
    "  enum ItemId {\n"+
    "      ITEM_UNKNOWN = 0;\n"+
    "      ITEM_POKE_BALL = 1;\n"+
    "      ITEM_GREAT_BALL = 2;\n"+
    "      ITEM_ULTRA_BALL = 3;\n"+
    "      ITEM_MASTER_BALL = 4;\n"+
    "      ITEM_POTION = 101;\n"+
    "      ITEM_SUPER_POTION = 102;\n"+
    "      ITEM_HYPER_POTION = 103;\n"+
    "      ITEM_MAX_POTION = 104;\n"+
    "      ITEM_REVIVE = 201;\n"+
    "      ITEM_MAX_REVIVE = 202;\n"+
    "      ITEM_LUCKY_EGG = 301;\n"+
    "      ITEM_INCENSE_ORDINARY = 401;\n"+
    "      ITEM_INCENSE_SPICY = 402;\n"+
    "      ITEM_INCENSE_COOL = 403;\n"+
    "      ITEM_INCENSE_FLORAL = 404;\n"+
    "      ITEM_TROY_DISK = 501;\n"+
    "      ITEM_X_ATTACK = 602;\n"+
    "      ITEM_X_DEFENSE = 603;\n"+
    "      ITEM_X_MIRACLE = 604;\n"+
    "      ITEM_RAZZ_BERRY = 701;\n"+
    "      ITEM_BLUK_BERRY = 702;\n"+
    "      ITEM_NANAB_BERRY = 703;\n"+
    "      ITEM_WEPAR_BERRY = 704;\n"+
    "      ITEM_PINAP_BERRY = 705;\n"+
    "      ITEM_SPECIAL_CAMERA = 801;\n"+
    "      ITEM_INCUBATOR_BASIC_UNLIMITED = 901;\n"+
    "      ITEM_INCUBATOR_BASIC = 902;\n"+
    "      ITEM_POKEMON_STORAGE_UPGRADE = 1001;\n"+
    "      ITEM_ITEM_STORAGE_UPGRADE = 1002;\n"+
    "  }\n"+
    "\n"+
    "  message EggIncubators {\n"+
    "      repeated EggIncubator egg_incubator = 1;\n"+
    "  }\n"+
    "\n"+
    "  message EggIncubator {\n"+
    "      optional string item_id = 1;\n"+
    "      optional ItemType item_type = 2;\n"+
    "      optional EggIncubatorType incubator_type = 3;\n"+
    "      optional int32 uses_remaining = 4;\n"+
    "      optional int64 pokemon_id = 5; // TODO: Check if is PokemonType\n"+
    "      optional double start_km_walked = 6;\n"+
    "      optional double target_km_walked = 7;\n"+
    "  }\n"+
    "\n"+
    "  enum EggIncubatorType {\n"+
    "      INCUBATOR_UNSET = 0;\n"+
    "      INCUBATOR_DISTANCE = 1;\n"+
    "  }\n"+
    "\n"+
    "  message PokemonFamily {\n"+
    "      optional PokemonFamilyId family_id = 1;\n"+
    "      optional int32 candy = 2;\n"+
    "  }\n"+
    "\n"+
    "  enum PokemonFamilyId {\n"+
    "      FAMILY_UNSET = 0;\n"+
    "      FAMILY_BULBASAUR = 1;\n"+
    "      FAMILY_CHARMANDER = 4;\n"+
    "      FAMILY_SQUIRTLE = 7;\n"+
    "      FAMILY_CATERPIE = 10;\n"+
    "      FAMILY_WEEDLE = 13;\n"+
    "      FAMILY_PIDGEY = 16;\n"+
    "      FAMILY_RATTATA = 19;\n"+
    "      FAMILY_SPEAROW = 21;\n"+
    "      FAMILY_EKANS = 23;\n"+
    "      FAMILY_PIKACHU = 25;\n"+
    "      FAMILY_SANDSHREW = 27;\n"+
    "      FAMILY_NIDORAN = 29;\n"+
    "      FAMILY_NIDORAN2 = 32;\n"+
    "      FAMILY_CLEFAIRY = 35;\n"+
    "      FAMILY_VULPIX = 37;\n"+
    "      FAMILY_JIGGLYPUFF = 39;\n"+
    "      FAMILY_ZUBAT = 41;\n"+
    "      FAMILY_ODDISH = 43;\n"+
    "      FAMILY_PARAS = 46;\n"+
    "      FAMILY_VENONAT = 48;\n"+
    "      FAMILY_DIGLETT = 50;\n"+
    "      FAMILY_MEOWTH = 52;\n"+
    "      FAMILY_PSYDUCK = 54;\n"+
    "      FAMILY_MANKEY = 56;\n"+
    "      FAMILY_GROWLITHE = 58;\n"+
    "      FAMILY_POLIWAG = 60;\n"+
    "      FAMILY_ABRA = 63;\n"+
    "      FAMILY_MACHOP = 66;\n"+
    "      FAMILY_BELLSPROUT = 69;\n"+
    "      FAMILY_TENTACOOL = 72;\n"+
    "      FAMILY_GEODUDE = 74;\n"+
    "      FAMILY_PONYTA = 77;\n"+
    "      FAMILY_SLOWPOKE = 79;\n"+
    "      FAMILY_MAGNEMITE = 81;\n"+
    "      FAMILY_FARFETCHD = 83;\n"+
    "      FAMILY_DODUO = 84;\n"+
    "      FAMILY_SEEL = 86;\n"+
    "      FAMILY_GRIMER = 88;\n"+
    "      FAMILY_SHELLDER = 90;\n"+
    "      FAMILY_GASTLY = 92;\n"+
    "      FAMILY_ONIX = 95;\n"+
    "      FAMILY_DROWZEE = 96;\n"+
    "      FAMILY_KRABBY = 98;\n"+
    "      FAMILY_VOLTORB = 100;\n"+
    "      FAMILY_EXEGGCUTE = 102;\n"+
    "      FAMILY_CUBONE = 104;\n"+
    "      FAMILY_HITMONLEE = 106;\n"+
    "      FAMILY_HITMONCHAN = 107;\n"+
    "      FAMILY_LICKITUNG = 108;\n"+
    "      FAMILY_KOFFING = 109;\n"+
    "      FAMILY_RHYHORN = 111;\n"+
    "      FAMILY_CHANSEY = 113;\n"+
    "      FAMILY_TANGELA = 114;\n"+
    "      FAMILY_KANGASKHAN = 115;\n"+
    "      FAMILY_HORSEA = 116;\n"+
    "      FAMILY_GOLDEEN = 118;\n"+
    "      FAMILY_STARYU = 120;\n"+
    "      FAMILY_MR_MIME = 122;\n"+
    "      FAMILY_SCYTHER = 123;\n"+
    "      FAMILY_JYNX = 124;\n"+
    "      FAMILY_ELECTABUZZ = 125;\n"+
    "      FAMILY_MAGMAR = 126;\n"+
    "      FAMILY_PINSIR = 127;\n"+
    "      FAMILY_TAUROS = 128;\n"+
    "      FAMILY_MAGIKARP = 129;\n"+
    "      FAMILY_LAPRAS = 131;\n"+
    "      FAMILY_DITTO = 132;\n"+
    "      FAMILY_EEVEE = 133;\n"+
    "      FAMILY_PORYGON = 137;\n"+
    "      FAMILY_OMANYTE = 138;\n"+
    "      FAMILY_KABUTO = 140;\n"+
    "      FAMILY_AERODACTYL = 142;\n"+
    "      FAMILY_SNORLAX = 143;\n"+
    "      FAMILY_ARTICUNO = 144;\n"+
    "      FAMILY_ZAPDOS = 145;\n"+
    "      FAMILY_MOLTRES = 146;\n"+
    "      FAMILY_DRATINI = 147;\n"+
    "      FAMILY_MEWTWO = 150;\n"+
    "      FAMILY_MEW = 151;\n"+
    "  }\n"+
    "\n"+
    "  enum FortType {\n"+
    "      GYM = 0;\n"+
    "      CHECKPOINT = 1;\n"+
    "  }\n"+
    "\n"+
    "  message CatchPokemonResponse {\n"+
    "      optional CatchStatus Status = 1;\n"+
    "      optional double MissPercent = 2;\n"+
    "      //optional uint64 CapturedPokemonId = 3;\n"+
    "      //optional CaptureAward CaptureAward = 4;\n"+
    "\n"+
    "      enum CatchStatus {\n"+
    "          CATCH_ERROR = 0;\n"+
    "          CATCH_SUCCESS = 1;\n"+
    "          CATCH_ESCAPE = 2;\n"+
    "          CATCH_FLEE = 3;\n"+
    "          CATCH_MISSED = 4;\n"+
    "      }\n"+
    "  }\n"+
    "\n"+
    "  enum ActivityType {\n"+
    "      ACTIVITY_UNKNOWN = 0;\n"+
    "      ACTIVITY_CATCH_POKEMON = 1;\n"+
    "      ACTIVITY_CATCH_LEGEND_POKEMON = 2;\n"+
    "      ACTIVITY_FLEE_POKEMON = 3;\n"+
    "      ACTIVITY_DEFEAT_FORT = 4;\n"+
    "      ACTIVITY_EVOLVE_POKEMON = 5;\n"+
    "      ACTIVITY_HATCH_EGG = 6;\n"+
    "      ACTIVITY_WALK_KM = 7;\n"+
    "      ACTIVITY_POKEDEX_ENTRY_NEW = 8;\n"+
    "      ACTIVITY_CATCH_FIRST_THROW = 9;\n"+
    "      ACTIVITY_CATCH_NICE_THROW = 10;\n"+
    "      ACTIVITY_CATCH_GREAT_THROW = 11;\n"+
    "      ACTIVITY_CATCH_EXCELLENT_THROW = 12;\n"+
    "      ACTIVITY_CATCH_CURVEBALL = 13;\n"+
    "      ACTIVITY_CATCH_FIRST_CATCH_OF_DAY = 14;\n"+
    "      ACTIVITY_CATCH_MILESTONE = 15;\n"+
    "      ACTIVITY_TRAIN_POKEMON = 16;\n"+
    "      ACTIVITY_SEARCH_FORT = 17;\n"+
    "      ACTIVITY_RELEASE_POKEMON = 18;\n"+
    "      ACTIVITY_HATCH_EGG_SMALL_BONUS = 19;\n"+
    "      ACTIVITY_HATCH_EGG_MEDIUM_BONUS = 20;\n"+
    "      ACTIVITY_HATCH_EGG_LARGE_BONUS = 21;\n"+
    "      ACTIVITY_DEFEAT_GYM_DEFENDER = 22;\n"+
    "      ACTIVITY_DEFEAT_GYM_LEADER = 23;\n"+
    "  }\n"+
    "\n"+
    "  message CaptureAward {\n"+
    "      repeated ActivityType ActivityType = 1 [packed=true];\n"+
    "      repeated int32 XP = 2 [packed=true];\n"+
    "      repeated int32 Candy = 3 [packed=true];\n"+
    "      repeated int32 Stardust = 4 [packed=true];\n"+
    "  }\n"+
    "\n"+
    "  message CaptureProbability {\n"+
    "      repeated ItemId PokeballType = 1;\n"+
    "      repeated float CaptureProbability = 2;\n"+
    "      optional float ReticleDifficultySize = 12;\n"+
    "  }\n"+
    "\n"+
    "  message EncounterResponse {\n"+
    "      optional WildPokemonProto WildPokemon = 1;\n"+
    "      optional Background EncounterBackground = 2;\n"+
    "      optional Status EncounterStatus = 3;\n"+
    "      //optional CaptureProbability EncounterCaptureProbability = 4;\n"+
    "\n"+
    "      enum Background {\n"+
    "          PARK = 0;\n"+
    "          DESERT = 1;\n"+
    "      }\n"+
    "\n"+
    "      enum Status {\n"+
    "          ENCOUNTER_ERROR = 0;\n"+
    "          ENCOUNTER_SUCCESS = 1;\n"+
    "          ENCOUNTER_NOT_FOUND = 2;\n"+
    "          ENCOUNTER_CLOSED = 3;\n"+
    "          ENCOUNTER_POKEMON_FLED = 4;\n"+
    "          ENCOUNTER_NOT_IN_RANGE = 5;\n"+
    "          ENCOUNTER_ALREADY_HAPPENED = 6;\n"+
    "          POKEMON_INVENTORY_FULL = 7;\n"+
    "      }\n"+
    "  }\n"+
    "\n"+
    "  message FortSearchResponse {\n"+
    "  \toptional Result result = 1;\n"+
    "  \trepeated ItemAward items_awarded = 2;\n"+
    "  \toptional int32 gems_awarded = 3;\n"+
    "  \toptional PokemonData pokemon_data_egg = 4;\n"+
    "  \toptional int32 experience_awarded = 5;\n"+
    "  \toptional int64 cooldown_complete_timestamp_ms = 6;\n"+
    "  \toptional int32 chain_hack_sequence_number = 7;\n"+
    "\n"+
    "  \tenum Result {\n"+
    "  \t\tNO_RESULT_SET = 0;\n"+
    "  \t\tSUCCESS = 1;\n"+
    "  \t\tOUT_OF_RANGE = 2;\n"+
    "  \t\tIN_COOLDOWN_PERIOD = 3;\n"+
    "  \t\tINVENTORY_FULL = 4;\n"+
    "\t  }\n"+
    "  }\n"+
    "\n"+
    "  message FortDetailsResponse {\n"+
    "    optional string fort_id = 1;\n"+
    "    optional TeamColor team_color = 2;\n"+
    "    optional PokemonData pokemon_data = 3;\n"+
    "    optional string name = 4;\n"+
    "    repeated string image_urls = 5;\n"+
    "    optional int32 fp = 6;\n"+
    "    optional int32 stamina = 7;\n"+
    "    optional int32 max_stamina = 8;\n"+
    "    optional int32 type = 9;\n"+
    "    optional double latitude = 10;\n"+
    "    optional double longitude = 11;\n"+
    "    optional string description = 12;\n"+
    "    repeated FortModifier modifiers = 13;\n"+
    "  }\n"+
    "\n"+
    "  message FortModifier {\n"+
    "    optional ItemId item_id = 1;\n"+
    "    optional int64 expiration_timestamp_ms = 2;\n"+
    "    optional string deployer_player_codename = 3;\n"+
    "  }\n"+
    "\n"+
    "  message RecycleInventoryItemResponse {\n"+
    "    optional Result result = 1;\n"+
    "    optional int32 new_count = 2;\n"+
    "\n"+
    "    enum Result {\n"+
    "      UNSET = 0;\n"+
    "      SUCCESS = 1;\n"+
    "      ERROR_NOT_ENOUGH_COPIES = 2;\n"+
    "      ERROR_CANNOT_RECYCLE_INCUBATORS = 3;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message ItemAward {\n"+
    "    optional ItemId item_id = 1;\n"+
    "    optional int32 item_count = 2;\n"+
    "  }\n"+
    "\n"+
    "  message ReleasePokemonResponse {\n"+
    "    required ReleaseStatus Status = 1;\n"+
    "    optional int32 CandyAwarded = 2;\n"+
    "    enum ReleaseStatus {\n"+
    "      UNSET = 0;\n"+
    "      SUCCESS = 1;\n"+
    "      POKEMON_DEPLOYED = 2;\n"+
    "      FAILED = 3;\n"+
    "      ERROR_POKEMON_IS_EGG = 4;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message EvolvePokemonResponse\n"+
    "  {\n"+
    "    optional EvolvePokemonStatus Result = 1;\n"+
    "    optional Pokemon EvolvedPokemon = 2;\n"+
    "    optional int32 ExpAwarded = 3;\n"+
    "    optional int32 CandyAwarded = 4;\n"+
    "\n"+
    "  \tenum EvolvePokemonStatus {\n"+
    "  \t\tPOKEMON_EVOLVED_UNSET = 0;\n"+
    "  \t\tPOKEMON_EVOLVED_SUCCESS = 1;\n"+
    "  \t\tFAILED_POKEMON_MISSING = 2;\n"+
    "  \t\tFAILED_INSUFFICIENT_RESOURCES = 3;\n"+
    "  \t\tFAILED_POKEMON_CANNOT_EVOLVE = 4;\n"+
    "  \t\tFAILED_POKEMON_IS_DEPLOYED = 5;\n"+
    "  \t}\n"+
    "  }\n"+
    "\n"+
    "  message TransferPokemonResponse {\n"+
    "    optional int32 Status = 1;\n"+
    "    optional int32 CandyAwarded = 2;\n"+
    "  }\n"+
    "\n"+
    "  message ActionLogResponse {\n"+
    "  \trequired Result result = 1;\n"+
    "  \trepeated ActionLogEntry log_entries = 2;\n"+
    "\n"+
    "  \tenum Result {\n"+
    "  \t\tUNSET = 0;\n"+
    "  \t\tSUCCESS = 1;\n"+
    "  \t}\n"+
    "  }\n"+
    "\n"+
    "  message ActionLogEntry {\n"+
    "  \trequired int64 timestamp_ms = 1;\n"+
    "  \toptional bool sfida = 2;\n"+
    "\n"+
    "  \toneof Action {\n"+
    "  \t\tCatchPokemonLogEntry catch_pokemon = 3;\n"+
    "  \t\tFortSearchLogEntry fort_search = 4;\n"+
    "  \t}\n"+
    "  }\n"+
    "\n"+
    "  message CatchPokemonLogEntry {\n"+
    "  \trequired Result result = 1;\n"+
    "  \trequired PokemonId pokemon_id = 2;\n"+
    "  \trequired int32 combat_points = 3;\n"+
    "  \t//required uint64 pokemon_data_id = 4;\n"+
    "\n"+
    "  \tenum Result {\n"+
    "  \t\tUNSET = 0;\n"+
    "  \t\tPOKEMON_CAPTURED = 1;\n"+
    "  \t\tPOKEMON_FLED = 2;\n"+
    "  \t}\n"+
    "  }\n"+
    "\n"+
    "  message FortSearchLogEntry {\n"+
    "  \trequired Result result = 1;\n"+
    "  \toptional string fort_id = 2;\n"+
    "  \trepeated ItemAward items = 3;\n"+
    "  \toptional int32 eggs = 4;\n"+
    "\n"+
    "  \tenum Result {\n"+
    "  \t\tUNSET = 0;\n"+
    "  \t\tSUCCESS = 1;\n"+
    "  \t}\n"+
    "  }\n"+
    "\n"+
    "  message LevelUpRewardsResponse {\n"+
    "    required RewardStatus Status = 1;\n"+
    "    repeated ItemAward items_awarded = 2;\n"+
    "    repeated ItemId items_unlocked = 4;\n"+
    "\n"+
    "    enum RewardStatus {\n"+
    "      UNSET = 0;\n"+
    "      SUCCESS = 1;\n"+
    "      AWARDED_ALREADY = 2;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message UseItemEggIncubatorResponse {\n"+
    "    required IncubatorStatus Status = 1;\n"+
    "    required EggIncubator egg_incubator = 2;\n"+
    "\n"+
    "    enum IncubatorStatus {\n"+
    "      UNSET = 0;\n"+
    "      SUCCESS = 1;\n"+
    "      ERROR_INCUBATOR_NOT_FOUND = 2;\n"+
    "      ERROR_POKEMON_EGG_NOT_FOUND = 3;\n"+
    "      ERROR_POKEMON_ID_NOT_EGG = 4;\n"+
    "      ERROR_INCUBATOR_ALREADY_IN_USE = 5;\n"+
    "      ERROR_POKEMON_ALREADY_INCUBATING = 6;\n"+
    "      ERROR_INCUBATOR_NO_USES_REMAINING = 7;\n"+
    "    }\n"+
    "  }\n"+
    "\n"+
    "  message GetHatchedEggsResponse {\n"+
    "    required bool success = 1;\n"+
    "    repeated uint64 pokemon_id = 2 [packed=true];\n"+
    "    repeated int32 experience_awarded = 3;\n"+
    "    repeated int32 candy_awarded = 4;\n"+
    "    repeated int32 stardust_awarded = 5;\n"+
    "  }\n"+
    "\n"+
    "  message UseItemXpBoostResponse {\n"+
    "    required XpBoostStatus Status = 1;\n"+
    "    optional AppliedItems applied_items = 2;\n"+
    "\n"+
    "    enum XpBoostStatus {\n"+
    "      UNSET = 0;\n"+
    "      SUCCESS = 1;\n"+
    "      ERROR_INVALID_ITEM_TYPE = 2;\n"+
    "      ERROR_XP_BOOST_ALREADY_ACTIVE = 3;\n"+
    "      ERROR_NO_ITEMS_REMAINING = 4;\n"+
    "      ERROR_LOCATION_UNSET = 5;\n"+
    "    }\n"+
    "  }\n"+
    "}\n"+
    "\n"+
    "message Signature {\n"+
    "\n"+
    "    message LocationFix {\n"+
    "        optional string provider = 1; // \"network\", \"gps\", \"fused\", possibly others\n"+
    "        optional uint64 timestamp_since_start = 2; // in ms\n"+
    "        optional float latitude = 13;\n"+
    "        optional float longitude = 14;\n"+
    "\n"+
    "        // ??? shows up in struct, dunno where these go\n"+
    "        // float device_speed;\n"+
    "        // float device_course;\n"+
    "        optional float horizontal_accuracy = 20; // iOS only? (range seems to be -1 to +1)\n"+
    "        optional float altitude = 21;\n"+
    "        optional float vertical_accuracy = 22; // iOS only? (range seems to be ~10-12)\n"+
    "        optional uint64 provider_status = 26; // Usually 3 (possibly GPS status: 1 = no fix, 2 = acquiring/inaccurate, 3 = fix acquired)\n"+
    "        optional uint32 floor = 27; // No idea what this is, seems to be optional\n"+
    "        optional  uint64 location_type = 28; // Always 1 (if there is data at all)\n"+
    "    }\n"+
    "\n"+
    "    // don't really care about this since we're not using it\n"+
    "    message AndroidGpsInfo {\n"+
    "        optional uint64 time_to_fix = 1;\n"+
    "        repeated int32 satellites_prn = 2;\n"+
    "        repeated float snr = 3;\n"+
    "        repeated float azimuth = 4;\n"+
    "        repeated float elevation = 5;\n"+
    "        repeated bool has_almanac = 6;\n"+
    "        repeated bool has_ephemeris = 7;\n"+
    "        repeated bool used_in_fix = 8;\n"+
    "    }\n"+
    "\n"+
    "    message SensorInfo {\n"+
    "        optional uint64 timestamp_snapshot = 1; // in ms\n"+
    "        optional double magnetometer_x = 3;\n"+
    "        optional double magnetometer_y = 4;\n"+
    "        optional double magnetometer_z = 5;\n"+
    "        optional double angle_normalized_x = 6;\n"+
    "        optional double angle_normalized_y = 7;\n"+
    "        optional double angle_normalized_z = 8;\n"+
    "        optional double accel_raw_x = 10;\n"+
    "        optional double accel_raw_y = 11;\n"+
    "        optional double accel_raw_z = 12;\n"+
    "        optional double gyroscope_raw_x = 13;\n"+
    "        optional double gyroscope_raw_y = 14;\n"+
    "        optional double gyroscope_raw_z = 15;\n"+
    "        optional double accel_normalized_x = 16;\n"+
    "        optional double accel_normalized_y = 17;\n"+
    "        optional double accel_normalized_z = 18;\n"+
    "        optional uint64 accelerometer_axes = 19; // Always 3\n"+
    "    }\n"+
    "\n"+
    "    message DeviceInfo {\n"+
    "        optional string device_id = 1; // Hex string\n"+
    "        optional string android_board_name = 2;\n"+
    "        optional string android_bootloader = 3;\n"+
    "        optional  string device_brand = 4; // On Android: product.brand\n"+
    "        optional  string device_model = 5; // On Android: product.device\n"+
    "        optional  string device_model_identifier = 6; // Android only, build.display.id\n"+
    "        optional  string device_model_boot = 7;  // On Android: boot.hardware\n"+
    "        optional   string hardware_manufacturer = 8; // On Android: product.manufacturer\n"+
    "        optional  string hardware_model = 9;  // On Android: product.model\n"+
    "        optional   string firmware_brand = 10; // On Android: product.name, on iOS: \"iPhone OS\"\n"+
    "        optional  string firmware_tags = 12; // Android only, build.tags\n"+
    "        optional  string firmware_type = 13; // On Android: build.type, on iOS instead: iOS version\n"+
    "        optional  string firmware_fingerprint = 14; // Android only, build.fingerprint\n"+
    "    }\n"+
    "\n"+
    "    message ActivityStatus {\n"+
    "        // all of these had 1 as their value\n"+
    "        optional   uint64 start_time_ms = 1;\n"+
    "        optional   bool unknown_status = 2;\n"+
    "        optional   bool walking = 3;\n"+
    "        optional       bool running = 4;\n"+
    "        optional       bool stationary = 5;\n"+
    "        optional       bool automotive = 6;\n"+
    "        optional       bool tilting = 7;\n"+
    "        optional       bool cycling = 8;\n"+
    "        optional   bytes status = 9;\n"+
    "    }\n"+
    "\n"+
    "    optional uint64 timestamp_since_start = 2; // in ms\n"+
    "    repeated LocationFix location_fix = 4;\n"+
    "    optional AndroidGpsInfo gps_info = 5;\n"+
    "    optional SensorInfo sensor_info = 7;\n"+
    "    optional DeviceInfo device_info = 8;\n"+
    "    optional ActivityStatus activity_status = 9;\n"+
    "    optional uint32 location_hash1 = 10; // Location1 hashed based on the auth_token - xxHash32\n"+
    "    optional uint32 location_hash2 = 20; // Location2 hashed based on the auth_token - xxHash32\n"+
    "    optional bytes unk22 = 22; // possibly replay check. Generation unknown but pointed to by 0001B8614\n"+
    "    optional uint64 timestamp = 23; // epoch timestamp in ms\n"+
    "    repeated uint64 request_hash = 24; // hashes of each request message in a hashArray - xxhash64\n"+
    "\n"+
    "    // Addresses for the corresponding hash functions:\n"+
    "    //    xxHash32              00054D28\n"+
    "    //    xxhash64              000546C8 - Feeds into 00053D40\n"+
    "\n"+
    "}\n";

  var protobuf = dcodeIO.ProtoBuf;
  var builder = protobuf.loadProto(protoString);
  var pokemonProto = builder.build();

  angular.module('Podic.services').factory('pokemonProto', pokemonProtoProvider);
  /* @ng-inject */
  function pokemonProtoProvider() {
      return pokemonProto;
  }
})();

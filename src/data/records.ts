import {
  Adina3MEN,
  Adina4MEN,
  BS3MEN,
  Cairn2MEN,
  Deimos5MEN,
  Gorse4MEN,
  Gorse4MENV2,
  Gorse5MEN,
  IceContstruct1MEN,
  KC5MEN,
  QTP3MEN,
  River1MEN,
  Sabetha10MEN,
  Sabir4MEN,
  Sabir5MEN,
  Sabir5MENV2,
  Samarog4MEN,
  Statues2MEN,
  VG4MEN,
  W15MEN,
  W45MEN,
  WoJ3MEN,
  WoJ4MEN,
  FREEZIE,
  Ankka3MEN,
  AH3MEN,
  HT3MEN,
  HT2MEN,
  Ankka2MEN,
  Ankka1MEN,
  OLC1MEN,
  KO1MEN,
  Ankka3MENV2,
  MO5MEN,
  IceConstruct1MENV2,
  FoJ2MEN,
  KO3MEN,
  MO3MEN,
  W25MEN,
  FoJ2MENV2,
  Pandas2MEN,
  BS2MEN,
  WOJ2MEN,
  VG2MENV2,
  VG3MEN,
  SH10MEN,
  W45MENV2,
  DagdaSolo,
  DagdaDUO,
  WING7_5MEN,
  Sabir5MENV3,
  QTP5Men,
  CERUS4MEN,
  Samarog4MENV2,
  Pandas2MENV2,
  BS2MENV2,
  WOJ2MENV2,
  SABIR4MENV2,
  FreezieDUOV2,
  Adina3MENV2,
  AHDUO,
  AnkkaDUO,
  KODUO,
  OLCDUO,
  DUOADINA,
  VG3MENV2,
  VGDUO,
  DHUUM4MEN,
  CA5MEN,
  TWINS5MEN,
  WING65MEN,
  WING55MEN,
  WING35MEN,
} from "../assets";

export const w1 = "Spirit Vale",
  w2 = "Salvation Pass",
  w3 = "Stronghold of the Faithful",
  w4 = "Bastion of the Penitent",
  w5 = "Hall of Chains",
  w6 = "Mythwright Gambit",
  w7 = "Key of Ahdashim";

const VG = "Vale Guardian",
  SpiritWoods = "Spirit Woods",
  Gorse = "Gorseval",
  Sab = "Sabetha";
const Sloth = "Sloth",
  Trio = "Bandit Trio",
  Mathias = "Mathias";
const Escort = "Escort",
  KC = "Keep Construct",
  TC = "Twisted Castle",
  Xera = "Xera";
const Cairn = "Cairn",
  MO = "Mursaat Oversser",
  Sama = "Samarog",
  Deimos = "Deimos";
const SH = "Soulless Horror",
  River = "River",
  Statues = "Statues",
  Dhuum = "Dhuum";
const CA = "Conjured Amalgamate",
  Twins = "Twin Largos",
  Qadim = "Qadim";
const Adina = "Cardinal Adina",
  Sabir = "Cardinal Sabir",
  QTP = "Qadim The Peerless";

export const IBS = "IBS Strikes",
  EOD = "EOD Strikes",
  SOTO = "SOTO Strikes";

const IceConstruct = "Icebrood Construct",
  Panda = "Voice and Claw",
  FoJ = "Fraenir of Jormag",
  BS = "Boneskinner",
  WoJ = "Whisper of Jormag",
  Freezie = "Freezie";
const AH = "Aetherblade Hideout",
  Ankka = "Ankka",
  KO = "Kaineng Overlook",
  HT = "Harvest Temple",
  OLC = "Old Lions Court";

const CO = "Cosmic Observatory";
const FEBE = "Temple of Febe";

export const encounter: IEncounter[] = [
  {
    name: "wing-1",
    wingName: w1,
    bosses: [VG, SpiritWoods, Gorse, Sab],
  },
  {
    name: "wing-2",
    wingName: w2,
    bosses: [Sloth, Trio, Mathias],
  },
  {
    name: "wing-3",
    wingName: w3,
    bosses: [Escort, KC, TC, Xera],
  },
  {
    name: "wing-4",
    wingName: w4,
    bosses: [Cairn, MO, Sama, Deimos],
  },
  {
    name: "wing-5",
    wingName: w5,
    bosses: [SH, River, Statues, Dhuum],
  },
  {
    name: "wing-6",
    wingName: w6,
    bosses: [CA, Twins, Qadim],
  },
  {
    name: "wing-7",
    wingName: w7,
    bosses: [Adina, Sabir, QTP],
  },
  {
    name: "IBS Strikes",
    wingName: IBS,
    bosses: [IceConstruct, Panda, FoJ, BS, WoJ, Freezie],
  },
  {
    name: "EOD Strikes",
    wingName: EOD,
    bosses: [AH, Ankka, KO, HT, OLC],
  },
  {
    name: "SOTO Strikes",
    wingName: SOTO,
    bosses: [CO, FEBE],
  },
];

export const wingRecordsData: IWingDataRecords[] = [
  {
    name: w1,
    bosses: [
      {
        name: VG,
        records: [
          {
            raiders: 2,
            image: VGDUO,
            video: "https://youtu.be/qvfE-v2AZPM",
            log: "https://dps.report/yWE5-20240104-235208_vg",
          },
          {
            raiders: 3,
            image: VG3MENV2,
            video: "https://youtu.be/BG7f6EIa1Rk",
            log: "https://dps.report/PAV9-20231229-220210_vg",
          },
          {
            raiders: 3,
            image: VG3MEN,
            video: "https://youtu.be/5xnYcXLNsQY",
            log: "https://dps.report/l72n-20230914-005152_vg",
          },
          {
            raiders: 4,
            image: VG2MENV2,
            video: "https://youtu.be/62QaCs9BsfM",
            log: "https://dps.report/UY8U-20230913-234451_vg",
          },
          { raiders: 4, image: VG4MEN, video: "https://youtu.be/_pqnqEj_2wU", log: "https://dps.report/Yei7-20220321-224439_vg" },
        ],
      },
      {
        name: SpiritWoods,
        records: [],
      },
      {
        name: Gorse,
        records: [
          {
            raiders: 4,
            image: Gorse4MEN,
            video: "https://youtu.be/8hhRwEU0fcQ",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/zvlv2q/gorseval_4_men_by_completely_trash_ct/",
            log: "https://dps.report/qXDZ-20221216-234609_gors",
          },
          {
            raiders: 4,
            image: Gorse4MENV2,
            video: "https://youtu.be/tVNkQZuBqDI",
            log: "https://dps.report/PR9E-20221210-233940_gors",
          },
          {
            raiders: 5,
            image: Gorse5MEN,
            video: "https://youtu.be/ygndU1iOf7I",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/y5dl9d/gorseval_5_men_by_completely_trash_ct/",
            log: "https://dps.report/isB1-20221001-214056_gors",
          },
        ],
      },
      {
        name: Sab,
        records: [
          {
            raiders: 10,
            image: Sabetha10MEN,
            video: "https://youtu.be/Yyl8zqPVyfU",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/wgqkl5/sabetha_255_by_completely_trash_ct/",
            log: "https://dps.report/Ya4l-20220804-230531_sab",
          },
        ],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: W15MEN,
        video: "https://youtu.be/ssHnf2rXeAY",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/14fhlf8/wing_1_5_men_by_completely_trash_ct/",
      },
    ],
  },
  {
    name: w2,
    bosses: [
      {
        name: Sloth,
        records: [],
      },
      {
        name: Trio,
        records: [],
      },
      {
        name: Mathias,
        records: [],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: W25MEN,
        video: "https://youtu.be/ccbQ0jsTqTw",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/15uir9d/wing_2_5_men_by_completely_trash_ct/",
      },
    ],
  },
  {
    name: w3,
    bosses: [
      {
        name: Escort,
        records: [],
      },
      {
        name: KC,
        records: [
          {
            raiders: 5,
            image: KC5MEN,
            video: "https://youtu.be/lB2DZwaw5yk",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/x3bp80/keep_construct_5_men_by_completely_trash/",
            log: "https://dps.report/Y2jH-20220826-220232_kc",
          },
        ],
      },
      {
        name: TC,
        records: [],
      },
      {
        name: Xera,
        records: [],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: WING35MEN,
        video: "https://youtu.be/RytaZBhVj3o",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/1d9e5qz/wing_3_5_men_by_completely_trash_ct/",
      },
    ],
  },
  {
    name: w4,
    bosses: [
      {
        name: Cairn,
        records: [{ raiders: 2, image: Cairn2MEN, video: "https://youtu.be/L_ouKl8e3a4", log: "https://dps.report/wQKr-20210918-191037_cairn" }],
      },
      {
        name: MO,
        records: [
          {
            raiders: 3,
            image: MO3MEN,
            video: "https://youtu.be/vFWtAfgJ0L0",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/15ldilo/mursaat_overseer_trio_by_completely_trash_ct/",
            log: "https://dps.report/YGin-20230730-233445_mo",
          },
          { raiders: 5, image: MO5MEN, video: "https://youtu.be/D5L7WzK0igg", log: "https://dps.report/8Z94-20210823-232141_mo" },
        ],
      },
      {
        name: Sama,
        records: [
          {
            raiders: 4,
            image: Samarog4MENV2,
            video: "https://youtu.be/Tp52UGd_ZLo",
            log: "https://dps.report/WlhN-20231128-001542_sam",
          },
          {
            raiders: 4,
            image: Samarog4MEN,
            video: "https://youtu.be/56zPhT0YrrQ",
            log: "https://dps.report/Erab-20220423-211558_sam",
          },
        ],
      },
      {
        name: Deimos,
        records: [{ raiders: 5, image: Deimos5MEN, video: "https://youtu.be/wiL0OuMciko", log: "https://dps.report/B4sJ-20220523-222859_dei" }],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: W45MENV2,
        video: "https://youtu.be/ddhv66hu7cQ",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/17mr6ga/wing_4_5_men_by_completely_trash_ct/",
      },
      {
        raiders: 5,
        image: W45MEN,
        video: "https://youtu.be/yA0THUT5hr4",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/uy8red/wing_4_full_clear_by_5_raiders_2509_by_completely/",
      },
    ],
  },
  {
    name: w5,
    bosses: [
      {
        name: SH,
        records: [
          {
            raiders: 10,
            image: SH10MEN,
            video: "https://youtu.be/Sc_ETy4KL7M",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/16sj1sz/soulless_horror_speedrun_by_ct_ln_qt_friends/",
            log: "https://dps.report/qRGs-20230926-013723_sh",
          },
        ],
      },
      {
        name: River,
        records: [
          {
            raiders: 1,
            image: River1MEN,
            video: "https://youtu.be/s2ZaCgvR7Xk",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/ysbuie/river_of_souls_solo_by_completely_trash_ct/",
            log: "https://dps.report/MoZ0-20221109-213644_rr",
          },
        ],
      },
      {
        name: Statues,
        records: [
          {
            raiders: 2,
            image: Statues2MEN,
            video: "https://youtu.be/QHHzslDbIPQ",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/10vfevl/eater_of_souls_duo_by_completely_trash_ct/",
            log: "https://dps.report/O1K3-20230204-215231_se",
          },
        ],
      },
      {
        name: Dhuum,
        records: [
          {
            raiders: 4,
            image: DHUUM4MEN,
            video: "https://youtu.be/Kz_JhGxPkfY",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/1ahue1i/dhuum_4_men_completely_trash_ct_healers_overrated/",
            log: "https://dps.report/GeHJ-20240128-201403_dhuum",
          },
        ],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: WING55MEN,
        video: "https://youtu.be/mkGCkmmZYh4",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/1blr87x/wing_5_5_men_by_completely_trash_ct/",
      },
    ],
  },
  {
    name: w6,
    bosses: [
      {
        name: CA,
        records: [
          {
            raiders: 5,
            image: CA5MEN,
            video: "https://youtu.be/nyqoSnEfXT0",
            log: "https://dps.report/ripw-20240216-225758_ca",
          },
        ],
      },
      {
        name: Twins,
        records: [
          {
            raiders: 5,
            image: TWINS5MEN,
            video: "https://youtu.be/ybd-JNbr4Yk",
            log: "https://dps.report/FVDS-20240203-225926_twins",
          },
        ],
      },
      {
        name: Qadim,
        records: [],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: WING65MEN,
        video: "https://youtu.be/lLZX9iCNJLE",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/1aysv3n/wing_6_5_men_by_completely_trash_ct/",
      },
    ],
  },
  {
    name: w7,
    bosses: [
      {
        name: Adina,
        records: [
          {
            raiders: 2,
            image: DUOADINA,
            video: "https://youtu.be/m5aMMWh92sA",
            log: "https://dps.report/gyzV-20240102-012033_adina",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/18xly1n/cardinal_adina_duo_by_completely_trash_ct_necro_op/",
          },
          {
            raiders: 3,
            image: Adina3MENV2,
            video: "https://youtu.be/yiPwBFAPY6A",
            log: "https://dps.report/pJ3G-20231229-025817_adina",
          },
          {
            raiders: 3,
            image: Adina3MEN,
            video: "https://youtu.be/6HjBvL47l_8",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/vymzdo/cardinal_adina_3_men_1239_by_completely_trash_ct/",
            log: "https://dps.report/uSwg-20220713-012648_adina",
          },
          {
            raiders: 4,
            image: Adina4MEN,
            video: "https://youtu.be/boQjAvMHmtc",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/vn720p/cardinal_adina_4_men_656_by_completely_trash_ct/",
            log: "https://dps.report/lNsK-20220627-221329_adina",
          },
        ],
      },
      {
        name: Sabir,
        records: [
          {
            raiders: 4,
            image: SABIR4MENV2,
            video: "https://youtu.be/DSCU6-2cYk4",
            log: "https://dps.report/uO8I-20231125-221748_sabir",
          },
          {
            raiders: 4,
            image: Sabir4MEN,
            video: "https://youtu.be/SstYGmDUTSY",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/xt1opt/cardinal_sabir_4_men_by_completely_trash_ct/",
            log: "https://dps.report/kadw-20220928-231049_sabir",
          },
          {
            raiders: 5,
            image: Sabir5MENV3,
            video: "https://youtu.be/5JI9D7_seTI",
            log: "https://dps.report/KWn6-20231118-231325_sabir",
          },
          {
            raiders: 5,
            image: Sabir5MENV2,
            video: "https://youtu.be/Bfhpv_kzfPo",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/ycy0jp/cardinal_sabir_5_men_by_completely_trash_ct/",
            log: "https://dps.report/oGB3-20220929-215241_sabir",
          },
          {
            raiders: 5,
            image: Sabir5MEN,
            video: "https://youtu.be/jMy9Gv18mXA",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/wda27q/cardinal_sabir_5_men_609_by_completely_trash_ct/",
            log: "https://dps.report/Wq01-20220730-215344_sabir",
          },
        ],
      },
      {
        name: QTP,
        records: [
          {
            raiders: 3,
            image: QTP3MEN,
            video: "https://youtu.be/XEBWB6bBVA8",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/12oac8c/qadim_the_peerless_first_ever_trio_kill_by/",
            log: "https://dps.report/wHtl-20230402-210030_qpeer",
          },
          {
            raiders: 5,
            image: QTP5Men,
            video: "https://youtu.be/8YT43dVUk-o",
            log: "https://dps.report/1Bl4-20231118-232303_qpeer",
          },
        ],
      },
    ],
    fullWing: [
      {
        raiders: 5,
        image: WING7_5MEN,
        video: "https://youtu.be/TboadKegXqY",
        reddit: "https://www.reddit.com/r/Guildwars2/comments/183hedx/wing_7_5_men_by_completely_trash_ct/",
      },
    ],
  },
  {
    name: IBS,
    bosses: [
      {
        name: IceConstruct,
        records: [
          {
            raiders: 1,
            image: IceContstruct1MEN,
            video: "https://youtu.be/wsjdOjfQplk",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/14ojlej/ice_construct_ibs_solo_by_completely_trash_ct/",
            log: "https://dps.report/PLM3-20230627-180846_ice",
          },
          { raiders: 1, image: IceConstruct1MENV2, video: "https://youtu.be/lz18cWsgsy8", log: "https://dps.report/DuJ8-20220224-150623_ice" },
        ],
      },
      {
        name: Panda,
        records: [
          {
            raiders: 2,
            image: Pandas2MEN,
            video: "https://www.youtube.com/watch?v=VaYy9V9yoNw&t=206s&ab_channel=CompletelyTrash",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/16p7da5/ibs_strikes_full_clear_2_men_by_completely_trash/",
            log: "https://dps.report/TiAe-20230913-034944_falln",
          },
          {
            raiders: 2,
            image: Pandas2MENV2,
            video: "https://youtu.be/3pN_5MS7bm4",
            log: "https://dps.report/Duhf-20231203-004448_falln",
          },
        ],
      },
      {
        name: FoJ,
        records: [
          {
            raiders: 2,
            image: FoJ2MENV2,
            video: "https://youtu.be/BRv1brukEhc",
            log: "https://dps.report/vhsf-20230805-015604_frae",
          },
          { raiders: 2, image: FoJ2MEN, video: "https://youtu.be/DYjs4iwQcS0", log: "https://dps.report/cP7l-20220329-181935_frae" },
        ],
      },
      {
        name: BS,
        records: [
          {
            raiders: 2,
            image: BS2MEN,
            video: "https://www.youtube.com/watch?v=VaYy9V9yoNw&ab_channel=CompletelyTrash",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/16p7da5/ibs_strikes_full_clear_2_men_by_completely_trash/",
            log: "https://dps.report/nk1j-20230913-024627_bone",
          },
          {
            raiders: 2,
            image: BS2MENV2,
            video: "https://youtu.be/eTbE880kGvI",
            log: "https://dps.report/yWOH-20231202-220019_bone",
          },
          {
            raiders: 3,
            image: BS3MEN,
            video: "https://youtu.be/gXfegWo8vrQ",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/wt1mi6/boneskinner_trio_5_32_by_completely_trash_ct/",
            log: "https://dps.report/oP2y-20220818-225244_bone",
          },
        ],
      },
      {
        name: WoJ,
        records: [
          {
            raiders: 2,
            image: WOJ2MEN,
            video: "https://www.youtube.com/watch?v=VaYy9V9yoNw&t=375s&ab_channel=CompletelyTrash",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/16p7da5/ibs_strikes_full_clear_2_men_by_completely_trash/",
            log: "https://dps.report/NGV1-20230913-044036_whisp",
          },
          {
            raiders: 2,
            image: WOJ2MENV2,
            video: "https://youtu.be/sZUGQmcOKIo",
            log: "https://dps.report/AEcw-20231202-230155_whisp",
          },
          {
            raiders: 3,
            image: WoJ3MEN,
            video: "https://youtu.be/QABGusz8kTU",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/wz3oag/whisper_of_jormag_3_and_4_men_by_completely_trash/",
            log: "https://dps.report/WyZh-20220821-195444_whisp",
          },
          {
            raiders: 4,
            image: WoJ4MEN,
            video: "https://youtu.be/pNDqq_FLvvo",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/wz3oag/whisper_of_jormag_3_and_4_men_by_completely_trash/",
            log: "https://dps.report/f2az-20220823-005534_whisp",
          },
        ],
      },
      {
        name: Freezie,
        records: [
          {
            raiders: 2,
            image: FreezieDUOV2,
            video: "https://youtu.be/oYFPgYWGlvQ",
            log: "https://dps.report/AtI3-20231226-002521_frezi",
          },
          {
            raiders: 2,
            image: FREEZIE,
            video: "https://youtu.be/hQs8kpmep9A",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/zzu91i/freezie_duo_by_completely_trash_ct_happy_new_year/",
            log: "https://dps.report/LEtB-20221230-014753_frezi",
          },
          { raiders: 3, image: FREEZIE, video: "https://youtu.be/Ju5B9H53aWU", log: "https://dps.report/ZaAZ-20221229-231458_frezi" },
        ],
      },
    ],
    fullWing: [],
  },
  {
    name: EOD,
    bosses: [
      {
        name: AH,
        records: [
          {
            raiders: 2,
            image: AHDUO,
            video: "https://youtu.be/vtrHvsIoCrY",
            log: "https://dps.report/7Tkp-20231215-233559_trin",
          },
          { raiders: 3, image: AH3MEN, video: "https://youtu.be/-HmKhQm_BEk", reddit: "", log: "https://dps.report/wKsB-20220522-001201_trin" },
        ],
      },
      {
        name: Ankka,
        records: [
          {
            raiders: 1,
            image: Ankka1MEN,
            video: "https://youtu.be/mwNe_5ssluw",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/139m693/ankka_fastest_solo_by_completely_trash_ct/",
            log: "https://dps.report/UCcl-20230424-164611_ankka",
          },
          {
            raiders: 2,
            image: AnkkaDUO,
            video: "https://youtu.be/sXb_yqnF-7s",
            log: "https://dps.report/ZJmh-20231215-220344_ankka",
          },
          {
            raiders: 2,
            image: Ankka2MEN,
            video: "https://youtu.be/M-qXq5IzY0E",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/12hm1s1/ankka_duo_by_completely_trash_ct/",
            log: "https://dps.report/Rmln-20230407-010227_ankka",
          },
          {
            raiders: 3,
            image: Ankka3MENV2,
            video: "https://youtu.be/GKxHyd4SZ_A",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/15fc6dd/ankka_trio_by_completely_trash_ct/",
            log: "https://dps.report/XucL-20230731-003310_ankka",
          },
          { raiders: 3, image: Ankka3MEN, video: "https://youtu.be/uf5jc1zDxH4", log: "https://dps.report/OuWS-20220512-223410_ankka" },
        ],
      },
      {
        name: KO,
        records: [
          {
            raiders: 1,
            image: KO1MEN,
            video: "https://youtu.be/YL3Ht5-6BOk",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/14k7jl1/minister_li_ko_solo_by_completely_trash_ct/",
            log: "https://dps.report/f2rk-20230626-041505_li",
          },
          {
            raiders: 2,
            image: KODUO,
            video: "https://youtu.be/nfqgpHtRXas",
            log: "https://dps.report/Vrqj-20231216-020702_li",
          },
          {
            raiders: 3,
            image: KO3MEN,
            video: "https://youtu.be/mGEDp3D93gE",
            log: "https://dps.report/a1Zi-20220515-001024_li",
          },
        ],
      },
      {
        name: HT,
        records: [
          {
            raiders: 2,
            image: HT2MEN,
            video: "https://youtu.be/Y5RPnF7WM38",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/yig9q2/harvest_temple_duo_by_completely_trash_ct/",
            log: "https://dps.report/BOIJ-20221028-173301_void",
          },
          {
            raiders: 3,
            image: HT3MEN,
            video: "https://youtu.be/fsz54u72Mrw",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/vslycd/harvest_temple_3_men_2027_by_completely_trash_ct/",
            log: "https://dps.report/BOZv-20220705-021224_void",
          },
        ],
      },
      {
        name: OLC,
        records: [
          {
            raiders: 1,
            image: OLC1MEN,
            video: "https://youtu.be/LxOneLQvVsc",
            reddit: "https://www.reddit.com/r/Guildwars2/comments/12u6mql/olc_fastest_solo_by_completely_trash_ct/",
            log: "https://dps.report/cQ9X-20230416-183742_olc",
          },
          {
            raiders: 2,
            image: OLCDUO,
            video: "https://youtu.be/DDy9bmMp1Hk",
            log: "https://dps.report/wjq3-20231215-225406_olc",
          },
        ],
      },
    ],
    fullWing: [],
  },
  {
    name: SOTO,
    bosses: [
      {
        name: CO,
        records: [
          {
            raiders: 1,
            image: DagdaSolo,
            video: "https://youtu.be/SFQbAMhHsoQ",
            log: "https://dps.report/MvZt-20231201-163533_dagda",
          },
          {
            raiders: 2,
            image: DagdaDUO,
            video: "https://youtu.be/6X-4I1WjpSw",
            log: "https://dps.report/vG0z-20231110-194942_dagda",
          },
        ],
      },
      {
        name: FEBE,
        records: [
          {
            raiders: 4,
            image: CERUS4MEN,
            video: "https://youtu.be/sf1fM3Fcq6Q",
            log: "https://dps.report/LKMB-20231116-231918_cerus",
          },
        ],
      },
    ],
    fullWing: [],
  },
];

export interface IEncounter {
  name: string;
  wingName: string;
  bosses: string[];
}

export interface IWingDataRecords {
  name: string;
  bosses: IBossesRecords[];
  fullWing: IEncounterRecord[];
}

export interface IBossesRecords {
  name: string;
  records: IEncounterRecord[];
}

export interface IEncounterRecord {
  raiders: number;
  video: string;
  image: string;
  log?: string;
  reddit?: string;
}

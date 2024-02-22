const buildData = (heroes) => {
  const roleArray = [];
  // organizing the hero data by role
  ROLES.forEach((role) => {
    const heroesFilteredByRole = heroes.filter(
      (hero) => hero.role === role.name
    );

    roleArray.push({ roleName: role.label, heroes: heroesFilteredByRole });
  });

  return roleArray;
};

const data = () => {
  return {
    data: {
      roles: buildData(HERO_DATA),
    },
  };
};

const ROLES = [
  { name: "tank", label: "Tank" },
  { name: "dps", label: "DPS" },
  { name: "support", label: "Support" },
];

const HERO_DATA = [
  // TANKS
  {
    id: 0,
    avatarUrl: "./assets/avatar-doomfist.png",
    name: "Doomfist",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 1,
    avatarUrl: "./assets/avatar-dva.png",
    name: "D.Va",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 2,
    avatarUrl: "./assets/avatar-mauga.png",
    name: "Mauga",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 3,
    avatarUrl: "./assets/avatar-junkerqueen.png",
    name: "Junker Queen",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 4,
    avatarUrl: "./assets/avatar-orisa.png",
    name: "Orisa",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 5,
    avatarUrl: "./assets/avatar-ramattra.png",
    name: "Ramattra",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 6,
    avatarUrl: "./assets/avatar-reinhardt.png",
    name: "Reinhardt",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 7,
    avatarUrl: "./assets/avatar-roadhog.png",
    name: "Roadhog",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 8,
    avatarUrl: "./assets/avatar-sigma.png",
    name: "Sigma",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 9,
    avatarUrl: "./assets/avatar-winston.png",
    name: "Winston",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 10,
    avatarUrl: "./assets/avatar-wrecking-ball.png",
    name: "Wrecking Ball",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 11,
    avatarUrl: "./assets/avatar-zarya.png",
    name: "Zarya",
    role: "tank",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  // DPS
  {
    id: 12,
    avatarUrl: "./assets/avatar-ashe.png",
    name: "Ashe",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 13,
    avatarUrl: "./assets/avatar-bastion.png",
    name: "Bastion",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 14,
    avatarUrl: "./assets/avatar-cassidy.png",
    name: "Cassidy",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 15,
    avatarUrl: "./assets/avatar-echo.png",
    name: "Echo",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 16,
    avatarUrl: "./assets/avatar-genji.png",
    name: "Genji",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 17,
    avatarUrl: "./assets/avatar-hanzo.png",
    name: "Hanzo",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 18,
    avatarUrl: "./assets/avatar-junkrat.png",
    name: "Junkrat",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 19,
    avatarUrl: "./assets/avatar-mei.png",
    name: "Mei",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 20,
    avatarUrl: "./assets/avatar-phara.png",
    name: "Phara",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 21,
    avatarUrl: "./assets/avatar-reaper.png",
    name: "Reaper",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 22,
    avatarUrl: "./assets/avatar-sojourn.png",
    name: "Sojour",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 23,
    avatarUrl: "./assets/avatar-soldier76.png",
    name: "Soldier: 76",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 24,
    avatarUrl: "./assets/avatar-sombra.png",
    name: "Sombra",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 25,
    avatarUrl: "./assets/avatar-symmetra.png",
    name: "Symmetra",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 26,
    avatarUrl: "./assets/avatar-torbjorn.png",
    name: "Torbjorn",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 27,
    avatarUrl: "./assets/avatar-tracer.png",
    name: "Tracer",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 28,
    avatarUrl: "./assets/avatar-widowmaker.png",
    name: "Widowmaker",
    role: "dps",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  // Support
  {
    id: 29,
    avatarUrl: "./assets/avatar-ana.png",
    name: "Ana",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 30,
    avatarUrl: "./assets/avatar-baptiste.png",
    name: "Baptiste",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 31,
    avatarUrl: "./assets/avatar-brigitte.png",
    name: "Brigitte",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 32,
    avatarUrl: "./assets/avatar-illari.png",
    name: "Illari",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 33,
    avatarUrl: "./assets/avatar-kiriko.png",
    name: "Kiriko",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 34,
    avatarUrl: "./assets/avatar-lifeweaver.png",
    name: "Lifeweaver",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 35,
    avatarUrl: "./assets/avatar-lucio.png",
    name: "Lucio",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 36,
    avatarUrl: "./assets/avatar-mercy.png",
    name: "Mercy",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 37,
    avatarUrl: "./assets/avatar-moira.png",
    name: "Moira",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 38,
    avatarUrl: "./assets/avatar-zenyatta.png",
    name: "Zenyatta",
    role: "support",
    abilities: [
      { name: "ability one", description: "this is description" },
      { name: "ability two", description: "this is description 2" },
    ],
    goodAgainst: [0, 1, 2, 3],
    counteredBy: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },
];

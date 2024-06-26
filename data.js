const populateHeroCounters = (heroIdArray) => {
  const heroCounters = [];

  heroIdArray.forEach((id) => {
    const hero = HERO_DATA.find((hero) => hero.id === id);
    if (hero !== undefined) {
      heroCounters.push(hero.avatarUrl);
    }
  });

  return heroCounters;
};

const buildData = (heroes) => {
  const roleArray = [];
  // organizing the hero data by role
  ROLES.forEach((role) => {
    const heroesFilteredByRole = heroes.filter(
      (hero) => hero.role === role.name
    );
    heroesFilteredByRole.forEach((hero) => {
      hero.strongAgainstHeroes = populateHeroCounters(hero.strongAgainstIds);
      hero.weakAgainstHeroes = populateHeroCounters(hero.weakAgainstIds);
      hero.role = ROLES.find((role) => role.name === hero.role);
    });

    roleArray.push({ roleName: role.label, heroes: heroesFilteredByRole });
  });

  return roleArray;
};

const data = () => {
  return {
    data: {
      roles: buildData(HERO_DATA),
      isOpen: false,
      currentHero: {},
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
      {
        name: "Hand Cannon",
        description: "Short-range weapon with spread. Reloads automatically.",
      },
      {
        name: "Rocket Punch",
        description:
          "Hold to charge then release to launch forward and knock an enemy back. Damage increase if the enemy hits a wall.",
      },
      {
        name: "Seismic Slam",
        description: "Leap and smash the ground.",
      },
      {
        name: "Power Block",
        description:
          "Protect yourself from frontal attacks. Blocking heavy damage empowers Rocket Punch.",
      },
      {
        name: "Meteor Strike (Ultimate)",
        description:
          "Leap up into the air. Move the targeting circle, then strike the targeted area.",
      },
    ],
    strongAgainstIds: [4, 29],
    weakAgainstIds: [1, 4, 24, 29],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 1,
    avatarUrl: "./assets/avatar-dva.png",
    name: "D.Va",
    role: "tank",
    abilities: [
      {
        name: "Fusion Cannons",
        description: "Automatic short-range spread weapons.",
      },
      {
        name: "Light Gun",
        description: "Automatic weapon when D.Va is out of her mech.",
      },
      {
        name: "Boosters",
        description: "Fly in the direction you are facing.",
      },
      {
        name: "Defense Matrix",
        description: "Block projectiles in an area in front of you.",
      },
      {
        name: "Micro Missiles",
        description: "Launch a volley of explosive rockets.",
      },
      {
        name: "Self-Destruct (Ultimate)",
        description:
          "Eject and overload your mech, causing it to explode after a short time.",
      },
      {
        name: "Call Mech",
        description: "Call down a new mech.",
      },
      {
        name: "Eject!",
        description: "Eject out of your mech when it is destroyed.",
      },
    ],
    strongAgainstIds: [0, 20, 24, 22, 12, 18, 21, 29, 32, 36, 37],
    weakAgainstIds: [11, 25, 24, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 2,
    avatarUrl: "./assets/avatar-mauga.png",
    name: "Mauga",
    role: "tank",
    abilities: [
      {
        name: "Overrun",
        description:
          "Charge forward and stomp to launch enemies. You are unstoppable while charging.",
      },
      {
        name: "Cardiac Overdrive",
        description:
          "Nearby allies take reduced damage and heal by dealing damage.",
      },
      {
        name: "Berkerker",
        description: "Gain temporary health when dealing critical damage.",
      },
      {
        name: "Cage Fight (Ultimate)",
        description: "Deploy a barrier that traps yourself and enemies.",
      },
    ],
    strongAgainstIds: [12, 15, 5, 9, 34, 35],
    weakAgainstIds: [1, 8, 13, 29, 33],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 3,
    avatarUrl: "./assets/avatar-junkerqueen.png",
    name: "Junker Queen",
    role: "tank",
    abilities: [
      { name: "Scattergun", description: "Pump action shotgun." },
      {
        name: "Jagged Blade",
        description:
          "Active: Throw a blade. Re-activate to pull it back, along with any impaled enemy. Passive: Wound enemies hit, dealing damage over time.",
      },
      {
        name: "Commanding Shout",
        description:
          "Grants temporary health and movement speed to yourself and allies.",
      },
      {
        name: "Carnage",
        description:
          "Wound all enemies in front of you, dealing damage over time and reducing the cooldown for each enemy hit.",
      },
      {
        name: "Rampage (Ultimate)",
        description:
          "Charge forward. Wounds enemies, dealing damage over time and preventing them from being healed.",
      },
      {
        name: "Adrenaline Rush",
        description: "Heal from all damage over time dealt by wounds.",
      },
    ],
    strongAgainstIds: [],
    weakAgainstIds: [7, 19, 33],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 4,
    avatarUrl: "./assets/avatar-orisa.png",
    name: "Orisa",
    role: "tank",
    abilities: [
      {
        name: "Augmented Fusion Driver",
        description: "Automatic heat based weapon.",
      },
      {
        name: "Energy Javelin",
        description:
          "Launch your javelin at an enemy to stun and knock them back. More effective if the enemy hits a wall.",
      },
      {
        name: "Fortify",
        description:
          "Gain temporary health, reducing all damage taken and becoming unstoppable. While active, heat generated by your weapon is reduced.",
      },
      {
        name: "Javelin Spin",
        description:
          "Spin your javelin to destroy projectiles and block melee attacks, while also pushing enemies and increasing forward speed.",
      },
      {
        name: "Terra Surge (Ulitmate)",
        description:
          "Sweep in enemies and anchor down, gaining the effects of Fortify and charging up a surge of damage.",
      },
    ],
    strongAgainstIds: [0, 6, 14, 19],
    weakAgainstIds: [9, 16, 38],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 5,
    avatarUrl: "./assets/avatar-ramattra.png",
    name: "Ramattra",
    role: "tank",
    abilities: [
      {
        name: "Void Accelerator (Omnic Form)",
        description: "Fire a stream of projectiles.",
      },
      {
        name: "Void Barrier (Omnic Form)",
        description: "Create a barrier at the targeted location.",
      },
      {
        name: "Pummel (Nemesis Form)",
        description:
          "Punch, creating a wave of piercing enercy with every swing.",
      },
      {
        name: "Ravenous Vortex",
        description:
          "Fire a sphere of energy that creates a slowing vortex on the ground, damaging enemies within and pulling them downward.",
      },
      {
        name: "Annihilation (Ultimate)",
        description:
          "Enter Nemesis Form and create a deadly swarm that lashes out at nearby enemies, persisting longer when damaging enemies",
      },
    ],
    strongAgainstIds: [26, 31, 35],
    weakAgainstIds: [9, 27, 29],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 6,
    avatarUrl: "./assets/avatar-reinhardt.png",
    name: "Reinhardt",
    role: "tank",
    abilities: [
      { name: "Rocket Hammer", description: "Devastating melee weapon." },
      {
        name: "Charge",
        description: "Charge forward and smash an enemy against a wall",
      },
      {
        name: "Firer Strike",
        description: "Launch a fiery projectile.",
      },
      {
        name: "Barier Field",
        description: "Hold up a frontal energy barrier.",
      },
      {
        name: "Earthshatter (Ultimate)",
        description: "Knock down all enemies in front of you.",
      },
    ],
    strongAgainstIds: [11],
    weakAgainstIds: [4, 9, 18, 20, 29],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 7,
    avatarUrl: "./assets/avatar-roadhog.png",
    name: "Roadhog",
    role: "tank",
    abilities: [
      {
        name: "Scrap Gun",
        description:
          "Short-range spread weapon with a medium-range shrapnel volley.",
      },
      { name: "Chain Hook", description: "Drag a targeted enemy to you." },
      {
        name: "Take A Breather",
        description: "Heal yourself and reduce damage taken.",
      },
      {
        name: "Pig Pen",
        description: "Launch a trap that slows and damages nearby enemies.",
      },
      {
        name: "Whole Hog (Ultimate)",
        description: "Damage and knock back enemies in front of you.",
      },
    ],
    strongAgainstIds: [3, 7, 9, 11, 15, 27, 30],
    weakAgainstIds: [7, 21, 29],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 8,
    avatarUrl: "./assets/avatar-sigma.png",
    name: "Sigma",
    role: "tank",
    abilities: [
      {
        name: "Hypershperes",
        description:
          "Launch two charges wich implode after a short duration, dealing damage in an area.",
      },
      {
        name: "Kinetic Grasp",
        description:
          "Absorb projectiles in front of you and convert them into extra health.",
      },
      {
        name: "Accretion",
        description:
          "Gather a mass of debris and throw it at an enemy to knowck them down.",
      },
      {
        name: "Experimental Barrier",
        description:
          "Hold to propel a floating barrier; release to stop. Press again to recall the barrier to you.",
      },
      {
        name: "Gravitic Flux (Ultimate)",
        description:
          "Manipulate gravity to lift enemies into the air and slam them back down.",
      },
    ],
    strongAgainstIds: [13],
    weakAgainstIds: [9, 24, 30, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 9,
    avatarUrl: "./assets/avatar-winston.png",
    name: "Winston",
    role: "tank",
    abilities: [
      {
        name: "Tesla Cannon",
        description:
          "Primary fire: Electric frontal-cone weapon. Secondary fire: Hold to charge, release to fire focused electricity.",
      },
      {
        name: "Jump Pack",
        description:
          "Leap forward into the air. Landing on an enemy damages them.",
      },
      {
        name: "Barrier Projector",
        description: "Deploy a protective energy dome.",
      },
      {
        name: "Primal Rage (Ultimate)",
        description:
          "Gain immense health, but you can only leap and punch enemies.",
      },
    ],
    strongAgainstIds: [4, 5, 8, 23, 28, 29, 33],
    weakAgainstIds: [7, 21, 36],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 10,
    avatarUrl: "./assets/avatar-wrecking-ball.png",
    name: "Wrecking Ball",
    role: "tank",
    abilities: [
      { name: "Quad Cannons", description: "Automatic assault weapons." },
      {
        name: "Grappling Claw",
        description:
          "Launch a grappling claw to rapidly swing around the area. Enables high speed collisions to damage and knockback enemies.",
      },
      {
        name: "Roll",
        description:
          "Transform into a ball and increase maximum movement speed.",
      },
      {
        name: "Piledriver",
        description:
          "Slam into the ground below to damage and launch enemies upward.",
      },
      {
        name: "Adaptive Shield",
        description:
          "Create temporary personal extra helath. Amount increases with more enemies nearby.",
      },
      {
        name: "Minefield (Ultimate)",
        description: "Deploy a massive field of proximity mines.",
      },
    ],
    strongAgainstIds: [3, 7, 13, 17, 18],
    weakAgainstIds: [7, 24, 29, 31],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 11,
    avatarUrl: "./assets/avatar-zarya.png",
    name: "Zarya",
    role: "tank",
    abilities: [
      {
        name: "Particle Cannon",
        description:
          "Primary fire: Short-range linear beam weapon. Secondary fire: Energy grenade launcher.",
      },
      {
        name: "Particle Barrier",
        description: "Create a damage barrier around you.",
      },
      {
        name: "Projected Barrier",
        description: "Create a damage barrier around an ally.",
      },
      {
        name: "Graviton Surge",
        description: "Launch a gravity well that pulls enemies to it.",
      },
      {
        name: "Energy",
        description:
          "Damage blocked by barriers increases Particle Cannon damage",
      },
    ],
    strongAgainstIds: [1, 16, 18, 25, 38],
    weakAgainstIds: [6, 28, 30],
    wikiPageUrl: "https://oijgdfigj",
  },

  // DPS
  {
    id: 12,
    avatarUrl: "./assets/avatar-ashe.png",
    name: "Ashe",
    role: "dps",
    abilities: [
      {
        name: "The Viper",
        description:
          "Primary fire: Semi-automatic rifle. Secondary fire: Hold to zoom in, increasing damage and accuracy but slower rate of fire.",
      },
      {
        name: "Coach Gun",
        description:
          "Blast enemies in front of you and knock yourself backwards.",
      },
      {
        name: "Dynamite",
        description:
          "Throw an explosive that detonates after a short delay or immediately when shot.",
      },
      {
        name: "B.O.B.",
        description:
          "Deploy Bob. He charges forward and knocks enemies into the air, then attacks with his arm cannons.",
      },
    ],
    strongAgainstIds: [0, 15, 20, 28, 29],
    weakAgainstIds: [1, 28, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 13,
    avatarUrl: "./assets/avatar-bastion.png",
    name: "Bastion",
    role: "dps",
    abilities: [
      {
        name: "Configuration: Assault",
        description: "A slow-moving tank with a powerful rotary cannon.",
      },
      {
        name: "Configuration: Recon",
        description: "Mobile, with a lightweight and highly accurate weapon.",
      },
      {
        name: "A-36 Tactical Grenade",
        description:
          "Fire a bomb that bounces off walls and explodes when it impacts enemies or the ground.",
      },
      {
        name: "Configuration: Artillery",
        description:
          "Become immobile and fire up to 3 powerful artillery shells.",
      },
    ],
    strongAgainstIds: [4, 6, 9],
    weakAgainstIds: [8, 11, 27, 29, 38],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 14,
    avatarUrl: "./assets/avatar-cassidy.png",
    name: "Cassidy",
    role: "dps",
    abilities: [
      {
        name: "Peacekeepr",
        description:
          "Primary fire: Accurate, powerful revolver. Secondary fire: Wildly fire remaining rounds.",
      },
      {
        name: "Combat Roll",
        description:
          "Roll in the direction you're moving to take reduced damage and reload.",
      },
      {
        name: "Magnetic Grenade",
        description:
          "Throw a homing gredade that sticks to enemies, slowing them and preventing them from using movement abilities.",
      },
      {
        name: "Deadeye (Ultimate)",
        description:
          "Face off against your enemies. Lock on to enemies and fire.",
      },
    ],
    strongAgainstIds: [20, 36],
    weakAgainstIds: [4, 23, 37],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 15,
    avatarUrl: "./assets/avatar-echo.png",
    name: "Echo",
    role: "dps",
    abilities: [
      {
        name: "Tri-Shot",
        description: "Fires 3 shots at once, in a triagle patter.",
      },
      {
        name: "Sticky Bombs",
        description:
          "Fire a volley of sticky bombs that detonate after a delay.",
      },
      {
        name: "Flight",
        description: "Fly forward quickly and then free-fly briefly",
      },
      {
        name: "Focusing Beam",
        description:
          "Channel a beam for a few seconds. Deals very high damage to targets under half health.",
      },
      {
        name: "Duplicate (Ultimate)",
        description:
          "Become a copy of the target enemy hero. They cannot swap heroes for the duration.",
      },
      {
        name: "Glide",
        description: "Hold jump to glide while falling.",
      },
    ],
    strongAgainstIds: [33],
    weakAgainstIds: [7, 23, 30],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 16,
    avatarUrl: "./assets/avatar-genji.png",
    name: "Genji",
    role: "dps",
    abilities: [
      {
        name: "Shuriken",
        description:
          "Primary fire: Throw an accurate burst of 3 projectiles. Secondary fire: Throw a fay of 3 projectiles in an arc.",
      },
      {
        name: "Deflect",
        description:
          "Deflect incoming projectiles towards the direction you are aiming and block melee attacks.",
      },
      {
        name: "Swift Strike",
        description:
          "Rapidly dash forward and inflict damage on enemies. Eliminations reset the cooldown.",
      },
      {
        name: "Dragonblade (Ultimate)",
        description: "Unsheathe a deadly melee weapon",
      },
      {
        name: "Cyber-Agility",
        description: "Climb on walls and double jump",
      },
    ],
    strongAgainstIds: [0, 8, 11, 12, 17, 28, 38],
    weakAgainstIds: [9, 11, 19, 25, 35, 37],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 17,
    avatarUrl: "./assets/avatar-hanzo.png",
    name: "Hanzo",
    role: "dps",
    abilities: [
      {
        name: "Storm Bow",
        description: "Hold to charge then release to launch arrows farther.",
      },
      {
        name: "Storm Arrows",
        description:
          "The next 5 arrows ricochet and fire instantly at reduced damage.",
      },
      {
        name: "Sonic Arrows",
        description: "Reveals enemies for a short time upon impact.",
      },
      {
        name: "Lunge",
        description: "Double jump.",
      },
      {
        name: "Dragonstrike (Ultimate)",
        description:
          "Launch a deadly Dragon Spirit that devastates enemies it passes through.",
      },
      {
        name: "Wall Climb",
        description: "Jump at walls to climb up them.",
      },
    ],
    strongAgainstIds: [19, 21, 22, 24, 26],
    weakAgainstIds: [1, 22, 28, 33],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 18,
    avatarUrl: "./assets/avatar-junkrat.png",
    name: "Junkrat",
    role: "dps",
    abilities: [
      {
        name: "Frag Launcher",
        description: "Bouncing explosive projectile weapon.",
      },
      {
        name: "Concussion Mine",
        description: "Throw a knockback mine then detonate it.",
      },
      {
        name: "Steel Trap",
        description: "Place an immobilizing trap.",
      },
      {
        name: "Rip-Tire (Ultimate)",
        description: "Drive and detonate an exploding tire.",
      },
      {
        name: "Total Mayhem",
        description: "Drop bombs on death.",
      },
    ],
    strongAgainstIds: [6, 31],
    weakAgainstIds: [1, 11, 20, 30],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 19,
    avatarUrl: "./assets/avatar-mei.png",
    name: "Mei",
    role: "dps",
    abilities: [
      {
        name: "Endothermic Blaster",
        description:
          "Primary fire: Short-range spray weapon that slows enemies. Secondary fire: Lng-range icicle launcher.",
      },
      {
        name: "Cryo-Freeze",
        description: "Become invulnerable and heal yourself.",
      },
      {
        name: "Ice Wall",
        description: "Create a wall in front of you.",
      },
      {
        name: "Blizzard (Ultimate)",
        description:
          "Launch a weather control drone that freezes enemies in a wide area.",
      },
    ],
    strongAgainstIds: [10, 16, 27, 35],
    weakAgainstIds: [4, 17, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 20,
    avatarUrl: "./assets/avatar-phara.png",
    name: "Phara",
    role: "dps",
    abilities: [
      {
        name: "Rocket Launcher",
        description: "Long-range explosive projectile weapon.",
      },
      { name: "Jet Dash", description: "Boost horizontally." },
      {
        name: "Jump Jet",
        description: "Fly rapidly upwards. Grants some fuel.",
      },
      {
        name: "Concussive Blast",
        description: "Launch an explosive blast to knock back enemies.",
      },
      {
        name: "Barrage (Ultimate)",
        description: "Launch a continuous volley of mini-rockets.",
      },
      {
        name: "Hover Jets",
        description: "Hold to hover in the air.",
      },
    ],
    strongAgainstIds: [4, 6, 18, 21, 25, 31, 38],
    weakAgainstIds: [1, 12, 14, 23, 28, 29, 30],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 21,
    avatarUrl: "./assets/avatar-reaper.png",
    name: "Reaper",
    role: "dps",
    abilities: [
      { name: "Hellfire Shotguns", description: "Short-range spread weapons." },
      {
        name: "Wraith Form",
        description:
          "Move faster and become invulnerable, but you cannot shoot.",
      },
      {
        name: "Shadow Step",
        description: "Teleport to a targeted location.",
      },
      {
        name: "Death Blossom (Ultimate)",
        description: "Damage all nearby enemies.",
      },
      {
        name: "The Reaping",
        description: "Dealing damage heals you.",
      },
    ],
    strongAgainstIds: [5, 7, 10],
    weakAgainstIds: [1, 15, 17, 20, 29, 38],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 22,
    avatarUrl: "./assets/avatar-sojourn.png",
    name: "Sojourn",
    role: "dps",
    abilities: [
      {
        name: "Railgun (Primary)",
        description: "Rapid firing projectiles that generate energy on hit.",
      },
      {
        name: "Railgun (Secondary)",
        description: "High impact shot that consumes stored energy.",
      },
      {
        name: "Power Slide",
        description: "Ground slide that can cancel into a high jump.",
      },
      {
        name: "Disruptor Shot",
        description:
          "Launch an energy burst that deals damage to enemies within it.",
      },
      {
        name: "Overclock (Ultimate)",
        description:
          "Railgun energy auto-charges for a short duration and charged shots pierce enemies.",
      },
    ],
    strongAgainstIds: [17, 22],
    weakAgainstIds: [1, 17, 22, 28, 36],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 23,
    avatarUrl: "./assets/avatar-soldier76.png",
    name: "Soldier: 76",
    role: "dps",
    abilities: [
      { name: "Heavy Pulse Rifle", description: "Automatic assault weapon." },
      {
        name: "Helix Rockets",
        description: "Launch a volley of explosive rockets.",
      },
      { name: "Sprint", description: "Run faster while moving forward." },
      {
        name: "Biotic Field",
        description: "Deploy a field that heals you and your allies.",
      },
      {
        name: "Tactical Visor (Ultimate)",
        description: "Automatically aims your weapon at targets in view.",
      },
    ],
    strongAgainstIds: [15, 18, 20],
    weakAgainstIds: [9, 16, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 24,
    avatarUrl: "./assets/avatar-sombra.png",
    name: "Sombra",
    role: "dps",
    abilities: [
      {
        name: "Stealth",
        description:
          "Sombra becomes invisible and her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage.",
      },
      {
        name: "Machine Pistol",
        description:
          "Sombra’s fully-automatic machine pistol fires in a short-range spread.",
      },
      {
        name: "Hack",
        description:
          "Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents.",
      },
      {
        name: "Virus",
        description:
          "Infect enemies with a projectile that deals damage over time. Virus damages hacked targets at a faster rate.",
      },
      {
        name: "Translocator",
        description:
          "Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight).",
      },
      {
        name: "EMP (Ultimate)",
        description:
          "Sombra discharges electromagnetic energy in a wide radius, damaging shields, health, and hacking all opponents caught in the blast.",
      },
    ],
    strongAgainstIds: [0, 1, 6, 7, 8, 10, 31, 33, 34, 35],
    weakAgainstIds: [1, 9, 17, 31],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 25,
    avatarUrl: "./assets/avatar-symmetra.png",
    name: "Symmetra",
    role: "dps",
    abilities: [
      {
        name: "Photon Projector (Primary)",
        description:
          "Symmetra’s weapon emits a ranged beam. It deals continuous damage that increases the longer it is connected.",
      },
      {
        name: "Photon Projector (Secondary)",
        description:
          "The projector can also release an explosive energy ball that deals high damage on contact.",
      },
      {
        name: "Sentry Turret",
        description:
          "Symmetra launches a small turret that automatically fires speed-reducing blasts at the nearest enemy within range. Up to three turrets can be built on the battlefield at once.",
      },
      {
        name: "Teleporter",
        description:
          "Symmetra places a temporary teleporter exit pad at a distance and connects it to a teleporter entry pad at her current location. Allies (and some of their abilities, such as Junkrat’s RIP-Tire) can travel from the entry pad to the exit pad instantly.",
      },
      {
        name: "Photon Barrier (Ultimate)",
        description:
          "Symmetra deploys a massive energy barrier which prevents ranged attacks and is big enough to cut through the entire map.",
      },
    ],
    strongAgainstIds: [1, 4, 16, 27, 35],
    weakAgainstIds: [11, 20, 37],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 26,
    avatarUrl: "./assets/avatar-torbjorn.png",
    name: "Torbjorn",
    role: "dps",
    abilities: [
      {
        name: "Rivet Gun (Primary)",
        description: "Torbjörn fires rivets at long range.",
      },
      {
        name: "Rivet Gun (Secondary)",
        description:
          "Torbjörn ejects molten metal from his gun in a short, close-range burst.",
      },
      {
        name: "Forge Hammer",
        description:
          "This multipurpose hammer repairs turrets and, in a pinch, can also be used as a weapon.",
      },
      {
        name: "Deploy Turret",
        description:
          "Torbjörn deploys a self-building turret which automatically tracks and attacks enemies.",
      },
      {
        name: "Overload",
        description:
          "Torbjörn gains overhealth as well as improved attack, movement, and reload speed for a brief period.",
      },
      {
        name: "Molten Core (Ultimate)",
        description:
          "Torbjörn creates pools of molten slag that deal massive, sustained damage (plus bonus damage to armor), and can prevent enemies from moving through key locations.",
      },
    ],
    strongAgainstIds: [27, 35, 37],
    weakAgainstIds: [5, 15, 17, 20, 38],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 27,
    avatarUrl: "./assets/avatar-tracer.png",
    name: "Tracer",
    role: "dps",
    abilities: [
      {
        name: "Pulse Pistols",
        description: "Tracer rapid-fires both of her pistols.",
      },
      {
        name: "Blink",
        description:
          "Tracer zips horizontally through space in the direction she’s moving, and reappears several yards away. She stores up to three charges of the blink ability and generates more every few seconds.",
      },
      {
        name: "Recall",
        description:
          "Tracer bounds backward in time, returning her health, ammo and position on the map to precisely where they were a few seconds before.",
      },
      {
        name: "Pulse Bomb (Ultimate)",
        description:
          "Tracer lobs a large bomb that adheres to any surface or unfortunate opponent it lands on. After a brief delay, the bomb explodes, dealing high damage to all enemies within its blast radius.",
      },
    ],
    strongAgainstIds: [5, 8, 13, 38],
    weakAgainstIds: [7, 9, 25, 26, 19, 33, 37],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 28,
    avatarUrl: "./assets/avatar-widowmaker.png",
    name: "Widowmaker",
    role: "dps",
    abilities: [
      {
        name: "Widow's Kiss",
        description:
          "Should targets be in close to medium range, the rifle can also be fired in fully-automatic mode.",
      },
      {
        name: "Widow's Kiss (ADS)",
        description:
          "Widowmaker’s versatile sniper rifle is ideal for scope-aimed shots at distant targets.",
      },
      {
        name: "Grappling Hook",
        description:
          "Widowmaker launches a grappling hook towards the location she’s aiming at – when the hook connects with a scalable surface, she’s quickly drawn towards it, allowing her to expand her view of the battlefield and evade or flank targets.",
      },
      {
        name: "Venom Mine",
        description:
          "Widowmaker adheres a swiftly-arming venom mine to nearly any surface. When a target wanders within range of the mine’s motion trigger, it explodes, delivering poison gas to any enemies in the vicinity.",
      },
      {
        name: "Infra-Sight (Ultimate)",
        description:
          "Widowmaker’s recon visor allows her to see the heat signatures of her targets through walls and objects for a moderate amount of time. This enhanced vision is shared with her allies.",
      },
    ],
    strongAgainstIds: [3, 11, 12, 17, 20, 22, 30, 33],
    weakAgainstIds: [9, 12, 16, 24, 27, 28, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  // Support
  {
    id: 29,
    avatarUrl: "./assets/avatar-ana.png",
    name: "Ana",
    role: "support",
    abilities: [
      {
        name: "Biotic Rifle",
        description:
          "Ana’s rifle shoots darts that can restore health to her allies or deal ongoing damage to her enemies. She can use the rifle’s scope to zoom in on targets and make highly accurate shots.",
      },
      {
        name: "Sleep Dart",
        description:
          "Ana fires a dart from her sidearm, rendering an enemy unconscious (though any damage will rouse them).",
      },
      {
        name: "Biotic Grenade",
        description:
          "Ana tosses a biotic bomb that deals damage to enemies and heals allies in a small area of effect. Affected allies briefly receive increased healing from all sources, while enemies caught in the blast cannot be healed for a few moments. Passes through allies with full health.",
      },
      {
        name: "Nano Boost (Ultimate)",
        description:
          "After Ana hits one of her allies with a combat boost, they temporarily deal more damage and take less damage from enemies’ attacks. Nano will not activate if Ana dies or is stunned during cast time.",
      },
    ],
    strongAgainstIds: [0, 5, 6, 7, 10, 20, 30, 36, 37, 38],
    weakAgainstIds: [1, 9, 12, 33],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 30,
    avatarUrl: "./assets/avatar-baptiste.png",
    name: "Baptiste",
    role: "support",
    abilities: [
      {
        name: "Exo Boots",
        description: "By first crouching, Baptiste can jump higher.",
      },
      {
        name: "Biotic Launcher (Primary)",
        description:
          "Baptiste’s three-round-burst Biotic Launcher rewards accuracy and recoil control with significant damage output.",
      },
      {
        name: "Biotic Launcher (Secondary)",
        description:
          "Biotic Launcher also doubles as a healing device, lobbing projectiles that heal allies near the point of impact.",
      },
      {
        name: "Regenerative Burst",
        description:
          "Baptiste activates an intense regenerative burst that heals nearby allies and himself over time.",
      },
      {
        name: "Immortality Field",
        description:
          "Baptiste uses a device to create a field that prevents allies from dying. The generator can be destroyed.",
      },
      {
        name: "Amplification Matrix (Ultimate)",
        description:
          "Baptiste creates a matrix that doubles the damage and healing effects of friendly projectiles that pass through it.",
      },
    ],
    strongAgainstIds: [8, 11, 15, 18, 31],
    weakAgainstIds: [7, 28, 29],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 31,
    avatarUrl: "./assets/avatar-brigitte.png",
    name: "Brigitte",
    role: "support",
    abilities: [
      {
        name: "Rocket Flail",
        description:
          "Brigitte's melee weapon has an extended range, enabling her to strike multiple enemies with a single swing.",
      },
      {
        name: "Repair Pack",
        description: "Brigitte throws a Repair Pack that can heal an ally.",
      },
      {
        name: "Whip Shot",
        description:
          "Brigitte uses her Rocket Flail to knock back any enemy in a 20 meter range, also dealing a bit of damage while slowing her down.",
      },
      {
        name: "Barrier Shield",
        description:
          "Brigitte deploys a frontal energy barrier to absorb a limited amount of damage.",
      },
      {
        name: "Shield Bash",
        description:
          "Once her Barrier Shield is deployed, Brigitte can dash forward to knock the enemy back, and activate Inspire.",
      },
      {
        name: "Inspire",
        description:
          "Upon hitting an enemy player, Brigitte will passively heal herself and her teammates over a course of 5 seconds.",
      },
      {
        name: "Rally (Ultimate)",
        description:
          "Brigitte moves faster and provides all nearby allies with overhealth that lasts for 30 seconds or until it’s removed by damage, Brigitte also gains 750 shield HP, increased shield length, shield bash stun, and gains 100 healable armor instantly.",
      },
    ],
    strongAgainstIds: [0, 9, 10, 16, 24, 27],
    weakAgainstIds: [13, 15, 17, 18, 20],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 32,
    avatarUrl: "./assets/avatar-illari.png",
    name: "Illari",
    role: "support",
    abilities: [
      {
        name: "Solar Rifle (Primary)",
        description: "Long range auto-charging rifle.",
      },
      {
        name: "Solar Rifle (Secondary)",
        description: "Medium range healing beam that consumes solar energy.",
      },
      {
        name: "Outburst",
        description:
          "Launches you in the direction you are moving. Knocking back enemies. Hold jump to go higher.",
      },
      {
        name: "Healing Pylon",
        description: "Deploy a pylon that heals allies.",
      },
      {
        name: "Captive Sun (Ultimate)",
        description:
          "Fire an explosive ball of solar energy. Enemies hit are slowed and explode after taking significant damage.",
      },
    ],
    strongAgainstIds: [],
    weakAgainstIds: [1, 4, 11, 12, 14, 16, 28, 30, 33, 34, 35],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 33,
    avatarUrl: "./assets/avatar-kiriko.png",
    name: "Kiriko",
    role: "support",
    abilities: [
      {
        name: "Healing Ofuda",
        description:
          "Channel a burst of healing talismans that can seek targeted allies.",
      },
      {
        name: "Kunai",
        description: "Thrown projectile that deals increased critical damage.",
      },
      {
        name: "Swift Step",
        description: "Teleport directly to an ally, even through walls.",
      },
      {
        name: "Protection Suzu",
        description:
          "Upon impact, allies in the area become briefly invulnerable and are cleansed of most negative effects.",
      },
      {
        name: "Wall Climb",
        description: "Jump at walls to climb up them.",
      },
      {
        name: "Kitsune Rush",
        description:
          "Summon a fox spirit that rushes forward, accelerating the movement, attack speed, and cooldowns of allies that follow its path.",
      },
    ],
    strongAgainstIds: [2, 3, 12, 19, 24, 29],
    weakAgainstIds: [7, 9, 15, 16, 19, 20, 24, 27, 28],
    wikiPageUrl: "https://oijgdfigj",
  },

  {
    id: 34,
    avatarUrl: "./assets/avatar-lifeweaver.png",
    name: "Lifeweaver",
    role: "support",
    abilities: [
      {
        name: "Healing Blossom",
        description:
          "Hold to charge a healing burst. Realease to heal a targeted ally.",
      },
      {
        name: "Thorn Volley",
        description: "Rapidly fire a spread of projectiles.",
      },
      {
        name: "Petal Platform",
        description: "Throw a platform that springs upwards when stepped on.",
      },
      {
        name: "Rejuventating Dash",
        description:
          "Dash towards your traveling direction and lightly heal yourself.",
      },
      {
        name: "Life Grip",
        description:
          "Pull an ally to your location, protecting them as they travel.",
      },
      {
        name: "Tree of Life (Ultimate)",
        description:
          "Place a tree that instantly heals allies upon sprouting and continues healing periodically as it lives.",
      },
    ],
    strongAgainstIds: [18, 32],
    weakAgainstIds: [23, 24, 35],
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
    strongAgainstIds: [0, 1, 2, 3],
    weakAgainstIds: [0, 2, 3, 4],
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
    strongAgainstIds: [0, 1, 2, 3],
    weakAgainstIds: [0, 2, 3, 4],
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
    strongAgainstIds: [0, 1, 2, 3],
    weakAgainstIds: [0, 2, 3, 4],
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
    strongAgainstIds: [0, 1, 2, 3],
    weakAgainstIds: [0, 2, 3, 4],
    wikiPageUrl: "https://oijgdfigj",
  },
];

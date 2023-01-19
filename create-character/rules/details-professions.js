const professionCharacteristics = [
  { Name: "Alguacíl", AGI: 15, DEX: 15 },
  { Name: "Almogávar", AGI: 20, DEX: 20 },
  { Name: "Alquimista", CUL: 20 },
  { Name: "Ama", PER: 20 },
  { Name: "Artesano", DEX: 20, PER: 15 },
  { Name: "Bandido", DEX: 15, VIT: 15 },
  { Name: "Barbero Cirujano", DEX: 15, COM: 10, CUL: 10 },
  { Name: "Brujo", CUL: 15 },
  { Name: "Bufón", AGI: 20, DEX: 20 },
  { Name: "Caballero de Orden Militar", AGI: 15, CUL: 15 },
  { Name: "Cambista", DEX: 10, PER: 10, CUL: 15, APP: 0 },
  { Name: "Cazador", PER: 20 },
  { Name: "Clérigo", CUL: 15, LUCK: 50 },
  { Name: "Comerciante", COM: 20 },
  { Name: "Cómico", COM: 20 },
  { Name: "Cortesano", PER: 15, COM: 15 },
  { Name: "Curandero", DEX: 15, CUL: 10 },
  { Name: "Derviche", AGI: 15, CUL: 20 },
  { Name: "Embaucador", AGI: 10, COM: 15 },
  { Name: "Escriba", PER: 15, CUL: 15 },
  { Name: "Ghazi", AGI: 15, DEX: 15, LUCK: 40 },
  { Name: "Goliardo", AGI: 10, DEX: 10, CUL: 15 },
  { Name: "Infanzón", STR: 15, AGI: 15 },
  { Name: "Juglar", AGI: 15, COM: 20, CUL: 10 },
  { Name: "Ladrón", AGI: 15, DEX: 20 },
  { Name: "Mago", PER: 15, CUL: 20 },
  { Name: "Malsín", AGI: 15, PER: 20 },
  { Name: "Marino", AGI: 15, DEX: 15 },
  { Name: "Médico", DEX: 15, CUL: 15 },
  { Name: "Mediero", COM: 15, CUL: 15 },
  { Name: "Mendigo" },
  { Name: "Monje", CUL: 15, LUCK: 45 },
  { Name: "Muccadim", STR: 15, CUL: 10 },
  { Name: "Pardo", AGI: 20, DEX: 15 },
  { Name: "Pastor", AGI: 15, PER: 20 },
  { Name: "Pirata", AGI: 15, DEX: 15 },
  { Name: "Qaina", AGI: 15, COM: 15, APP: 17 },
  { Name: "Rabino", CUL: 20, LUCK: 50 },
  { Name: "Ramera", APP: 17 },
  { Name: "Sacerdote", CUL: 15, LUCK: 50 },
  { Name: "Siervo de Corte", AGI: 15, DEX: 15 },
  { Name: "Soldado", STR: 15, DEX: 15 },
  { Name: "Trovador", COM: 15, CUL: 15 },
  { Name: "Ulema", CUL: 20, LUCK: 50 },
];

const professionSkills = [
  // Primary = Base x 3
  {
    Name: "Alguacíl",
    PrimaryWeapon: [
      /*Soldado/Villano*/
    ],
    SecondaryWeapon: [
      /*Soldado/Villano*/
    ],
    PrimarySkills: ["AreaKnowledge", "Run", "Listen"],
    SecondarySkills: [
      "Discovery",
      "Empathy",
      "Dodge",
      "Command",
      "Track",
      "Stealth",
      "Torture",
    ],
  },
  {
    Name: "Almogávar",
    PrimaryWeapon: [
      /*Soldado/Villano*/
    ],
    SecondaryWeapon: ["Knives"],
    PrimarySkills: ["Stealth", "Dodge"],
    SecondarySkills: ["Run", "Discovery", "Listen", "Track", "Heal", "Torture"],
  },
  {
    Name: "Alquimista",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["Alchemy", "Astrology", "MagicalKnowledge", "ReadWrite"],
    SecondarySkills: [
      "AnimalKnowledge",
      "MineralKnowledge",
      "PlantKnowledge",
      "Empathy",
      "Teach",
      "Language" /*(Griego)*/,
      "Language" /*(Latín)*/,
      "Heal",
    ],
  },
  {
    Name: "Ama",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["CourtEtiquette", "Discovery", "Teach", "Stealth"],
    SecondarySkills: [
      "Craft",
      "PlantKnowledge",
      "Empathy",
      "Listen",
      "Language",
      "Memory",
      "Command",
      "Heal",
    ],
  },
  {
    Name: "Artesano",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Knives"],
    PrimarySkills: ["Craft", "Discovery", "Commerce", "Memory"],
    SecondarySkills: [
      "Drive",
      "AreaKnowledge",
      "Eloquence",
      "Empathy",
      "Teach",
      "Listen",
      "ReadWrite",
    ],
  },
  {
    Name: "Bandido",
    PrimaryWeapon: [
      /*Soldado/Villano*/
    ],
    SecondaryWeapon: ["Crossbows"],
    PrimarySkills: ["Discovery", "Stealth", "Torture"],
    SecondarySkills: [
      "AreaKnowledge",
      "Run",
      "Empathy",
      "Listen",
      "Throw",
      "Track",
      "Climb",
    ],
  },
  {
    Name: "Barbero Cirujano",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Knives"],
    PrimarySkills: ["Eloquence", "Empathy", "Medicine", "Heal"],
    SecondarySkills: [
      "Commerce",
      "Drive",
      "PlantKnowledge",
      "Run",
      "Discovery",
      "Language",
      "ReadWrite",
    ],
  },
  {
    Name: "Brujo",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: [
      "Alchemy",
      "Astrology",
      "MagicalKnowledge",
      "PlantKnowledge",
    ],
    SecondarySkills: [
      "AnimalKnowledge",
      "MineralKnowledge",
      "Discovery",
      "Empathy",
      "Teach",
      "Legends",
      "Medicine",
      "Heal",
    ],
  },
  {
    Name: "Bufón",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["Disguise", "Eloquence", "Conceal", "Jump"],
    SecondarySkills: [
      "Run",
      "CourtEtiquette",
      "SleightHand",
      "Throw",
      "Music",
      "Stealth",
      "Climb",
    ],
  },
  {
    Name: "Caballero de Orden Militar",
    PrimaryWeapon: [
      /*Soldado/Villano*/
    ],
    SecondaryWeapon: [
      /*Soldado/Villanox2*/
    ],
    PrimarySkills: ["Ride", "Theology", /*if femenine*/ "Empathy", "Heal"],
    SecondarySkills: [
      "Discovery",
      "Eloquence",
      "Empathy",
      "Listen",
      "Dodge",
      "Language" /*(Latín)*/,
      "ReadWrite",
      "Command",
    ],
  },
  {
    Name: "Cambista",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Knives"],
    PrimarySkills: ["Alchemy", "Commerce", "MineralKnowledge", "Eloquence"],
    SecondarySkills: [
      "Craft",
      "Discovery",
      "Empathy",
      "Language",
      "ReadWrite",
      "Memory",
      "SleightHand",
    ],
  },
  {
    Name: "Cazador",
    PrimaryWeapon: ["Bows"],
    SecondaryWeapon: [
      /*Villano*/
    ],
    PrimarySkills: ["Listen", "Track", "Stealth"],
    SecondarySkills: [
      "Ride",
      "AnimalKnowledge",
      "AreaKnowledge",
      "PlantKnowledge",
      "Discovery",
      "Throw",
      "Climb",
    ],
  },
  {
    Name: "Clérigo",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Noble*/
    ],
    PrimarySkills: ["Eloquence", "Language" /*Latín*/, "ReadWrite", "Theology"],
    SecondarySkills: [
      "CourtEtiquette",
      "Discovery",
      "Empathy",
      "Teach",
      "Listen",
      "Language" /*(Griego)*/,
      "Memory",
    ],
  },
  {
    Name: "Comerciante",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Villano*/
    ],
    PrimarySkills: ["Commerce", "Eloquence", "Empathy", "Language"],
    SecondarySkills: [
      "Discovery",
      "Drive",
      "ShipHandling",
      "AreaKnowledge",
      "Listen",
      "ReadWrite",
      "Swim",
    ],
  },
  {
    Name: "Cómico",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Villano*/
    ],
    PrimarySkills: ["Disguise", "Eloquence", "Empathy", "Memory"],
    SecondarySkills: [
      "Drive",
      "Teach",
      "Conceal",
      "Listen",
      "Language",
      "Legends",
      "Theology",
    ],
  },
  {
    Name: "Cortesano",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Noble*/
    ],
    PrimarySkills: ["CourtEtiquette", "Eloquence", "Empathy", "Seduction"],
    SecondarySkills: [
      "Discovery",
      "Ride",
      "Commerce",
      "Listen",
      "Language",
      "ReadWrite",
      "Stealth",
    ],
  },
  {
    Name: "Curandero",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Villano*/
    ],
    PrimarySkills: ["Alchemy", "MagicalKnowledge", "Empathy", "Heal"],
    SecondarySkills: [
      "Astrology",
      "Discovery",
      "AnimalKnowledge",
      "MineralKnowledge",
      "PlantKnowledge",
      "Legends",
      "Medicine",
    ],
  },
  {
    Name: "Derviche",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Villano*/
    ],
    PrimarySkills: ["Eloquence", "Empathy", "ReadWrite", "Theology"],
    SecondarySkills: [
      "MagicalKnowledge",
      "Discovery",
      "Listen",
      "Dodge",
      "Teach",
      "Legends",
      "Memory",
      "Heal",
    ],
  },
  {
    Name: "Embaucador",
    PrimaryWeapon: [],
    SecondaryWeapon: [
      /*Villano*/
    ],
    PrimarySkills: ["Commerce", "Drive", "Eloquence", "Empathy"],
    SecondarySkills: [
      "Alchemy",
      "PlantKnowledge",
      "Run",
      "Disguise",
      "Conceal",
      "Dodge",
      "Language",
    ],
  },
  {
    Name: "Escriba",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: [
      "Commerce",
      "Language" /*("Latín", "Hebreo", "Árabe"*/,
      "ReadWrite",
      "Memory",
    ],
    SecondarySkills: [
      "Discovery",
      "Eloquence",
      "Empathy",
      "Teach",
      "Listen",
      "Language",
      "Stealth",
    ],
  },
  {
    Name: "Ghazi",
    PrimaryWeapon: ["Bows"],
    SecondaryWeapon: ["Shields"], //"Competencia Arma Soldadp
    PrimarySkills: ["Ride", "Theology"],
    SecondarySkills: [
      "Discovery",
      "Empathy",
      "Dodge",
      "ReadWrite",
      "Command",
      "Heal",
      "Torture",
    ],
  },
  {
    Name: "Goliardo",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Brawl"], //"Competencia Arma Villano"
    PrimarySkills: ["Singing", "Conceal", "ReadWrite", "Seduction"],
    SecondarySkills: [
      "Run",
      "Eloquence",
      "Dodge",
      "Language",
      "SleightHand",
      "Theology",
    ],
  },
  {
    Name: "Infanzón",
    PrimaryWeapon: [
      /*Soldado/Noble*/
    ],
    SecondaryWeapon: ["Crossbows", "Shields"],
    PrimarySkills: ["Ride", "Command"],
    SecondarySkills: [
      "Discovery",
      "Listen",
      "Dodge",
      "SleightHand",
      "ReadWrite",
      "Torture",
    ],
  },
  {
    Name: "Juglar",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Brawl"], //"Competencia Arma Villano"
    PrimarySkills: ["Singing", "Eloquence", "Conceal", "Music"],
    SecondarySkills: [
      "Run",
      "Dodge",
      "ReadWrite",
      "Legends",
      "Jump",
      "Stealth",
    ],
  },

  { Name: "Ladrón",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["Run", "Conceal", "Dodge", "Climb"],
    SecondarySkills: [
      "Commerce",
      "Discovery",
      "Disguise",
      "Listen",
      "PickLock",
      "Throw",
      "Stealth",
    ],
  },
  {
    Name: "Mago",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["MagicalKnowledge", "Eloquence", "ReadWrite", "Theology"],
    SecondarySkills: [
      "Alchemy",
      "Astrology",
      "AnimalKnowledge",
      "MineralKnowledge",
      "PlantKnowledge",
      "Teach",
      "Medicine",
      "Memory",
    ],
  },
  {
    Name: "Malsín",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["AreaKnowledge", "Listen", "PickLock", "Stealth"],
    SecondarySkills: [
      "Commerce",
      "Run",
      "Discovery",
      "Empathy",
      "Memory",
      "Jump",
      "Climb",
    ],  
  },
  { Name: "Marino",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["Discovery", "Swim", "ShipHandling", "Climb"],
    SecondarySkills: [
      "Astrology",
      "Languages", //2
      "SleightHand",
      "Memory",
      "Heal",
      "Seduction",
    ],   
  },
  {
    Name: "Médico",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["PlantKnowledge", "Empathy", "Medicine", "Heal"],
    SecondarySkills: [
      "Alchemy",
      "AnimalKnowledge",
      "MineralKnowledge",
      "Discovery",
      "Eloquence",
      "ReadWrite",
      "Memory",
    ],   
  },
  {
    Name: "Mediero",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["Commerce", "AreaKnowledge", "Eloquence", "Empathy"],
    SecondarySkills: [
      "Disguise",
      "Conceal",
      "Dodge",
      "ReadWrite",
      "Command",
      "Stealth",
      "Torture",
    ],   
  },
  {
    Name: "Mendigo",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Brawl"],
    PrimarySkills: ["Eloquence", "Empathy", "Conceal", "Memory"],
    SecondarySkills: [
      "Craft",
      "Commerce",
      "Language",
      "SleightHand",
      "Stealth",
    ], 
  },
  {
    Name: "Monje",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["Teach", "Language" /*Latín*/, "ReadWrite", "Theology"],
    SecondarySkills: [
      "Singing",
      "Discovery",
      "Eloquence",
      "Empathy",
      "Listen",
      "Language", //(Griego)"
      "Language", //(Árabe)"
      "Memory",
    ], 
  },
  {
    Name: "Muccadim",
    PrimaryWeapon: ["Brawl", "Bow"],
    SecondaryWeapon: [],
    PrimarySkills: ["Empathy", "Theology",],
    SecondarySkills: [
      "Run",
      "Discovery",
      "Listen",
      "Dodge",
      "Command",
      "Heal",
      "Jump",
      "Torture",
    ], 
  },
  {
    Name: "Pardo",
    PrimaryWeapon: [/*Competencia Arma Villano/Soldado*/],
    SecondaryWeapon: [],
    PrimarySkills: ["Ride",
    "Discovery",
    "Command",],
    SecondarySkills: [
      "Commerce",
      "AreaKnowledge",
      "Listen",
      "Language",
      "Track",
      "Heal",
      "Stealth",
      "Torture",
    ]
  },
  {
    Name: "Pastor",
    PrimaryWeapon: [],
    SecondaryWeapon: ["Clubs", "Slings"],
    PrimarySkills: ["AnimalKnowledge", "Discovery", "Listen", "Track"],
    SecondarySkills: [
      "Craft",
      "Astrology",
      "Run",
      "Throw",
      "Jump",
      "Climb",
    ]
  },
  {
    Name: "Pirata",
    PrimaryWeapon: [/*Competencia Arma Villano/Soldado*/],
    SecondaryWeapon: ["Crossbows"],
    PrimarySkills: ["Discovery",
    "Swim",
    "ShipHandling",],
    SecondarySkills: [
      "Astrology",
      "Language",
      "SleightHand",
      "Throw",
      "Heal",
      "Seduction",
      "Climb",
    ]
  },
  { Name: "Qaina",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["Singing", "Eloquence", "Music", "Seduction"],
    SecondarySkills: [
      "CourtEtiquette",
      "Empathy",
      "Language",
      "Legends",
      "Memory",
      "SleightHand",
      "Jump",
      "Stealth",
    ]
  },
  {
    Name: "Rabino",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["Eloquence", "Language" /*(Hebreo)*/, "ReadWrite", "Theology"],
    SecondarySkills: [
      "Astrology",
      "Empathy",
      "Teach",
      "Listen",
      "Language (Árabe)",
      "Language (Latín)",
      "Memory",
      "Stealth",
    ]
  },
  {
    Name: "Ramera",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["Eloquence", "Conceal", "Seduction", "Stealth"],
    SecondarySkills: [
      "Commerce",
      "Run",
      "Discovery",
      "Empathy",
      "PickLock",
      "SleightHand",
      "Taste"
    ],  
  },
  {
    Name: "Sacerdote",
    PrimaryWeapon: [],
    SecondaryWeapon: [],
    PrimarySkills: ["Eloquence", "ReadWrite", "Language" /*(Latín)*/, "Theology"],
    SecondarySkills: [
      "Singing",
      "AreaKnowledge",
      "Discovery",
      "Empathy",
      "Teach",
      "Listen",
      "Command",
      "Memory",
    ],
  },
  {
    Name: "Siervo de Corte",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Villano*/],
    PrimarySkills: ["Craft", "Drive", "PlantKnowledge", "Stealth"],
    SecondarySkills: [
      "CourtEtiquette",
      "Run",
      "Commerce",
      "Taste",
      "Listen",
      "SleightHand",
      "Jump",
    ],
  },
  {
    Name: "Soldado",
    PrimaryWeapon: ["Shields", "Crossbows"],
    SecondaryWeapon: [/*Competencia Arma Soldado*/],
    PrimarySkills: ["Ride"],
    SecondarySkills: [
      "Discovery",
      "Drive",
      "Knives",
      "Dodge",
      "Brawl",
      "Heal",
      "Stealth",
      "Torture",
    ],
  },
  {
    Name: "Trovador",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Noble*/],
    PrimarySkills: ["Eloquence", "ReadWrite", "Music", "Seduction"],
    SecondarySkills: [
      "Ride",
      "Singing",
      "CourtEtiquette",
      "Empathy",
      "Legends",
      "Memory",
      "Stealth",
    ],
  },
  {
    Name: "Ulema",
    PrimaryWeapon: [],
    SecondaryWeapon: [/*Competencia Arma Noble*/],
    PrimarySkills: ["Language" /*(Árabe)*/, "ReadWrite", "Memory", "Theology"],
    SecondarySkills: [
      "CourtEtiquette",
      "Discovery",
      "Eloquence",
      "Empathy",
      "Teach",
      "Listen",
      "Language",
    ],
  },
];

const professionsExclusivityCriteria = [
  { Name: "Alguacíl", Gender: 0, Kingdom: [] },
  { Name: "Almogávar", Gender: undefined, Kingdom: ["Corona de Aragón"] },
  { Name: "Ama", Gender: 1, Kingdom: [] },
  { Name: "Clérigo", Gender: 0, Kingdom: [] },
  { Name: "Derviche", Gender: 0, Kingdom: [] },
  { Name: "Goliardo", Gender: 0, Kingdom: [] },
  { Name: "Mago", Gender: 0, Kingdom: [] },
  { Name: "Muccadim", Gender: 0, Kingdom: [] },
  {
    Name: "Pardo",
    Gender: undefined,
    Kingdom: ["Corona de Castilla", "Reino de Granada"],
  },
  { Name: "Muccadim", Gender: 0, Kingdom: [] },
  { Name: "Qaina", Gender: 1, Kingdom: [] },
  { Name: "Rabino", Gender: 0, Kingdom: [] },
  { Name: "Ramera", Gender: 1, Kingdom: [] },
  { Name: "Sacerdote", Gender: 0, Kingdom: [] },
  { Name: "Ulema", Gender: 0, Kingdom: [] },
];

const professionsSubcategory = [
  {
    Name: "Clérigo",
    Subcategory: [
      { Position: "Duque", Profession: ["Cardenal"] },
      { Position: "Marqués", Profession: ["Arzobispo"] },
      { Position: "Conde", Profession: ["Obispo"] },
      { Position: "Barón", Profession: ["Deán"] },
      { Position: "Señor", Profession: ["Arcipreste"] },
      { Position: "Caballero", Profession: ["Canónigo"] },
      { Position: "Hidalgo", Profession: ["Portero"] },
    ],
  },
  {
    Name: "Monje",
    Subcategory: [
      { Position: "Alta Nobleza", Profession: ["Abad", "Abadesa"] },
      { Position: "Baja Nobleza", Profession: ["Prior", "Prioresa"] },
      { Position: "Burguesía", Profession: ["Hermano", "Hermana"] },
      { Position: "Villana", Profession: ["Monje", "Monja"] },
      { Position: "Campesina", Profession: ["Novicio", "Novicia"] },
    ],
  },
  {
    Name: "Sacerdote",
    Subcategory: [
      { Position: "Burguesía", Profession: ["Párroco"] },
      { Position: "Villana", Profession: ["Vicario"] },
      { Position: "Campesina", Profession: ["Capellán"] },
    ],
  },
];

export {
  professionCharacteristics,
  professionSkills,
  professionSecondarySkills,
  professionsExclusivityCriteria,
  professionsSubcategory,
};

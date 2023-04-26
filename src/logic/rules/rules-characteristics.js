const rulesHeight = [
  //Varas
  { Rules: [5], Height: 1.52 },
  { Rules: [6], Height: 1.54 },
  { Rules: [7], Height: 1.57 },
  { Rules: [8], Height: 1.59 },
  { Rules: [9], Height: 1.62 },
  { Rules: [10], Height: 1.64 },
  { Rules: [11], Height: 1.67 },
  { Rules: [12], Height: 1.69 },
  { Rules: [13], Height: 1.72 },
  { Rules: [14], Height: 1.74 },
  { Rules: [15], Height: 1.77 },
  { Rules: [16, 17, 18, 19, 20], Height: 1.79 },
];

const rulesWeight = [
  //Libras
  { Rules: [5], Weight: 106 },
  { Rules: [6], Weight: 110 },
  { Rules: [7], Weight: 118 },
  { Rules: [8], Weight: 120 },
  { Rules: [9], Weight: 122 },
  { Rules: [10], Weight: 125 },
  { Rules: [11], Weight: 128 },
  { Rules: [12], Weight: 132 },
  { Rules: [13], Weight: 134 },
  { Rules: [14], Weight: 140 },
  { Rules: [15], Weight: 146 },
  { Rules: [16, 17, 18, 19, 20], Weight: 150 },
];

const skillsSTR = [ 
  { ID: 'Axes', Name: 'Hachas' },
  { ID: 'Longwords', Name: 'Espadones' },
  { ID: 'Maces', Name: 'Mazas' },
];

const skillsAGI = [
  { ID: 'Climb', Name: 'Trepar' },
  { ID: 'Dodge', Name: 'Esquivar' },
  { ID: 'Jump', Name: 'Saltar' },
  { ID: 'Ride', Name: 'Cabalgar' },
  { ID: 'Run', Name: 'Correr' },
  { ID: 'Throw', Name: 'Lanzar' },
  { ID: 'Swim', Name: 'Nadar' },
  { ID: 'Stealth', Name: 'Sigilo' },
  { ID: 'Spears', Name: 'Lanzas' },
  { ID: 'Brawl', Name: 'Pelea' },
  { ID: 'Clubs', Name: 'Palos' },
];

const skillsDEX = [
  { ID: 'Conceal', Name: 'Escamotear' },
  { ID: 'ShipHandling', Name: 'Navegar' },
  { ID: 'Craft', Name: 'Artesanía' },
  { ID: 'Drive', Name: 'Conducir Carro' },
  { ID: 'Heal', Name: 'Sanar' },
  { ID: 'PickLock', Name: 'Forzar Mecanismos' },
  { ID: 'SleightHand', Name: 'Juego' },
  { ID: 'Knives', Name: 'Cuchillos' },
  { ID: 'Swords', Name: 'Espadas' },
];

const skillsPER = [
  { ID: 'Discovery', Name: 'Descubrir' },
  { ID: 'Empathy', Name: 'Empatía' },
  { ID: 'Listen', Name: 'Escuchar' },
  { ID: 'Memory', Name: 'Memoria' },
  { ID: 'Taste', Name: 'Degustar' },
  { ID: 'Track', Name: 'Rastrear' },
  { ID: 'Bows', Name: 'Arcos' },
  { ID: 'Crossbows', Name: 'Ballestas' },
  { ID: 'Slings', Name: 'Hondas' },
];

const skillsCOM = [
  { ID: 'Command', Name: 'Mando' },
  { ID: 'Commerce', Name: 'Comerciar' },
  { ID: 'CourtEtiquette', Name: 'Corte' },
  { ID: 'Disguise', Name: 'Disfrazarse'},
  { ID: 'Eloquence', Name: 'Elocuencia' },
  { ID: 'Singing', Name: 'Canto' },
  { ID: 'Teach', Name: 'Enseñar' },
  { ID: 'Torture', Name: 'Tormento' },
];

const skillsVIT = [
  { ID: 'Shields', Name: 'Escudos'}
]

const skillsCUL = [
  { ID: 'Alchemy', Name: 'Alquimia' },
  { ID: 'AnimalKnowledge', Name: 'Conocimiento Animal' },
  { ID: 'AreaKnowledge', Name: 'Conocimiento de Área' },
  { ID: 'Astrology', Name: 'Astrología' },
  //{ ID: 'Language', Name: 'Idioma' },
  { ID: 'Legends', Name: 'Leyendas' },
  { ID: 'MagicalKnowledge', Name: 'Conocimiento Mágico' },
  { ID: 'Medicine', Name: 'Medicina' },
  { ID: 'MineralKnowledge', Name: 'Conocimiento Mineral' },
  { ID: 'Music', Name: 'Música' },
  { ID: 'PlantKnowledge', Name: 'Conocimiento Vegetal' },
  { ID: 'ReadWrite', Name: 'Leer y Escribir' },
  { ID: 'Theology', Name: 'Teología' },
];

const skillsAPP = [{ ID: 'Seduction', Name: 'Seducción' }];

const skillByCharacteristic = {STR: skillsSTR, AGI: skillsAGI, DEX: skillsDEX, PER: skillsPER, COM: skillsCOM, VIT: skillsVIT, CUL: skillsCUL, APP: skillsAPP }

const nobilityWeapons = ['Crossbows', 'Knives', 'Shields', 'Swords', 'Longwords', 'Spears', 'Brawl'];

const villeinWeapons = ['Bows', 'Knives', 'Axes', 'Slings', 'Maces', 'Spears', 'Clubs'];

const soldierWeapons = ['Bows', 'Crossbows', 'Knives', 'Swords', 'Longwords', 'Shields', 'Axes', 'Spears', 'Maces', 'Brawl']

const weapons= {Nobility: nobilityWeapons, Villein: villeinWeapons, Soldier: soldierWeapons}

export { rulesHeight, rulesWeight, skillByCharacteristic, weapons };

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
  { id: 'Axes', Name: 'Hachas' },
  { id: 'Longwords', Name: 'Espadones' },
  { id: 'Maces', Name: 'Mazas' },
];

const skillsAGI = [
  { id: 'Climb', Name: 'Trepar' },
  { id: 'Dodge', Name: 'Esquivar' },
  { id: 'Jump', Name: 'Saltar' },
  { id: 'Ride', Name: 'Cabalgar' },
  { id: 'Run', Name: 'Correr' },
  { id: 'Throw', Name: 'Lanzar' },
  { id: 'Swim', Name: 'Nadar' },
  { id: 'Stealth', Name: 'Sigilo' },
  { id: 'Spears', Name: 'Lanzas' },
  { id: 'Brawl', Name: 'Pelea' },
  { id: 'Clubs', Name: 'Palos' },
];

const skillsDEX = [
  { id: 'Conceal', Name: 'Escamotear' },
  { id: 'ShipHandling', Name: 'Navegar' },
  { id: 'Craft', Name: 'Artesanía' },
  { id: 'Drive', Name: 'Conducir Carro' },
  { id: 'Heal', Name: 'Sanar' },
  { id: 'PickLock', Name: 'Forzar Mecanismos' },
  { id: 'SleightHand', Name: 'Juego' },
  { id: 'Knives', Name: 'Cuchillos' },
  { id: 'Swords', Name: 'Espadas' },
];

const skillsPER = [
  { id: 'Discovery', Name: 'Descubrir' },
  { id: 'Empathy', Name: 'Empatía' },
  { id: 'Listen', Name: 'Escuchar' },
  { id: 'Memory', Name: 'Memoria' },
  { id: 'Taste', Name: 'Degustar' },
  { id: 'Track', Name: 'Rastrear' },
  { id: 'Bows', Name: 'Arcos' },
  { id: 'Crossbows', Name: 'Ballestas' },
  { id: 'Slings', Name: 'Hondas' },
];

const skillsCOM = [
  { id: 'Command', Name: 'Mando' },
  { id: 'Commerce', Name: 'Comerciar' },
  { id: 'CourtEtiquette', Name: 'Corte' },
  { id: 'Disguise', Name: 'Disfrazarse'},
  { id: 'Eloquence', Name: 'Elocuencia' },
  { id: 'Singing', Name: 'Canto' },
  { id: 'Teach', Name: 'Enseñar' },
  { id: 'Torture', Name: 'Tormento' },
];

const skillsVIT = [
  { id: 'Shields', Name: 'Escudos'}
]

const skillsCUL = [
  { id: 'Alchemy', Name: 'Alquimia' },
  { id: 'AnimalKnowledge', Name: 'Conocimiento Animal' },
  { id: 'AreaKnowledge', Name: 'Conocimiento de Área' },
  { id: 'Astrology', Name: 'Astrología' },
  //{ id: 'Language', Name: 'Idioma' },
  { id: 'Legends', Name: 'Leyendas' },
  { id: 'MagicalKnowledge', Name: 'Conocimiento Mágico' },
  { id: 'Medicine', Name: 'Medicina' },
  { id: 'MineralKnowledge', Name: 'Conocimiento Mineral' },
  { id: 'Music', Name: 'Música' },
  { id: 'PlantKnowledge', Name: 'Conocimiento Vegetal' },
  { id: 'ReadWrite', Name: 'Leer y Escribir' },
  { id: 'Theology', Name: 'Teología' },
];

const skillsAPP = [{ id: 'Seduction', Name: 'Seducción' }];

const skillByCharacteristic = {STR: skillsSTR, AGI: skillsAGI, DEX: skillsDEX, PER: skillsPER, COM: skillsCOM, VIT: skillsVIT, CUL: skillsCUL, APP: skillsAPP }

const nobilityWeapons = ['Crossbows', 'Knives', 'Shields', 'Swords', 'Longwords', 'Spears', 'Brawl'];

const villeinWeapons = ['Bows', 'Knives', 'Axes', 'Slings', 'Maces', 'Spears', 'Clubs'];

const soldierWeapons = ['Bows', 'Crossbows', 'Knives', 'Swords', 'Longwords', 'Shields', 'Axes', 'Spears', 'Maces', 'Brawl']

const weapons= {Nobility: nobilityWeapons, Villein: villeinWeapons, Soldier: soldierWeapons}

export { rulesHeight, rulesWeight, skillByCharacteristic, weapons };

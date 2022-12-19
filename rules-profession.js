import { rollD100, rollRange } from "./dices&tools.js";

const professionChristianHighNobility = [
  { Rolls: rollRange(1, 10), Name: "Alquimista" },
  { Rolls: rollRange(11, 20), Name: "Caballero de Orden Militar" },
  { Rolls: rollRange(21, 40), Name: "Clérigo" },
  { Rolls: rollRange(41, 60), Name: "Cortesano" },
  { Rolls: rollRange(61, 80), Name: "Infanzón" },
  { Rolls: rollRange(81, 90), Name: "Monje" },
  { Rolls: rollRange(91, 100), Name: "Trovador" },
];

const professionChristianLowNobility = [
  { Rolls: rollRange(1, 10), Name: "Alquimista" },
  { Rolls: rollRange(11, 20), Name: "Ama" },
  { Rolls: rollRange(21, 30), Name: "Caballero de Orden Militar" },
  { Rolls: rollRange(31, 40), Name: "Clérigo" },
  { Rolls: rollRange(41, 60), Name: "Cortesano" },
  { Rolls: rollRange(61, 80), Name: "Infanzón" },
  { Rolls: rollRange(81, 90), Name: "Monje" },
  { Rolls: rollRange(91, 100), Name: "Trovador" },
];

const professionChristianBourgeoisie = [
  { Rolls: rollRange(1, 5), Name: "Alguacil" },
  { Rolls: rollRange(6, 15), Name: "Alquimista" },
  { Rolls: rollRange(16, 20), Name: "Barbero Cirujano" },
  { Rolls: rollRange(21, 30), Name: "Cambista" },
  { Rolls: rollRange(31, 40), Name: "Comerciante" },
  { Rolls: rollRange(41, 50), Name: "Escriba" },
  { Rolls: rollRange(51, 55), Name: "Marino" },
  { Rolls: rollRange(56, 65), Name: "Médico" },
  { Rolls: rollRange(66, 70), Name: "Monje" },
  { Rolls: rollRange(71, 75), Name: "Pardo" },
  { Rolls: rollRange(76, 80), Name: "Pirata" },
  { Rolls: rollRange(81, 90), Name: "Sacerdote" },
  { Rolls: rollRange(91, 100), Name: "Soldado" },
];

const professionChristianVillein = [
  { Rolls: rollRange(1, 5), Name: "Alguacil" },
  { Rolls: rollRange(6, 15), Name: "Artesano" },
  { Rolls: rollRange(16, 20), Name: "Barbero Cirujano" },
  { Rolls: rollRange(21, 25), Name: "Bufón" },
  { Rolls: rollRange(26, 30), Name: "Cómico" },
  { Rolls: rollRange(31, 35), Name: "Embaucador" },
  { Rolls: rollRange(36, 40), Name: "Goliardo" },
  { Rolls: rollRange(41, 45), Name: "Juglar" },
  { Rolls: rollRange(46, 50), Name: "Ladrón" },
  { Rolls: rollRange(61, 65), Name: "Mendigo" },
  { Rolls: rollRange(66, 70), Name: "Monje" },
  { Rolls: rollRange(71, 75), Name: "Pardo" },
  { Rolls: rollRange(76, 80), Name: "Pirata" },
  { Rolls: rollRange(81, 85), Name: "Ramera" },
  { Rolls: rollRange(86, 90), Name: "Sacerdote" },
  { Rolls: rollRange(91, 95), Name: "Siervo de Corte" },
  { Rolls: rollRange(96, 100), Name: "Soldado" },
];

const professionChristianPeasant = [
  { Rolls: rollRange(1, 5), Name: "Almogávar" },
  { Rolls: rollRange(6, 15), Name: "Bandido" },
  { Rolls: rollRange(16, 20), Name: "Brujo" },
  { Rolls: rollRange(21, 30), Name: "Cazador" },
  { Rolls: rollRange(31, 40), Name: "Curandero" },
  { Rolls: rollRange(41, 45), Name: "Mendigo" },
  { Rolls: rollRange(46, 55), Name: "Monje" },
  { Rolls: rollRange(56, 60), Name: "Pardo" },
  { Rolls: rollRange(61, 70), Name: "Pastor" },
  { Rolls: rollRange(71, 75), Name: "Ramera" },
  { Rolls: rollRange(76, 80), Name: "Sacerdote" },
  { Rolls: rollRange(81, 90), Name: "Siervo de Corte" },
  { Rolls: rollRange(91, 100), Name: "Soldado" },
];

const professionChristianSlave = [
  { Rolls: rollRange(1, 10), Name: "Bufón" },
  { Rolls: rollRange(11, 20), Name: "Curandero" },
  { Rolls: rollRange(21, 30), Name: "Escriba" },
  { Rolls: rollRange(31, 40), Name: "Juglar" },
  { Rolls: rollRange(41, 50), Name: "Mendigo" },
  { Rolls: rollRange(51, 60), Name: "Pastor" },
  { Rolls: rollRange(61, 70), Name: "Ramera" },
  { Rolls: rollRange(71, 90), Name: "Siervo de Corte" },
  { Rolls: rollRange(91, 100), Name: "Soldado" },
];

const professionChristian = [
  { Position: "Alta Nobleza", Professions: professionChristianHighNobility },
  { Position: "Baja Nobleza", Professions: professionChristianLowNobility },
  { Position: "Burguesia", Professions: professionChristianBourgeoisie },
  { Position: "Villana", Professions: professionChristianVillein },
  { Position: "Campesina", Professions: professionChristianPeasant },
  { Position: "Esclava", Professions: professionChristianSlave },
];

const trial = () => {
  let roll = rollD100();
  console.log(roll);
  let professionSelected = {};
  professionChristianHighNobility.forEach((profession) => {
    if (profession.Rolls.includes(roll)) {
      professionSelected = profession;
    }
  });
  console.log(professionSelected);
};

trial();

export {  };

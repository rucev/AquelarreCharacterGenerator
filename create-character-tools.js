import {
  rollD4,
  rollD10,
  rollD100,
  sumValues,
  rollD6,
  rollD8,
  rollD50,
} from "./dices&tools.js";
import { kingdoms } from "./rules-kingdom.js";
import { socialPositions } from "./rules-position.js";
import { professions } from "./rules-profession.js";
import {
  professionCharacteristics,
  professionSkills,
  professionsExclusivityCriteria,
  professionsSubcategory,
} from "./details-professions.js";
import { rulesHeight, rulesWeight, skillByCharacteristic } from "./rules-characteristics.js";

const getGender = () => {
  const roll = rollD4();
  return roll > 2 ? 1 : 0; // 1 = FEM ; 0 = MAL
};

const getKingdom = () => {
  const roll = rollD10();
  let kingdomSelected = null;
  kingdoms.forEach((kingdom) => {
    if (kingdom.Rolls.includes(roll)) {
      kingdomSelected = kingdom;
    }
  });
  return kingdomSelected;
};

const getPeople = (kingdom) => {
  const availablePeople = kingdom.People;
  const roll = rollD10();
  let peopleSelected = {};
  availablePeople.forEach((people) => {
    if (people.Rolls.includes(roll)) {
      peopleSelected = people;
    }
  });
  return peopleSelected;
};

const getSocialPosition = (people) => {
  const roll = rollD10();
  let availableSocialPositions = {};
  let socialPositionSelected = {};
  socialPositions.forEach((society) => {
    if (society.Religion === people.Religion) {
      availableSocialPositions = society.Classes;
    }
  });
  availableSocialPositions.forEach((socialPosition) => {
    if (socialPosition.Rolls.includes(roll)) {
      socialPositionSelected = socialPosition;
    }
  });
  if (socialPositionSelected.Exceptions.includes(people.Name)) {
    socialPositionSelected = getSocialPosition(people);
  }
  return socialPositionSelected;
};

const getSubclassPositionName = (socialPosition, gender) => {
  const roll = rollD10();
  let subclassSelected = {};
  let subclassName = "";
  if (socialPosition.Subclass != undefined) {
    socialPosition.Subclass.forEach((position) => {
      if (position.Rolls.includes(roll)) {
        subclassSelected = position;
        subclassName = " " + subclassSelected.Name[gender];
      }
    });
  }
  return subclassName;
};

const getProfession = (religion, socialPosition, gender, kingdom) => {
  const roll = rollD100();
  let professionsBySociety = [];
  let availableProfessions = [];
  professions.forEach((society) => {
    if (society.Religion === religion) {
      professionsBySociety = society.Professions;
    }
  });
  professionsBySociety.forEach((position) => {
    if (position.Position === socialPosition) {
      availableProfessions = position.Professions;
    }
  });
  let professionSelected = {};
  availableProfessions.forEach((profession) => {
    if (profession.Rolls.includes(roll)) {
      professionSelected = profession;
    }
  });
  if (checkProfession(professionSelected.Name, gender, kingdom) === false) {
    professionSelected = getProfession(
      religion,
      socialPosition,
      gender,
      kingdom
    );
  }
  return professionSelected;
};

const checkProfessionByExclusivity = (professionName) => {
  let check = Boolean;
  const professionsNames = professionsExclusivityCriteria.map(
    ({ Name }) => Name
  );
  if (professionsNames.includes(professionName)) {
    check = false; //Needs more validations
  } else {
    check = true; //Profession is already valid
  }
  return check;
};

const checkProfessionByGender = (professionName, gender) => {
  let check = Boolean;
  const professionsWithGenderCriteria = professionsExclusivityCriteria.filter(
    (profession) => {
      return profession.Gender === gender;
    }
  );
  const professionsGenderNames = professionsWithGenderCriteria.map(
    (profession) => profession.Name
  );
  if (professionsGenderNames.includes(professionName)) {
    check = true; //Profession is already valid
  } else {
    check = false; //Needs more validations
  }
  return check;
};

const checkProfessionByKingdom = (professionName, kingdom) => {
  let check = Boolean;
  const professionsWithKingdomCriteria = professionsExclusivityCriteria.filter(
    (profession) => {
      return profession.Kingdom.includes(kingdom);
    }
  );
  const professionsKingdomNames = professionsWithKingdomCriteria.map(
    (profession) => profession.Name
  );
  if (professionsKingdomNames.includes(professionName)) {
    check = true; //Profession is already valid
  } else {
    check = false; //Needs more validations
  }
  return check;
};

const checkProfession = (profession, gender, kingdom) => {
  let check = Boolean;
  if (checkProfessionByExclusivity(profession) === true) {
    check = true;
  } else {
    if (checkProfessionByGender(profession, gender) === true) {
      check = true;
    } else {
      if (checkProfessionByKingdom(profession, kingdom) === true) {
        check = true;
      } else {
        check = false;
      }
    }
  }
  return check;
};

const setCharacteristicsByProfession = (professionName, characteristics) => {
  const professionCharact = professionCharacteristics.filter((profession) => {
    return profession.Name == professionName;
  })[0];
  let newCharacteristics = {};
  for (let [key, value] of Object.entries(characteristics)) {
    if (key in professionCharact) {
      value = value + professionCharact[key];
    }
    if (value > 20) {
      newCharacteristics[key] = 20;
    } else {
      newCharacteristics[key] = value;
    }
  }
  return newCharacteristics;
};

const getRandomCharacteristic = (characteristics) => {
  const keys = Object.keys(characteristics);
  const index = Math.floor(keys.length * Math.random());
  const characteristic = keys[index];
  return characteristic;
};

const setNewCharacteristic = (characteristics) => {
  let newCharacteristics = {};
  const characteristic = getRandomCharacteristic(characteristics);
  for (let [key, value] of Object.entries(characteristics)) {
    if (key === characteristic && value < 20) {
      value = value + 1;
    }
    newCharacteristics[key] = value;
  }
  return newCharacteristics;
};

const setMainCharacteristics = (characteristics) => {
  let newCharacteristics = characteristics;
  let availableCharacteristicsPoints = 100 - sumValues(characteristics);
  do {
    newCharacteristics = setNewCharacteristic(newCharacteristics);
    availableCharacteristicsPoints -= 1;
  } while (availableCharacteristicsPoints > 0);
  return newCharacteristics;
};

const getLuck = (baseLuck, characteristics) => {
  let luck = characteristics.COM + characteristics.PER + characteristics.CUL
  if (luck < baseLuck){
    luck = baseLuck
  }
  return luck;
};

const getWill = () => {
  return 25 + rollD10() + rollD10() + rollD10() + rollD10() + rollD10();
}; 

const getRationality = (baseRR, baseIRR) => {
  let rationality = 25 + rollD50()
  return (rationality < baseRR || baseIRR > 0) ? baseRR : rationality;
};

const getIrrationality = (RR, baseIRR) => {
  let irrationality = 100 - RR
  if (irrationality < baseIRR) {
    irrationality = baseIRR
  }
  return irrationality
};

const getAppearance = (gender, baseAPP) => {
  let appearance = rollD6() + rollD6() + rollD6() + rollD6();
  appearance = (appearance < baseAPP) ? baseAPP : appearance;
  appearance = (gender === 1 && appearance < 25) ? appearance += 2 : appearance;
  return appearance;
};

const getAge = () => {
  return 16 + rollD10();
};

const getHeight = (characteristics, gender) => {
  let height = 0;
  if (gender === 0) {
    const rule = characteristics.VIT;
    rulesHeight.forEach((data) => {
      if (data.Rules.includes(rule)) {
        height += data.Height;
      }
    });
  } else {
    const rule = characteristics.STR;
    rulesHeight.forEach((data) => {
      if (data.Rules.includes(rule)) {
        height += data.Height;
      }
    });
  }
  return height;
};

const getWeight = (characteristics, gender) => {
  let weight = 0;
  if (gender === 0) {
    const rule = characteristics.VIT;
    rulesWeight.forEach((data) => {
      if (data.Rules.includes(rule)) {
        weight += data.Weight;
      }
    });
  } else {
    const rule = characteristics.STR;
    rulesWeight.forEach((data) => {
      if (data.Rules.includes(rule)) {
        weight += data.Weight;
      }
    });
  }
  return weight;
};

const setOtherCharacteristics = (otherCharacteristics, mainCharacteristics, gender) => {
  let newCharacteristics = otherCharacteristics 
  newCharacteristics.APP = getAppearance(gender, otherCharacteristics.APP)
  newCharacteristics.RR = getRationality(otherCharacteristics.RR, otherCharacteristics.IR)
  newCharacteristics.IR = getIrrationality(newCharacteristics.RR, otherCharacteristics.IR)
  newCharacteristics.LUCK = getLuck(otherCharacteristics.LUCK, mainCharacteristics)
  newCharacteristics.WILL = getWill()
  newCharacteristics.AGE = getAge()
  newCharacteristics.HEIGHT = getHeight(mainCharacteristics, gender)
  newCharacteristics.WEIGHT = getWeight(mainCharacteristics, gender)
  return newCharacteristics
}

const setSkills = (mainCharacteristics, otherCharacteristics, skills) => {
  let newSkills = {};
  // Iterar skills si KEY = 
  /*
  const characteristic = getRandomCharacteristic(characteristics);
  for (let [key, value] of Object.entries(characteristics)) {
    if (key === characteristic && value < 20) {
      value = value + 1;
    }
    newCharacteristics[key] = value;
  }*/
  return newCharacteristics;
};


let trialChar = {
  Name: '',
  Gender: 1,
  Kingdom: 'Corona de Castilla',
  People: 'Mudéjar',
  Position: 'Campesina Colona',
  Family: '',
  Profession: 'Brujo',
  ParentProfession: 'Curandero',
  MainCharacteristics: { STR: 8, AGI: 14, DEX: 9, VIT: 19, PER: 11, COM: 11, CUL: 20 },
  OtherCharacteristics: {
    APP: 17,
    RR: 32,
    IR: 68,
    LUCK: 42,
    WILL: 56,
    AGE: 26,
    HEIGHT: 1.59,
    WEIGHT: 120
  },
  AdvantagesDisadvantages: [],
  Skills: {
    Alchemy: 0,
    AnimalKnowledge: 0,
    AreaKnowledge: 0,
    Astrology: 0,
    Climb: 0,
    Command: 0,
    Commerce: 0,
    Conceal: 0,
    CourtEtiquette: 0,
    Craft: 0,
    Discovery: 0,
    Disguise: 0,
    Dodge: 0,
    Drive: 0,
    Eloquence: 0,
    Empathy: 0,
    Games: 0,
    Heal: 0,
    Jump: 0,
    Language: 0,
    Legends: 0,
    Listen: 0,
    MagicalKnowledge: 0,
    Medicine: 0,
    Memory: 0,
    MineralKnowledge: 0,
    Music: 0,
    PickLock: 0,
    PlantKnowledge: 0,
    ReadWrite: 0,
    Ride: 0,
    Run: 0,
    Seduction: 0,
    ShipHandling: 0,
    Singing: 0,
    SleightHand: 0,
    Stealth: 0,
    Swim: 0,
    Taste: 0,
    Teach: 0,
    Theology: 0,
    Throw: 0,
    Torture: 0,
    Track: 0,
    Axes: 0,
    Bows: 0,
    Brawl: 0,
    Clubs: 0,
    Crossbows: 0,
    Knives: 0,
    Longwords: 0,
    Maces: 0,
    Shields: 0,
    Slings: 0,
    Spears: 0,
    Swords: 0
  },
  Purse: { Income: 0, Expenses: 0 }
}

console.log(trialChar.Skills)




export {
  getGender,
  getKingdom,
  getPeople,
  getSocialPosition,
  getSubclassPositionName,
  getProfession,
  setCharacteristicsByProfession,
  setMainCharacteristics,
  setOtherCharacteristics
};

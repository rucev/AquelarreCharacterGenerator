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
import { rulesHeight, rulesWeight } from "./rules-characteristics.js";

const getGender = () => {
  const roll = rollD4();
  let genderSelected = 0; //Mal
  if (roll > 2) {
    genderSelected = 1; //Fem
  }
  return genderSelected;
};

const getKingdom = () => {
  const roll = rollD10();
  let kingdomSelected = {};
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
    if (key === characteristic) {
      if (value < 20) {
        value = value + 1;
      }
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
  if (rationality < baseRR || baseIRR > 0) {
    rationality = baseRR
  }
  return rationality
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
  if (appearance < baseAPP) {
    appearance = baseAPP
  }
  if (gender === 1 && appearance < 25) {
    appearance += 2;
  }
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

let chars = { STR: 5, AGI: 5, DEX: 5, VIT: 10, PER: 10, COM: 5, CUL: 5 };




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

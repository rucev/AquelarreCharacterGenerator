import {
  rollD4,
  rollD10,
  rollD100,
  sumValues,
} from './dices&tools.js';
import { kingdoms } from '../rules/rules-kingdom.js';
import { socialPositions } from '../rules/rules-position.js';
import { professions } from '../rules/rules-profession.js';
import {
  professionCharacteristics,
} from '../rules/details-professions.js';
import {checkProfession} from './specific-tools/get-profesion-tools.js'
import {
  setNewCharacteristics,
  getLuck,
  getWill,
  getRationality,
  getIrrationality,
  getAppearance,
  getAge,
  getHeight,
  getWeight
} from './specific-tools/set-characteristics-tools.js';
import { names } from '../rules/name-rules.js';

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
  let subclassName = '';
  if (socialPosition.Subclass != undefined) {
    socialPosition.Subclass.forEach((position) => {
      if (position.Rolls.includes(roll)) {
        subclassSelected = position;
        subclassName = ' ' + subclassSelected.Name[gender];
      }
    });
  }
  return subclassName;
};

const getProfession = (religion, socialPosition, gender, kingdom) => {
  const roll = rollD100();
  let availableProfessionsBySociety = [];
  let availableProfessions = [];
  professions.forEach((society) => {
    if (society.Religion === religion) {
      availableProfessionsBySociety = society.Professions;
    }
  });
  availableProfessionsBySociety.forEach((position) => {
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

const setMainCharacteristics = (characteristics) => {
  let newCharacteristics = { ...characteristics };
  let availableCharacteristicsPoints = 100 - sumValues(characteristics);
  console.log('AVPOINTS', availableCharacteristicsPoints)
  do {
    newCharacteristics = setNewCharacteristics(newCharacteristics);
    availableCharacteristicsPoints -= 1;
  } while (availableCharacteristicsPoints > 0);
  return newCharacteristics;
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

const getName = (gender, people) => {
  let availableNames;
for (const nameList of names) {
  if((nameList.people).includes(people)) availableNames = nameList.names[gender];
}
  const randomIndex = Math.floor(Math.random() * availableNames.length);
  return availableNames[randomIndex];
}

// TODO: Add AdvantagesDisadvantages


export {
  getGender,
  getKingdom,
  getPeople,
  getSocialPosition,
  getSubclassPositionName,
  getProfession,
  setCharacteristicsByProfession,
  setMainCharacteristics,
  setOtherCharacteristics,
  getName
};

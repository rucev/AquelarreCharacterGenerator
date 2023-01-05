import { rollD4, rollD10, rollD100, sumValues, rollD6, rollD8 } from "./dices&tools.js";
import { kingdoms } from "./rules-kingdom.js";
import { socialPositions } from "./rules-position.js";
import { professions } from "./rules-profession.js";
import {
  professionCharacteristics,
  professionSkills,
  professionsExclusivityCriteria,
  professionsSubcategory,
} from "./details-professions.js";
import { characteristics } from "./rules-skills.js";
//import { characteristics } from "./rules-skills.js";

const getGender = () => {
  const roll = rollD4();
  let genderSelected = 0; //Masculino
  if (roll > 2) {
    genderSelected = 1 //Femenino
  }
  return genderSelected
}

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
  let subclassName = "" 
  if (socialPosition.Subclass != undefined) {
    socialPosition.Subclass.forEach((position) => {
      if (position.Rolls.includes(roll)) {
        subclassSelected = position;
        subclassName = " " + subclassSelected.Name[gender]
      }
    });
 
  }
  return subclassName
}

const getProfession = (religion, socialPosition, gender, kingdom) => {
  const roll = rollD100();
  let professionsBySociety = []
  let availableProfessions = []
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
  if (checkProfession(professionSelected.Name, gender, kingdom) === false){
    professionSelected = getProfession(religion, socialPosition, gender, kingdom)
  }
  return professionSelected
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
  const professionsWithGenderCriteria = professionsExclusivityCriteria.filter(profession => { return profession.Gender === gender})
  const professionsGenderNames = professionsWithGenderCriteria.map(profession => profession.Name);
  if (professionsGenderNames.includes(professionName)) {
    check = true; //Profession is already valid
} else {
  check= false; //Needs more validations
}
return check;
}

const checkProfessionByKingdom = (professionName, kingdom) => {
  let check = Boolean;
  const professionsWithKingdomCriteria = professionsExclusivityCriteria.filter(profession => { return profession.Kingdom.includes(kingdom) })
  const professionsKingdomNames = professionsWithKingdomCriteria.map(profession => profession.Name);
  if (professionsKingdomNames.includes(professionName)) {
    check = true; //Profession is already valid
} else {
  check = false; //Needs more validations
}
return check;
}

const checkProfession = (profession, gender, kingdom) => {
  let check = Boolean;
  if (checkProfessionByExclusivity(profession) === true) {
    check = true
  } else {
    if (checkProfessionByGender(profession, gender) === true) {
      check = true
    } else {
      if (checkProfessionByKingdom(profession, kingdom) === true) {
        check = true
      }
      else {
        check = false
      }
    } 
  }
  return check
}

const setCharacteristicsByProfession = (professionName, characteristics) => {
  const professionCharact = professionCharacteristics.filter(profession => { return profession.Name == professionName })[0]
  let newCharacteristics = {}
  for (let [key, value] of Object.entries(characteristics)) {
    if (key in professionCharact) {
      value = value + professionCharact[key]
    }
    if (value > 20) {
      newCharacteristics[key] = 20
    } else {
      newCharacteristics[key] = value
    }
  }
  return newCharacteristics
}

const getRandomCharacteristic = (characteristics) => {
  const keys = Object.keys(characteristics);
  const index = Math.floor(keys.length * Math.random());
  const characteristic = keys[index];
  return characteristic;
};

const setNewCharacteristic = (characteristics) => {
  let newCharacteristics = {};
  const characteristic = getRandomCharacteristic(characteristics)
  for (let [key, value] of Object.entries(characteristics)) {
    if (key === characteristic){
      if (value < 20){
        value = value + 1
      } 
    }
    newCharacteristics[key] = value
  }
  return newCharacteristics
}

const setMainCharacteristics = (characteristics) => {
  let newCharacteristics = characteristics;
  let availableCharacteristicsPoints = 100 - sumValues(characteristics)
  do {
    newCharacteristics = setNewCharacteristic(newCharacteristics)
    availableCharacteristicsPoints -= 1
  } while (availableCharacteristicsPoints > 0)
  return newCharacteristics
}


let chars = { STR: 5, AGI: 5, DEX: 5, VIT: 10, PER: 10, COM: 5, CUL: 5 }

console.log(setMainCharacteristics(chars))













export { getGender, getKingdom, getPeople, getSocialPosition, getSubclassPositionName, getProfession, setCharacteristicsByProfession, setMainCharacteristics };





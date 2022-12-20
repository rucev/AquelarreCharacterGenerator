import { rollD4, rollD10, rollD100 } from "./dices&tools.js";
import { kingdoms } from "./rules-kingdom.js";
import { socialPositions } from "./rules-position.js";
import { professions } from "./rules-profession.js";
import {
  professionCharacteristics,
  professionPrimarySkills,
  professionSecondarySkills,
  professionsExclusivityriteria,
  professionsSubcategory,
} from "./details-professions.js";

const getGender = () => {
  let roll = rollD4();
  let genderSelected = 0; //Masculino
  if (roll > 2) {
    genderSelected = 1 //Femenino
  }
  return genderSelected
}

const getKingdom = () => {
  let roll = rollD10();
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
  let roll = rollD10();
  let peopleSelected = {};
  availablePeople.forEach((people) => {
    if (people.Rolls.includes(roll)) {
      peopleSelected = people;
    }
  });
  return peopleSelected;
};

const getSocialPosition = (people) => {
  let roll = rollD10();
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

const getSubclass = (socialPosition) => {
  let roll = rollD10();
  let subclassSelected = {};
  if (socialPosition.Subclass != undefined) {
    socialPosition.Subclass.forEach((position) => {
      if (position.Rolls.includes(roll)) {
        subclassSelected = position;
      }
    });
  }
  return subclassSelected;
};

const getProfession = (religion, socialPosition) => {
  let roll = rollD100();
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
  return professionSelected
};


let gender = getGender()
let kingdom = getKingdom();
let people = getPeople(kingdom);
let clase = getSocialPosition(people);
let sub = getSubclass(clase);
let profession = getProfession(people.Religion, clase.Name)

console.log(
  "Reino: " +
    kingdom.Name +
    "\nPueblo: " +
    people.Name +
    "\nClase social: " +
    clase.Name +
    "\nProfesión: " +
    profession.Name
);



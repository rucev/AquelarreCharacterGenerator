import { rollD10 } from "./dices&tools.js";
import { kingdoms, socialPositions } from "./rules.js";

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

let kingdom = getKingdom();
let people = getPeople(kingdom);
let clase = getSocialPosition(people);
let sub = getSubclass(clase);

console.log(
  "Reino: " +
    kingdom.Name +
    "\nPueblo: " +
    people.Name +
    "\nClase social: " +
    clase.Name +
    "\n" +
    sub.Name
);

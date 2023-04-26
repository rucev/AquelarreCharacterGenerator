import { professionsExclusivityCriteria } from '../../rules/details-professions.js';

// TODO: Add Salary Functions

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

export const checkProfession = (profession, gender, kingdom) => {
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

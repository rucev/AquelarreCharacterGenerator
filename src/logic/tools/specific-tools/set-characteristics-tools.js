import {
    rollD10,
    rollD6,
    rollD50,
  } from '../dices&tools.js';
import { rulesHeight, rulesWeight } from '../../rules/rules-characteristics.js';

const getRandomCharacteristic = (characteristics) => {
  const keys = Object.keys(characteristics);
  const index = Math.floor(keys.length * Math.random());
  const characteristic = keys[index];
  return characteristic;
};

const setNewCharacteristics = (characteristics) => {
  let newCharacteristics = { ...characteristics }; 
  const characteristic = getRandomCharacteristic(characteristics);
  for (let [key, value] of Object.entries(characteristics)) {
    if (key === characteristic && value < 20) {
      newCharacteristics[key] = value + 1;
    }
  }
  return newCharacteristics;
};

const getLuck = (baseLuck, characteristics) => {
  let luck = characteristics.COM + characteristics.PER + characteristics.CUL;
  if (luck < baseLuck) {
    luck = baseLuck;
  }
  return luck;
};

const getWill = () => {
  return 25 + rollD10() + rollD10() + rollD10() + rollD10() + rollD10();
};

const getRationality = (baseRR, baseIRR) => {
  let rationality = 25 + rollD50();
  return rationality < baseRR || baseIRR > 0 ? baseRR : rationality;
};

const getIrrationality = (RR, baseIRR) => {
  let irrationality = 100 - RR;
  if (irrationality < baseIRR) {
    irrationality = baseIRR;
  }
  return irrationality;
};

const getAppearance = (gender, baseAPP) => {
  let appearance = rollD6() + rollD6() + rollD6() + rollD6();
  appearance = appearance < baseAPP ? baseAPP : appearance;
  appearance = gender === 1 && appearance < 25 ? (appearance += 2) : appearance;
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

export {
    setNewCharacteristics,
    getLuck,
    getWill,
    getRationality,
    getIrrationality,
    getAppearance,
    getAge,
    getHeight,
    getWeight
};
  
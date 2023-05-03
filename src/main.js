
import initCharacteristics from './character-component/characteristics.js';
import initName from './character-component/name.js';
import initOrigin from './character-component/origin.js';
import initSkills from './character-component/skills.js';
import { createCharacter } from './logic/create-character.js';
import { cleanCharacterPage, setSvgDisplay, toggleOff } from './ui.js';

setSvgDisplay()

const generateCharacter = document.querySelector('.main-page__create--button');
const generateNewCharacter = document.querySelector('.header__new-character')
const mainPage = document.querySelector('.main-page');
const characterPage = document.querySelector('.character-page');
const header = document.querySelector('header');


generateCharacter.addEventListener('click', (event) => {
  event.preventDefault();
  toggleOff(mainPage, characterPage, header);
  const character = createCharacter();
  initOrigin(character)
  initCharacteristics(character)
  initName(character)
  initSkills(character)
});

generateNewCharacter.addEventListener('click', (event) => {
  event.preventDefault();
  cleanCharacterPage();
  const newCharacter = createCharacter();
  initOrigin(newCharacter);
  initCharacteristics(newCharacter);
  initName(newCharacter)
  initSkills(newCharacter)
});
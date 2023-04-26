import { paths } from '../assets/img-paths.js';

export const setSvgDisplay = () => {
    const github = document.querySelector('.footer__github--icon').querySelector('path');
    const newCharacter = document.querySelector('.header__new-character--icon').querySelector('path');
    github.setAttribute('d', paths.github);
    newCharacter.setAttribute('d', paths.newChar);
}

export const toggleOff = (...items) => {
    items.forEach((item) => {
        item.classList.toggle('off');
    });
};

export const cleanCharacterPage = () => {
    const characterContainer = document.querySelector('.character-page__character');
    const name = document.querySelector('.header__name');
    characterContainer.innerHTML = '';
    name.innerHTML = '';
}
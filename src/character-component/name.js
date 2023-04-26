export default function initName(character) {
    const name = document.querySelector('.header__name');
    let html = `<b class="header__name--initial">${character.Name[0]}</b>${(character.Name).slice(1)}`
    name.innerHTML = html;
}
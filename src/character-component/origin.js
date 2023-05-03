export default function initOrigin(character) {
    const originArticle = document.createElement('article');
    originArticle.classList.add('character__container');

    let html = `<h3 class="character__container__title">
                <b class="character__container__title--initial">O</b>rigen</h3>
                <div class="character__container__items">
                <p class="character__container__item">
                    <b class="character__container__item--name">Reino</b><br>
                    <span class="character__container__item--value">${character.Kingdom}</span>
                </p>
                <p class="character__container__item">
                    <b class="character__container__item--name">Pueblo</b><br>
                    <span class="character__container__item--value">${character.People}</span>
                </p>
                <p class="character__container__item">
                    <b class="character__container__item--name">Posición social</b><br>
                    <span class="character__container__item--value">${character.Position}</span>
                </p>
                <p class="character__container__item">
                    <b class="character__container__item--name">Profesión</b><br>
                    <span class="character__container__item--value">${character.Profession}</span>
                </p>
                <p class="character__container__item">
                    <b class="character__container__item--name">Profesión paterna</b><br>
                    <span class="character__container__item--value">${character.ParentProfession}</span>
                </p>
                </div>`

    originArticle.innerHTML = html;
    const characterContainer = document.querySelector('.character-page__character');
    characterContainer.appendChild(originArticle);
}
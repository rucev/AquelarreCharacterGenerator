export default function initCharacteristics(character) {
    const renderMainCharacteristics = () => {
        const characteristicsArticle = document.createElement('article');
        characteristicsArticle.classList.add('character__container--multiple');
        const main = character.MainCharacteristics;
        let html = `<h3 class="character__container__title">
                    <b class="character__container__title--initial">C</b>aracterísticas  <b class="character__container__title--initial">B</b>ase</h3>
                    <p class="character__container__item">
                        <b class="character__container__item--name">FUErza</b><br>
                        <span class="character__container__item--value">${main.STR}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">AGIlidad</b><br>
                        <span class="character__container__item--value">${main.AGI}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">HABilidad</b><br>
                        <span class="character__container__item--value">${main.DEX}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">RESistencia</b><br>
                        <span class="character__container__item--value">${main.VIT}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">PERcepción</b><br>
                        <span class="character__container__item--value">${main.PER}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">COMunicación</b><br>
                        <span class="character__container__item--value">${main.COM}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">CULtura</b><br>
                        <span class="character__container__item--value">${main.CUL}</span>
                    </p>`
        characteristicsArticle.innerHTML = html;
        const characterContainer = document.querySelector('.character-page__character');
        characterContainer.appendChild(characteristicsArticle);
    }

    const renderOtherCharacteristics = () => {
        const characteristicsArticle = document.createElement('article');
        characteristicsArticle.classList.add('character__container--multiple');
        const other = character.OtherCharacteristics;
        let html = `<h3 class="character__container__title">
                    <b class="character__container__title--initial">C</b>aracterísticas  <b class="character__container__title--initial">P</b>ersonales</h3>
                    <p class="character__container__item">
                        <b class="character__container__item--name">Edad</b><br>
                        <span class="character__container__item--value">${other.AGE} años</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">Peso</b><br>
                        <span class="character__container__item--value">${other.WEIGHT} libras</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">Altura</b><br>
                        <span class="character__container__item--value">${other.HEIGHT} varas</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">ASPecto</b><br>
                        <span class="character__container__item--value">${other.APP}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">Templanza</b><br>
                        <span class="character__container__item--value">${other.WILL}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">RRacionalidad</b><br>
                        <span class="character__container__item--value">${other.RR}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">Suerte</b><br>
                        <span class="character__container__item--value">${other.LUCK}</span>
                    </p>
                    <p class="character__container__item">
                        <b class="character__container__item--name">IRRacionalidad</b><br>
                        <span class="character__container__item--value">${other.IR}</span>
                    </p>`
        characteristicsArticle.innerHTML = html;
        const characterContainer = document.querySelector('.character-page__character');
        characterContainer.appendChild(characteristicsArticle);
    }

    const renderCharacteristics = () => {
        renderOtherCharacteristics();
        renderMainCharacteristics();
    }

    return renderCharacteristics()
}
export default function initSkills(character) {
    const getValue = (skill) => {
        for (const value of Object.values(skill)) {
            if (typeof value === 'number') return value;
        }
    }

    const setHTMLSkill = (skill) => {
        const value = getValue(skill);
        return `<p class="character__container__item">
                        <b class="character__container__item--name">${skill.ESP}</b><br>
                        <span class="character__container__item--value">${value}%</span>
                    </p>`
    }

    const renderPrimarySkills = () => {
        const characteristicsArticle = document.createElement('article');
        characteristicsArticle.classList.add('character__container--multiple');
        const primary = character.Skills.primarySkills;
        let html = `<h3 class="character__container__title">
                    <b class="character__container__title--initial">C</b>ompetencias  <b class="character__container__title--initial">P</b>rimarias</h3>
                    <div class="character__container__items">`
        primary.forEach(skill => {
            html += setHTMLSkill(skill)
        });
        characteristicsArticle.innerHTML = html + `</div>`;
        const characterContainer = document.querySelector('.character-page__character');
        characterContainer.appendChild(characteristicsArticle);
    }

    const renderSecondarySkills = () => {
        const characteristicsArticle = document.createElement('article');
        characteristicsArticle.classList.add('character__container--multiple');
        const secondary = character.Skills.secondarySkills;
        let html = `<h3 class="character__container__title">
                    <b class="character__container__title--initial">C</b>ompetencias  <b class="character__container__title--initial">S</b>ecundarias</h3>
                    <div class="character__container__items">`
        secondary.forEach(skill => {
            html += setHTMLSkill(skill)
        });
        characteristicsArticle.innerHTML = html + `</div>`;
        const characterContainer = document.querySelector('.character-page__character');
        characterContainer.appendChild(characteristicsArticle);
    }

    const renderPaternSkills = () => {
        const characteristicsArticle = document.createElement('article');
        characteristicsArticle.classList.add('character__container--multiple');
        const patern = character.Skills.paternSkills;
        if (patern.length === 0) return;
        let html = `<h3 class="character__container__title">
                    <b class="character__container__title--initial">C</b>ompetencias  <b class="character__container__title--initial">P</b>aternas</h3>
                    <div class="character__container__items">`
        patern.forEach(skill => {
            html += setHTMLSkill(skill)
        });
        characteristicsArticle.innerHTML = html + `</div>`;
        const characterContainer = document.querySelector('.character-page__character');
        characterContainer.appendChild(characteristicsArticle);
    }

    const renderNormalSkills = () => {
        const characteristicsArticle = document.createElement('article');
        characteristicsArticle.classList.add('character__container--multiple');
        const normal = character.Skills.normalSkills;
        let html = `<h3 class="character__container__title">
                    <b class="character__container__title--initial">O</b>tras  <b class="character__container__title--initial">C</b>ompetencias</h3>
                    <div class="character__container__items">`
        normal.forEach(skill => {
            html += setHTMLSkill(skill)
        });
        characteristicsArticle.innerHTML = html + `</div>`;
        const characterContainer = document.querySelector('.character-page__character');
        characterContainer.appendChild(characteristicsArticle);
    }

    const renderSkills = () => {
        renderPrimarySkills();
        renderSecondarySkills();
        renderPaternSkills();
        renderNormalSkills();
    }

    return renderSkills()
}
import { skillByCharacteristic } from "../../rules/rules-characteristics.js"
import { professionSkills } from "../../rules/details-professions.js"

const testChar = {
    Name: '',
    Gender: 0,
    Kingdom: 'Corona de Aragón',
    People: 'Catalán',
    Position: 'Baja Nobleza Caballero',
    Family: '',
    Profession: 'Caballero de Orden Militar',
    ParentProfession: 'Cortesano',
    MainCharacteristics: { STR: 6, AGI: 20, DEX: 9, VIT: 15, PER: 12, COM: 10, CUL: 20 },
    OtherCharacteristics: {
        APP: 18,
        RR: 69,
        IR: 31,
        LUCK: 42,
        WILL: 57,
        AGE: 19,
        HEIGHT: 1.77,
        WEIGHT: 146
    },
    AdvantagesDisadvantages: [],
    Skills: [{}],
    Purse: { Income: 0, Expenses: 0 }
}

//TODO: Add Lenguages
// TODO: Add Weapons

export const setCharacteristicsBySkills = (mainCharacteristics, APP) => {
    let characterSkills = []
    for (let [char, skills] of Object.entries(skillByCharacteristic)) {
        skills.forEach((skill) => {
            let newSkill = {};
            newSkill[skill.id] = mainCharacteristics[char];
            newSkill.ESP = skill.Name;
            if (char == "APP") { // Apperance is the only not Main Characteristic that affects Skills
                newSkill[skill.id] = APP;
                newSkill.ESP = skill.Name;
            }
            characterSkills.push(newSkill)
        });
    }
    return characterSkills
}

export const getProfessionSkills = (professionName, skillsRank) => {
    let selectedProfessionSkills = []
    professionSkills.forEach((profession) => {
        if (profession.Name === professionName) {
            selectedProfessionSkills = profession[skillsRank]
        }
    });
    return selectedProfessionSkills
};

export const getSkillsByType = (skills, characterProfession, parentProfession) => {
    const temporaryPrimarySkills = getProfessionSkills(characterProfession, 'PrimarySkills');
    const temporarySecondarySkills = getProfessionSkills(characterProfession, 'SecondarySkills');
    const temporaryPaternSkills = getProfessionSkills(parentProfession, 'PrimarySkills');
    const primarySkills = [];
    const secondarySkills = [];
    const paternSkills = [];
    const normalSkills = [];

    for (let skill of skills) {
        const key = Object.keys(skill)[0]
        if (temporaryPrimarySkills.includes(key)) primarySkills.push(skill);
        else if (temporarySecondarySkills.includes(key)) secondarySkills.push(skill);
        else if (temporaryPaternSkills.includes(key)) paternSkills.push(skill);
        else normalSkills.push(skill)
    }

    return { primarySkills, secondarySkills, paternSkills, normalSkills }
}
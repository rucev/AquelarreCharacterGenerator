import {skillByCharacteristic} from "../../rules/rules-characteristics.js"
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

const setCharacteristicsBySkills = (mainCharacteristics, APP) => {
    let characterSkills = []
    for (let [char, skills] of Object.entries(skillByCharacteristic)) {
        skills.forEach((skill) => {
            let newSkill = {};
            newSkill[skill.ID] = mainCharacteristics[char]
            if(char == "APP"){ // Apperance is the only not Main Characteristic that affects Skills
                newSkill[skill.ID] = APP
            }
            characterSkills.push(newSkill)
        });
    }
    return characterSkills
}

const getProfessionSkills = (professionName, skillsRank) => {  
    let selectedProfessionSkills = []
    professionSkills.forEach((profession) => {
        if (profession.Name === professionName){
            selectedProfessionSkills = profession[skillsRank]
            console.log(profession[skillsRank])
        } 
    return selectedProfessionSkills
    });
};

// TODO: Check why an undefined appears while checkSkillType

const checkSkillType = (skill, characterProfession, parentProfession) => { // 3 = Primary, 2 = Secondary, 1 = Paternal, 0 = Normal
    const primarySkills = getProfessionSkills(characterProfession, "PrimarySkills");
    console.log(primarySkills)
    const secondarySkills = getProfessionSkills(characterProfession, "SecondarySkills");
    const paternSkills = getProfessionSkills(parentProfession, "PrimarySkills");
    let skillType = Number
    if (primarySkills.includes(skill)) {
        skillType = 3
    } else if (secondarySkills.includes(skill)) {
        skillType = 2
    } else if (paternSkills.includes(skill)) {
        skillType = 1
    } else {
        skillType = 0
    }
    return skillType
}


console.log(checkSkillType("Seduction", testChar.Profession, testChar.ParentProfession))

console.log(getProfessionSkills(testChar.Profession))

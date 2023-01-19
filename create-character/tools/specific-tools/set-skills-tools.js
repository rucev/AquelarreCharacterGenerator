import {skillByCharacteristic} from "../../rules/rules-characteristics.js"


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


console.log(setCharacteristicsBySkills(testChar.MainCharacteristics, testChar.OtherCharacteristics.APP))


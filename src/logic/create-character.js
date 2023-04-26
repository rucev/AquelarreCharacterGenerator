import { emptyCharacter } from './tools/empty-character.js';
import { getGender, getKingdom, getPeople, getSocialPosition, getSubclassPositionName, getProfession, setCharacteristicsByProfession, setMainCharacteristics, setOtherCharacteristics, getName } from './tools/create-character-tools.js'

//TODO: Add Skills

export const createCharacter = () => {
    const character = {...emptyCharacter};
    const gender = getGender()
    character.Gender = gender
    const kingdom = getKingdom()
    character.Kingdom = kingdom.Name
    const people = getPeople(kingdom)
    character.People = people.Name
    character.Name = getName(gender, people.Name)
    const socialPosition = getSocialPosition(people)
    const subclassPosition = getSubclassPositionName(socialPosition, gender)
    character.Position = socialPosition.Name + subclassPosition
    const profession = getProfession(people.Religion, socialPosition.Name, gender, kingdom.Name)
    const parentProfession = getProfession(people.Religion, socialPosition.Name, 0, kingdom.Name)
    character.Profession = profession.Name
    character.ParentProfession = parentProfession.Name
    character.MainCharacteristics = setMainCharacteristics(setCharacteristicsByProfession(profession.Name, character.MainCharacteristics))
    character.OtherCharacteristics = setOtherCharacteristics(setCharacteristicsByProfession(profession.Name, character.OtherCharacteristics), character.MainCharacteristics, gender)
    return character
}

console.log(createCharacter())
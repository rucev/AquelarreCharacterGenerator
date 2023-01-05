import { emptyCharacter } from "./empty-character.js";
import { getGender, getKingdom, getPeople, getSocialPosition, getSubclassPositionName, getProfession, setCharacteristicsByProfession, setMainCharacteristics } from "./create-character-tools.js"

const createCharacter = () => {
    let character = emptyCharacter
    const gender = getGender()
    character.Gender = gender
    const kingdom = getKingdom()
    character.Kingdom = kingdom.Name
    const people = getPeople(kingdom)
    character.People = people.Name
    const socialPosition = getSocialPosition(people)
    const subclassPosition = getSubclassPositionName(socialPosition, gender)
    character.Position = socialPosition.Name + subclassPosition
    const profession = getProfession(people.Religion, socialPosition.Name, gender, kingdom.Name)
    const parentProfession = getProfession(people.Religion, socialPosition.Name, 0, kingdom.Name)
    character.Profession = profession.Name
    character.ParentProfession = parentProfession.Name
    character.MainCharacteristics = setMainCharacteristics(setCharacteristicsByProfession(profession.Name, character.MainCharacteristics))
    character.OtherCharacteristics = setCharacteristicsByProfession(profession.Name, character.OtherCharacteristics)
    return character
}



console.log(createCharacter())
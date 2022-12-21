import { emptyCharacter } from "./empty-character.js";
import { getGender, getKingdom, getPeople, getSocialPosition, getSubclassPositionName, getProfession } from "./create-character-tools.js"

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
    const profession = getProfession(people.Religion, socialPosition.Name)
    const FatherProfession = getProfession(people.Religion, socialPosition.Name)
    character.Profession = profession.Name
    character.FatherProfession = FatherProfession.Name
    return character
}



console.log(createCharacter())
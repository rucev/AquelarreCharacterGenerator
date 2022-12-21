import { emptyCharacter } from "./empty-character.js";
import { getGender, getKingdom, getPeople, getSocialPosition, getSubclass, getProfession } from "./create-character-tools.js"

const createCharacter = () => {
    let character = emptyCharacter
    const gender = getGender()
    character.Gender = gender
    const kingdom = getKingdom()
    character.Kingdom = kingdom.Name
    const people = getPeople(kingdom)
    character.People = people.Name
    const socialPosition = getSocialPosition(people)
    character.Position = socialPosition.Name
    console.log(gender, character.Kingdom, character.People, character.Position)
    if (socialPosition.Subclass != null) {
        character.Position = socialPosition.Name + " " + getSubclass(socialPosition)[0]
    }
    const profession = getProfession(people.Religion, character.Position)
    const FatherProfession = getProfession(people.Religion, character.Position)
    character.Profession = profession.Name
    character.FatherProfession = FatherProfession.Name
    return character
}



console.log(createCharacter())
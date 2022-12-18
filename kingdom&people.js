import { rollD10, rollRange } from "./dices&tools.js";

const peopleCastilla = [
  { Rolls: [1, 2, 3], Name: "Castellano" },
  { Rolls: [4, 5], Name: "Gallego" },
  { Rolls: [6], Name: "Vasco" },
  { Rolls: [7], Name: "Asturleonés" },
  { Rolls: [8, 9], Name: "Mudéjar" },
  { Rolls: [10], Name: "Judío" },
];

const peopleAragon = [
  { Rolls: [1, 2, 3, 4], Name: "Aragonés" },
  { Rolls: [5, 6, 7, 8], Name: "Catalán" },
  { Rolls: [9], Name: "Mudéjar" },
  { Rolls: [10], Name: "Judío" },
];

const peopleGranada = [
  { Rolls: rollRange(1, 8), Name: "Árabe" },
  { Rolls: [9], Name: "Judío" },
  { Rolls: [10], Name: "Mozárabe" },
];

const peopleNavarra = [
  { Rolls: rollRange(1, 6), Name: "Navarro" },
  { Rolls: [7, 8, 9], Name: "Vasco" },
  { Rolls: [10], Name: "Judío" },
];

const peoplePortugal = [
  { Rolls: rollRange(1, 6), Name: "Portugués" },
  { Rolls: [7, 8], Name: "Judío" },
  { Rolls: [9, 10], Name: "Mudéjar" },
];

const kingdoms = [
  { Rolls: [1, 2, 3, 4], Name: "Corona de Castilla", People: peopleCastilla },
  { Rolls: [5, 6], Name: "Corona de Aragón", People: peopleAragon },
  { Rolls: [7], Name: "Reino de Granada", People: peopleGranada },
  { Rolls: [8], Name: "Reino de Navarra", People: peopleNavarra },
  { Rolls: [9, 10], Name: "Reino de Portugal", People: peoplePortugal },
];

const getKingdom = () => {
  let roll = rollD10();
  let kingdomSelected = {};
  kingdoms.forEach((kingdom) => {
    if (kingdom.Rolls.includes(roll)) {
      kingdomSelected = kingdom
    }
  });
  return kingdomSelected;
};

const getPeople = (kingdom) => {
    const availablePeople = kingdom.People
    let roll = rollD10();
    let peopleSelected = {}
    availablePeople.forEach((people) => {
        if (people.Rolls.includes(roll)) {
            peopleSelected = people
        }
    });
    return peopleSelected;
};

let kingdom = getKingdom()
console.log(kingdom.Name, getPeople(kingdom).Name);

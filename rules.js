import { rollD10, rollRange } from "./dices&tools.js";

const peopleCastilla = [
  { Rolls: [1, 2, 3], Name: "Castellano", Religion: "Cristiana" },
  { Rolls: [4, 5], Name: "Gallego", Religion: "Cristiana" },
  { Rolls: [6], Name: "Vasco", Religion: "Cristiana" },
  { Rolls: [7], Name: "Asturleonés", Religion: "Cristiana" },
  { Rolls: [8, 9], Name: "Mudéjar", Religion: "Cristiana" },
  { Rolls: [10], Name: "Judío", Religion: "Judía" },
];

const peopleAragon = [
  { Rolls: [1, 2, 3, 4], Name: "Aragonés", Religion: "Cristiana" },
  { Rolls: [5, 6, 7, 8], Name: "Catalán", Religion: "Cristiana" },
  { Rolls: [9], Name: "Mudéjar", Religion: "Cristiana" },
  { Rolls: [10], Name: "Judío", Religion: "Judía" },
];

const peopleGranada = [
  { Rolls: [1, 2, 3, 4, 5, 6, 7, 8], Name: "Árabe", Religion: "Islámica" },
  { Rolls: [9], Name: "Judío", Religion: "Judía" },
  { Rolls: [10], Name: "Mozárabe", Religion: "Islámica" },
];

const peopleNavarra = [
  { Rolls: [1, 2, 3, 4, 5, 6], Name: "Navarro", Religion: "Cristiana" },
  { Rolls: [7, 8, 9], Name: "Vasco", Religion: "Cristiana" },
  { Rolls: [10], Name: "Judío", Religion: "Judía" },
];

const peoplePortugal = [
  { Rolls: [1, 2, 3, 4, 5, 6], Name: "Portugués", Religion: "Cristiana" },
  { Rolls: [7, 8], Name: "Judío", Religion: "Judía" },
  { Rolls: [9, 10], Name: "Mudéjar", Religion: "Cristiana" },
];

const kingdoms = [
  { Rolls: [1, 2, 3, 4], Name: "Corona de Castilla", People: peopleCastilla },
  { Rolls: [5, 6], Name: "Corona de Aragón", People: peopleAragon },
  { Rolls: [7], Name: "Reino de Granada", People: peopleGranada },
  { Rolls: [8], Name: "Reino de Navarra", People: peopleNavarra },
  { Rolls: [9, 10], Name: "Reino de Portugal", People: peoplePortugal },
];

const socialClassChristian = [
  {
    Rolls: [1],
    Name: "Alta Nobleza",
    Exceptions: ["Vasco", "Mudéjar"],
    Subclass: [
      { Rolls: [1], Name: ["Duque", "Duquesa"] },
      { Rolls: [2], Name: ["Marqués", "Marquesa"] },
      { Rolls: [3, 4], Name: ["Conde", "Condesa"] },
      { Rolls: [5, 6, 7], Name: ["Vizconde", "Vizcondesa"] },
      { Rolls: [8, 9, 10], Name: ["Barón", "Baronesa"] },
    ],
  },
  {
    Rolls: [2],
    Name: "Baja Nobleza",
    Exceptions: ["Vasco", "Mudéjar"],
    Subclass: [
      { Rolls: [1, 2], Name: ["Señor", "Señora"] },
      { Rolls: [3, 4, 5], Name: ["Caballero", "Dama"] },
      { Rolls: [6, 7, 8, 9, 10], Name: ["Hidalgo", "Hidalga"] },
    ],
  },
  { Rolls: [3, 4], Name: "Burguesia", Exceptions: ["Vasco"], Subclass: [] },
  { Rolls: [5, 6], Name: "Villana", Exceptions: [], Subclass: [] },
  {
    Rolls: [7, 8, 9],
    Name: "Campesina",
    Exceptions: [],
    Subclass: [
      { Rolls: [1, 2, 3], Name: ["Colono", "Colona"] },
      { Rolls: [4, 5, 6, 7, 8, 9], Name: ["Vasallo", "Vasalla"] },
      { Rolls: [10], Name: ["Siervo de la Gleba", "Sierva de la Gleba"] },
    ],
  },
  {
    Rolls: [10],
    Name: "Esclava",
    Exceptions: [
      "Aragonés",
      "Asturoleones",
      "Castellano",
      "Gallego",
      "Navarro",
      "Portugues",
      "Vasco",
    ],
    Subclass: [],
  },
];

const socialClassJewish = [
  { Rolls: [1, 2, 3, 4], Name: "Burguesía", Exceptions: [], Subclass: [], },
  { Rolls: [5, 6, 7, 8, 9, 10], Name: "Villano", Exceptions: [], Subclass: [], },
];

const socialClassIslamic = [
  { Rolls: [1], Name: "Alta Nobleza", Exceptions: ["Mozárabe"], Subclass: [
        { Rolls: [1], Name: ["Sharif"] },
        { Rolls: [2, 3], Name: ["Shayj"] },
        { Rolls: [4, 5, 6], Name: ["Emir"] },
        { Rolls: [7, 8, 9, 10], Name: ["Qadi"] },
    ], },
  { Rolls: [2], Name: "Baja Nobleza", Exceptions: ["Mozárabe"], Subclass: [
        { Rolls: [1, 2, 3], Name: ["Sa'id"] },
        { Rolls: [4, 5, 6, 7, 8, 9, 10], Name: ["Al-Barraz"] },
    ], },
  { Rolls: [3, 4], Name: "Mercader", Exceptions: [], Subclass: []},
  { Rolls: [5, 6], Name: "Ciudadana", Exceptions: [], Subclass: []},
  { Rolls: [7, 8, 9], Name: "Campesina", Exceptions: [], Subclass: []},
  { Rolls: [9, 10], Name: "Esclava", Exceptions: [], Subclass: []},
];

const socialPositions = [
  { Religion: "Cristiana", Classes: socialClassChristian},
  { Religion: "Judía", Classes: socialClassJewish},
  { Religion: "Islámica", Classes: socialClassIslamic},
]

const getKingdom = () => {
  let roll = rollD10();
  let kingdomSelected = {};
  kingdoms.forEach((kingdom) => {
    if (kingdom.Rolls.includes(roll)) {
      kingdomSelected = kingdom;
    }
  });
  return kingdomSelected;
};

const getPeople = (kingdom) => {
  const availablePeople = kingdom.People;
  let roll = rollD10();
  let peopleSelected = {};
  availablePeople.forEach((people) => {
    if (people.Rolls.includes(roll)) {
      peopleSelected = people;
    }
  });
  return peopleSelected;
};

const getSocialPosition = (people) => {
  let roll = rollD10();
  let availableSocialPositions = {};
  let socialPositionSelected = {};
  socialPositions.forEach((society) => {
      if (society.Religion === people.Religion) {
        availableSocialPositions = society.Classes;
      }
  }) 
  availableSocialPositions.forEach((socialPosition) => {
      if (socialPosition.Rolls.includes(roll)) {
        socialPositionSelected = socialPosition;
      }
  });
  if (socialPositionSelected.Exceptions.includes(people.Name)) {
    socialPositionSelected = getSocialPosition(people)
  }
  return socialPositionSelected
}

const getSubclass = (socialPosition) => {
  let roll = rollD10();
  let subclassSelected = {};
  if (socialPosition.Subclass != undefined){
    socialPosition.Subclass.forEach((position) => {
      if (position.Rolls.includes(roll)) {
        subclassSelected = position;
      }
    });
  }
  return subclassSelected
};




let kingdom = getKingdom();
let people = getPeople(kingdom)
let clase = getSocialPosition(people)
let sub = getSubclass(clase)

console.log("Reino: "+kingdom.Name+"\nPueblo: "+people.Name+"\nClase social: "+clase.Name+"\n"+sub.Name)



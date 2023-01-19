const socialClassChristian = [
  {
    Rolls: [1],
    Name: "Alta Nobleza",
    Exceptions: ["Vasco", "Mudéjar"], //people
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
  { Rolls: [3, 4], Name: "Burguesía", Exceptions: ["Vasco"], Subclass: undefined },
  { Rolls: [5, 6], Name: "Villana", Exceptions: [], Subclass: undefined },
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
    Subclass: undefined,
  },
];

const socialClassJewish = [
  { Rolls: [1, 2, 3, 4], Name: "Burguesía", Exceptions: [], Subclass: undefined },
  { Rolls: [5, 6, 7, 8, 9, 10], Name: "Villana", Exceptions: [], Subclass: undefined },
];

const socialClassIslamic = [
  {
    Rolls: [1],
    Name: "Alta Nobleza",
    Exceptions: ["Mozárabe"],
    Subclass: [
      { Rolls: [1], Name: ["Sharif", "Sa'id"] },
      { Rolls: [2, 3], Name: ["Shayj", "Sa'id"] },
      { Rolls: [4, 5, 6], Name: ["Emir", "Sa'id"] },
      { Rolls: [7, 8, 9, 10], Name: ["Qadi", "Sa'id"] },
    ],
  },
  {
    Rolls: [2],
    Name: "Baja Nobleza",
    Exceptions: ["Mozárabe"],
    Subclass: [
      { Rolls: [1, 2, 3], Name: ["Sa'id", "Sa'id"] },
      { Rolls: [4, 5, 6, 7, 8, 9, 10], Name: ["Al-Barraz", "Al-Barraz"] },
    ],
  },
  { Rolls: [3, 4], Name: "Mercader", Exceptions: [], Subclass: undefined },
  { Rolls: [5, 6], Name: "Ciudadana", Exceptions: [], Subclass: undefined },
  { Rolls: [7, 8, 9], Name: "Campesina", Exceptions: [], Subclass: undefined },
{ Rolls: [9, 10], Name: "Esclava", Exceptions: [], Subclass: undefined /*{Rolls: [9, 10], Name: ["Eunuco"]}*/  },
];

const socialPositions = [
  { Religion: "Cristiana", Classes: socialClassChristian },
  { Religion: "Judía", Classes: socialClassJewish },
  { Religion: "Islámica", Classes: socialClassIslamic },
];

export { socialPositions };

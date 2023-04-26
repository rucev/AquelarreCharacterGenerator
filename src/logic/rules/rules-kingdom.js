const peopleCastilla = [
  { Rolls: [1, 2, 3], Name: 'Castellano', Religion: 'Cristiana' },
  { Rolls: [4, 5], Name: 'Gallego', Religion: 'Cristiana' },
  { Rolls: [6], Name: 'Vasco', Religion: 'Cristiana' },
  { Rolls: [7], Name: 'Asturleonés', Religion: 'Cristiana' },
  { Rolls: [8, 9], Name: 'Mudéjar', Religion: 'Cristiana' },
  { Rolls: [10], Name: 'Judío', Religion: 'Judía' },
];

const peopleAragon = [
  { Rolls: [1, 2, 3, 4], Name: 'Aragonés', Religion: 'Cristiana' },
  { Rolls: [5, 6, 7, 8], Name: 'Catalán', Religion: 'Cristiana' },
  { Rolls: [9], Name: 'Mudéjar', Religion: 'Cristiana' },
  { Rolls: [10], Name: 'Judío', Religion: 'Judía' },
];

const peopleGranada = [
  { Rolls: [1, 2, 3, 4, 5, 6, 7, 8], Name: 'Árabe', Religion: 'Islámica' },
  { Rolls: [9], Name: 'Judío', Religion: 'Judía' },
  { Rolls: [10], Name: 'Mozárabe', Religion: 'Islámica' },
];

const peopleNavarra = [
  { Rolls: [1, 2, 3, 4, 5, 6], Name: 'Navarro', Religion: 'Cristiana' },
  { Rolls: [7, 8, 9], Name: 'Vasco', Religion: 'Cristiana' },
  { Rolls: [10], Name: 'Judío', Religion: 'Judía' },
];

const peoplePortugal = [
  { Rolls: [1, 2, 3, 4, 5, 6], Name: 'Portugués', Religion: 'Cristiana' },
  { Rolls: [7, 8], Name: 'Judío', Religion: 'Judía' },
  { Rolls: [9, 10], Name: 'Mudéjar', Religion: 'Cristiana' },
];

const kingdoms = [
  { Rolls: [1, 2, 3, 4], Name: 'Corona de Castilla', People: peopleCastilla },
  { Rolls: [5, 6], Name: 'Corona de Aragón', People: peopleAragon },
  { Rolls: [7], Name: 'Reino de Granada', People: peopleGranada },
  { Rolls: [8], Name: 'Reino de Navarra', People: peopleNavarra },
  { Rolls: [9, 10], Name: 'Reino de Portugal', People: peoplePortugal },
];

export { kingdoms };

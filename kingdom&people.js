import {rollD10} from "./dices.js";


const kingdoms = [{Rolls: [1, 2, 3, 4], Name: "Corona de Castilla"},
    {Rolls: [5, 6], Name: "Corona de Aragón"},
    {Rolls: [7], Name: "Reino de Granada"},
    {Rolls: [8], Name: "Reino de Navarra"},
    {Rolls: [9, 10], Name: "Reino de Portugal"}
];

const getKingdom=()=>{
    let roll = rollD10();
    let kingdomSelected = "";
    kingdoms.forEach(kingdom => {
        if (kingdom.Rolls.includes(roll)){
            kingdomSelected += kingdom.Name;
        };
    });
    return kingdomSelected
};

console.log(getKingdom())
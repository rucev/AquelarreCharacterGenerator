const rollD4=()=> {
    return Math.floor(Math.random() * (4) + 1);
}

const rollD6=()=> {
    return Math.floor(Math.random() * (6) + 1);
}

const rollD8=()=> {
    return Math.floor(Math.random() * (8) + 1);
}

const rollD10=()=> {
    return Math.floor(Math.random() * (10) + 1);
}

const rollD100=()=> {
    return Math.floor(Math.random() * (100) + 1);
}

export {rollD4, rollD6, rollD8, rollD10, rollD100};

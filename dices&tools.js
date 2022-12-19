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

const rollRange=(start, end)=> { return new Array(end+1 - start).fill().map((d, i) => i + start) };


export { rollD4, rollD6, rollD8, rollD10, rollD100, rollRange };

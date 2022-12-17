const getD4=()=> {
    return Math.floor(Math.random() * (4) + 1);
}

const getD6=()=> {
    return Math.floor(Math.random() * (6) + 1);
}

const getD8=()=> {
    return Math.floor(Math.random() * (8) + 1);
}

const getD10=()=> {
    return Math.floor(Math.random() * (10) + 1);
}

const getD100=()=> {
    return Math.floor(Math.random() * (100) + 1);
}

export {getD4, getD6, getD8, getD10, getD100};

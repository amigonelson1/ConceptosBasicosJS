const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

/*
export const owners = [
    'DC',
    'MARVEL',
];// para export sin default son necesarias las {}

export default heroes;  // para los default se hace el import sin las {}
*/

// otra forma puede ser

const owners = [
    'DC',
    'MARVEL',
];

export {
    heroes as default,
    owners,
}
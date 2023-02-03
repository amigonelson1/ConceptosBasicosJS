// promesas

import getHeroes from './bases/08-imp-exp';

/*
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroes(1);
        resolve(heroe);// para cuando tenemos respuesta exitosa
        //reject('en caso de no encontrar un resultado')// para cuando tenemos una respuesta fallida
    }, 2000);
});

promesa.then((her) => {
    console.log('respuesta', her);
}).catch(err => console.log(err));
*/

const getHerorByIDAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroes(id);
            if (heroe) resolve(heroe);// para cuando tenemos respuesta exitosa
            else { reject('Ningún heroe encontrado') }// para cuando tenemos una respuesta fallida
        }, 2000);
    });
};

getHerorByIDAsync(1)
    .then(console.log) // se puede hacer colocando la funcion directamente y en automatico se ingresa el primer argumento
    .catch(err => console.log(err));
    
//Desestructuracion o asignacion desestructurante de arreglos

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, segundoPersonaje,] = personajes;// se deja una ',' por el item que deseamos no nombrar

//console.log(personajes[0]);
console.log(segundoPersonaje);

const salida = function (personajes) {
    return [
        "uno",
        2,
    ]
};

console.log(salida());

const usestate = function (valor) {
    return [
        valor,
        () => { console.log('salida de la funcion') },
    ]
};

const [personaje, setPersonaje] = usestate('valor de entrada');
console.log(personaje, '\n', setPersonaje);
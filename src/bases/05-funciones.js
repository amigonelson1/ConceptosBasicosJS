//Funciones
//usando function

function saludar(nombre) {
    return `Hola ${nombre}`;
}; //No se recomienda el uso de este tipo de funciones

//funcion const
const saludar2 = function (nombre) {
    return `Hola ${nombre}`;
}; //es recomendable asignar la funcion a una constante

//y por ultimos las funciones flecha
const saludar3 = (nombre) => {
    return `Hola ${nombre}`;
}

//las funciones flechas con un solo return se pueden abreviar de la siguiente manera
const saludar4 = (nombre) => `Hola ${nombre}`;

//y para returns de arreglos se deben colocar dentro de ()
const persona = () => (
    {
        nombre: 'Krilin',
        ocupacion: 'Police',
    }
);

console.log(saludar('goku'));
console.log(saludar2('vegeta'));
console.log(saludar3('Piccolo'));
console.log(saludar4('Numero17'));
console.log(persona());

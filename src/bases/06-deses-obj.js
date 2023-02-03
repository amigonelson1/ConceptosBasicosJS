//Desestructuracion o asignacion desestructurante de objetos
const persona = {
    nombre: 'Juan',
    apellido: 'mendez',
    edad: 45,
};
console.log(persona.nombre);// forma comun de extraer el dato

const nombre = 'Pepito';
//ahora desestructuraremos sería const { nombre } = persona; pero como existe la const nombre da error;

//se le asigna otra variable para evitar conflicto
const { nombre: nombreArreglo } = persona;

console.log(persona.nombre);// forma comun de extraer el dato
console.log(nombre, nombreArreglo);

//desestructurando en funciones
const usecontext = ({ apellido, edad }) => {
    return {
        apellidoExtraido: apellido,
        edadExtraida: edad,
        ubicacion: {
            lat: 123,
            long: 456,
        }
    }
};

console.log(usecontext(persona));

const { apellidoExtraido, ubicacion: { lat } } = usecontext(persona);
console.log(apellidoExtraido, lat);

//operador condicional ternario

const activo = true;
const mensaje = (!activo) ? 'Activo' : 'Inactivo'; // para el caso de un if/else
const mensaje2 = activo && 'Activo 2'; //para el caso de una sola salida
console.log(mensaje, mensaje2);
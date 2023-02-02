// Objetos literales
const persona = {
    nombre: 'Pepe',
    apellido: 'Perez',
    edad: 41,
    direccion: {
        barrio: 'Alcalá',
        ciudad: 'Piedecuesta',
        departamento: 'Santander',
    }
};
console.log('primer console.log', persona);
//console.table(persona); //Para visualizar en tabla

//clonaremos a persona para observar el comportamiento
const persona2 = persona; // De esta manera no estamos clonando, lo que se hace es apuntar a la misma referencia del objeto
persona2.nombre = 'Pacheco';
console.log('segundo console.log', persona); // Se observa que de esta manera realmente nos altera el Objeto de persona

//para clonar se debe usar el spriteOperation {...ObjetoACopiar}
const persona3 = { ...persona };
persona3.nombre = 'Pacho';
console.log('tercero console.log', persona, persona2, persona3); // aquí se observa que no sufre cambio alguno el objeto persona, solo se altero persona2
//No se debe o no se recomienda usar 'var'
const nombre = 'José';
let apellido = 'Apellido?'; // let es para variables
apellido = 'Amaris';
if (true) {
  const nombre = 'Nelson';
  let apellido = 'Ortiz';
  //para tener en cuenta, const y let si no se declaran aquí dentro tomara las globales.
  console.log('dentro del if', nombre, apellido);
}
console.log('global del if', nombre, apellido);

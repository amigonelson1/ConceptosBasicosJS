//para import por defecto va sin {}, para export sin default debe ir entre {}
//import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log(owners);
const getHeroe = function (index) {
    return heroes.find((resul) => resul.id === index);
};
//console.log(getHeroe(4));

//const getOwner = (owner) => heroes.filter((own) => own.owner === owner)
//console.log(getOwner('DC'));

export default getHeroe;
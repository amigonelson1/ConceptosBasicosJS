//fetch APIs 
//para esta pruba usaremos= 'https://developers.giphy.com/'

const apiKey = 'xqI7D7Syg9G8oSlQ8wdSDzKqwP2pBKnH';
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => { //en este caso se desestructuro y por eso se usa el nombre data ya proveniente de la promesa
        //console.log(data.images.original.url);// al desestructurarse no es necesario poner la variable.data
        const { url } = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    })
    .catch(console.warn);
// async y await

const getImagen = async () => {
    try {
        const apiKey = 'xqI7D7Syg9G8oSlQ8wdSDzKqwP2pBKnH';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();// se desestructuro data para tomar el mismo nombre y no tener que repetir data.data al momento de llamarla
        const { url } = data.images.original;
        const imagen = document.createElement('img');
        imagen.src = url;
        document.body.append(imagen);
    }
    catch (error) {
        //manejo del error
        console.error(error);
    }
};
getImagen();
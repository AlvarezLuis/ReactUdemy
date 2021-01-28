

const getImage = async() => {

    try {

        const apiKey = "eKE6FwMTIfy59kmC6hbE2Erc4a8Sx8SP";
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await res.json();

        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    } catch (error) {
        //manejo de errores
        console.error(error);
    }
   
}

getImage().then(console.log);
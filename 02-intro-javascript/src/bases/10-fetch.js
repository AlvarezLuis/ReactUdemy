const apiKey = "eKE6FwMTIfy59kmC6hbE2Erc4a8Sx8SP";

const petition = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

petition
    .then(response => response.json())
    .then(({ data }) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);
var galleryJson

async function ImportImage(year) {
    console.log("Start ImportImages: " + year);

    let pathJson = `img/${year}/gallery${year}.json`

    await fetch(pathJson)
        .then(response => response.json())
        .then(json => galleryJson = json);
    console.log(galleryJson);

    RemoveMe("my-gallery");

    const newGallery = document.createElement('div');
    newGallery.setAttribute("class", "pswp-gallery pswp-gallery--responsive-images");
    newGallery.id = "my-gallery";
    document.getElementById("gallerie-preview").appendChild(newGallery);

    arrImages = galleryJson.Images

    arrImages.forEach(element => {
        yearindex = year % 10;

        let ititle = element.title;
        let ipath = element.path;
        let iprev = element.prev;
        let iheight = element.height;
        let iwidth = element.width;

        const newImage = document.createElement('a');

        newImage.href = ipath;
        newImage.id = "img-" + ititle.substring(0, ititle.length - 3);

        newImage.setAttribute("data-pswp-width", iwidth);
        newImage.setAttribute("data-pswp-height", iheight);


        const newPrev = document.createElement('img');

        newPrev.src = iprev;
        newPrev.id = "prev-" + ititle.substring(0, ititle.length - 3);

        newPrev.setAttribute("class", "previmg");
        newPrev.setAttribute("alt", "Bild vom Jugendfest");
        newPrev.setAttribute("onerror", `RemoveMe("img-${ititle.substring(0, ititle.length - 3)}")`);

        document.getElementById("my-gallery").appendChild(newImage);
        newImage.appendChild(newPrev);
    });
}

function RemoveMe(id) {
    const element = document.getElementById(id)
    element.remove();
}

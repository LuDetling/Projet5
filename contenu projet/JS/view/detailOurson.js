class View {
    showDetailOurson(response) {
        console.log(response)

        let body = document.querySelector("body");

        let id = response._id;
        let img = response.imageUrl;
        let name = response.name;
        let description = response.description;
        let price = response.price;


        let boxOurson = document.createElement("div");
        boxOurson.className = "boxOurson";
        body.appendChild(boxOurson);

        let imgOurson = document.createElement("img");
        imgOurson.src = img;
        boxOurson.appendChild(imgOurson);

        let ficheProduit = document.createElement("div");
        ficheProduit.className = "ficheProduit";
        boxOurson.appendChild(ficheProduit);

        let h1 = document.createElement("h1");
        h1.innerHTML = name;
        ficheProduit.appendChild(h1);

        let produitDescription = document.createElement("p");
        produitDescription.innerHTML = description;
        ficheProduit.appendChild(produitDescription);

        let produitPrice = document.createElement("h3");
        produitPrice.innerHTML = price;
        ficheProduit.appendChild(produitPrice)
    }
}
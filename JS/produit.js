function produit(){
    const request = new XMLHttpRequest();

    request.onreadystatechange = function(){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
            let response = JSON.parse(this.responseText);

            let url = document.location.href.indexOf('=');
            let finUrl = document.location.href.substr(url + 1);

            let body = document.querySelector("body");

            for(let i = 0; i < response.length; i++){

                let id = response[i]._id;
                let img = response[i].imageUrl;
                let name = response[i].name;
                let description = response[i].description;
                let price = response[i].price;

                if(finUrl == id){
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
            
        }
    }

    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
}
produit();
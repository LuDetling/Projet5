class View {
    showDetailOurson(ourson) {

        let body = document.querySelector("body");
        let img = ourson.imageUrl;
        let name = ourson.name;
        let description = ourson.description;
        let price = ourson.price;


        let boxOurson = document.createElement("div");
        boxOurson.className = "boxOurson";
        body.appendChild(boxOurson);
        boxOurson.innerHTML = "<img src='" + img + "'><div class='ficheProduit'><h1>" + name + "</h1><p>" + description + "</p><h3>" + price + "</h3><a href='' id = 'addPanier'>ajouter au panier</a></div>";
        
        let addPanier = document.getElementById("addPanier");
        
        addPanier.addEventListener("click", function(event){
            event.preventDefault();
            let controller = new Controller();
            controller.addTeddyToCart(ourson);
        })
    }
}
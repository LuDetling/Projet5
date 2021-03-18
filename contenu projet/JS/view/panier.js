class View {

    showPanier(panier) {

        //afficher les éléments du panier

        let panierParse = JSON.parse(panier);
        let tableProduct = Object.values(panierParse);
        let allBox = document.getElementById("allBox");
        let totalPrice = 0;

        for (let i = 0; i < tableProduct.length; i++) {

            let img = tableProduct[i].imageUrl;
            let id = tableProduct[i]._id;
            let name = tableProduct[i].name;
            let price = tableProduct[i].price;
            let description = tableProduct[i].description;
            let quantite = tableProduct[i].quantite;
            let priceProducts = price * quantite;
            let boxProduct = document.createElement("div");

            totalPrice += priceProducts;

            boxProduct.id = id;
            boxProduct.className = "boxProduct";
            allBox.appendChild(boxProduct);
            boxProduct.innerHTML = `<div><img src ='${img}'></div><div><p>id produit : ${id}</p><h3>${name}</h3><p>${description}</p><div class='prix'><p>${price}</p><p>${quantite}</p><p>total du produit : ${priceProducts}</p></div></div><div><a href='#' class="${id} deletePanier">supprimer</a></div>`

        }

        let showTotalPrice = document.createElement("div");
        showTotalPrice.id = "showTotalPrice";
        showTotalPrice.innerHTML = "le prix total est de : " + totalPrice;
        allBox.appendChild(showTotalPrice);


        //supprimer un élément du panier
        
        let deletePanier = document.getElementsByClassName("deletePanier");

        var myFunction = function () {
            let idOurson = this.classList[0]
            let controller = new Controller();

            controller.deletePanier(panier, idOurson);
            location.reload();
            
        };

        for (var i = 0; i < deletePanier.length; i++) {
            deletePanier[i].addEventListener('click', myFunction, false);
        }
    }
}
class ViewPanier {

    showPanier(panier) {

        //afficher les éléments du panier
        if (panier) {
            let panierParse = JSON.parse(panier);
            let tableProduct = Object.values(panierParse);
            let allBox = document.getElementById("allBox");
            let totalPrice = 0;
            let priceProducts = 0;

            for (let i = 0; i < tableProduct.length; i++) {

                let img = tableProduct[i].imageUrl;
                let id = tableProduct[i]._id;
                let name = tableProduct[i].name;
                let price = (tableProduct[i].price/100).toFixed(2).replace(".",",");
                let description = tableProduct[i].description;
                let quantite = tableProduct[i].quantite;
                let boxProduct = document.createElement("div");

                priceProducts = parseFloat(price) * quantite;
                totalPrice += priceProducts;


                boxProduct.id = id;
                boxProduct.className = "boxProduct";
                allBox.appendChild(boxProduct);
                boxProduct.innerHTML =
            `<div>
                <img src ='${img}' class="imgOurson">
            </div>
            <div>
                <p>id produit : ${id}</p>
                <h3>${name}</h3>
                <p>${description}</p>
                <div class='prix'>
                    <p>${price} € </p>
                    <p>quantité : ${quantite}</p>
                    <p>total du produit : ${priceProducts} € </p>
                </div>
            </div>
            <div>
                <a href='#' class="${id} deletePanier">supprimer</a>
            </div>`

            }

            let showTotalPrice = document.createElement("div");
            showTotalPrice.id = "showTotalPrice";
            showTotalPrice.innerHTML = "le prix total est de : " + totalPrice + " €";

            allBox.appendChild(showTotalPrice);


            //supprimer un élément du panier

            let deletePanier = document.getElementsByClassName("deletePanier");

            let functionUpdateDelete = function (event) {
                let idOurson = event.target.classList[0];
                let controller = new Controller();

                controller.deletePanier(panier, idOurson);

                let divToDelete = document.getElementById(idOurson);
                divToDelete.remove();
                let showTotalPrice = document.getElementById("showTotalPrice");
                showTotalPrice.innerHTML = "Le prix total est de : " + this.calculateTotalPrice(idOurson) + " €";
            };

            for (var i = 0; i < deletePanier.length; i++) {
                deletePanier[i].addEventListener('click', functionUpdateDelete.bind(this), false);
            }
        }

    }


    //calculer le prix du panier
    calculateTotalPrice(idOurson) {

        let totalPrice = 0;
        let panier = localStorage.getItem("panier");
        let panierParse = JSON.parse(panier);
        let tableProduct = Object.values(panierParse);

        for (let i = 0; i < tableProduct.length; i++) {

            let id = tableProduct[i]._id;
            let price = tableProduct[i].price;
            let quantite = tableProduct[i].quantite;
            let priceProducts = price * quantite;

            if (idOurson != id) {
                totalPrice += priceProducts;

            }
        }
        return (totalPrice/100).toFixed(2).replace(".",",");
    }
}
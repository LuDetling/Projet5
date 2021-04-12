//CONTROLLER

class Controller {
    async showListOurson() {
        let response = await Model.getData("http://localhost:3000/api/teddies");
        let view = new ViewListOurson();
        view.showListOurson(response);
    }

    async showDetailOurson() {
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id");
        let response = await Model.getData("http://localhost:3000/api/teddies/" + id);
        let view = new ViewDetailOurson();
        view.showDetailOurson(response);
    }

    addTeddyToCart(ourson) {
        let maxiPanier = {
            "id": "",
            "value": ""
        };

        let panier = localStorage.getItem("panier");
        if (panier == null) {
            panier = {};
        } else {
            panier = JSON.parse(panier);
        }

        if (panier[ourson._id] == undefined) {
            panier[ourson._id] = ourson;
            panier[ourson._id].quantite = 1;
        } else {
            panier[ourson._id].quantite += 1;
        }

        localStorage.setItem("panier", JSON.stringify(panier));
    }

    deletePanier(ourson, idOurson) {
        let panier = localStorage.getItem("panier");
        if (panier == null) {
            panier = {};
        } else {
            panier = JSON.parse(panier);
            delete panier[idOurson];
        }
        localStorage.setItem("panier", JSON.stringify(panier));

    }

    async showPanier() {
        let dataLocalStorage = localStorage.getItem("panier");
        let view = new ViewPanier();
        view.showPanier(dataLocalStorage);

    }

    async postPanierUser() {

        let formulaire = document.getElementById("formulaire");
        let infoPanier = localStorage.getItem("panier");

        if (infoPanier) {
            let infoParse = JSON.parse(infoPanier)
            let tableInfoProduct = Object.values(infoParse);

            formulaire.addEventListener("submit", async function (event) {
                event.preventDefault();

                let contact = { // création de l'objet contact en récupérant les valeurs dans les inputs
                    firstName: document.getElementById("nom").value,
                    lastName: document.getElementById("prenom").value,
                    address: document.getElementById("adresse").value,
                    city: document.getElementById("ville").value,
                    email: document.getElementById("email").value
                };

                let products = [];
                let totalPrice = 0
                for (let i = 0; i < tableInfoProduct.length; i++) {
                    let id = tableInfoProduct[i]._id;
                    products.push(id);

                    let price = tableInfoProduct[i].price;
                    let quantite = tableInfoProduct[i].quantite
                    totalPrice += price * quantite;
                }

                let postData = await Model.postData(products, contact, "http://localhost:3000/api/teddies/order"); // appel de postData avec en parametre le contact et l'url
                console.log(postData);

                localStorage.setItem("priceProduct", totalPrice);
                localStorage.setItem("orderId", postData.orderId);
                localStorage.setItem("name", postData.contact.firstName);
                localStorage.removeItem("panier");


                let panier = localStorage.getItem("panier");

                if (!panier) {
                    window.location.replace("./confirmation.html");
                }

            })
        }

    }

    recupData() {
        let view = new ViewPanierUser();
        view.recupData();
        localStorage.removeItem("orderId");
        localStorage.removeItem("priceProduct");
        localStorage.removeItem("name");
    }

}
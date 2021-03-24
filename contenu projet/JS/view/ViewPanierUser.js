class ViewPanierUser {
    recupData() {
        let boxCommande = document.getElementById("boxCommande");
        let div = document.createElement("div");
        let totalPrice = localStorage.getItem("priceProduct")
        let orderId = localStorage.getItem("orderId");
        let name = localStorage.getItem("name")

        boxCommande.appendChild(div);
        div.className = "confirmCommande";
        div.innerHTML = `<h1>Merci pour votre commande ${name}</h1>
                        <h3>ID de commande : ${orderId}</h3>
                        <p>Vous en avez eu pour un total de : ${(totalPrice/100).toFixed(2).replace(".",",")} €</p>`

    }
}
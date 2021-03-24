function ajouterPanier() {
    // Défini le localstorage des articles a 0
    localStorage.setItem("article", 0)
    let nombreArticle = localStorage.getItem("article")
    nombreArticle = parseInt(nombreArticle);

    let addPanier = document.getElementById("addPanier")
    let select = document.getElementById("select")
    let panier = document.getElementById("panier");

    for (let i = 1; i <= 10; i++) {
        let option = document.createElement("option");
        option.value = [i];
        option.innerHTML = [i];
        select.appendChild(option)
    }

    addPanier.addEventListener("click", function () {
        let value = select.value;
        value = parseInt(value)
        nombreArticle += value;
        panier.innerHTML = nombreArticle;
    })
}
ajouterPanier()
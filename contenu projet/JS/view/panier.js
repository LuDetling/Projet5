
class View {
    showPanier(panier){
        console.log(panier);
        let panierParse = JSON.parse(panier);
        console.log(panierParse);
        let tableProduct = Object.values(panierParse);
        let body = document.querySelector("body");

        for(let  i = 0 ; i < tableProduct.length; i++){

            let img = tableProduct[i].imageUrl;
            let id = tableProduct[i]._id;
            let name = tableProduct[i].name;
            let price = tableProduct[i].price;
            let description = tableProduct[i].description;
            let quantite = tableProduct[i].quantite;
            let priceProducts = price * quantite;

            let boxProduct = document.createElement("div");
            boxProduct.className = "boxProduct";
            body.appendChild(boxProduct)
            boxProduct.innerHTML = `<div><img src ='${img}'></div><div><p>id produit : ${id}</p><h3>${name}</h3><p>${description}</p><div class='prix'><p>${price}</p><p>${quantite}</p><p>total du produit : ${priceProducts}</p></div></div><div><a href='#' class='deleteArticle'>supprimer</a></div>`            
            
        }
        let deleteArticle = document.getElementsByClassName('deleteArticle');
    }
}
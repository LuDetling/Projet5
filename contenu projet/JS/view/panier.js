class View{
    showListOurson(panier){
        let storage = localStorage.getItem("panier");
        let objectPanier = JSON.parse(storage);
        
        for(let i = 0; i < panier.length; i++){
            if (panier[i]._id == panier[0]._id){
                console.log(panier[i]);
            }
        }


        let divPanier = document.createElement("div");
        let body = document.querySelector("body");
        body.appendChild(divPanier);

    }
}
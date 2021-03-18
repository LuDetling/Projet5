//CONTROLLER

class Controller{
    async showListOurson(){
        let response = await Model.getData("http://localhost:3000/api/teddies");
        let view = new View();
        view.showListOurson(response);
    }
    
    async showDetailOurson(){
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id");
        let response = await Model.getData("http://localhost:3000/api/teddies/" + id);
        let view = new View();
        view.showDetailOurson(response);
    }

    deletePanier(ourson){
        
    }

    addTeddyToCart(ourson){
        let maxiPanier = {
            "id": "",
            "value": ""
        };

        let panier = localStorage.getItem("panier");
        if (panier == null){
            panier = {};
        }else{
            panier = JSON.parse(panier);
        }

        if(panier[ourson._id] == undefined){
            panier[ourson._id] = ourson;
            panier[ourson._id].quantite = 1;
        }else{
            panier[ourson._id].quantite += 1;
        }

        localStorage.setItem("panier", JSON.stringify(panier));
    }

    deletePanier(ourson, idOurson){
        let panier = localStorage.getItem("panier");
        if (panier == null){
            panier = {};
        }else{
            panier = JSON.parse(panier);
            for (const [key, value] of Object.entries(panier)) {
                if(value._id == idOurson){
                    delete panier[key];
                }
              }
        }
        localStorage.setItem("panier", JSON.stringify(panier));
    }

    async showPanier(){
        let dataLocalStorage = localStorage.getItem("panier");
        let view = new View();
        view.showPanier(dataLocalStorage);
            
    }
}



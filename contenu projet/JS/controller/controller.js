//CONTROLLER

class Controller{
    async showListOurson(){
        let response = await Model.getData("http://localhost:3000/api/teddies")
        let view = new View();
        view.showListOursons(response);
    }
    
    async showDetailOurson(){
        let searchParams = new URLSearchParams(window.location.search);
        let id = searchParams.get("id")
        let response = await Model.getData("http://localhost:3000/api/teddies/" + id)
        let view = new View();
        view.showDetailOurson(response);
    }
}



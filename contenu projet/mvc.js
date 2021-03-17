class Model{
    static getData(url){
        return fetch(url)
            .then(response => {
                if (response.ok){
                    return response.json
                }
            })
    }
}

class Controller{
    async showListOurson(){
        let response = await Model.getData("http://localhost:3000/api/teddies");
        let view = new View();
        view.showListOurson(response)
    }
}

class View {
    showListOurson(response){
        let body = document.querySelector("body");
        let div = document.createElement("div");

        body.appendChild(div)

        div.innerHTML = 'model mvc appris'
    }
}
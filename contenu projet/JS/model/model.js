//MODEL

class Model{
    static getData(url) { //creation function parametre numOurson
        return fetch(url)
            .then(response => {
                if(response.ok){ // si la reponse du serveur est ok 
                    return response.json() // écoute l'url en json
                    
                }
            })
    }
}
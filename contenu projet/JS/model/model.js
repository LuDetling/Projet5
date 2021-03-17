//MODEL

class Model{
    static getData(url) { //creation function parametre url
        return fetch(url)   // retourne url a fetch
            .then(response => { // promesse de reponse
                if(response.ok){ // si la reponse du serveur est ok 
                    return response.json() // retourne la reponse en js
                }
            })
    }

    static postData(url){
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Typer": "application/json"
            },
            body: JSON.stringify(url)
        })
            .then(response => {
                if(response.ok){
                    return response.json()
                }
            })
    }
}
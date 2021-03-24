//MODEL

class Model {
    static getData(url) { //creation function parametre url
        return fetch(url) // retourne url a fetch
            .then(response => { // promesse de reponse
                if (response.ok) { // si la reponse du serveur est ok 
                    return response.json() // retourne la reponse en js
                }
            })
    }

    static postData(products, contact, url) {
        return fetch(url, {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contact,
                    products
                })
            })
            .then(response => {
                if (response.ok) {
                    let responses = response.json();
                    return responses
                }
            })
    }
}
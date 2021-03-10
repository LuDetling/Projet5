function oursons (){
    const request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
            const response = JSON.parse(this.responseText);
            
            let body = document.querySelector("body");

            
            let objetOurson = document.createElement("div");
            objetOurson.className = "objetOurson";
            body.appendChild(objetOurson);
            
            
            for(let i = 0; i < response.length; i++){

                //BOUCLE sur les infos
                let img = response[i].imageUrl;
                let name = response[i].name;
                let description = response[i].description;
                let id = response[i]._id;

                //CREATION HTML A PARTIR DU CONTENU SERVEUR
                let div = document.createElement("div");
                div.className = "ourson";
                objetOurson.appendChild(div);

                let a = document.createElement("a");
                a.className = "pageOurson"
                div.appendChild(a);
                a.href = "produit.html?id=" + id;


                a.addEventListener("click", function(event){
                    console.log(id);
                    if(id){
                        console.log(name)

                    }
                })
                
                function infoOurson(){
                    let h1 = document.createElement("h1");
                    h1.innerHTML = name;
                    a.appendChild(h1);

                    let imgOurson = document.createElement("img");
                    imgOurson.className = "img_ourson";
                    imgOurson.src = img;
                    a.appendChild(imgOurson);               
                
                    let descriptionOurson = document.createElement("p");
                    descriptionOurson.innerHTML = description;
                    a.appendChild(descriptionOurson);

                }
                infoOurson();
                
                
            }
        }
    }
    request.open("GET", "http://localhost:3000/api/teddies");
    request.send();
}

oursons();
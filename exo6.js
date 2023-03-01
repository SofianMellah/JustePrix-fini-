let nombreAleatoire = Math.floor(Math.random() * 101)
console.log(nombreAleatoire)
let limiteTentative = 0;

function justePrix(){
    
    let prix = document.getElementById('nombre').value
    console.log(prix)
    
    limiteTentative++

    if(prix < nombreAleatoire){
        console.log("Choisissez un nombre plus élevé")
        document.getElementById("résultat").innerHTML = "choisissez un nombre plus élevé."
    }

    else if(prix > nombreAleatoire){
        console.log("Choisissez un nombre moins élevé")
        document.getElementById("résultat").innerHTML = "choisissez un nombre moins élevé."
    }
        
    else if(prix == nombreAleatoire){
        console.log("Félicitation vous avez trouvé le nombre exact")
        document.getElementById("résultat").innerHTML = "félicitation vous avez trouver le nombre exact."
    }
        
    if(limiteTentative > 10){
        console.log("Malheuresement, vous avez eu 10 tentatives et vous avez échoué")
        document.getElementById("résultat").innerHTML = "malheuresement, vous avez eu 10 tentatives et vous avez échoué."
    }
}
let nombreAleatoire = Math.floor(Math.random() * 100 +1)
console.log(nombreAleatoire)
let limiteTentative = 0;

function justePrix(){
    
    let prix = document.getElementById('nombre').value
    console.log(prix)
    
    limiteTentative++

    if(prix < nombreAleatoire){
        console.log("Choisissez un nombre plus élevé" + limiteTentative)
        document.getElementById("résultat").innerHTML = "choisissez un nombre plus élevé, vous êtes à votre "  + limiteTentative +" tentatives !"
    }

    else if(prix > nombreAleatoire){
        console.log("Choisissez un nombre moins élevé" + limiteTentative)
        document.getElementById("résultat").innerHTML = "choisissez un nombre moins élevé, vous êtes à votre "  + limiteTentative +" tentatives !"
    }
        
    else if(prix == nombreAleatoire){
        console.log("Félicitation vous avez trouvé le nombre exact" + limiteTentative)
        document.getElementById("résultat").innerHTML = "félicitation vous avez trouver le nombre exact à votre "  + limiteTentative +" tentatives !"
    }
        
    if(limiteTentative > 10){
        console.log("Malheureusement, vous avez eu 10 tentatives et vous avez échoué")
        document.getElementById("résultat").innerHTML = "malheuresement, vous avez eu 10 tentatives et vous avez échoué."
    }
}
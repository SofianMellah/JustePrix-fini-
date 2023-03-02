let nombreAleatoire = Math.floor(Math.random() * 100 +1)
console.log(nombreAleatoire)
let limiteTentative = 0;
let nombreTentativesMax = 10

function justePrix(){
    
    let prix = document.getElementById('nombre').value
    console.log(prix)
    
    limiteTentative++
    nombreTentativesMax--
    if(prix < nombreAleatoire){
        document.getElementById("résultat").innerHTML = "choisissez un nombre plus élevé, vous êtes à votre "  + limiteTentative +" tentative(s) ! " + "Il vous reste " + nombreTentativesMax + " tentative(s)"
    }

    else if(prix > nombreAleatoire){
        document.getElementById("résultat").innerHTML = "choisissez un nombre moins élevé, vous êtes à votre "  + limiteTentative +" tentative(s) ! " + "Il vous reste " + nombreTentativesMax + " tentative(s)"
    }
        
    else if(prix == nombreAleatoire){
        document.getElementById("résultat").innerHTML = "félicitation vous avez trouvé le nombre exact au bout " + limiteTentative + " tentative(s) !"
    }
        
    if(limiteTentative > 10){
        document.getElementById("résultat").innerHTML = "malheuresement, vous avez eu 10 tentatives et vous avez échoué."
    }
}
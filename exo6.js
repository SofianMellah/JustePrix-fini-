let nombreAleatoire = Math.floor(Math.random() * 100 +1) /* Math.floot sert à avoir un nombre entier et Math random sert à générer un nombre aléatoire entre 0 et 1 exclu, du coup si on veut entre 0 et 100 on fait *100 logiquement et on rajoute +1 car nous arriverons qu'à 99 maximum */
console.log(nombreAleatoire)
let limiteTentative = 0;
let nombreTentativesMax = 10

function justePrix(){
    
    let prix = document.getElementById('nombre').value
    console.log(prix)
    
    limiteTentative++ /* C'est la variable des tentatives qui augmente au fur et à mesure quand la fonction s'active ( le clique ) */
    nombreTentativesMax-- /* C'est la variable de nombre de tentatives max qui baisse quand la fonction s'active ( le clique ) */
    
    /* Début choisir un nombre plus élevé */
    if(prix < nombreAleatoire){
        document.getElementById("résultat").innerHTML = "choisissez un nombre plus élevé, vous êtes à votre "  + limiteTentative +" tentative(s) ! " + "Il vous reste " + nombreTentativesMax + " tentative(s)"
    }
    /* Fin choisir un nombre plus élevé */

    /* Début choisir un nombre moins élevé */
    else if(prix > nombreAleatoire){
        document.getElementById("résultat").innerHTML = "choisissez un nombre moins élevé, vous êtes à votre "  + limiteTentative +" tentative(s) ! " + "Il vous reste " + nombreTentativesMax + " tentative(s)"
    }
    /* Fin choisir un nombre moins élevé */

    /* Début nombre exact */
    else if(prix == nombreAleatoire){
        document.getElementById("résultat").innerHTML = "félicitation vous avez trouvé le nombre exact au bout de " + limiteTentative + " tentative(s) !"
    }
    /* Fin nombre exact */
    
    /* Début échec au bout de 10 tentatives */
    if(limiteTentative > 10){
        document.getElementById("résultat").innerHTML = "malheureusement, vous avez eu 10 tentatives et vous avez échoué."
    }
    /* Fin échec au bout de 10 tentatives */
}
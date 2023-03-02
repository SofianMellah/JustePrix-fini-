let nombreUtilisateur = prompt("Donnez un nombre")
let message = "Vous avez perdu"
let compteur = 1
let nombreAleatoire = Math.floor(Math.random() * 100 + 1)


if (nombreUtilisateur == nombreAleatoire) {
    message = prompt("Bravo vous avez trouvé au bout de la première tentative !")
}

while (compteur < 11 && nombreUtilisateur != /* != veut dire " différent de .... " */ nombreAleatoire) {
    if (nombreUtilisateur > nombreAleatoire) {
        nombreUtilisateur = prompt("Nombre trop haut, vous êtes à votre " +  compteur + " tentative(s) !")
    } else if (nombreUtilisateur < nombreAleatoire) {
        nombreUtilisateur = prompt("Nombre trop bas, vous êtes à votre " +  compteur + " tentative(s) !")
    }
    if (nombreUtilisateur == nombreAleatoire) {
        message = prompt("Bravo vous avez trouvé, au bout de la " + compteur + " tentative(s) !")
    }
    compteur++;
}
console.log(message)
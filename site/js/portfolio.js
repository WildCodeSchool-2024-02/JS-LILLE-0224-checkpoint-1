let avatar = document.querySelector(".descriptionImage")
avatar.addEventListener ("click", function() {avatar.src="image/avatar.svg"})

let Matt = document.querySelector("#firstname")
let button = document.querySelector(".changeName")
let section = document.querySelector(".description")
let root = document.querySelector(':root');
let liens = document.querySelector("a");

button.addEventListener ("click", function() {
let username = prompt('Entrez votre nom')
let colorChosen = prompt('Entrez une couleur')

section.style.backgroundColor=colorChosen
root.style.setProperty('--lightWildColor', colorChosen)
Matt.innerText=username
Matt.style.color="white"
liens[0].style.color=colorChosen
liens[1].style.color=colorChosen
}
)



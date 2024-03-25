// Changement d'avatar

const avatarOrigin = document.getElementsByClassName('developerAvatar');

const avatar1 = 'image/avatar.svg';
const avatar2 = 'image/avatar-bis.png';
let currentImage = 1;

for (let i = 0; i < avatarOrigin.length; i++) {
    avatarOrigin[i].addEventListener('click', function() {
        if (currentImage === 1) {
            this.src = avatar2;
            currentImage = 2;
        } else {
            this.src = avatar1;
            currentImage = 1;
        }
    })
};

// Changement couleur et nom 
// la boucle sert à changer la couleur de la description et du footer en même temps

const devName = document.getElementById('firstname')
const nameBTN = document.getElementById('changeNameStyleBtn')
const newBgColor = document.getElementsByClassName('pinkBg')
nameBTN.addEventListener('click', function (){
    let newName = prompt('Entrez votre nom SVP')
    devName.innerHTML = newName
    devName.style.color = "white"
    for (let i = 0; i < newBgColor.length; i++) {
        newBgColor[i].style.backgroundColor = "#750ff7";
    }
})

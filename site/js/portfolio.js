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

const devName = document
const nameBTN = document.getElementById('changeNameStyleBtn')
nameBTN.addEventListener('click', function (){
    let newName = prompt('Entrez votre nom SVP')
    


})

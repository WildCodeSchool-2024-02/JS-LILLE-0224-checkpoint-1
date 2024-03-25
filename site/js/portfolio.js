// step 1
const imgAvatarbis = document.querySelector('.img-avatar-bis');
imgAvatarbis.addEventListener('click', function () {
    imgAvatarbis.src = "images/avatar.svg"
    imgAvatarbis.alt = "Other dev";
});

//step 2

const button = document.querySelector('button');

button.addEventListener('click', function () {
    const remplir = prompt('Enter your name');
    console.log(remplir);
});




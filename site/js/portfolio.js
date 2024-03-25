let avatar = document.getElementById('avatar');
let switchNameButton = document.getElementById('switch-name');
let nameTochange = document.getElementById('firstname');
let sectionsToStyle = document.getElementsByClassName('pink-bg');
let rootColor = document.querySelector(':root');



avatar.addEventListener('click', function () {
    if (avatar.src.includes("image/avatar-bis.png")) {
        avatar.src = "image/avatar.svg";
    } else { avatar.src = "image/avatar-bis.png" }
})

switchNameButton.addEventListener('click', function(){
    let myname = prompt('tell me your name!');
    let pickAColor = prompt('choose a color');
    if (myname) {
        nameTochange.innerText = myname;
        nameTochange.style.color = "white";
    }
    if (pickAColor) {
        rootColor.style.setProperty('--lightWildColor', pickAColor )
        // for (let i = 0; i < sectionsToStyle.length; i++) {
        //     sectionsToStyle[i].style.backgroundColor = pickAColor;
        // }
    }
})
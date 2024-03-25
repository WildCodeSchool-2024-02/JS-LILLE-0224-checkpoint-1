var image = document.getElementById('avatar');

image.addEventListener('click', function(){
    changeImage();
});

function changeImage(){
    image.src = 'image/avatar.svg';
}

function promptMe(){
    do{
    var newName = prompt("Entrez votre nom");
    }
    while (newName.length < 2 );
  document.getElementById("firstname").innerHTML = newName;
document.getElementById("firstname").style.color ="white";
// document.getElementsById("pink-bg").style.backgroundColor = "purple";
}
promptMe();

    

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "/site/image/avatar-bis.png"){
        document.getElementById("imgClickAndChange").src = "/site/image/avatar.svg";
    } else {
        document.getElementById("imgClickAndChange").src = "/site/image/avatar.svg";
    }
}


let changeName = document.querySelector("#firstname")


changeName.innerHTML = prompt("entre your name");

//function modify(){
//    prompt("entre your name")
//}
//modify();
//const bouton =document.querySelectorAll(".btn-mod");
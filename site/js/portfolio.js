console.log("hello");

const imgAvatar= document.querySelector(".avatar")

imgAvatar.addEventListener("click", function(){
    imgAvatar.src = "image/avatar.svg";
});

const button= document.querySelector("button")
let firstName= document.querySelector("#firstname")
let colorBG= document.querySelectorAll(".pink-bg")
let colorText= document.querySelectorAll(".pink-text")
button.addEventListener("click", function(){
    let newColor= prompt("choose new color for background");
    for(let i=0;i<colorBG.length;i++) {
    colorBG[i].style.backgroundColor = newColor;
}
for(let j=0;j<colorText.length;j++) {
    colorText[j].style.color= newColor;
}

    let newName= prompt("what's your name ?");
    firstName.innerHTML= `${newName}`;
    firstName.style.color = "white";
})
const avatarlogo = document.querySelector(".logohead");

avatarlogo.addEventListener("click", () => {
  const img = document.querySelector(".logohead");

  img.src = "./image/avatar.svg";
});

const changeName = document.querySelector(".buttonModifer");
changeName.addEventListener("click", () => {


const changeColor = prompt("Change color.");
const ancienneColor = document.querySelector(".description.pink-bg");

ancienneColor.style.backgroundColor = changeColor;

const changeNom = prompt("Put your name.");
const ancienNom = document.getElementById("firstname");
const nouveauNom = changeNom;

ancienNom.replaceWith(nouveauNom);

});
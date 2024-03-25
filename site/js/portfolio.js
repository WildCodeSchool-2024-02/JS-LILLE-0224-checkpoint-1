//changer avatar

let avatar = document.getElementById("avatar");

avatar.addEventListener("click", function () {
  avatar.src = "./image/avatar.svg";
});

//changer prénom

let name = document.getElementById("firstname");
let nameUser = document.createElement("span");

const btn = document.createElement("button");
btn.innerHTML = "Modifier le nom et la couleur";
let zone = document.querySelector(".description");
zone.appendChild(btn);
let nameToBeReplaced = document.getElementById("firstname");

btn.addEventListener("click", function () {
  let nameUser = prompt(`What's your name ?`);
  nameToBeReplaced.innerHTML = nameUser;
  document.getElementById("firstname").style.color = "white";
});

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
console.log(btn);
let zone = document.querySelector(".description");
zone.appendChild(btn);
console.log(zone);
btn.addEventListener("click", function () {
  let askName = prompt(`What's your name ?`);
});

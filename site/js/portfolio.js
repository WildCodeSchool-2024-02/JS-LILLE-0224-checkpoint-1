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
let footer = document.querySelector("footer");
let text = document.querySelectorAll("pink-text");

btn.addEventListener("click", function () {
  let colorUser = prompt(`Enter a color`);
  let nameUser = prompt(`What's your name ?`);
  zone.style.backgroundColor = colorUser;
  footer.style.backgroundColor = colorUser;
  nameToBeReplaced.innerHTML = nameUser;
  document.getElementById("firstname").style.color = "white";
});

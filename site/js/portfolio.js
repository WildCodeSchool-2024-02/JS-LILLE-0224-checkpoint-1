let avatarBanner = document.querySelector(".banner-avatar")
let descriptionName = document.querySelector("#firstname")
let btnModifyTextColor = document.querySelector(".modifyTextColor")

avatarBanner.addEventListener("click", () => {
    avatarBanner.src = "image/avatar.svg"
})

btnModifyTextColor.addEventListener("click", () => {
    descriptionName.innerHTML = prompt("What's your name ?")
    descriptionName.style.color = "white"
})
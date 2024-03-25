let avatarBanner = document.querySelector(".banner-avatar")
let descriptionName = document.querySelector("#firstname")
let descriptionBg = document.querySelector(".description")
let footerBg = document.querySelector("footer.pink-bg")
let pinkText = document.querySelectorAll(".pink-text")
let btnModifyTextColor = document.querySelector(".modifyTextColor")


avatarBanner.addEventListener("click", () => {
    avatarBanner.src = "image/avatar.svg"
})

btnModifyTextColor.addEventListener("click", () => {
    let newColor = prompt("What color do you want for the background ?")
    descriptionBg.style.backgroundColor = newColor
    footerBg.style.backgroundColor = newColor
    for (let text of pinkText) {
        text.style.color = newColor
    }
    descriptionName.innerHTML = prompt("What's your name ?")
    descriptionName.style.color = "white"
})
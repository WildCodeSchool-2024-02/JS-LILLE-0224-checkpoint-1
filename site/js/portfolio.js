let avatarBanner = document.querySelector(".banner-avatar")

let descriptionName = document.querySelector("#firstname")
let descriptionBg = document.querySelector(".description")
let footerBg = document.querySelector("footer.pink-bg")
let pinkText = document.querySelectorAll(".pink-text")
let navLink = document.querySelectorAll("header nav a")
let btnModifyTextColor = document.querySelector("#modifyTextColor")

let frontEndDevToolsList = document.querySelector("#front-dev-tools")
let btnModifyFrontDevTools = document.querySelector("#modifyFrontDevTools")

let backEndDevToolsList = document.querySelector("#back-dev-tools")
let inputDevToolsBack = document.querySelector("#inputDevToolsBack")
let btnAddDevToolsBack = document.querySelector("#addDevToolsBack")

avatarBanner.addEventListener("click", () => {
    avatarBanner.src = "image/avatar.svg"
})

btnModifyTextColor.addEventListener("click", () => {
    let newColor = prompt("What color do you want ?")
    descriptionBg.style.backgroundColor = newColor
    footerBg.style.backgroundColor = newColor
    for (let text of pinkText) {
        text.style.color = newColor
    }
    for (let link of navLink) {
        link.style.color = newColor
    }
    descriptionName.innerHTML = prompt("What's your name ?")
    descriptionName.style.color = "white"
})

btnModifyFrontDevTools.addEventListener("click", () => {
    frontEndDevToolsList.innerHTML = `<li>VsCode</li><li>Github</li><li>Terminal</li>`
})

let newDevToolsBack = `<li>VsCode</li>`

btnAddDevToolsBack.addEventListener("click", () => {
    newDevToolsBack = newDevToolsBack + `<li>${inputDevToolsBack.value}</li>`
    backEndDevToolsList.innerHTML = newDevToolsBack
})
const avatarImg = document.getElementById('avatar');

    avatarImg.addEventListener('click', function() {
      avatarImg.src = "image/avatar.svg";
    });

    // document.getElementById("modifyButton").addEventListener("click", function() {
    //     const newName = prompt("Entrez votre nom :");
        
    
    //     if (newName !== null && newColor !== null) {
    //         document.getElementById("text").innerText = newName;
    //         document.getElementById("text").style.color = newColor;
    //     }
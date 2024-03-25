let changeAvatar=document.getElementsByClassName('avatar')[0];
changeAvatar.onclick=function(){
    this.src="image/avatar.svg";
}


let button=document.getElementById('changeName');

button.onclick=function(){
    let name=document.getElementById('firstname');
    let changeColor=document.getElementById('changeColor');
    let color=prompt('change color');
    changeColor.style.backgroundColor=color;
let change=prompt('your name');
name.innerHTML=change;
name.style.color="white";

}
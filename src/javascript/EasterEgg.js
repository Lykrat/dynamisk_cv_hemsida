var body;
var button;

body=document.querySelector('body');
button=document.querySelector('span');
function changeColor(){
    body.style.background="darkred";
}
function hoverEnter(){
    button.style.color="darkred";
}
function hoverExit(){
    button.style.color="rgb(255, 255, 255,0.65)"
}

button.onmouseenter=hoverEnter;
button.onmouseleave=hoverExit;
button.onclick=changeColor;

let code1=0;
let code2=0;
let code3=0;
let code4=0;
//Keydown listener
let easterEgg = (evt) => {
    console.log(evt)
    if(evt.keyCode==49 && code1==0){
        code1=1;
        console.log("Stage 1")
    }
    else if(evt.keyCode==51 && code2==0 && code1==1){
        code2=1;
        console.log("Stage 2")
    }
    else if(evt.keyCode==51 && code2==1 && code3==0){
        code3=1;
        console.log("Stage 3")
    }
    else if(evt.keyCode==55 && code4==0 && code3==1){
        code4=1;
        Popup();
        console.log("U Made it")
    }
    else if(evt.keyCode==49 && code1==1){
        code2=0;
        code3=0;
        code4=0;
    }
    else{
        code1=0;
        code2=0;
        code3=0;
        code4=0;
    }
}

document.querySelector("body").addEventListener("keydown", easterEgg);

//Modal popup
var newEasterEgg= document.createElement("dialog");
newEasterEgg.className="popup";
var text=document.createTextNode("You found the secret code");
const newLine=document.createElement("br");
var closeButton=document.createElement("button");
closeButton.innerText="Close";
newEasterEgg.appendChild(text);
newEasterEgg.appendChild(newLine)
newEasterEgg.appendChild(closeButton);

function Popup(){
    document.body.appendChild(newEasterEgg);
    newEasterEgg.showModal();
    closeButton.onclick=removePopup
}

function removePopup(){
    newEasterEgg.remove();
}
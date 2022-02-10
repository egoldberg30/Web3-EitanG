import {burgerTL} from "./burgerAnimation";

var burgerButton = document.querySelector("#hamburger_icon");
let canISeeMenu = false;

function openCloseMenu(){
    if(canISeeMenu === false){
        burgerTL.play();
        // menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        // menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);


let navButtons = document.querySelectorAll(".nav-links");

for (const button of navButtons){
    // button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}
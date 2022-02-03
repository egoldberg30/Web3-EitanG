import {getbigger, slideInLeft} from "./scrollAnimation.js"
import {burgermenuTL} from "./burgeranimation.js"
import {mobile_menu_animation} from "./mobilemenu.js"
import {scrolltosection} from "./scrolltosections.js"
import {displayWindowSize} from "./windowresizing.js"
import {gsap} from "gsap";


window.addEventListener('load', function(){
    let animationElements = ["#history-first h4", "#history-last"];
    let triggerElements = ["#history-first h4", "#history-last"];
    let growingElements = ["#history-first h1"];

{slideInLeft(triggerElements[0], animationElements[0]);}
{slideInLeft(triggerElements[1], animationElements[1]);}
{getbigger("#history-first", growingElements);}
});


var burgerButton = document.querySelector("#burger-container");
burgerButton.addEventListener("click", open_close_menu);
let navLinks = document.querySelectorAll(".nav-links");

for (const button of navLinks){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", open_close_menu);
}


let menu = document.querySelector("#nav-container");
let menu_width = menu.offsetWidth;
let canISeeMenu = false;


function open_close_menu(){
    if(menu_width <= 1024){
    
        function open_close_menu2(){
        if(canISeeMenu === false){
            // CAN'T see the menu -> turn burger into X
            burgermenuTL.play();
            mobile_menu_animation.play();
            gsap.set("#nav-container",{x:menu_width});
            canISeeMenu = true;
        }else{
            // CAN see the menu -> turn X into burger
            burgermenuTL.reverse();
            mobile_menu_animation.reverse();
            // gsap.set("#nav-container",{x:0});
            canISeeMenu = false;
        }
        
        }
    }
}  


function checkScrolling(e) {
    // depending on the link clicked, go to that section
    const indexValue = [].indexOf.call(navLinks, e.target)
    if (indexValue != -1) {
        scrolltosection(indexValue);
    }
}


//check the window size on load
window.addEventListener('load', displayWindowSize);

// //listen to window resizing function
// window.addEventListener("resize", displayWindowSize);
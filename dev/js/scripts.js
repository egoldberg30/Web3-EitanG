import {getbigger, slideInLeft} from "./scrollAnimation.js"

window.addEventListener('load', function(){

    let animationElements = ["#history-first h4", "#history-last"];
    let triggerElements = ["#history-first h4", "#history-last"];
    let growingElements = ["#history-first h1"];

{slideInLeft(triggerElements[0], animationElements[0]);}
{slideInLeft(triggerElements[1], animationElements[1]);}
{getbigger("#history-first", growingElements);}
});
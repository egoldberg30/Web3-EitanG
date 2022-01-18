// import { skillsTrigger } from "./scrollAnimation.js"

// import { slideInRight, slideInLeft, getbigger} from "./scrollAnimation.js"
import {getbigger, slideInLeft} from "./scrollAnimation.js"



window.addEventListener('load', function(){

    // let triggerElements = ["#history-middle","#history-first", "#skills-content"];

    // let animationElements =["#history-middle p","#robot-profile", "#skills-content h1"];

    let animationElements = ["#history-first h4", "#history-last"];
    let growingElements =["#history-first h1"];
        
// {slideInLeft(triggerElements, animationElements);}
// {slideInRight(triggerElements, animationElements);}
{slideInLeft(animationElements, animationElements);}
{getbigger("#history-first", growingElements);}
});
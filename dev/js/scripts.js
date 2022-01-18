// import { skillsTrigger } from "./scrollAnimation.js"

import { slideInRight, slideInLeft} from "./scrollAnimation.js"


window.addEventListener('load', function(){

    let triggerElements = ["#history-middle","#history-first", "#skills-content"];

    let animationElements =["#history-middle p","#robot-profile", "#skills-content h1"];
        
{slideInLeft(triggerElements[i], animationElements[i]);}
{slideInRight(triggerElements[i], animationElements[i]);}
});
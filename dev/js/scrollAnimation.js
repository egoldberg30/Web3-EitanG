import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function slideInLeft(triggerElement,animationElement){
    const tl = new gsap.timeline();
    tl.from(animationElement,{
        duration:1,
        alpha:0,
        x: 450,
        scrollTrigger:{
              // markers:true,
            trigger: triggerElement,
            scrub:true,
            toggleActions: "restart none resume none"
        }
    });
}

export function getbigger(triggerElement,animationElement){
    const tl = new gsap.timeline();
    tl.from(animationElement,{
        duration:1,
        alpha:0,
        scale:0,
        scrollTrigger:{
              // markers:true,
            trigger: triggerElement,
            toggleActions: "play none none none",
            scrub:true
        }
    });
}
import { gsap } from "gsap";

export const mobile_menu_animation = new gsap.timeline({paused:true});
mobile_menu_animation.to("#nav-container",{duration:0.75, y:0, x:0});
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

let idArray = ["#history","#skills","#skynet"];

export function scrolltosection(index){
    gsap.to(window, {duration: 2, scrollTo:idArray[index]});
}
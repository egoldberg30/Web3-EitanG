import {gsap} from "gsap";

export const grayHoverTL = new gsap.timeline({paused:true});
    gsap.to("graylink",{scale:2, duration:0.2});
    
export const redHoverTL = new gsap.timeline({paused:true});
    gsap.to("redlink",{scale:2, duration:0.2});

export const blueHoverTL = new gsap.timeline({paused:true});
    gsap.to("bluelink",{scale:2, duration:0.2});

export const violetHoverTL = new gsap.timeline({paused:true});
    gsap.to("violetlink",{scale:2, duration:0.2});

export const yellowHoverTL = new gsap.timeline({paused:true});
    gsap.to("yellowlink",{scale:2, duration:0.2});
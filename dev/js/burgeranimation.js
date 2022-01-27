import { gsap } from "gsap";

gsap.set(".burgerlines",{transformOrigin:"center"});

const toplineTL = new gsap.timeline();
toplineTL.to(".burgerlines:nth-child(1)",{duration:0.2, y:"+=8"})
.to(".burgerlines:nth-child(1)",{duration:0.2, rotation:45,fill:"#fff"});

const bottomlineTL = new gsap.timeline();
bottomlineTL.to(".burgerlines:nth-child(3)",{duration:0.2, y:"-=8"})
.to(".burgerlines:nth-child(3)",{duration:0.2, rotation:-45,fill:"#fff"});

const middlelineTL = new gsap.timeline();
middlelineTL.to(".burgerlines:nth-child(2)",{duration:0.2, scale:0})


export const burgermenuTL = new gsap.timeline({paused:true});

burgermenuTL.add(toplineTL,"burger")
    .add(bottomlineTL,"burger")
    .add(middlelineTL,"burger")

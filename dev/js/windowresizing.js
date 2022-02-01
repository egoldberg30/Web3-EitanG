import { gsap } from "gsap";

export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menu_width = menu.offsetWidth;

   // check the view port view and see if the menu needs to be moved
    if(document.documentElement.clientWidth <= 1024){
    gsap.set("#nav-container",{x:menu_width});
    }else{
    gsap.set("#nav-container",{x:0});
    }
}




// export function displayWindowSize(){

//     let menu = document.querySelector("#nav-container");
//     let menu_width = menu.offsetWidth;
//     let canISeeMenu = true;
    
//    // check the view port view and see if the menu needs to be moved
//    if(canIseeMenu === true){
//         if(document.documentElement.clientWidth <= 1024){
//             gsap.set("#nav-container",{x:menu_width});
//             let canISeeMenu = true;
//         }else{
//             gsap.set("#nav-container",{x:0});
//             let canISeeMenu = false;
//         }
//     }
// }
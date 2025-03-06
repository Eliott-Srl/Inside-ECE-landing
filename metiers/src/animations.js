import Lenis from 'lenis'
import "lenis/dist/lenis.css"

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const style = window.getComputedStyle(document.body);

gsap.to("#hero", {
    scrollTrigger: {
        trigger: ".page-content",
        markers: false,
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reset"
    },
    opacity: 0,
    zIndex: -2,
    duration: 0.01
})

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

// for (let button in document.getElementsByClassName("button-select")) {
//     button.addEventListener("click", (event) => {
//         if (!button.classList.contains("button-select")) {
//             button.
//         }
//     })
// }

// window.onresize = (event) => {
//     console.log("--top-spacing: px;");
//     document.documentElement.style.cssText = "--top-spacing: " + document.getElementById('hero').offsetHeight.toString() + "px;";
// }
// console.log("--top-spacing: px;");

requestAnimationFrame(raf);
import Lenis from 'lenis'
import "lenis/dist/lenis.css"

import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const style = window.getComputedStyle(document.body)

let val_entrer = parseFloat(style.getPropertyValue('--font-size')) * (parseFloat(style.getPropertyValue('--pad-1')) + parseFloat(style.getPropertyValue('--pad-2')))

const tl_rentrer = gsap.timeline({
    scrollTrigger: {
        trigger: "#bento-ctf",
        start: "top 50%",
        end: "top " + val_entrer.toString(),
        scrub: true
    }
})

tl_rentrer.to("html", {
    "--c-b-top": style.getPropertyValue('--pad-1-inverse'),
    "--c-b-left": style.getPropertyValue('--pad-1-inverse'),
    "--c-b-width": style.getPropertyValue('--pad-1'),
    "--c-b-height": style.getPropertyValue('--pad-1'),
    "--c-b-border-radius": 0
}, 0)

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

const tl_sortie = gsap.timeline({
    scrollTrigger: {
        trigger: "#metiers",
        start: "bottom 90%",
        end: "bottom 50%",
        scrub: true
    }
})

tl_sortie.to("html", {
    "--c-b-top": 0,
    "--c-b-left": 0,
    "--c-b-width": 0,
    "--c-b-height": 0,
    "--c-b-border-radius": style.getPropertyValue("--bor-rad-1")
}, 0)


const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
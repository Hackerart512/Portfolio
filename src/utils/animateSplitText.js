import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

/**
 * Animate all elements with a given class
 * @param {string} selector - CSS class to animate, e.g. ".split-animate"
 */
export function animateSplitText(selector = ".split-animate") {
    const elements = document.querySelectorAll(selector);

    elements.forEach((el) => {
        if (el.dataset.animated) return; // avoid double animation
        el.dataset.animated = "true";

        const split = new SplitText(el, { type: "chars" });

        gsap.from(split.chars, {
            y: 20, // start 20px below
            autoAlpha: 0,
            stagger: 0.05, // each letter appears sequentially
            duration: 0.6,
            ease: "power2.out",
        });
    });
}

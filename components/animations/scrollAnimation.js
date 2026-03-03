import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollAnimation = (imageRef) => {
  gsap.to(imageRef.current, {
    y: -200,
    scale: 0.9,
    scrollTrigger: {
      trigger: imageRef.current,
      start: "top center",
      end: "bottom top",
      scrub: true,
    },
  });
};
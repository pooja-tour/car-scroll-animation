import { gsap } from "gsap";

export const introAnimation = (headlineRef, statsRef) => {
  gsap.from(headlineRef.current.children, {
    opacity: 0,
    y: 40,
    stagger: 0.08,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(statsRef.current.children, {
    opacity: 0,
    y: 20,
    stagger: 0.15,
    delay: 0.5,
    duration: 0.8,
    ease: "power2.out",
  });
};
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "./Stats";

export default function Hero() {
  const section = useRef(null);
  const image = useRef(null);
  const reflection = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Intro animation
    gsap.from(section.current, {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power3.out",
    });

    // Scroll-driven cinematic motion
    gsap.to([image.current, reflection.current], {
      y: -260,
      scale: 0.9,
      rotate: -4,

      scrollTrigger: {
        trigger: section.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  // Mouse tilt interaction
  const handleMouseMove = (e) => {
    const { width, height } = section.current.getBoundingClientRect();
    const x = (e.clientX / width - 0.5) * 10;
    const y = (e.clientY / height - 0.5) * -10;

    gsap.to(image.current, {
      rotateY: x,
      rotateX: y,
      duration: 0.4,
      ease: "power2.out",
    });

    section.current.style.setProperty("--x", `${e.clientX}px`);
    section.current.style.setProperty("--y", `${e.clientY}px`);
  };

  const resetTilt = () => {
    gsap.to(image.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={section}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Light sweep */}
      <div className="light-sweep" />

      {/* Headline */}
      <h1 className="text-5xl tracking-[0.35em] uppercase z-10 mb-6">
        W E L C O M E
      </h1>

      {/* Stats */}
      <Stats />

      {/* Image + reflection */}
      <div className="absolute bottom-20 flex flex-col items-center z-10">
        <div
          ref={image}
          className="float-idle drop-shadow-[0_40px_60px_rgba(0,0,0,0.7)]"
        >
          <Image
            src="/images/car.jpg"
            alt="Hero visual"
            width={720}
            height={400}
            priority
          />
        </div>

        <div ref={reflection} className="reflection -mt-4 opacity-40">
            {/* Laptop screen container */}
<div
  ref={image}
  className="
    float-idle
    w-[1920px]
    max-w-[90vw]
    aspect-[16/10]
    relative
    rounded-2xl
    overflow-hidden
    bg-white
    drop-shadow-[0_40px_60px_rgba(0,0,0,0.25)]
  "
>
  <Image
    src="/images/car.jpg"
    alt="Laptop screen"
    fill
    priority
    className="object-contain"
  />
</div>
        </div>
      </div>
    </section>
  );
}
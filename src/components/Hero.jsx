import React from "react";
import { useRef } from "react";
import GridBackground from "./GridBackground";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
      });

      tl.from(".hero-letter", {
        x: -35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
      })
        .from(
          ".hero-image",
          {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.1",
        )
        .from(
          ".hero-tagline",
          {
            x: -25,
            opacity: 0,
            duration: 2,
          },
          "-=0.5",
        );
    },
    { scope: heroRef },
  );
  return (
    <div
      className="first relative flex min-h-[550px] justify-center overflow-hidden"
      id="home"
      ref={heroRef}
    >
      <GridBackground />

      <div className="absolute left-1/2 top-8 z-0 h-20 w-[60%] -translate-x-1/2 rounded-full bg-white/15 blur-[35px]" />

      <h1 className="hero-name absolute left-1/2 top-0 z-0 -translate-x-1/2 whitespace-nowrap text-[clamp(4rem,17vw,11rem)] font-extrabold tracking-[0.02em] text-[rgba(255,255,255,0.2)] sm:tracking-[0.05em]">
        {"EMMANUEL".split("").map((letter, index) => (
          <span className="hero-letter inline-block" key={index}>
            {letter}
          </span>
        ))}
      </h1>

      <div className="absolute left-1/2 top-1/2 z-10 h-[460px] w-full max-w-[95%] -translate-x-1/2 -translate-y-1/2 sm:h-[560px]">
        <div className="hero-image h-full w-full">
          <img
            className="h-full w-full object-contain [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
            src="/Emmanuel_Paul-(BW)-Alt.png"
            alt="Emmanuel Paul"
          />
        </div>
      </div>

      <div className="hero-tagline absolute bottom-0 left-5 sm:bottom-[25vh] sm:left-5">
        {" "}
        <h2 className="text-5xl font-black uppercase text-[rgba(255,255,255,0.65)] sm:tracking-[0.05em]  tracking-tight sm:text-6xl md:text-7xl text-shadow-gray-500">
          Full-Stack <br /> Developer
        </h2>
      </div>
    </div>
  );
};

export default Hero;

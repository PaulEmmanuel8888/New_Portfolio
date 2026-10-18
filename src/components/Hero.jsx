import React from "react";
import GridBackground from "./GridBackground";

const Hero = () => {
  return (
    <div className="first relative flex min-h-[550px] justify-center overflow-hidden">
      <GridBackground />

      <div className="absolute left-1/2 top-8 z-0 h-20 w-[60%] -translate-x-1/2 rounded-full bg-white/15 blur-[35px]" />

      <h1 className="absolute left-1/2 top-0 z-0 -translate-x-1/2 whitespace-nowrap text-[clamp(4rem,17vw,11rem)] font-extrabold tracking-[0.02em] text-[rgba(255,255,255,0.2)] sm:tracking-[0.05em]">
        EMMANUEL
      </h1>

      <div className="absolute left-1/2 top-1/2 z-10 h-[460px] w-full max-w-[95%] -translate-x-1/2 -translate-y-1/2 sm:h-[560px]">
        <img
          className="h-full w-full object-contain [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]"
          src="/Emmanuel_Paul-(BW)-Alt.png"
          alt="Emmanuel Paul"
        />
      </div>

      <div className="absolute bottom-0 left-5  sm:bottom-[25vh] sm:left-5">
        <h2 className="text-5xl font-black uppercase text-[rgba(255,255,255,0.65)] sm:tracking-[0.05em]  tracking-tight sm:text-6xl md:text-7xl text-shadow-gray-500">
          Full-Stack <br /> Developer
        </h2>
      </div>
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 5,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center pt-22 justify-center relative overflow-hidden">
        {/* Background elements (unchanged) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-400/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-neutral-500/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-0.5 bg-neutral-600/15"></div>
        </div>

        <div className="text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto relative z-10">
          {/* MAIN HEADING */}
          <div
          
            style={{
              fontFamily: "karatone, sans-serif",
              lineHeight: 1,
              letterSpacing: "0.03em",
            }}
            className="
              text-neutral-800 
              text-[60px] 
              xs:text-[80px]
              sm:text-[120px]
              md:text-[150px] 
              lg:text-[180px] leading-none
            "
          >
            <div className="overflow-hidden">
              <span className="block">Go Above</span>
            </div>
            <div className="overflow-hidden">
              <span className="block">And Beyond</span>
            </div>
          </div>

          {/* SEPARATOR */}
          <div className="flex items-center justify-center my-6 sm:my-10 md:my-12">
            <div className="w-8 sm:w-10 md:w-12 h-px bg-neutral-400/60"></div>
            <div className="w-2 h-2 border border-neutral-400/60 rounded-full mx-3 sm:mx-4"></div>
            <div className="w-8 sm:w-10 md:w-12 h-px bg-neutral-400/60"></div>
          </div>

          {/* SUBTITLE */}
          <p
            style={{
              fontFamily: "karatone, sans-serif",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
            }}
            className="
              text-neutral-600
              text-[clamp(14px,4vw,24px)]
              max-w-3xl mx-auto
              tracking-tight 
              mb-8 sm:mb-10 md:mb-12
            "
          >
            Where artistic vision meets exceptional craftsmanship in every
            curated piece
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8 sm:mt-12 md:mt-16">
            <button
              className="
                group relative overflow-hidden 
                border border-neutral-800 
                px-8 py-3 
                sm:px-10 sm:py-4 
                text-neutral-800 
                text-base sm:text-lg 
                font-light tracking-wider 
                transition-all duration-500 
                hover:bg-neutral-800 hover:text-white
              "
              style={{ fontFamily: "karatone, sans-serif" }}
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-neutral-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 sm:mt-12">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-neutral-500 text-xs tracking-widest uppercase">
              Scroll
            </span>
          </div>
        </div>
      </div>

      <About />
    </>
  );
};

export default Hero;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./About"; // Assuming 'About' component exists

// Register the ScrollTrigger plugin once globally
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // 1. Create a ref for the element to animate
  const headingRef = useRef(null);

  useEffect(() => {
    // 2. Setup the GSAP animation once the component mounts
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        y: 150, // Moves the element down 150 pixels as the user scrolls
        ease: "none",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top top", // Start when the top of the element hits the top of the viewport
          end: "bottom top", // End when the bottom of the element leaves the top of the viewport
          scrub: 5, // Links the animation to the scroll position smoothly (0.5 adds a slight "lag" for smoothness)
        },
      });
    }

    // Cleanup function: Kills ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* The main container for the Hero section */}
      <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Subtle background elements for premium feel */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/5"></div>

          {/* Minimal geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-neutral-400/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-neutral-500/20 rounded-full"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-0.5 bg-neutral-600/15"></div>
        </div>

        <div className="text-center px-8 max-w-6xl mx-auto relative z-10">
          {/* Main heading with enhanced typography */}
          {/* 3. Attach the ref here to apply the parallax effect */}
          <div
            // ref={headingRef}
            style={{
              fontFamily: "karatone, sans-serif",
              lineHeight: 1,
              letterSpacing: "0.03em",
            }}
            className="text-neutral-800 text-[180px] leading-none"
          >
            <div className="overflow-hidden">
              <span className="block transform transition-all duration-700 ">
                Go Above
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="block transform transition-all duration-700 ">
                And Beyond
              </span>
            </div>
          </div>

          {/* Decorative separator */}
          <div className="flex items-center justify-center my-12">
            <div className="w-12 h-px bg-neutral-400/60"></div>
            <div className="w-2 h-2 border border-neutral-400/60 rounded-full mx-4"></div>
            <div className="w-12 h-px bg-neutral-400/60"></div>
          </div>

          {/* Enhanced subtitle */}
          <p
            style={{
              fontFamily: "karatone, sans-serif",
              lineHeight: 1.2,
              letterSpacing: "0.01em",
            }}
            className="text-neutral-600 text-[clamp(18px,2vw,28px)] max-w-4xl mx-auto tracking-tight mb-12"
          >
            Where artistic vision meets exceptional craftsmanship in every
            curated piece
          </p>

          {/* CTA Button */}
          <div className="mt-16">
            <button
              className="group relative overflow-hidden border border-neutral-800 px-12 py-4 text-neutral-800 text-lg font-light tracking-wider transition-all duration-500 hover:bg-neutral-800 hover:text-white"
              style={{ fontFamily: "karatone, sans-serif" }}
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-neutral-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="">
          <div className="flex flex-col mt-12 items-center space-y-2">
            <span className="text-neutral-500 text-xs tracking-widest uppercase">
              Scroll
            </span>
          </div>
        </div>
      </div>

      {/* The following section provides content for scrolling against */}
      <About />
    </>
  );
};

export default Hero;

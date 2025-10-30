import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import paintings from "../utils/paintings";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(".painting-panel");
    const scrollLength = container.scrollWidth * 1.2;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 4,
        anticipatePin: 1,
        end: () => "+=" + scrollLength,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center bg-transparent backdrop-blur-0 min-h-screen overflow-hidden"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {paintings.map(({ id, image, title, description, artist }) => (
        <div
          key={id}
          className="painting-panel flex-shrink-0 w-screen h-[700px] flex items-center justify-center px-8 lg:px-16"
        >
          <div className="flex bg-gradient-to-br from-slate-100 to-stone-300 p-10 flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-7xl w-full">
            {/* Artwork Container */}
            <div className="relative flex-1 flex justify-center items-center">
              <div className="relative group inline-block">
                {/* Premium Frame Effect - auto width (image + 10px) */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[calc(100%+10px)] h-[calc(100%+10px)]
                    bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 
                    rounded-2xl shadow-2xl transition-all duration-700 ease-out"
                ></div>

                {/* Subtle Inner Layer */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[calc(100%+10px)] h-[calc(100%+10px)] 
                    bg-stone-800/5 rounded-xl backdrop-blur-sm"
                ></div>

                {/* Main Painting */}
                <img
                  src={image}
                  alt={title}
                  className="relative max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl 
                 transform transition-all duration-700 ease-out"
                />

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-200/10 via-transparent to-stone-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Content Panel */}
            <div className="flex-1 max-w-md lg:max-w-lg text-left space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-light text-stone-800 tracking-wide leading-tight">
                  {title}
                </h2>

                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-600 to-stone-600 rounded-full"></div>

                <p className="text-stone-600 text-lg lg:text-xl leading-relaxed font-light tracking-wide">
                  {description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/60">
                <p className="text-stone-500 text-base font-medium tracking-wider uppercase letter-spacing-wider">
                  <span className="text-amber-600/80 font-semibold">—</span>{" "}
                  {artist}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="flex items-center gap-3 pt-4">
                <div className="w-3 h-3 rounded-full bg-amber-600/20"></div>
                <div className="w-12 h-px bg-gradient-to-r from-amber-600/40 to-transparent"></div>
                <div className="text-xs text-stone-400 font-light tracking-widest uppercase">
                  Masterpiece
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;

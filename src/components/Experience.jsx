import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sketch from '../assets/paintings/sketch.jpg'

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Animate paragraphs & headings
      gsap.from(".fade-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      // Desktop ONLY: pin left side
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      //  ref={sectionRef}
      className="h-screen relative max-md:h-auto"
    >
      {/* LEFT SIDE — unchanged on desktop */}
      <div className="absolute bottom-5 left-5 max-md:static max-md:text-center">
        <h1
          style={{
            fontFamily: "karatone, sans-serif",
            lineHeight: 1,
            letterSpacing: "0.03em",
          }}
          className="text-neutral-800 text-[180px] leading-none max-lg:text-[120px] max-md:text-[40px]"
        >
          Essence of <span className="md:hidden">Visual</span>
        </h1>

        <h1
          style={{
            fontFamily: "karatone, sans-serif",
            lineHeight: 1,
            letterSpacing: "0.03em",
          }}
          className="text-neutral-800 text-[180px] leading-none 
             max-lg:text-[120px] max-md:text-[40px] pt-2 md:pt-0 flex justify-center  gap-5"
        >
          {/* “Visual” — laptop only */}
          <span className="hidden md:inline-block">Visual</span>

          {/* “Storytelling” — always visible */}
          <span>Storytelling</span>
        </h1>
      </div>

      {/* RIGHT SCROLLING CONTENT */}
      <div className=" max-xl:right-10 px-10 flex max-lg:right-5 max-md:static">
        <div
          // ref={contentRef}
          className=" overflow-y-scroll w-2/3 p-5 
                     max-lg:w-[600px] max-md:w-full max-md:h-auto max-md:overflow-visible"
        >
          <div style={{ fontFamily: "karatone" }}>
            {/* SECTION 1 */}
            <h1 className="fade-item font-medium text-xl py-5 max-md:text-lg">
              The Essence of Visual Storytelling
            </h1>

            <p className="fade-item pb-5 text-justify text-[15px] max-md:text-base">
              Paintings have always been a timeless form of expression a
              language without words. Every brushstroke carries intention,
              emotion, and a whisper from the artist's world. From contemporary
              abstractions to classical realism, each canvas preserves a moment
              of thought, transforming imagination into something the eye can
              feel. These works invite viewers to pause, observe, and experience
              the silent dialogue between colour, texture, and light.
            </p>

            {/* SECTION 2 */}
            <h1 className="fade-item font-medium text-xl py-5 max-md:text-lg">
              The Value of Antique Art & Cultural Heritage
            </h1>

            <p className="fade-item pb-5 text-justify text-[15px] max-md:text-base">
              Antique art pieces hold more than aesthetic beauty they embody
              centuries of culture, craftsmanship, and tradition. Every
              sculpture, carved wooden frame, or hand-woven tapestry carries the
              fingerprints of a past era. These rare objects not only showcase
              the evolution of human creativity but also remind us of how
              artistry has shaped societies across history. Their aged surfaces,
              subtle imperfections, and preserved details speak of journeys far
              older than our own. <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit pariatur dolores dignissimos impedit eum odio, quasi, natus voluptates necessitatibus molestiae! Dolore fuga excepturi officia repellendus ipsam culpa, rem iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sit, molestiae eveniet labore mollitia earum ut magnam aspernatur animi provident.
            </p>
          </div>
        </div>
        <div className="w-1/3 hidden justify-center items-center md:flex">
          <div className="p-3 border">
            <img
              className=" h-110 border"
              src={sketch}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

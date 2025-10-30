import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../assets/paintings/paint20.jpg";

gsap.registerPlugin(ScrollTrigger);

const AreWeWorking = () => {
  const horizontalSectionRef = useRef(null);
  const horizontalContentRef = useRef(null);
  const mainTextContentRef = useRef(null);

  useEffect(() => {
    const horizontalSection = horizontalSectionRef.current;
    const horizontalContent = horizontalContentRef.current;
    const mainTextContent = mainTextContentRef.current;

    if (!horizontalSection || !horizontalContent || !mainTextContent) return;

    const scrollWidth = horizontalContent.scrollWidth - window.innerWidth;
    const mainTextScrollWidth = mainTextContent.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalSection,
        start: "top top",
        end: `+=${scrollWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // slower scroll for main text (50% of content speed)
    tl.to(horizontalContent, {
      x: -scrollWidth,
      ease: "none",
    }).to(
      mainTextContent,
      {
        x: -mainTextScrollWidth * 0.5,
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="h-screen">
      <section
        ref={horizontalSectionRef}
        className="h-screen overflow-hidden relative"
      >
        {/* Horizontal Scroll Section */}
        <div
          ref={horizontalContentRef}
          className="flex h-screen items-center whitespace-nowrap"
        >
          <div className="flex-shrink-0  w-screen flex justify-center items-center gap-20 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 text-left text-4xl max-w-3xl flex-shrink-0 whitespace-normal "
            >
              I've been designing for 17 years. My background in art and
              technology allows me to flexibly manage the product development
              process. I've led design teams, building bridges between
              stakeholders, users, and team members.
            </h2>
            <img className="h-110 flex-shrink-0" src={img} alt="art" />
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center items-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 text-5xl max-w-3xl flex-shrink-0 whitespace-normal text-center"
            >
              My focus is on building digital experiences that feel natural,
              intuitive, and visually balanced. I believe design is not just
              about aesthetics — it’s about creating meaning through form and
              function.
            </h2>
            <img className="h-110 flex-shrink-0" src={img} alt="art" />
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center items-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 text-5xl max-w-3xl flex-shrink-0 whitespace-normal text-center"
            >
              Over the years, I’ve collaborated with global brands and startups
              to create memorable product experiences. Every project begins with
              empathy — understanding the human at the center of it all.
            </h2>
            <img className="h-110 flex-shrink-0" src={img} alt="art" />
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center items-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 text-5xl max-w-3xl flex-shrink-0 whitespace-normal text-center"
            >
              My creative journey continues to evolve with every idea, every
              sketch, and every iteration. Design, for me, is an endless
              conversation between curiosity and creation.
            </h2>
            <img className="h-110 flex-shrink-0" src={img} alt="art" />
          </div>
        </div>

        {/* Main Text — scrolls slower */}
        <div className="absolute bottom-5 left-0 w-full z-50 overflow-hidden">
          <div ref={mainTextContentRef} className="flex whitespace-nowrap">
            <h1
            style={{
                fontFamily:"karatone",
                lineHeight:1,
            }}
            className="text-[150px] font-bold text-neutral-800 inline-block ml-[100px] mr-20">
             We create Experience that tells a Story
            </h1>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreWeWorking;

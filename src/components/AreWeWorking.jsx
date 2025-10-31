import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/paintings/paint20.jpg";
import img2 from "../assets/paintings/paint17.jpg";
import img3 from "../assets/paintings/paint11.jpg";
import img4 from "../assets/paintings/paint18.jpg";
import Side from "./Side";

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
        scrub: 4,
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
        x: -mainTextScrollWidth * 1,
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
          <div className="flex-shrink-0  w-screen flex justify-center gap-20 px-16 pb-70">
            <div>
              <h1 style={{ fontFamily: "caesar" }} className="text-5xl pt-5">
                WHAT we DO?
              </h1>
              <h2
                style={{ fontFamily: "karatone" }}
                className="text-neutral-700 pt-15 text-left text-4xl max-w-3xl flex-shrink-0 whitespace-normal "
              >
                I've been designing for 17 years. My background in art and
                technology allows me to flexibly manage the product development
                process. I've led design teams, building bridges between
                stakeholders, users, and team members.
              </h2>
            </div>
            <div className="p-3 border">
              <img
                className="h-110 p-3 border flex-shrink-0"
                src={img1}
                alt="art"
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 pt-15 text-left text-4xl max-w-3xl flex-shrink-0 whitespace-normal "
            >
              I've been designing for 17 years. My background in art and
              technology allows me to flexibly manage the product development
              process. I've led design teams, building bridges between
              stakeholders, users, and team members.
            </h2>
            <div className="p-3 border">
              <img
                className="h-110 p-3 border flex-shrink-0"
                src={img2}
                alt="art"
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 pt-15 text-left text-4xl max-w-3xl flex-shrink-0 whitespace-normal "
            >
              I've been designing for 17 years. My background in art and
              technology allows me to flexibly manage the product development
              process. I've led design teams, building bridges between
              stakeholders, users, and team members.
            </h2>
            <div className="p-3 border">
              <img
                className="h-110 p-3 border flex-shrink-0"
                src={img3}
                alt="art"
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 pt-15 text-left text-4xl max-w-3xl flex-shrink-0 whitespace-normal "
            >
              I've been designing for 17 years. My background in art and
              technology allows me to flexibly manage the product development
              process. I've led design teams, building bridges between
              stakeholders, users, and team members.
            </h2>
            <div className="p-3 border">
              <img
                className="h-110 p-3 border flex-shrink-0"
                src={img4}
                alt="art"
              />
            </div>
          </div>

          <div className="flex-shrink-0 w-screen flex justify-center gap-16 px-16 pb-70">
            <h2
              style={{ fontFamily: "karatone" }}
              className="text-neutral-700 pt-15 text-left text-4xl max-w-3xl flex-shrink-0 whitespace-normal "
            >
              I've been designing for 17 years. My background in art and
              technology allows me to flexibly manage the product development
              process. I've led design teams, building bridges between
              stakeholders, users, and team members.
            </h2>
          </div>
        </div>

        {/* Main Text — scrolls slower */}
        <div className="absolute bottom-5 left-0 w-full z-50 overflow-hidden">
          <div ref={mainTextContentRef} className="flex whitespace-nowrap">
            <h1
              style={{
                fontFamily: "karatone",
                lineHeight: 1,
              }}
              className="text-[150px] font-bold text-neutral-800 inline-block ml-[100px]"
            >
              We create Experience that tells a Story
            </h1>
          </div>
        </div>
      </section>
      <Side />
    </div>
  );
};

export default AreWeWorking;

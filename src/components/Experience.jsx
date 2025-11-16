import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExperienceTexts from "./ExperienceTexts";
import { FaPenNib } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  // Add ref to each text element
  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  // Split text into span-wrapped characters for a specific element
  const splitTextToSpans = (text, className = "") => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        ref={addToRefs}
        className={`inline-block opacity-0 translate-y-3 ${className}`}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  // Split paragraph text with proper word wrapping
  const splitParagraphToSpans = (text) => {
    const words = text.split(" ");
    return words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block mr-1">
        {word.split("").map((char, charIndex) => (
          <span
            key={`${wordIndex}-${charIndex}`}
            ref={addToRefs}
            className="inline-block opacity-0 translate-y-3"
          >
            {char}
          </span>
        ))}
        {wordIndex < words.length - 1 && "\u00A0"}
      </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all text spans in the scroll box
      gsap.to(textRefs.current, {
        opacity: 1,
        y: 0,
        color: "#111111",
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="h-screen relative">
      <div className="absolute bottom-5 left-5">
        <div className="border-t-2 w-[670px] pb-10"></div>
        <h1
          style={{
            fontFamily: "karatone, sans-serif",
            lineHeight: 1,
            letterSpacing: "0.03em",
          }}
          className="text-neutral-800 text-[200px] leading-none"
        >
          Strategy
        </h1>
        <h1
          style={{
            fontFamily: "karatone, sans-serif",
            lineHeight: 1,
            letterSpacing: "0.03em",
          }}
          className="text-neutral-800 text-[250px] leading-none"
        >
          Experience
        </h1>
      </div>

      {/* SCROLL BOX ON THE RIGHT */}
      <div className="absolute top-20 right-20">
        <div className="h-[600px] overflow-y-scroll w-[800px] p-5 text-justify">
          <div style={{ fontFamily: "karatone" }}>
            {/* SECTION 1 */}
            <h1 className="flex items-center font-medium text-xl py-5 gap-3">
        
              <span>
                {splitTextToSpans("The Essence of Visual Storytelling")}
              </span>
            </h1>
            <p className="pb-5">
              {splitParagraphToSpans(
                "Paintings have always been a timeless form of expression — a language without words. Every brushstroke carries intention, emotion, and a whisper from the artist's world. From contemporary abstractions to classical realism, each canvas preserves a moment of thought, transforming imagination into something the eye can feel. These works invite viewers to pause, observe, and experience the silent dialogue between colour, texture, and light."
              )}
            </p>

            {/* SECTION 2 */}
            <h1 className="flex items-center font-medium text-xl py-5 gap-3">
         
              <span>
                {splitTextToSpans(
                  "The Value of Antique Art & Cultural Heritage"
                )}
              </span>
            </h1>
            <p className="pb-5">
              {splitParagraphToSpans(
                "Antique art pieces hold more than aesthetic beauty — they embody centuries of culture, craftsmanship, and tradition. Every sculpture, carved wooden frame, or hand-woven tapestry carries the fingerprints of a past era. These rare objects not only showcase the evolution of human creativity but also remind us of how artistry has shaped societies across history. Their aged surfaces, subtle imperfections, and preserved details speak of journeys far older than our own."
              )}
            </p>

            {/* SECTION 3 */}
            <h1 className="flex items-center font-medium text-xl py-5 gap-3">
       
              <span>
                {splitTextToSpans(
                  "Connecting Modern Design With Historic Artistry"
                )}
              </span>
            </h1>
            <p>
              {splitParagraphToSpans(
                "Blending contemporary design with antique and classical artworks creates a compelling visual experience. It allows the viewer to see how history informs modern aesthetics. This interplay between the old and the new brings character, depth, and storytelling into any space — turning interiors into curated narratives rather than mere living environments."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

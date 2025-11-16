import React from "react";
import ExperienceTexts from "./ExperienceTexts";
import { FaPenNib } from "react-icons/fa6";
const Experience = () => {
  return (
    <div className="h-screen relative">
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
                 <FaPenNib className="text-xl text-neutral-900" />
                 <span>The Essence of Visual Storytelling</span>
               </h1>
               <p className="pb-5">
                 Paintings have always been a timeless form of expression — a language
                 without words. Every brushstroke carries intention, emotion, and a
                 whisper from the artist’s world. From contemporary abstractions to
                 classical realism, each canvas preserves a moment of thought,
                 transforming imagination into something the eye can feel. These works
                 invite viewers to pause, observe, and experience the silent dialogue
                 between colour, texture, and light.
               </p>
       
               {/* SECTION 2 */}
               <h1 className="flex items-center font-medium text-xl py-5 gap-3">
                 <FaPenNib className="text-xl text-neutral-900" />
                 <span>The Value of Antique Art & Cultural Heritage</span>
               </h1>
               <p className="pb-5">
                 Antique art pieces hold more than aesthetic beauty — they embody
                 centuries of culture, craftsmanship, and tradition. Every sculpture,
                 carved wooden frame, or hand-woven tapestry carries the fingerprints
                 of a past era. These rare objects not only showcase the evolution of
                 human creativity but also remind us of how artistry has shaped
                 societies across history. Their aged surfaces, subtle imperfections,
                 and preserved details speak of journeys far older than our own.
               </p>
       
               {/* SECTION 3 */}
               <h1 className="flex items-center font-medium text-xl py-5 gap-3">
                 <FaPenNib className="text-xl text-neutral-900" />
                 <span>Connecting Modern Design With Historic Artistry</span>
               </h1>
               <p>
                 Blending contemporary design with antique and classical artworks
                 creates a compelling visual experience. It allows the viewer to see
                 how history informs modern aesthetics. This interplay between the old
                 and the new brings character, depth, and storytelling into any space —
                 turning interiors into curated narratives rather than mere living
                 environments.
               </p>
             </div>
           </div>
      </div>
    </div>
  );
};

export default Experience;

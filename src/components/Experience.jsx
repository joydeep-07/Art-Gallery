import React from "react";
import ExperienceTexts from "./ExperienceTexts";

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
        <ExperienceTexts/>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";
import image from '../assets/images/design.png'
const Design = () => {
  return (
    <div className="flex justify-center items-start mt-30 min-h-screen">
      <div className="w-7xl p-5 flex flex-col justify-center items-center">
        <h1
          style={{ fontFamily: "karatone", lineHeight: 1.1 }}
          className="text-center text-6xl"
        >
          Perhaps the only freedom <br /> we have is the freedom to <br />
          choose what we pay <br />
          attention to.
        </h1>

        <h3
         
          className="text-sm text-center mt-30"
        >
          Maybe it's time to include this in your plan
        </h3>

        <img src={image} alt="" className="h-20 my-5 contrast-200" />

        <p className="text-center max-w-xl text-sm">
          Because in times of excess it is easy to get lost in the multitude of
          possibilities, pursue other people's goals instead of your own, and
          consequently, produce products that have no meaning.
        </p>

      </div>
    </div>
  );
};

export default Design;

import React from "react";
import paintings from "../utils/paintings";

const Gallery = () => {
  return (
    <section className="relative flex flex-col bg-transparent backdrop-blur-0 min-h-screen overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none"></div>

      {paintings.map(({ id, image, title, description, artist }) => (
        <div
          key={id}
          className="painting-panel w-full h-[850px] flex items-center justify-center px-8 lg:px-16 py-20"
        >
          <div className="flex border border-stone-200/20 rounded-2xl p-6 lg:p-10 flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl w-full  backdrop-blur-sm bg-white/20">
            {/* IMAGE SECTION */}
            <div className="flex w-full p-8 rounded-xl bg-white/30 shadow-inner">
              <div className="relative flex-1 flex justify-center items-center">
                <div className="relative group inline-block">
                  {/* Frame */}
                  <div
                    className="absolute inset-0 
                    w-[calc(100%+14px)] h-[calc(100%+14px)]
                    -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2
                    bg-gradient-to-br from-amber-50 via-stone-100 to-amber-50 
                    rounded-2xl shadow-2xl border border-stone-300/40
                    transition-all duration-700 ease-out"
                  ></div>

                  {/* Glow Layer */}
                  <div
                    className="absolute inset-0 w-[calc(100%+14px)] h-[calc(100%+14px)]
                    -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2
                    rounded-xl backdrop-blur-sm bg-stone-900/10"
                  ></div>

                  {/* Painting */}
                  <img
                    src={image}
                    alt={title}
                    className="relative max-h-[55vh] w-auto object-contain rounded-xl shadow-2xl 
                    transform transition-all duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-lg 
                    bg-gradient-to-br from-amber-200/20 via-transparent to-stone-300/20 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  ></div>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="flex-1 max-w-md lg:max-w-xl text-left space-y-8 lg:space-y-10 ml-10">
                {/* Title & Subtitle */}
                <div className="space-y-3">
                  <h2 className="text-5xl lg:text-6xl font-light text-stone-900 tracking-wide leading-tight">
                    {title}
                  </h2>

                  <p className="text-stone-500 text-sm tracking-widest uppercase">
                    A Signature Expression of Timeless Art
                  </p>

                  <div className="w-20 h-0.5 bg-gradient-to-r from-amber-600 to-stone-600 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-stone-700 text-lg lg:text-xl leading-relaxed font-light tracking-wide">
                  {description}
                </p>

                {/* Extra Premium Text */}
                <p className="text-stone-600 text-base leading-relaxed">
                  Every brushstroke reveals a dialogue between emotion and form
                  — a moment captured in silence, yet speaking louder than
                  words. This artwork stands as a testament to the artist’s
                  unwavering dedication to detail, harmony, and visual poetry.
                </p>

                {/* Quote */}
                <div className="bg-stone-100/60 border-l-4 border-amber-600/70 p-4 rounded">
                  <p className="text-sm italic text-stone-500">
                    “Art is the journey of a free soul — painted with truth,
                    emotion, and light.”
                  </p>
                </div>

                {/* Artist */}
                <div className="pt-4 border-t border-stone-200/60">
                  <p className="text-stone-500 text-base font-medium tracking-wider uppercase">
                    <span className="text-amber-600/80 font-semibold">—</span>{" "}
                    {artist}
                  </p>
                </div>

                {/* Meta Tag */}
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-3 h-3 rounded-full bg-amber-600/20"></div>
                  <div className="w-12 h-px bg-gradient-to-r from-amber-600/40 to-transparent"></div>
                  <div className="text-xs text-stone-400 font-light tracking-widest uppercase">
                    Premium Collection
                  </div>
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

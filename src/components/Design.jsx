import React from "react";
import image from "../assets/images/design.png";
const Design = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-30 mt-10 md:min-h-screen">
      <div className="w-full max-w-7xl p-5 flex flex-col justify-center items-center">
        <h1
          style={{ fontFamily: "karatone", lineHeight: 1.1 }}
          className="text-center text-3xl md:text-6xl"
        >
          Perhaps the only freedom <br /> we have is the freedom to <br />
          choose what we pay <br />
          attention to.
        </h1>

        <h3 className="text-sm text-center mt-10 md:mt-30">
          Maybe it's time to include this in your plan
        </h3>

        <img src={image} alt="" className="h-16 md:h-20 my-5 contrast-200" />

        <p className="text-center max-w-xl text-sm">
          Because in times of excess it is easy to get lost in the multitude of
          possibilities, pursue other people's goals instead of your own, and
          consequently, produce products that have no meaning.
        </p>
      </div>

      <div className="w-7xl hidden md:flex mt-20 rounded-2xl p-10 ">
        <div className="main flex w-full gap-10">
          {/* LEFT */}
          <div className="w-1/3 h-[90vh] flex flex-col justify-between">
            {/* box 1 */}
            <div className="text-right py-6 border-t border-neutral-300">
              <h1
                style={{ fontFamily: "continental" }}
                className="text-2xl font-medium pb-2 text-neutral-900"
              >
                What do you need it for?
              </h1>
              <p className="text-sm leading-relaxed text-neutral-600">
                Let's talk about the challenges: <br /> yours and your project's
              </p>
            </div>

            {/* box 2 */}
            <div className="text-right py-6 border-t border-neutral-300">
              <h1
                style={{ fontFamily: "continental" }}
                className="text-2xl font-medium pb-2 text-neutral-900"
              >
                What change do you expect?
              </h1>
              <p className="text-sm leading-relaxed text-neutral-600">
                Let's choose the value and quality <br /> measures that support
                your project.
              </p>
            </div>

            {/* box 3 */}
            <div className="text-right py-6 border-t border-neutral-300">
              <h1
                style={{ fontFamily: "continental" }}
                className="text-2xl font-medium pb-2 text-neutral-900"
              >
                How and when to do it?
              </h1>
              <p className="text-sm leading-relaxed text-neutral-600">
                Let's develop a plan and select <br /> solutions that give you
                control over <br /> time, budget, and quality.
              </p>
            </div>
          </div>

          {/* CENTER — STICKY BOX */}
          <div className="w-1/3">
            <div className="sticky top-[20vh] text-center py-10 px-6 rounded-xl">
              <h1 className="uppercase tracking-wide text-neutral-700 text-sm">
                First, analysis and creation of the foundation
              </h1>
              <h1
                style={{ fontFamily: "karatone" }}
                className="text-5xl tracking-wider font-bold mt-5 leading-tight text-neutral-900"
              >
                UX Strategy
              </h1>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-1/3 h-[90vh] flex flex-col justify-between">
            {/* box 1 */}
            <div className="text-left py-6 border-t border-neutral-300">
              <h1
                style={{ fontFamily: "continental" }}
                className="text-2xl font-medium pb-2 text-neutral-900"
              >
                What do they need it for?
              </h1>
              <p className="text-sm leading-relaxed text-neutral-600">
                Let's offer value to your customers <br /> and users.
              </p>
            </div>

            {/* box 2 */}
            <div className="text-left py-6 border-t border-neutral-300">
              <h1
                style={{ fontFamily: "continental" }}
                className="text-2xl font-medium pb-2 text-neutral-900"
              >
                What will make it unique?
              </h1>
              <p className="text-sm leading-relaxed text-neutral-600">
                Let's examine whether and how it <br /> stands out on the
                market.
              </p>
            </div>

            {/* box 3 */}
            <div className="text-left py-6 border-t border-neutral-300">
              <h1
                style={{ fontFamily: "continental" }}
                className="text-2xl font-medium pb-2 text-neutral-900"
              >
                Why is this important?
              </h1>
              <p className="text-sm leading-relaxed text-neutral-600">
                Let's consider value. Let's analyze the <br /> benefits, risks,
                and costs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-7xl border p-5 mt-20 text-center uppercase">test</div> */}
    </div>
  );
};

export default Design;

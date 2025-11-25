import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/Animations/sesaw.json";
import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

const Mentoring = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center">
        {/* HERO SECTION */}
        <div className="h-screen flex gap-10 justify-center items-center max-lg:flex-col max-lg:text-center max-lg:h-auto max-lg:py-20">
          {/* LEFT – ANIMATION */}
          <div className="p-5 hidden md:flex justify-center">
            <Lottie
              animationData={animation}
              loop={true}
              autoplay={true}
              style={{ width: "350px", height: "350px" }}
              className="max-md:w-[250px] max-md:h-[250px]"
            />
          </div>

          {/* RIGHT – TEXT */}
          <div className="p-5 max-lg:flex max-lg:flex-col">
            <h1 className="uppercase text-sm md:py-3  text-left tracking-wide">
              UX Mentoring, Product Design
            </h1>

            <h1
              style={{ fontFamily: "karatone" }}
              className="text-5xl pt-5 tracking-wider font-bold leading-snug
              max-md:text-3xl max-lg:text-4xl text-left"
            >
              The world is too <br /> interesting to experience <br />
              it in one predetermined <br />
              role.
            </h1>

            <p className="text-sm hidden md:flex  my-5 max-w-xl max-lg:text-left">
              This is a quote by Pedro Almodovar. It's worth sticking it
              somewhere visible, or... giving it to someone at the right moment.
              I received it that way once.
            </p>

            <button className="px-6 py-3 mt-7 bg-neutral-800 text-[#fffceb] rounded-sm md:flex hidden hover:bg-neutral-900 transition ">
              Schedule a Meeting
            </button>

            <p className="text-sm pt-5 max-w-2xl md:hidden max-lg:text-left">
              This is a quote by Pedro Almodovar. It's worth sticking it
              somewhere visible, or... giving it to someone at the right moment.
              I received it that way once.
            </p>

            <button className="px-6 py-3 mt-10 bg-neutral-800 text-[#fffceb] rounded-sm md:hidden hover:bg-neutral-900 transition">
              Schedule a Meeting
            </button>
          </div>
        </div>

        {/* MENTORING TITLE */}
        <div className="flex h-screen justify-center items-center">
          <div className="w-full max-w-7xl">
            <h1
              style={{ fontFamily: "karatone", lineHeight: 1 }}
              className="text-[150px] text-left px-5 max-lg:text-[90px] max-md:text-[55px]"
            >
              Mentoring
            </h1>

            {/* CARDS SECTION */}
            <div className="flex mt-2 md:mt-20 max-lg:flex-col ">
              {/* LEFT CARD */}
              <div className="border-r w-1/2 p-7 md:p-7  max-lg:w-full max-lg:border-r-0 ">
                <h1
                  style={{ fontFamily: "karatone", letterSpacing: "0.05em" }}
                  className="font-semibold text-xl pb-2 text-neutral-900"
                >
                  Volunteering cooperation
                </h1>
                <p className="text-sm py-2 text-neutral-700">
                  As a volunteer, I most often work within the Dare IT project.
                  I also support individuals working on projects with social or
                  environmental impact.
                </p>

                <div>
                  <p className="text-xs py-2">Price:</p>
                  <h1
                    style={{ fontFamily: "karatone", lineHeight: 1 }}
                    className="text-5xl font-bold py-2 text-neutral-800"
                  >
                    0 INR{" "}
                    <span className="text-xl font-medium text-neutral-700">
                      / hour
                    </span>
                  </h1>
                </div>
              </div>

              {/* RIGHT CARD */}
              <div className="w-1/2 p-7 md:p-5  max-lg:w-full max-lg:border-r-0 ">
                <h1
                  style={{ fontFamily: "karatone", letterSpacing: "0.05em" }}
                  className="font-semibold text-xl pb-2 text-neutral-900"
                >
                  Commercial cooperation
                </h1>
                <p className="text-sm py-2 text-neutral-700">
                  We can work with you individually, within the framework of
                  funding or your organization's development budget.
                </p>

                <div>
                  <p className="text-xs py-2">Price:</p>
                  <h1
                    style={{ fontFamily: "karatone", lineHeight: 1 }}
                    className="text-5xl font-bold py-2 text-neutral-800"
                  >
                    499 INR{" "}
                    <span className="text-xl font-medium text-neutral-700">
                      / hour
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            {/* BOTTOM 3 TEXT BOXES */}
            <div className="md:border-t mt-5 py-7 flex max-lg:flex-col">
              <div className="w-1/3 px-5 py-3 border-r max-lg:w-full max-lg:border-r-0 ">
                <h1 className="text-neutral-700 md:p-5">
                  I work with a maximum of 2-3 people at a time. Together, we
                  determine the schedule and scope of cooperation.
                </h1>
              </div>

              <div className="w-1/3 px-5 py-3 border-r max-lg:w-full max-lg:border-r-0 ">
                <h1 className="text-neutral-700 md:p-5">
                  Mentoring can be financed by the employer or through
                  development budgets.
                </h1>
              </div>

              <div className="w-1/3 px-5 py-3 max-lg:w-full">
                <h1 className="text-neutral-700 md:p-5">
                  Single sessions or longer mentoring programs are available.
                  Ask about discounted packages.
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/*REVIEW CARDS  */}
        <div className="py-10">
          <div className="flex gap-10 justify-center w-7xl">
            <div className="w-[350px] bg-[#f8f2d8] h-100 rounded-2xl p-4 shadow-md">
              <div className="border border-dashed rounded-xl p-5 h-full flex flex-col justify-between">
                <p className="text-sm text-neutral-700 leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  exercitationem sunt nobis alias fugiat non, repudiandae,
                  sapiente, voluptatibus quis quo a rerum magni accusantium. Cum
                  voluptas voluptatem placeat eum in, ipsa minus eius odit,
                  consequatur accusamus aliquam? Velit illum sint atque amet
                  asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Eos, laboriosam. Lorem ipsum dolor sit amet.
                </p>

                {/* Profile */}
                <div className="flex gap-4 items-center mt-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-300 flex justify-center items-center shadow-inner"></div>

                  <div className="flex flex-col leading-tight">
                    <h1
                      style={{
                        fontFamily: "karatone",
                        letterSpacing: "0.05em",
                      }}
                      className="font-semibold text-sm text-neutral-900"
                    >
                      Debashis Roy
                    </h1>
                    <h3 className="text-xs text-neutral-600">
                      Senior Software Developer
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[350px] bg-[#f8f2d8] h-120 rounded-2xl p-4 shadow-md">
              <div className="border border-dashed rounded-xl p-5 h-full flex flex-col justify-between">
                <p className="text-sm text-neutral-700 leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  exercitationem sunt nobis alias fugiat non, repudiandae,
                  sapiente, voluptatibus quis quo a rerum magni accusantium. Cum
                  voluptas voluptatem placeat eum in, ipsa minus eius odit,
                  consequatur accusamus aliquam? Velit illum sint atque amet
                  asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Aliquam quae sit beatae iusto. Veritatis consectetur
                  dolores voluptatem magni doloremque! Amet laborum mollitia,
                  suscipit, magnam dicta magni perferendis praesentium
                  dignissimos reprehenderit, corporis.
                </p>

                {/* Profile */}
                <div className="flex gap-4 items-center mt-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-300 flex justify-center items-center shadow-inner"></div>

                  <div className="flex flex-col leading-tight">
                    <h1
                      style={{
                        fontFamily: "karatone",
                        letterSpacing: "0.05em",
                      }}
                      className="font-semibold text-sm text-neutral-900"
                    >
                      Prosenjit Chatterjee
                    </h1>
                    <h3 className="text-xs text-neutral-600">
                      Head of the department BCA
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] bg-[#f8f2d8] h-140 rounded-2xl p-4 shadow-md">
              <div className="border border-dashed rounded-xl p-5 h-full flex flex-col justify-between">
                <p className="text-sm text-neutral-700 leading-relaxed text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
                  exercitationem sunt nobis alias fugiat non, repudiandae,
                  sapiente, voluptatibus quis quo a rerum magni accusantium. Cum
                  voluptas voluptatem placeat eum in, ipsa minus eius odit,
                  consequatur accusamus aliquam? Velit illum sint atque amet
                  asperiores. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Illum velit vitae eius molestias labore consectetur
                  nostrum omnis maiores reiciendis quas. Lorem ipsum, dolor sit
                  amet consectetur adipisicing elit. Incidunt sequi ad dolor
                  exercitationem quis voluptatibus cumque eligendi nostrum,
                  maxime consectetur. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Tenetur, reprehenderit?
                </p>

                {/* Profile */}
                <div className="flex gap-4 items-center mt-6">
                  <div className="h-12 w-12 rounded-full bg-neutral-300 flex justify-center items-center shadow-inner"></div>

                  <div className="flex flex-col leading-tight">
                    <h1
                      style={{
                        fontFamily: "karatone",
                        letterSpacing: "0.05em",
                      }}
                      className="font-semibold text-sm text-neutral-900"
                    >
                      Elon Musk
                    </h1>
                    <h3 className="text-xs text-neutral-600">CEO Tesala</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mentoring;

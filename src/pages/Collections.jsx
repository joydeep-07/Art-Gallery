import React from "react";
import { Blogs } from "../utils/Blogs";
import Footer from "../layouts/Footer";

const Collections = () => {
  return (
    <>
      <div className="flex justify-center items-center p-5 pt-25">
        <div className="w-7xl">
          {/* -------- HEADING -------- */}
          <div>
            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1,
                letterSpacing: "0.03em",
              }}
              className="text-neutral-800 text-[50px] sm:text-[65px] md:text-[80px] leading-none"
            >
              States
            </h1>

            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1,
                letterSpacing: "0.03em",
              }}
              className="text-neutral-800 text-[55px] sm:text-[75px] md:text-[90px] leading-none"
            >
              of Matter,
            </h1>

            <p className="max-w-md text-md mt-3">
              For more design help, inspiration, and case studies, sign up for
              our newsletter (by signing up, you accept our privacy policy).
            </p>
          </div>

          {/* -------- INPUT SECTION -------- */}
          <div className="pt-7 gap-2 flex flex-col sm:flex-row w-full sm:w-auto">
            <input
              className="p-3 w-full sm:w-xl rounded-[4px] border"
              type="email"
              placeholder="Enter your email"
            />
            <button className="p-3 bg-neutral-700 text-[#fffceb] hover:bg-neutral-800 rounded-[4px] border">
              Subscribe
            </button>
          </div>

          {/* -------- NEWSLETTER GRID -------- */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {Blogs.map((item) => (
              <div key={item.id} className="transition">
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-68 border p-4 h-100 object-cover"
                  />
                </div>

                <div className="p-4">
                  <h2
                    style={{
                      fontFamily: "caesar, sans-serif",
                      lineHeight: 1,
                      letterSpacing: "0.05em",
                    }}
                    className="mt-3 text-lg sm:text-xl font-semibold pb-3"
                  >
                    {item.title}
                  </h2>

                  <p
                    style={{ lineHeight: 1.4 }}
                    className="text-sm pb-5 text-gray-600"
                  >
                    {item.description}
                  </p>

                  {/* <button className="border border-neutral-800 text-neutral-800 px-4 py-2 rounded-[4px]">
                    Read More
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Collections;

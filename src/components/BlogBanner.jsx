import React from "react";

const BlogBanner = () => {
  return (
    <div className="min-h-screen flex pb-20 flex-col items-center pt-10">
      <div className="mt-10 sm:mt-15 p-5 flex flex-col pb-15 justify-center items-center text-center">
        <h1
          style={{ fontFamily: "karatone" }}
          className="
            text-[38px]
            sm:text-[60px]
            md:text-[80px]
            lg:text-[100px]
          "
        >
          States of matter, or otherwise a blog
        </h1>

        <p
          style={{ fontFamily: "karatone" }}
          className="
            text-center 
            text-base sm:text-lg md:text-xl 
            max-w-4xl
            mt-4
          "
        >
          This text is not a recipe, but an account of everyday situations in
          which choices, small gestures and mindfulness became the foundation of
          a sensitive leadership style.
        </p>
      </div>
      {/* MAIN BANNER */}
      <div
        className="
          h-auto md:h-[500px] 
          flex flex-col md:flex-row 
          px-6 sm:px-10 md:px-25 
          text-[#fffceb] 
          bg-neutral-900
        "
      >
        {/* LEFT SIDE */}
        <div className="left w-full md:w-1/2">
          <p className="mt-6 md:mt-10 p-3 md:p-5 text-xs">
            States of matter, or otherwise a blog
          </p>

          <div className="flex flex-col sm:flex-row">
            <img
              className="h-40 sm:h-48 pr-0 sm:pr-6 mb-4 sm:mb-0"
              src="https://framerusercontent.com/images/Jq9CvZn5nyua3F6GHd8cdtsLduo.png?scale-down-to=512&width=2590&height=1884"
              alt=""
            />

            <h1
              style={{ fontFamily: "karatone", lineHeight: 1 }}
              className="
                text-[32px] 
                sm:text-[42px] 
                md:text-[50px]
              "
            >
              Sensitive <br /> leadership with a <br /> mischievous <br />{" "}
              attitude
            </h1>
          </div>

          <p className="p-3 md:p-5 mt-2 text-sm sm:text-base">
            This text is not a recipe, but an account of everyday situations in
            which choices, small gestures and mindfulness became the foundation
            of a sensitive leadership style.
          </p>

          <button className="py-2 px-5 m-3 ml-0 border rounded-full text-sm sm:text-base">
            Read More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="right w-full md:w-1/2 p-3 sm:p-6 md:p-10 md:pt-20">
          <h1
            style={{ fontFamily: "karatone", lineHeight: 1 }}
            className="
              text-[30px]
              sm:text-[38px]
              md:text-[48px]
            "
          >
            Colonoscopy and hard candy, <br />
            or how to build a good end <br />
            in the peak-end
          </h1>

          <p className="p-3 md:p-5 mt-6 md:mt-20 text-sm sm:text-base">
            How memories of experience are formed—what we really remember from
            brand contact. And how to avoid shooting yourself in the foot with a
            logo.
          </p>

          <button className="py-2 px-5 m-3 ml-0 border rounded-full text-sm sm:text-base">
            Read More
          </button>
        </div>
      </div>

      {/* TITLE BELOW BANNER */}
    </div>
  );
};

export default BlogBanner;

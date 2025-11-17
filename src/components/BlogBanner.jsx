import React from "react";

const BlogBanner = () => {
  return (
    <div className="h-screen flex justify-center pt-35">
      <div className="h-[500px] flex px-25 bg-neutral-900">
        <div className="left w-1/2 text-[white] border-white">
          <p className="mt-10 pl-0 p-5 text-xs">
            States of matter, or otherwise a blog
          </p>
          <div className="flex">
            <img
              className="h-48 pr-6"
              src="https://framerusercontent.com/images/Jq9CvZn5nyua3F6GHd8cdtsLduo.png?scale-down-to=512&width=2590&height=1884"
              alt=""
            />
            <h1 style={{fontFamily:"karatone", lineHeight: 1}} className="text-[50px] ">
              Sensitive <br /> leadership with a <br /> mischievous <br /> attitude
            </h1>
          </div>
          <p className="p-5 pl-0 mt-2">
            This text is not a recipe, but an account of everyday situations in
            which choices, small gestures and mindfulness became the foundation
            of a sensitive leadership style.
          </p>

          <button className="py-2 m-5 ml-0 px-5 border rounded-full">Read More</button>
        </div>
        <div className="right border w-1/2 border-white">
          <h1 className="">
            Colonoscopy and hard candy, or how to build a good end in the
            peak-end
          </h1>
          <p>
            How memories of experience are formed—what we really remember from
            brand contact. And how to avoid shooting yourself in the foot with a
            logo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;

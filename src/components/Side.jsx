import React from "react";
import FlyingPosters from "../../Reactbits/FlyingPosters/FlyingPosters";
import paint1 from "../assets/paintings/paint1.jpg";
import paint2 from "../assets/paintings/paint2.jpg";
import paint3 from "../assets/paintings/paint3.jpg";

const Side = () => {

     const items = [paint1, paint2, paint3];

  return (
    <>
      <div className="min-h-screen">
        <div
          style={{
            fontFamily: "caesar, sans-serif",
          }}
          className="pb-20 text-center mt-25 text-[70px] uppercase "
        >
          The Art Gallery
        </div>

        <div className="flex p-5 justify-center gap-5">
          {/* LEFT BOX */}
          <div className="border h-[500px] w-[900px] ">
            <h1
              style={{ fontFamily: "caesar", lineHeight: 1 }}
              className="text-4xl p-5"
            >
              Lorem ipsum dolor.
            </h1>
            <p
              style={{ fontFamily: "karatone", lineHeight: 1.5 }}
              className="text-xl p-5 text-justify"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus perspiciatis culpa nostrum aut, alias error omnis
              quidem ad quibusdam atque. Nisi, incidunt atque quidem magnam
              beatae blanditiis molestias tenetur laboriosam suscipit mollitia
              cupiditate veniam dicta illum non quis vero quisquam numquam
              dolorem excepturi. Ullam alias sapiente delectus saepe quisquam
              soluta et, quaerat assumenda minus illum deserunt amet, officiis
              sed ipsum natus provident? Libero nam aperiam nostrum hic odio
              maxime dignissimos commodi accusamus sed magnam, vero omnis
              aliquid dolorem ad repellat autem doloremque, blanditiis incidunt
              quis deserunt ullam labore. Exercitationem eligendi pariatur quos
              sapiente nam sed quidem numquam quis eum distinctio.
            </p>
            <button className="py-4 px-12 m-5 border">
                Explore More
            </button>
          </div>
          {/* RIGHT BOX */}
          <div className="border h-[500px] w-[500px] ">
            <div style={{ height: "500px", position: "relative" }}>
              <FlyingPosters items={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side;

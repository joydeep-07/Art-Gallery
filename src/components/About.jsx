import React from "react";
import video from "../assets/video/banner.mp4";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start py-20 px-6 overflow-hidden">
      {/* Heading */}
      <h1
        className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        style={{ fontFamily: "karatone, sans-serif", letterSpacing: "0.03em" }}
      >
        About Us
      </h1>

      {/* Video Section */}
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl mb-12">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[300px] object-cover"
        ></video>

        {/* Gradient overlay for cinematic tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="max-w-3xl text-center space-y-6">
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Welcome to{" "}
          <span className="font-semibold text-amber-600">The Art Gallery</span>,
          a curated collection of exquisite artworks from around the world. Our
          mission is to connect art enthusiasts with stunning pieces that
          inspire and captivate. Whether you're an avid collector or a casual
          admirer, we invite you to explore our diverse range of artworks and
          discover the stories behind each piece. Thank you for being a part of
          our artistic journey.
        </p>

      

      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/video/banner.mp4";
import CustomCursor from "./CustomCursor";
import { CiPlay1 } from "react-icons/ci";
import CircleCursor from "./CircleCursor";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  const splitTextToSpans = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block opacity-0 translate-y-3 text-gray-500"
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = textRef.current.querySelectorAll("span");

      gsap.to(letters, {
        opacity: 1,
        y: 0,
        color: "#111111",
        stagger: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 60%",
          scrub: 1,
        },
      });

      gsap.to(textRef.current, {
        backgroundPosition: "200% center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="
       
        flex flex-col items-center justify-start 
        py-16 sm:py-20 
        px-4 sm:px-6 
        relative overflow-hidden
      "
      >
        {/* Heading */}
        <h1
          id="abouttext"
          className="
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          mb-10 sm:mb-12 
          text-center text-neutral-800
        "
          style={{ fontFamily: "continental, sans-serif", letterSpacing: "0.03em" }}
        >
          About Us
        </h1>

        {/* Video Section */}
        <div className="relative w-full max-w-5xl rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-10 sm:mb-12">
          <video
            id="vid"
            src={video}
            autoPlay
            loop
            muted
            loading="lazy"
            playsInline
            className="
            w-full 
            h-[180px] 
            sm:h-[260px] 
            md:h-[300px] 
            object-cover
          "
          ></video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* Animated Text */}
        <div
          ref={textRef}
          style={{
            // fontFamily: "karatone, sans-serif",
            letterSpacing: "0.03em",
          }}
          className="
          max-w-4xl 
          text-center 
          text-base sm:text-lg md:text-xl 
          font-light 
          leading-relaxed 
          md:leading-loose 
          bg-clip-text text-transparent 
          bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 
          [background-size:200%_100%] bg-left
          px-1 sm:px-4
        "
        >
          {splitTextToSpans(
            "Welcome to The Art Gallery, a curated collection of exquisite artworks from around the world. Our mission is to connect art enthusiasts with stunning pieces that inspire and captivate. Whether you're an avid collector or a casual admirer, we invite you to explore our diverse range of artworks and discover the stories behind each piece. Thank you for being a part of our artistic journey."
          )}
        </div>

        <CustomCursor icon={CiPlay1} targetId="vid" />
        <CircleCursor targetId="about" hoverId="abouttext" />
      </section>
    </>
  );
};

export default About;

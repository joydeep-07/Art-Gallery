import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import video from "../assets/video/banner.mp4";
import CustomCursor from "./CustomCursor";
import { CiPlay1 } from "react-icons/ci";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  // Split text into span-wrapped characters
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

      // Faster scroll-based letter reveal (no pin)
      gsap.to(letters, {
        opacity: 1,
        y: 0,
        color: "#111111",
        stagger: 5, // faster stagger speed
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%", // starts earlier
          end: "bottom 60%", // shorter animation distance
          scrub: 1, // faster response to scroll
        },
      });

      // Subtle background gradient movement (not pinned)
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
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-start py-20 px-6 relative overflow-hidden"
    >
      {/* Heading */}
      <h1
        className="text-5xl md:text-7xl mb-12 text-center text-neutral-800"
        style={{ fontFamily: "caesar, sans-serif", letterSpacing: "0.03em" }}
      >
        About Us
      </h1>

      {/* Video Section */}
      <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl mb-12">
        <video
          id="vid"
          src={video}
          autoPlay
          loop
          muted
          loading="lazy"
          playsInline
          className="w-full h-[300px] object-cover"
        ></video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
      </div>

      {/* Animated Text */}
      <div
        ref={textRef}
        style={{ fontFamily: "karatone, sans-serif", letterSpacing: "0.03em" }}
        className="max-w-4xl text-center text-lg md:text-xl font-light leading-relaxed md:leading-loose bg-clip-text text-transparent bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 [background-size:200%_100%] bg-left"
      >
        {splitTextToSpans(
          "Welcome to The Art Gallery, a curated collection of exquisite artworks from around the world. Our mission is to connect art enthusiasts with stunning pieces that inspire and captivate. Whether you're an avid collector or a casual admirer, we invite you to explore our diverse range of artworks and discover the stories behind each piece. Thank you for being a part of our artistic journey."
        )}
      </div>

      <CustomCursor icon={CiPlay1} targetId="vid" />
    </section>
  );
};

export default About;

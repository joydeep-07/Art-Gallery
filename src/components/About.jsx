import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import paint1 from "../assets/paintings/paint1.jpg";
import paint2 from "../assets/paintings/paint2.jpg";
import paint3 from "../assets/paintings/paint3.jpg";
import paint4 from "../assets/paintings/paint4.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each image one by one
      imagesRef.current.forEach((img, index) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // --- Pin RHS until last image reaches center ---
      const lastImage = imagesRef.current[imagesRef.current.length - 1];

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        endTrigger: lastImage,
        end: "center center", 
        pin: ".rhs-content",
        pinSpacing: true,
        anticipatePin: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LHS - Images */}
        <div className="space-y-12">
          {[paint1, paint2, paint3, paint4].map((img, i) => (
            <img
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              src={img}
              alt={`Painting ${i + 1}`}
              className="w-auto h-[700px] rounded-lg shadow-lg opacity-0"
            />
          ))}
        </div>

        {/* RHS - Fixed Content */}
        <div className="rhs-content space-y-8 lg:sticky lg:top-32">
          <div className="text-center lg:text-left">
            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1.1,
                letterSpacing: "0.03em",
              }}
              className="text-5xl lg:text-6xl text-gray-800 font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              About Us
            </h1>

            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-full"></div>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed pl-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                mollitia repellat laudantium molestiae officiis tempore tenetur
                dolor consequuntur magnam earum eum neque quasi expedita est
                natus voluptatem laborum maxime accusamus, deserunt magni illum.
                Excepturi reiciendis ipsa ipsam, neque voluptatibus, soluta
                accusamus atque ipsum omnis architecto eum ad vero eius.
                Laboriosam.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center lg:text-left">
            <button className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Footer from "../layouts/Footer";

const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center p-5 pt-23.5">
        <div className="w-7xl flex p-5 justify-between mx-auto">
          {/* ---------- HEADING SECTION ---------- */}
          <div className="space-y-3">
            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1,
                letterSpacing: "0.03em",
              }}
              className="text-neutral-800 text-[75px] md:text-[90px] leading-none"
            >
              Get in Touch 
            </h1>

            <h1
              style={{
                fontFamily: "karatone, sans-serif",
                lineHeight: 1,
                letterSpacing: "0.03em",
              }}
              className="text-neutral-800 text-[75px] md:text-[90px] leading-none"
            >
              With Us,
            </h1>

            <p className="max-w-md text-sm text-neutral-600 pt-2">
              Feel free to reach out for collaborations, projects, inquiries, or
              just to say hello. We would love to hear from you.
            </p>
          </div>

          {/* ---------- CONTACT FORM ---------- */}
          <div>
            <div className="max-w-xl space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-1 focus:ring-neutral-800"
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-neutral-300 rounded-md resize-none focus:outline-none focus:ring-1 focus:ring-neutral-800"
              ></textarea>

              <button className="px-6 py-3 bg-neutral-800 text-[#fffceb] rounded-md hover:bg-neutral-900 transition w-full">
                Send Message
              </button>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

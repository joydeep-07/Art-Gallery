import React from "react";
import { Newsletter } from "../utils/Newsletter"; // <-- adjust if using default export

const Collections = () => {
  return (
    <div className="flex justify-center items-center p-5 pt-25">
      <div className="w-7xl">
        <div>
          <h1
            style={{
              fontFamily: "karatone, sans-serif",
              lineHeight: 1,
              letterSpacing: "0.03em",
            }}
            className="text-neutral-800 text-[80px] leading-none"
          >
            States
          </h1>

          <h1
            style={{
              fontFamily: "karatone, sans-serif",
              lineHeight: 1,
              letterSpacing: "0.03em",
            }}
            className="text-neutral-800 text-[90px] leading-none"
          >
            of Matter,
          </h1>

          <p className="max-w-md text-sm">
            For more design help, inspiration, and case studies, sign up for our
            newsletter (by signing up, you accept our privacy policy).
          </p>
        </div>

        <div className="pt-7 gap-2 flex">
          <input
            className="p-3 w-xl border"
            type="email"
            placeholder="Enter your email"
          />
          <button className="p-3 border">Subscribe</button>
        </div>

        {/* 🔥 MAP NEWSLETTERS HERE */}
        <div className="mt-10 grid grid-cols-3 gap-5">
          {Newsletter.map((item) => (
            <div
              key={item.id}
              className="  transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-50 object-cover"
              />

              <div className="p-4">
                <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>

                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

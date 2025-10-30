import React from "react";
import Gallery from "./Gallery";
import Navbar from "../layouts/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#fff8f0] relative overflow-hidden">
      {/* Soft Warm Pastel Texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* <Gallery /> */}
      </div>
    </div>
  );
};

export default Home;

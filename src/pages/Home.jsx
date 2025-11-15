import React from "react";
import Gallery from "./Gallery";
import Navbar from "../layouts/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="relative z-10">
        <Hero />
        <Experience/>
      </div>
    </div>
  );
};

export default Home;

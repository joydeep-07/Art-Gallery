import React from "react";
import Gallery from "./Gallery";
import Navbar from "../layouts/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../layouts/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="relative z-10">
        <Hero />
        <Experience />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

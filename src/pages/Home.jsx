import React from "react";
import Gallery from "./Gallery";
// import Navbar from "../layouts/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import AreWeWorking from "../components/AreWeWorking";
import Side from "../components/Side";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Main Content */}
      <div className="relative z-10">
        {/* <Navbar /> */}
        <Hero />
       <Side/>
        {/* <AreWeWorking /> */}
      </div>
    </div>
  );
};

export default Home;

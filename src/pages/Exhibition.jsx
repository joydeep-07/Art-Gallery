import React from "react";
import Footer from "../layouts/Footer";

const Exhibition = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* PAGE CONTENT */}
      <div className=" flex-grow text-5xl text-center">Exhibition</div>

      {/* FOOTER STAYS AT BOTTOM */}
      <Footer />
    </div>
  );
};

export default Exhibition;

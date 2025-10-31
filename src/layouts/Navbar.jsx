import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full  z-50">
      <div className="max-w-8xl mx-[70px] px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-center">
              <div
                style={{
                  fontFamily: "caesar, sans-serif",
                }}
                className="flex items-baseline"
              >
                <span className="text-amber-800 font-medium text-2xl pr-2 tracking-tight">
                  ART
                </span>
                <span className="text-amber-600/80 font-light text-2xl tracking-wider">
                  GALLERY
                </span>
              </div>
              <p className="text-xs text-amber-700/70 tracking-wide">
                A curated collection of exquisite artworks
              </p>
            </div>
          </div>

          {/* Navigation Links (RHS) */}
          <div className="hidden md:flex justify-end flex-1">
            <ul className="flex space-x-12">
              <li className="group">
                <Link
                  to="/"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/we"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  Are We Working
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/gallery"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  Gallery
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/contact"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end flex-1">
            <button className="text-amber-800 hover:text-amber-700 transition-colors duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

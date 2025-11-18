import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setScrolledEnough(true);
      } else {
        setScrolledEnough(false);
        setShowNavbar(true); // Don't hide navbar until scrolled 200px
      }

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // scrolling down
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [lastScrollY]);

  const handleMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setShowNavbar(true);
  };

  const handleMouseLeave = () => {
    if (scrolledEnough) {
      hideTimeout.current = setTimeout(() => {
        setShowNavbar(false);
      }, 5000);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full px-[70px] backdrop-blur-[2px] z-100 transition-transform duration-500 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-[100%]"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="text-center cursor-pointer">
              <Link
                to="/"
                className="flex items-baseline"
                style={{ fontFamily: "caesar, sans-serif" }}
              >
                <span className="text-amber-800 font-extrabold text-2xl pr-2 tracking-tight">
                  ART
                </span>
                <span className="text-amber-600/80 font-extrabold text-2xl tracking-wider">
                  GALLERY
                </span>
              </Link>
              <p className="text-xs text-amber-700/70 tracking-wide">
                A curated collection of exquisite artworks
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <ul className="flex space-x-12">
              <li className="group">
                <Link
                  to="/are/we/working"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  About Me
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li className="group">
                <Link
                  to="/collections"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  States of Matter
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li className="group">
                <Link
                  to="/exhibition"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  Exhibitions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>

              <li className="group">
                <Link
                  to="/contacts"
                  className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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

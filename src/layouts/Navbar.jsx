import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiUser,
  FiLayers,
  FiCalendar,
  FiMail,
} from "react-icons/fi";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolledEnough, setScrolledEnough] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const hideTimeout = useRef(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
    if (scrolledEnough && !isMobile) {
      hideTimeout.current = setTimeout(() => {
        setShowNavbar(false);
      }, 5000);
    }
  };

  const toggleSidePanel = () => {
    setIsSidePanelOpen(!isSidePanelOpen);
  };

  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  // Close side panel when clicking on a link
  const handleLinkClick = () => {
    closeSidePanel();
  };

  // Close side panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidePanelOpen &&
        !event.target.closest(".side-panel") &&
        !event.target.closest(".mobile-menu-button")
      ) {
        closeSidePanel();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidePanelOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-4 sm:px-6 md:px-[70px] backdrop-blur-[1px] z-50 transition-transform duration-500 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-[100%]"
        }`}
        onMouseEnter={isMobile ? undefined : handleMouseEnter}
        onMouseLeave={isMobile ? undefined : handleMouseLeave}
      >
        <div className="w-full px-2 sm:px-4 md:px-8">
          <div className="flex justify-between items-center h-15 sm:h-18 md:h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <div className="text-center cursor-pointer">
                <Link
                  to="/"
                  className="flex items-baseline"
                  style={{ fontFamily: "caesar, sans-serif" }}
                >
                  <span className="text-amber-800 font-extrabold text-lg sm:text-xl md:text-2xl pr-1 sm:pr-2 tracking-tight">
                    Paul
                  </span>
                  <span className="text-amber-600/80 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wider">
                    Codes
                  </span>
                </Link>
                <p className="hidden sm:block text-xs text-amber-700/70 tracking-wide">
                  A curated collection of exquisite artworks
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-8 lg:space-x-12">
                <li className="group">
                  <Link
                    to="/are/we/working"
                    className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2 text-sm lg:text-sm"
                  >
                    About Me
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/collections"
                    className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2 text-sm lg:text-sm"
                  >
                    States of Matter
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/mentoring"
                    className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2 text-sm lg:text-sm"
                  >
                    Mentoring
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

                <li className="group">
                  <Link
                    to="/contacts"
                    className="text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 relative py-2 text-sm lg:text-sm font-medium"
                  >
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden mobile-menu-button">
              <button
                onClick={toggleSidePanel}
                className="text-amber-800 hover:text-amber-700 transition-colors duration-300 p-2"
              >
                {isSidePanelOpen ? (
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Panel */}
      <div
        className={`side-panel fixed top-0 right-0 h-full w-[70vw] bg-amber-50/95 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close Button */}
          <button
            onClick={closeSidePanel}
            className="absolute top-4 right-4 text-amber-800 hover:text-amber-700 transition-colors duration-300 p-2"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/are/we/working"
                onClick={handleLinkClick}
                className="flex items-center text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 py-2 text-base"
              >
                <FiUser className="mr-3 w-5 h-5" />
                About Me
              </Link>
            </li>

            <li>
              <Link
                to="/collections"
                onClick={handleLinkClick}
                className="flex items-center text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 py-2 text-base"
              >
                <FiLayers className="mr-3 w-5 h-5" />
                States of Matter
              </Link>
            </li>

            <li>
              <Link
                to="/mentoring"
                onClick={handleLinkClick}
                className="flex items-center text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 py-2 text-base"
              >
                <FiCalendar className="mr-3 w-5 h-5" />
                Mentoring
              </Link>
            </li>

            <li>
              <Link
                to="/contacts"
                onClick={handleLinkClick}
                className="flex items-center text-amber-900/80 hover:text-amber-700 tracking-wide transition-colors duration-300 py-2 text-base"
              >
                <FiMail className="mr-3 w-5 h-5" />
                Contact
              </Link>
            </li>
          </ul>

          {/* Bottom Section */}
          <div className="mt-auto pb-8">
            <div className="border-t border-amber-200 pt-6">
              <p className="text-amber-700/70 text-xs text-center">
                A curated collection of exquisite artworks
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidePanelOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 md:hidden"
          onClick={closeSidePanel}
        />
      )}
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import tree from "../assets/images/trees.png";
import { IoMailOutline, IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="h-[250px] flex flex-col justify-between">
      {/* Top Space / Branding Placeholder */}
      <div className=" flex gap-10 justify-center items-center">
        <div>
          <img src={tree} className="h-50" alt="" />
        </div>
        <div>
          <h2 className="max-w-md text-sm">
            They say happiness is when you plant a tree for your grandchildren
            to rest under. Let me know if this approach resonates with you .
          </h2>
          <div className="flex gap-10 text-xs pt-5">
            <div className="flex justify-center items-center gap-2">
              <IoMailOutline />
              <h3>joydeeprnp8821@gmail.com</h3>
            </div>
            <div className="flex justify-center items-center gap-2">
              <IoLogoLinkedin />
              <h3> / Linkedin</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="p-5 bg-neutral-900 flex flex-col items-center gap-4 border-t border-neutral-800">
        {/* Navigation Links */}
        <nav className="text-sm flex text-gray-100 gap-8">
          <Link
            to="/are/we/working"
            className="hover:text-gray-300 transition-colors"
          >
            Who are we?
          </Link>

          <Link
            to="/collections"
            className="hover:text-gray-300 transition-colors"
          >
            States of Matter
          </Link>

          <Link
            to="/contacts"
            className="hover:text-gray-300 transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Divider */}
        <div className="w-full h-[1px] bg-neutral-800"></div>

        {/* Cookie / Privacy Note */}
        <p className="text-xs text-center text-gray-400 leading-relaxed">
          This website only uses essential cookies. We do not use tracking or
          advertising cookies. Read more in our privacy policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

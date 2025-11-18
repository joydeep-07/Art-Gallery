import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="h-[250px] flex flex-col justify-between border">
      {/* Top Space / Branding Placeholder */}
      <div className="flex-1 flex justify-center items-center">
        {/* You can place a logo or tagline here later */}
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

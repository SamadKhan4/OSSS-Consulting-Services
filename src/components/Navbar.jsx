/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white ">
      <div className="max-w-[1240px] mx-auto h-[82px] px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu} className="flex items-center">
          <img
            src={logo}
            alt="OSS Logo"
            className="w-[52px] h-[52px] object-contain rounded-full"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {/* Menu */}
          <ul className="flex items-center gap-7 text-[17px] font-medium text-black">
            <li>
              <Link to="/" className="text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </li>

            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                <span><Link to="/services">Services</Link></span>
                <svg
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <ul className="absolute left-0 top-full z-20 hidden min-w-[210px] rounded-md border border-gray-100 bg-white py-2 shadow-lg group-hover:block">
                <li>
                  <Link
                    to="/services/webdev"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/appdev"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    App Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/digitalmarketing"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/technicalsupport"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Technical Support
                  </Link>
                </li>
              </ul>
            </li>

            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                <span>More</span>
                <svg
                  className="w-4 h-4 mt-[2px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <ul className="absolute left-0 top-full z-20 hidden min-w-[170px] rounded-md border border-gray-100 bg-white py-2 shadow-lg group-hover:block">
                <li>
                  <Link
                    to="/blog"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/brochure"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Broucher
                  </Link>
                </li>
                <li>
                  <Link
                    to="/writeforus"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Write For Us
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Button */}
          <Link
            to="/contact"
            className="bg-[#2637E8] text-white px-7 py-3 rounded-[9px] text-[16px] font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Icon */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden text-black"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-black/10 bg-white px-8 pb-6">
          <div className="flex flex-col gap-4 pt-4 text-[16px] font-medium text-black">
            <Link to="/" onClick={closeMobileMenu} className="text-blue-600">
              Home
            </Link>
            <Link to="/about" onClick={closeMobileMenu}>
              About Us
            </Link>
            <Link to="/services" onClick={closeMobileMenu}>
              Services
            </Link>
            <div className="grid gap-3 pl-4 text-[14px] text-gray-700">
              <Link to="/services/webdev" onClick={closeMobileMenu}>
                Web Development
              </Link>
              <Link to="/services/appdev" onClick={closeMobileMenu}>
                App Development
              </Link>
              <Link to="/services/digitalmarketing" onClick={closeMobileMenu}>
                Digital Marketing
              </Link>
              <Link to="/services/technicalsupport" onClick={closeMobileMenu}>
                Technical Support
              </Link>
            </div>
            <Link to="/blog" onClick={closeMobileMenu}>
              Blog
            </Link>
            <Link to="/brochure" onClick={closeMobileMenu}>
              Broucher
            </Link>
            <Link to="/writeforus" onClick={closeMobileMenu}>
              Write For Us
            </Link>
            <Link to="/contact" onClick={closeMobileMenu}>
              Contact Us
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex h-[42px] items-center justify-center rounded-[7px] bg-[#2637E8] text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

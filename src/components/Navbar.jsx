/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white ">
      <div className="max-w-[1240px] mx-auto h-[82px] px-8 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="OSS Logo"
            className="w-[52px] h-[52px] object-contain rounded-full"
          />
        </div>

        <div className="hidden md:flex items-center gap-8 ml-auto">
          {/* Menu */}
          <ul className="flex items-center gap-7 text-[17px] font-medium text-black">
            <li>
              <a href="/" className="text-blue-600">
                Home
              </a>
            </li>

            <li>
              <a href="/about" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>

            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                <span>services</span>
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
                  <a
                    href="/services/webdev"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/appdev"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    App Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services/digitalmarketing"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="/services/technicalsupport"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Technical Support
                  </a>
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
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/broucher"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Broucher
                  </a>
                </li>
                <li>
                  <a
                    href="/writeforus"
                    className="block px-4 py-2 text-[15px] text-black hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    Write For Us
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contact" className="hover:text-blue-600 transition">
                Contact Us
              </a>
            </li>
          </ul>

          {/* Button */}
          <a
            href="/get-started"
            className="bg-[#2637E8] text-white px-7 py-3 rounded-[9px] text-[16px] font-medium hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Icon */}
        <button className="md:hidden text-black">
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
    </nav>
  );
};

export default Navbar;

/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Footer.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#101010] text-white px-6 md:px-12 lg:px-24 pt-10 pb-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* About */}
          <div>
            <img
              src={logo}
              alt="OSSS Logo"
              className="w-[90px] h-[90px] object-contain mb-10"
            />

            <h3 className="text-[21px] font-semibold tracking-wide mb-4">
              About Company.
            </h3>

            <p className="text-[18px] leading-[1.5] text-gray-200 max-w-[300px]">
              Empowering Futures, Crafting Solutions.
            </p>

            <div className="flex items-center gap-2 mt-8">
              <a
                href="#"
                className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center text-white text-sm"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-6 h-6 rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white text-sm"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-6 h-6 rounded-sm bg-[#0A66C2] flex items-center justify-center text-white text-sm"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white text-sm"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:pl-10">
            <h3 className="text-[22px] font-bold mb-9">services</h3>

            <ul className="space-y-5 text-[16px] text-gray-300">
              <li>Technical Support</li>
              <li>Web Design & Development</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[22px] font-bold mb-9">Contact</h3>

            <div className="space-y-6 text-[16px] text-gray-300 leading-[1.6]">
              <div>
                <h4 className="text-white font-bold text-[18px] mb-5">
                  Operational Address:
                </h4>
                <p>
                  Plot No 47, 3rd floor, Corporation House,
                  <br />
                  3379/47, Mankapur Ring Rd, Pratap Nagar,
                  <br />
                  Nagpur, Maharashtra 440026
                </p>
              </div>

              <div>
                <h4 className="text-white font-bold text-[18px] mb-5">
                  Registered Office:
                </h4>
                <p>
                  6/23/372 Gautam Nagar, Nizamabad,
                  <br />
                  Telangana, India, 503002
                </p>
              </div>

              <div>
                <p>
                  <span className="text-white font-bold">hr</span>
                  -manager@osssconsultingservices.com
                  <br />
                  9912135070
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/20 mt-20 mb-6" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[16px] text-gray-300">
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>

          <p>
            Copyright © 2026 Designed and developed by{" "}
            <a href="#" className="underline text-white">
              Adbornsolutions.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
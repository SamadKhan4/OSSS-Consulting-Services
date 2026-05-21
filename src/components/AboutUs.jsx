/* eslint-disable no-unused-vars */
import React from "react";
import aboutus from "../assets/Homepage/aboutus.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#f4f6f8] py-12 px-6 md:px-12 lg:px-[100px]">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* Left Side */}
        <div>
          <span className="inline-block text-[12px] text-[#2637e8] bg-white px-3 py-1 rounded-full mb-3">
            About Us
          </span>

          <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.25] text-[#2437d9] max-w-[420px] mb-8">
            Your Trusted Technology <br />
            & Digital Partner
          </h2>

          <div className="relative w-full max-w-[500px]">
            <img
              src={aboutus}
              alt="About OSS Consulting Services"
              className="w-full h-[230px] object-cover rounded-[4px]"
            />

            {/* Floating Clients Card */}

          </div>
        </div>

        {/* Right Side */}
        <div className="max-w-[570px]">
          <p className="text-[15px] leading-[1.7] text-[#222] mb-6">
            At OSS Consulting Services, we believe technology should empower
            businesses to achieve more. Our team provides reliable IT consulting,
            software development, and digital marketing services designed to help
            organizations improve operations, enhance customer experiences, and
            drive sustainable growth.
          </p>

          <ul className="space-y-4 mb-7">
            <li className="flex items-start gap-3 text-[15px] text-[#222]">
              <span className="mt-1 w-[8px] h-[8px] rounded-full bg-[#2637e8]" />
              Expertise in web, mobile, and digital marketing
            </li>

            <li className="flex items-start gap-3 text-[15px] text-[#222]">
              <span className="mt-1 w-[8px] h-[8px] rounded-full bg-[#2637e8]" />
              Focus on quality and modern technology
            </li>

            <li className="flex items-start gap-3 text-[15px] text-[#222]">
              <span className="mt-1 w-[8px] h-[8px] rounded-full bg-[#2637e8]" />
              Solutions tailored to business needs
            </li>

            <li className="flex items-start gap-3 text-[15px] text-[#222]">
              <span className="mt-1 w-[8px] h-[8px] rounded-full bg-[#2637e8]" />
              Reliable support and long-term partnerships
            </li>
          </ul>

          <a
            href="/about"
            className="inline-flex items-center justify-center bg-[#2637e8] text-white h-[42px] px-7 rounded-[4px] text-[14px] font-medium hover:bg-[#1d2cc7] transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
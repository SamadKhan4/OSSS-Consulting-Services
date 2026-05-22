/* eslint-disable no-unused-vars */
import React from "react";

import bg from "../assets/bg.png";
import aboutImg from "../assets/Common/AboutPage.png";
import logo from "../assets/Footer.png";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/Common/CTA";

const About = () => {
  return (
    <main className="w-full bg-[#f4f6f8]">
      {/* Hero */}
      <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-[34px] font-bold">About Us</h1>
      </section>

      {/* About Content */}
      <section className="w-full bg-[#f4f6f8] px-4 md:px-8 lg:px-[95px] py-[46px]">
        <div className="max-w-[1208px] mx-auto bg-[#d9d9d9] rounded-[10px] p-[22px]">
          <div className="grid grid-cols-1 lg:grid-cols-[490px_1fr] gap-[18px]">
            {/* Left Image */}
            <div className="bg-white rounded-[10px] p-[10px]">
              <img
                src={aboutImg}
                alt="About OSSS"
                className="w-full h-[406px] object-cover rounded-[8px]"
              />
            </div>

            {/* Right Content */}
            <div className="pt-[4px]">
              <span className="inline-block text-[11px] text-[#2637e8] bg-white px-[10px] py-[3px] rounded-full mb-[8px]">
                About Us
              </span>

              <h2 className="text-[#2637e8] text-[26px] leading-none font-bold mb-[13px]">
                Who We Are
              </h2>

              <p className="text-[12.5px] leading-[1.45] text-black mb-[16px] max-w-[620px]">
                OSSS Consulting Services is a trusted IT consulting and digital
                solutions company dedicated to helping businesses grow in the digital
                world. We specialize in delivering innovative technology solutions
                including web development, mobile application development, digital
                marketing, and IT consulting services.
              </p>

              {/* Mission */}
              <div className="grid grid-cols-[118px_1fr] gap-[12px] mb-[12px]">
                <div className="bg-[#2637e8] rounded-[8px] flex items-center justify-center h-[126px]">
                  <img
                    src={logo}
                    alt="OSSS Logo"
                    className="w-[76px] h-[76px] object-contain"
                  />
                </div>

                <div className="bg-white rounded-[7px] px-[18px] py-[16px] h-[126px]">
                  <h3 className="text-[#2637e8] text-[20px] leading-none font-bold mb-[12px]">
                    Our Mission
                  </h3>
                  <p className="text-[12px] leading-[1.45] text-black">
                    Our mission is to empower businesses with reliable technology
                    solutions that drive innovation, efficiency, and sustainable
                    growth.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="grid grid-cols-[118px_1fr] gap-[12px]">
                <div className="bg-white rounded-[7px] flex flex-col items-center justify-center h-[86px]">
                  <h3 className="text-[#2637e8] text-[26px] leading-none font-bold mb-[8px]">
                    10+
                  </h3>
                  <p className="text-[#2637e8] text-[11px]">Years of Legacy</p>
                </div>

                <div className="bg-white rounded-[7px] px-[18px] py-[13px] h-[86px]">
                  <h3 className="text-[#2637e8] text-[20px] leading-none font-bold mb-[10px]">
                    Our Vision
                  </h3>
                  <p className="text-[12px] leading-[1.35] text-black">
                    Our vision is to become a trusted global technology partner known
                    for delivering innovative digital solutions and creating lasting
                    value for businesses across industries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-[20px] bg-[#8182ed] rounded-[10px] h-[112px] px-[60px] grid grid-cols-2 md:grid-cols-4 items-center text-center text-white">
            <div>
              <h3 className="text-[25px] leading-none font-semibold mb-[10px]">85+</h3>
              <p className="text-[12px]">Team of Professionals</p>
            </div>

            <div>
              <h3 className="text-[25px] leading-none font-semibold mb-[10px]">255+</h3>
              <p className="text-[12px]">Total project</p>
            </div>

            <div>
              <h3 className="text-[25px] leading-none font-semibold mb-[10px]">500+</h3>
              <p className="text-[12px]">Engaged Customers</p>
            </div>

            <div>
              <h3 className="text-[25px] leading-none font-semibold mb-[10px]">99%</h3>
              <p className="text-[12px]">Customer Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />

    </main>
  );
};

export default About;
/* eslint-disable no-unused-vars */
import React from "react";
import herobg from "../../assets/Homepage/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full h-[804px]  overflow-hidden">
      {/* Background Image */}
      <img
        src={herobg}
        alt="Hero Background"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1440px] h-[804px] object-cover opacity-100 rotate-0"
      />

      {/* Content Box */}
      <div className="absolute top-[160px] left-[100px] w-[600px] h-[540px] opacity-100 rotate-0">
        <div className="flex flex-col gap-[30px]">
          <div>
            <h1 className="text-[50px] leading-[1.25] font-extrabold text-[#242424]">
              Transforming <br />
              Businesses with <br />
              Smart{" "}
              <span className="text-[#2457ff]">
                Digital <br />
                Solutions
              </span>
            </h1>

            <p className="mt-5 text-[18px] leading-[1.6] text-[#222] max-w-[390px]">
              At OSS Consulting Services, we help businesses grow with innovative
              technology, modern web solutions, and powerful digital marketing
              strategies. Our team delivers reliable, scalable, and results-driven
              solutions tailored to your business goals.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="h-[40px] px-5 inline-flex items-center justify-center rounded-[3px] bg-[#2637e8] text-white text-[13px] font-medium hover:bg-[#1d2cc7] transition"
            >
              Get Started
            </a>

            <a
              href="/services"
              className="h-[40px] px-5 inline-flex items-center justify-center rounded-[3px] border border-black text-black text-[13px] font-medium hover:bg-black hover:text-white transition"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

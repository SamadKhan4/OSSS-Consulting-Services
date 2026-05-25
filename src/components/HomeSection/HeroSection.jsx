/* eslint-disable no-unused-vars */
import React from "react";
import herobg from "../../assets/Homepage/hero.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[620px] md:min-h-[720px] lg:h-[804px] overflow-hidden">
      {/* Background Image */}
      <img
        src={herobg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-[58%_center] opacity-100 rotate-0"
      />

      {/* Content Box */}
      <div className="relative z-10 w-full max-w-[680px] px-4 sm:px-6 md:px-10 lg:px-0 pt-[70px] sm:pt-[95px] md:pt-[130px] lg:absolute lg:top-[160px] lg:left-[100px] lg:w-[600px] lg:h-[540px] opacity-100 rotate-0">
        <div className="flex flex-col gap-6 md:gap-[30px]">
          <div>
            <h1 className="text-[34px] sm:text-[42px] lg:text-[50px] leading-[1.18] sm:leading-[1.25] font-extrabold text-[#242424]">
              Transforming <br />
              Businesses with <br />
              Smart{" "}
              <span className="text-[#2457ff]">
                Digital <br />
                Solutions
              </span>
            </h1>

            <p className="mt-5 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#222] max-w-[430px]">
              At OSS Consulting Services, we help businesses grow with innovative
              technology, modern web solutions, and powerful digital marketing
              strategies. Our team delivers reliable, scalable, and results-driven
              solutions tailored to your business goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
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

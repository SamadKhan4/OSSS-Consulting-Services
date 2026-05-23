/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="w-full bg-[#ffffff] px-4 md:px-8 lg:px-[95px] py-[40px]">
      <div className="max-w-[1208px] mx-auto">
        <div
          className="
          relative
          overflow-hidden
          rounded-[8px]
          px-[34px]
          py-[22px]
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
          bg-gradient-to-r
          from-[#2b39e7]
          via-[#404be7]
          to-[#6970ef]
        "
        >
          {/* Background Glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-[120px] left-[180px] w-[240px] h-[240px] rounded-full bg-[#8f7cff] blur-[80px]" />
            <div className="absolute -bottom-[100px] right-[120px] w-[220px] h-[220px] rounded-full bg-[#4d58ff] blur-[70px]" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-white text-[18px] md:text-[30px] font-bold leading-[1.25] mb-[8px]">
              Ready to Build Your Next Digital Solution?
            </h2>

            <p className="text-white/85 text-[13px] md:text-[15px] leading-[1.6] max-w-[620px]">
              Partner with OSSS Consulting Services and transform your ideas
              into powerful digital solutions that drive growth and success.
            </p>
          </div>

          {/* Button */}
          <div className="relative z-10">
            <Link
              to="/contact"
              className="
              bg-white
              text-[#2637e8]
              px-[22px]
              h-[44px]
              rounded-[6px]
              text-[13px]
              font-semibold
              hover:scale-105
              transition
              inline-flex
              items-center
              justify-center
            "
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

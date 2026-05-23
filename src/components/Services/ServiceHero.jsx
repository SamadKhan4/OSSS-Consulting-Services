/* eslint-disable no-unused-vars */
import React from "react";

const ServiceHero = ({
  image,
  title = "Web Development Services",
  description = "",
  description1 = "",
}) => {
  return (
    <section className="w-full bg-[#f4f6f8] py-[45px] px-4 md:px-8 lg:px-[90px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-[36px] items-center">
          {/* Left Image */}
          <div>
            <img
              src={image}
              alt={title}
              className="w-full h-[280px] object-cover rounded-[10px] "
            />
          </div>

          {/* Right Content */}
          <div>
            <h1 className="text-[#2637e8] text-[28px] md:text-[34px] font-bold leading-[1.2] mb-[22px]">
              {title}
            </h1>

            <div className="space-y-[22px]">
              <p className="text-[#111] text-[16px] leading-[1.65]">
                {description}
              </p>

              <p className="text-[#111] text-[16px] leading-[1.65]">
                {description1}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
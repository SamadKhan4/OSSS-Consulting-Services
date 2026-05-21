/* eslint-disable no-unused-vars */
import React from "react";

const defaultSteps = [
  {
    number: "01.",
    title: "Discovery & Consultation",
    desc: "Understanding your business goals, challenges, and project requirements.",
  },
  {
    number: "02.",
    title: "Strategy & Planning",
    desc: "Creating a clear roadmap and technical strategy for successful project execution.",
  },
  {
    number: "03.",
    title: "Development & Testing",
    desc: "Designing, building, and testing high-quality digital solutions to ensure performance and reliability.",
  },
  {
    number: "04.",
    title: "Launch & Ongoing Support",
    desc: "Deploying the solution and providing continuous support, maintenance, and improvements.",
  },
];

const WorkProcessTemplate = ({
  bgImage,
  badge = "Our Work Process",
  title = "How We Deliver Successful",
  highlight = "Solutions",
  steps = defaultSteps,
}) => {
  return (
    <section className="w-full bg-[#f4f6f8] py-12 px-4 md:px-8 lg:px-[70px]">
      <div
        className="relative max-w-[1280px] mx-auto min-h-[360px] rounded-[14px] overflow-hidden bg-cover bg-center px-6 md:px-10 lg:px-[70px] py-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#6f7188]/35" />

        {/* Heading */}
        <div className="relative z-10 text-center mb-14">
          <span className="inline-block text-[11px] text-[#2637e8] bg-white/30 border border-white/40 px-3 py-1 rounded-full mb-3">
            {badge}
          </span>

          <h2 className="text-white text-[26px] md:text-[34px] font-bold leading-[1.25]">
            {title} <br />
            {highlight}
          </h2>
        </div>

        {/* Connecting Line */}
            <div className="hidden lg:block absolute left-[120px] right-[120px] top-[300px] h-0 border-t-[2px] border-dashed border-[#2637e8]/70 z-0" />
        {/* Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[9px] min-h-[170px] pt-16 px-5 pb-6"
            >
              <div className="absolute -top-[34px] left-1/2 -translate-x-1/2 w-[84px] h-[84px] rounded-full bg-[#2637e8] text-white flex items-center justify-center text-[22px] font-bold shadow-[0_8px_0_rgba(38,55,232,0.22)]">
                {step.number}
              </div>

              <h3 className="text-[16px] font-semibold text-black leading-[1.3] mb-3">
                {step.title}
              </h3>

              <p className="text-[13px] leading-[1.45] text-[#222]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTemplate;
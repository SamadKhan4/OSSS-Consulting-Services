/* eslint-disable no-unused-vars */
import React from "react";
import { Users, Lightbulb, Rocket, Handshake } from "lucide-react";

const defaultItems = [
  {
    title: "Experienced Professionals",
    desc: "Skilled developers and digital experts with industry experience.",
    icon: Users,
  },
  {
    title: "Custom Solutions",
    desc: "Tailored digital solutions designed for your business goals.",
    icon: Lightbulb,
  },
  {
    title: "Modern Technology",
    desc: "Using the latest tools and best practices.",
    icon: Rocket,
  },
  {
    title: "End-to-End Services",
    desc: "From strategy to deployment and support.",
    icon: Handshake,
  },
];

const WhyChooseTemplate = ({
  badge = "Why Choose Us",
  title = "Delivering Innovation, Quality, and Results",
  items = defaultItems,
}) => {
  return (
    <section className="w-full bg-[#f4f6f8] py-12 px-4 md:px-8 lg:px-[70px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <span className="inline-block text-[11px] text-[#2637e8] bg-white px-3 py-1 rounded-full mb-3">
            {badge}
          </span>

          <h2 className="text-[26px] md:text-[34px] font-bold leading-[1.25] text-[#151515] max-w-[430px]">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[12px] border border-black/10 shadow-sm px-5 py-7 min-h-[175px]"
              >
                <div className="w-[58px] h-[58px] rounded-full bg-[#2637e8] flex items-center justify-center mb-8">
                  <Icon size={25} className="text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-[16px] font-bold text-black mb-1">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-[1.35] text-black/85">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTemplate;
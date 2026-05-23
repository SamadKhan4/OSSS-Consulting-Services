/* eslint-disable no-unused-vars */
import React from "react";
import {
  Building2,
  ShoppingCart,
  Code2,
  Wand2,
  LayoutDashboard,
} from "lucide-react";

const defaultSolutions = [
  {
    icon: Building2,
    title: "Business Websites",
    desc: "Professional, high-converting websites designed to represent your brand and generate leads.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Robust online stores built on modern platforms with secure payment gateways and seamless UX.",
  },
  {
    icon: Code2,
    title: "Custom Apps",
    desc: "Tailor-made web applications designed to solve specific business problems and automate workflows.",
  },
  {
    icon: Wand2,
    title: "Redesigns",
    desc: "Modernize your outdated site with fresh aesthetics and improved performance metrics.",
  },
  {
    icon: LayoutDashboard,
    title: "CMS Integration",
    desc: "Easy-to-manage content systems like WordPress, Strapi, or Custom Dashboards.",
  },
];

const SolutionTemplate = ({
  title = "Our Web Development Solutions",
  solutions = defaultSolutions,
  ctaTitle = "Ready to Innovate?",
  ctaText = "Let's discuss your unique requirements today.",
  buttonText = "Get Quote",
  buttonLink = "/contact",
}) => {
  return (
    <section className="w-full bg-[#f4f6f8] py-[60px] px-4 md:px-8 lg:px-[90px]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[42px]">
          <h2 className="text-[#2637e8] text-[28px] md:text-[34px] font-bold">
            {title}
          </h2>
          <div className="w-[70px] h-[4px] bg-[#2637e8] rounded-full mx-auto mt-[12px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-[10px] border border-black/10 p-[26px] min-h-[180px]"
              >
                <div className="w-[42px] h-[42px] rounded-[7px] bg-[#eaf1ff] text-[#5b8cff] flex items-center justify-center mb-[24px]">
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3 className="text-[17px] font-bold text-black mb-[12px]">
                  {item.title}
                </h3>

                <p className="text-[13px] leading-[1.6] text-[#333]">
                  {item.desc}
                </p>
              </div>
            );
          })}

          <div className="bg-[#2637e8] rounded-[10px] p-[26px] min-h-[180px] flex flex-col items-center justify-center text-center text-white">
            <h3 className="text-[19px] font-bold mb-[14px]">{ctaTitle}</h3>

            <p className="text-[13px] leading-[1.5] mb-[20px] max-w-[210px]">
              {ctaText}
            </p>

            <a
              href={buttonLink}
              className="bg-white text-[#2637e8] px-[22px] py-[8px] rounded-[5px] text-[12px] font-semibold"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionTemplate;
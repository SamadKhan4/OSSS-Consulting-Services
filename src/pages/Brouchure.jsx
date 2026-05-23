/* eslint-disable no-unused-vars */
import React from "react";
import { Download } from "lucide-react";

import bg from "../assets/bg.png";

import appDev from "../assets/Broucer/AppDevelopent.png";
import digiMarketing from "../assets/Broucer/Digimarketing.png";
import webDesign from "../assets/Broucer/WebDesign.png";

const brochures = [
  {
    id: 1,
    image: digiMarketing,
    title: "Digital Marketing",
    desc: "Boost your online presence with data-driven strategies, SEO optimization, and social media management aimed at growth.",
    file: digiMarketing,
    fileName: "digital-marketing-brochure.png",
  },
  {
    id: 2,
    image: webDesign,
    title: "Web Design & Development",
    desc: "Modern, responsive, and performance-driven websites tailored to your brand identity and your  business objectives.",
    file: webDesign,
    fileName: "web-design-brochure.png",
  },
  {
    id: 3,
    image: appDev,
    title: "App Development",
    desc: "Native and cross-platform mobile solutions that provide seamless user experiences on iOS and Android devices.",
    file: appDev,
    fileName: "app-development-brochure.png",
  },
];

const Brouchure = () => {
  return (
    <main className="w-full bg-[#f4f6f8]">
      {/* Hero */}
      <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-[34px] font-bold">
          Company Brochure
        </h1>
      </section>

      {/* Brochure Cards */}
      <section className="py-[60px] px-4 md:px-8 lg:px-[90px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-[40px]">
            <span className="inline-block text-[12px] text-[#2637e8] border border-[#2637e8]/30 rounded-full px-4 py-1 mb-4">
              Our Service Brochures
            </span>

            <p className="text-[18px] text-[#222] max-w-[720px] mx-auto leading-[1.35]">
              Explore our comprehensive range of professional services. Download
              our detailed brochures to learn more about our methodologies and
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {brochures.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[12px] border border-black/10 overflow-hidden shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[245px] object-cover object-top"
                />

                <div className="px-[28px] pt-[28px] pb-[26px]">
                  <h3 className="text-[22px] font-bold text-[#111] mb-[18px]">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#555] leading-[1.7] mb-[26px]">
                    {item.desc}
                  </p>

                  <a
                    href={item.file}
                    download={item.fileName}
                    className="w-full h-[46px] rounded-[7px] bg-[#2637e8] text-white text-[14px] font-bold flex items-center justify-center gap-2 hover:bg-[#1d2cc7] transition"
                  >
                    <Download size={16} />
                    Download Brochure
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Brouchure;

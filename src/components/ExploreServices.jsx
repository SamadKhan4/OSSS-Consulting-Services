/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

import webdev from "../assets/Homepage/webdev.png";
import appdev from "../assets/Homepage/appdev.png";
import digimarket from "../assets/Homepage/degimarket.png";
import techsupport from "../assets/Homepage/techsupport.png";

const services = [
  {
    id: 1,
    title: "Web Design & Development",
    short: "Web Development",
    desc: "We create modern, responsive websites and web applications designed to deliver exceptional user experiences and business performance.",
    image: webdev,
    icon: "💻",
    link: "/services/webdev",
  },
  {
    id: 2,
    title: "Mobile App Development",
    short: "Mobile App Development",
    desc: "Our team develops high-performance mobile applications that are scalable, secure, and user-friendly across Android and iOS platforms.",
    image: appdev,
    icon: "📱",
    link: "/services/appdev",
  },
  {
    id: 3,
    title: "Digital Marketing",
    short: "Digital Marketing",
    desc: "We help businesses increase visibility, attract customers, and grow online through strategic SEO, social media marketing, and online advertising.",
    image: digimarket,
    icon: "📣",
    link: "/services/digitalmarketing",
  },
  {
    id: 4,
    title: "Technical Support Services",
    short: "Technical Support",
    desc: "Reliable IT support and maintenance services to ensure your business operations run smoothly and efficiently.",
    image: techsupport,
    icon: "🎧",
    link: "/services/technicalsupport",
  },
];

const ExploreServices = () => {
  const [activeTab, setActiveTab] = useState(1);

  const activeService = services.find((service) => service.id === activeTab);

  return (
    <section className="w-full bg-[#f4f6f8] py-12 px-4 md:px-8 lg:px-[70px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-8">
          <span className="inline-block text-[11px] text-[#2637e8] bg-white px-3 py-1 rounded-full mb-2">
            Explore Services
          </span>

          <h2 className="text-[28px] md:text-[36px] font-bold leading-tight text-black">
            Solutions Designed for <br />
            Digital Growth
          </h2>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-white border border-black/10 rounded-[4px] overflow-hidden mb-5">
          {services.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`h-[58px] flex items-center justify-center text-[15px] md:text-[17px] font-semibold transition ${
                tab.id === activeTab
                  ? "bg-[#2637e8] text-white"
                  : "text-[#222] hover:bg-gray-100"
              }`}
            >
              {tab.id === activeTab && (
                <span className="w-7 h-7 mr-2 rounded-full bg-white/25 flex items-center justify-center text-white">
                  {tab.id}
                </span>
              )}
              {tab.short}
            </button>
          ))}
        </div>

        {/* Active Content */}
        <div className="bg-white rounded-[4px] px-6 md:px-10 py-8 md:py-12 border border-black/10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-[62px] h-[62px] rounded-full bg-[#2637e8] flex items-center justify-center text-white text-[28px] mb-10">
              {activeService.icon}
            </div>

            <h3 className="text-[30px] md:text-[38px] font-semibold leading-tight text-[#151515] mb-7 max-w-[480px]">
              {activeService.title}
            </h3>

            <p className="text-[17px] md:text-[20px] leading-[1.45] font-medium text-black max-w-[560px] mb-9">
              {activeService.desc}
            </p>

            <Link
              to={activeService.link}
              className="inline-flex items-center gap-3 text-[17px] font-semibold text-black hover:text-[#2637e8] transition"
            >
              Learn More
              <span className="w-6 h-6 rounded-full bg-[#2637e8] text-white flex items-center justify-center text-[14px]">
                ↗
              </span>
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={activeService.image}
              alt={activeService.title}
              className="w-full max-w-[420px] h-[260px] md:h-[350px] object-cover rounded-[4px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreServices;
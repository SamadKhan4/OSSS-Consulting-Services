/* eslint-disable no-unused-vars */
import React from "react";
import { Check, Shield, Smartphone, Search } from "lucide-react";

const defaultFeatures = [
  {
    icon: Check,
    title: "Lightning Fast Load Times",
    desc: "Optimized performance to ensure smooth user experience and fast loading.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    desc: "Responsive layouts built for modern mobile devices and desktops.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Strong security practices to keep your data safe and protected.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Improve search engine rankings and increase online visibility.",
  },
];

const KeyFeatures = ({
  title = "Key Features of Our Development",
  image,
  imageTitle = "Web Development Services",
  features = defaultFeatures,
}) => {
  return (
    <section className="w-full bg-[#081226] py-[45px] px-4 md:px-8 lg:px-[90px]">
      <div className="max-w-[1200px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[40px] items-center">

          {/* Left */}
          <div>
            <h2 className="text-white text-[30px] md:text-[36px] font-bold leading-[1.2] mb-[32px]">
              {title}
            </h2>

            <div className="space-y-[22px]">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <div className="mt-[3px]">
                      <Icon
                        size={16}
                        className="text-white"
                        strokeWidth={2.3}
                      />
                    </div>

                    <div>
                      <h3 className="text-white text-[16px] font-semibold mb-[6px]">
                        {item.title}
                      </h3>

                      <p className="text-white/60 text-[13px] leading-[1.7] max-w-[520px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#12244B] rounded-[10px] p-[16px] w-full max-w-[390px]">
              
              <h3 className="text-center text-[#7e93ff] text-[15px] font-semibold mb-[14px]">
                {imageTitle}
              </h3>

              <img
                src={image}
                alt={imageTitle}
                className="w-full h-[240px] rounded-[8px] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

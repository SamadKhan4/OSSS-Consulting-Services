/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../assets/bg.png";
import {
  CircleCheck,
  BarChart3,
  ShieldCheck,
  Shield,
  ArrowRight,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="w-full bg-white">
      <section
        className="w-full min-h-[170px] md:h-[210px] bg-cover bg-center flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-[28px] md:text-[34px] leading-tight font-bold">
          Privacy & Policy
        </h1>
      </section>

      <section className="py-12 md:py-[55px] px-4 md:px-8 lg:px-[100px]">
        <div className="max-w-[1120px] mx-auto space-y-[45px]">
          <Section title="Introduction" number="01">
            <WhiteBox>
              This Privacy Policy describes how OSSS Consulting Services
              collects, uses, and shares your personal information when you visit
              our website or use our professional consulting services.
            </WhiteBox>
          </Section>

          <Section title="Information We Collect" number="02">
            <WhiteBox borderLeft>
              <h3 className="font-bold text-[#111] mb-4">
                Direct Personal Data
              </h3>
              <p>
                We collect information you provide directly to us, including
                your name, email address, phone number, company name, and
                professional credentials when you request a consultation.
              </p>
            </WhiteBox>

            <div className="mt-6">
              <WhiteBox blue>
                <h3 className="font-bold text-[#111] mb-4">
                  Technical Log Data
                </h3>
                <p>
                  When you visit our site, our servers automatically record
                  information including your IP address, browser type, referring
                  pages, and interaction data.
                </p>
              </WhiteBox>
            </div>
          </Section>

          <Section title="How We Use Your Information" number="03">
            <div className="space-y-8">
              <UseItem
                icon={<CircleCheck />}
                title="Service Delivery"
                text="To provide and maintain our consulting services, manage your account, and provide technical support."
              />
              <UseItem
                icon={<BarChart3 />}
                title="Performance Analytics"
                text="To analyze usage patterns and improve our website’s functionality and user experience."
              />
              <UseItem
                icon={<ShieldCheck />}
                title="Security Enforcement"
                text="To protect against fraud, unauthorized transactions, and manage enterprise-level risk."
              />
            </div>
          </Section>

          <Section title="Data Security" number="04">
            <div className="bg-[#2637e8] rounded-[8px] p-5 md:p-[38px] text-white">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-7">
                <Shield size={34} />
                <h3 className="text-[22px] md:text-[28px] leading-tight font-bold">
                  Enterprise-Grade Protection
                </h3>
              </div>

              <p className="text-[15px] md:text-[18px] leading-[1.7] md:leading-[1.6] text-white/90 mb-8">
                We implement industry-standard security measures, including
                256-bit encryption for data at rest and in transit.
              </p>

              <div className="flex flex-wrap gap-4">
                {["SSL/TLS", "AES-256", "ISO 27001"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-white/20 px-5 py-2 rounded-full text-[12px] font-bold tracking-[1px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          <Section title="Your Rights" number="05">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RightBox title="Right to Access" text="Request a copy of the personal data we hold about you at any time." />
              <RightBox title="Right to Rectification" text="Ask us to correct inaccurate or incomplete information." />
              <RightBox title="Right to Erasure" text="Request the permanent deletion of your data from our active systems." />
              <RightBox title="Data Portability" text="Obtain your data in a structured, machine-readable format." />
            </div>
          </Section>

          <div className="bg-[#eaf1ff] rounded-[12px] py-10 md:py-[50px] px-5 md:px-6 text-center">
            <h2 className="text-[28px] md:text-[36px] leading-tight font-extrabold mb-5">
              Have Questions?
            </h2>
            <p className="text-[16px] md:text-[20px] text-[#474c62] max-w-[560px] mx-auto mb-8">
              Our Data Privacy Officer is available to discuss any concerns
              regarding your data sovereignty.
            </p>

            <a
              href="mailto:hr-manager@osssconsultingservices.com"
              className="inline-flex flex-wrap items-center justify-center gap-3 text-[#2637e8] text-[14px] sm:text-[17px] md:text-[20px] font-semibold break-all"
            >
              hr-manager@osssconsultingservices.com
              <ArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

const Section = ({ number, title, children }) => (
  <div>
    <h2 className="text-[26px] sm:text-[30px] md:text-[38px] leading-tight font-extrabold text-[#111] mb-7">
      <span className="text-[#004cff] mr-3 md:mr-5">{number}</span>
      {title}
    </h2>
    {children}
  </div>
);

const WhiteBox = ({ children, borderLeft = false, blue = false }) => (
  <div
    className={`rounded-[6px] p-5 md:p-[38px] text-[16px] md:text-[20px] leading-[1.7] md:leading-[1.65] text-[#474c62] border border-black/15 ${
      blue ? "bg-[#eef3ff]" : "bg-white"
    } ${borderLeft ? "border-l-[5px] border-l-[#2637e8]" : ""}`}
  >
    {children}
  </div>
);

const UseItem = ({ icon, title, text }) => (
  <div className="flex gap-4 md:gap-5 text-[#2637e8]">
    <div className="mt-1 [&>svg]:w-[24px] [&>svg]:h-[24px]">{icon}</div>
    <div>
      <h3 className="text-[#111] text-[18px] md:text-[20px] font-bold mb-2">{title}</h3>
      <p className="text-[#474c62] text-[15px] md:text-[17px]">{text}</p>
    </div>
  </div>
);

const RightBox = ({ title, text }) => (
  <div className="border border-black/20 rounded-[4px] p-5 md:p-[30px]">
    <h3 className="text-[18px] md:text-[20px] font-bold text-[#111] mb-3">{title}</h3>
    <p className="text-[15px] text-[#474c62] leading-[1.5]">{text}</p>
  </div>
);

export default PrivacyPolicy;

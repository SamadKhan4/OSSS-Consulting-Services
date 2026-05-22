/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../assets/bg.png";
import { Globe, BookOpen, BadgeCheck } from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="w-full bg-white">
      <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-[34px] font-bold">Write For Us</h1>
      </section>

      <section className="py-[55px] px-4 md:px-8 lg:px-[100px]">
        <div className="max-w-[1120px] mx-auto">
          <div className="text-center mb-[36px]">
            <span className="text-[11px] text-[#2637e8] border border-[#2637e8]/25 rounded-full px-3 py-1">
              Write For Us
            </span>

            <p className="mt-4 text-[14px] text-[#222]">
              Join our community of thought leaders and industry experts to
              expand your reach and influence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px] mb-[55px]">
            <InfoCard icon={<Globe size={18} />} title="Global Reach" text="Your content will be exposed to our vast network of industry professionals, decision-makers, and technology enthusiasts worldwide." />
            <InfoCard icon={<BookOpen size={18} />} title="Voice Matters" text="We value unique perspectives. Whether you're an established pro or a rising star, we give you a platform to express your ideas freely." />
            <InfoCard icon={<BadgeCheck size={18} />} title="Showcase Expertise" text="Build your personal brand and establish yourself as an authority in your niche by publishing high-quality, relevant content." />
          </div>

          <h2 className="text-center text-[22px] font-bold mb-[30px]">
            Submission Guideline
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[70px] gap-y-[24px] mb-[55px]">
            <Guide title="Originality" text="We only accept 100% original content that has not been published elsewhere, including your personal blog. Content must pass plagiarism checks." />
            <Guide title="Relevance" text="Topics should be related to IT services, web development, digital marketing, app development, or business consulting strategies." />
            <Guide title="Quality & Value" text="Articles must be well-researched, providing actionable insights or deep analysis. Avoid fluff or purely promotional content." />
            <Guide title="Length & Formatting" text="Submissions should be between 800–1500 words. Use clear headings, bullet points, and short paragraphs for readability." />
            <Guide title="Tone" text="Maintain a professional yet conversational tone. Articles should be educational and engaging for a B2B audience." />
            <Guide title="Media" text="Include high-quality images or charts if they add value. Ensure you have the rights to any images provided with your submission." />
          </div>

          <h2 className="text-center text-[22px] font-bold mb-[26px]">
            How to Submit
          </h2>

          <div className="max-w-[620px] mx-auto bg-[#0F172A] text-white rounded-[8px] px-[42px] py-[30px] text-center">
            <p className="text-[13px] leading-[1.6] mb-6">
              Send your pitch or completed draft to our editorial team via email.
              We typically respond within 3–5 business days.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left mb-6">
              <div>
                <p className="text-[#6d8cff] text-[11px] font-bold mb-1">
                  EMAIL ADDRESS
                </p>
                <p className="text-[12px]">hr-manager@osssconsultingservices.com</p>
              </div>

              <div>
                <p className="text-[#6d8cff] text-[11px] font-bold mb-1">
                  SUBJECT LINE
                </p>
                <p className="text-[12px]">Guest Post Pitch: [Your Topic Name]</p>
              </div>
            </div>

            <div className="bg-[#12244B] rounded-[4px] border border-[#334155]-2 rounded-[10px] py-3 text-[12px]">
              Please include a brief bio, 2–3 writing samples, and links to your previous work.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-[#f5f6fa] rounded-[8px] p-[24px] min-h-[150px]">
    <div className="w-[32px] h-[32px] rounded-full bg-[#e8e9ff] text-[#2637e8] flex items-center justify-center mb-5">
      {icon}
    </div>
    <h3 className="text-[14px] font-bold mb-2">{title}</h3>
    <p className="text-[12px] leading-[1.5] text-[#333]">{text}</p>
  </div>
);

const Guide = ({ title, text }) => (
  <div>
    <h3 className="text-[14px] font-bold mb-2">• {title}</h3>
    <p className="text-[12px] leading-[1.55] text-[#333]">{text}</p>
  </div>
);

export default WriteForUs;
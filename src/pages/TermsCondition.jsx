/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../assets/bg.png";
import { CircleCheck } from "lucide-react";

const TermsCondition = () => {
  return (
    <main className="w-full bg-white">
      <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-[34px] font-bold">
          Terms & Condition
        </h1>
      </section>

      <section className="py-[55px] px-4 md:px-8 lg:px-[100px]">
        <div className="max-w-[1120px] mx-auto space-y-[45px]">
          <TermBlock number="01" title="Acceptance of Terms">
            <p>
              By accessing or using the services provided by OSSS Consulting
              Services, you agree to be bound by these Terms and Conditions.
              These terms govern all consulting engagements, software
              development projects, and strategic advisory sessions provided by
              our firm.
            </p>

            <ul className="mt-6 space-y-4">
              <CheckItem text="Agreement applies to all digital assets, physical consultations, and proprietary methodologies." />
              <CheckItem text="Continued use of services after updates constitutes acceptance of revised terms." />
            </ul>
          </TermBlock>

          <div>
            <SectionTitle number="02" title="Services & Expertise" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              <InfoCard
                title="Technical Architecture"
                text="Design and implementation of scalable enterprise systems, cloud infrastructure, and cybersecurity protocols."
              />
              <InfoCard
                title="Strategic Consulting"
                text="High-level advisory on digital transformation, operational efficiency, and market entry strategies."
              />
            </div>
          </div>

          <div>
            <SectionTitle number="03" title="Payments & Pricing" />

            <div className="bg-white border border-black/15 rounded-[6px] p-[38px]">
              <div className="grid grid-cols-2 text-[#2637e8] text-[15px] font-bold uppercase tracking-[2px] mb-5">
                <div>Engagement Type</div>
                <div>Billing Cycle</div>
              </div>

              {[
                ["Project-Based", "Milestone-driven (30/40/30)"],
                ["Retainer Model", "Monthly In-Advance"],
                ["Ad-hoc Advisory", "Hourly, Billed Bi-weekly"],
              ].map(([left, right], index) => (
                <div
                  key={left}
                  className={`grid grid-cols-2 text-[17px] text-[#474c62] px-3 py-5 ${
                    index % 2 === 0 ? "bg-[#f6f7fc]" : "bg-white"
                  }`}
                >
                  <div>{left}</div>
                  <div>{right}</div>
                </div>
              ))}

              <p className="text-[15px] text-[#747b92] mt-8">
                Late payments exceeding 15 days are subject to a 2.5% monthly
                compound interest fee as per industry standards.
              </p>
            </div>
          </div>

          <TermBlock number="04" title="Limitation of Liability" highlight>
            <p>
              To the maximum extent permitted by applicable law, OSSS Consulting
              Services shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses,
              resulting from (i) your access to or use of or inability to access
              or use the services; (ii) any conduct or content of any third party
              on the services.
            </p>
          </TermBlock>

          <TermBlock number="05" title="Termination">
            <p>
              Either party may terminate the engagement with a written notice of
              30 days. Upon termination, all outstanding fees for work completed
              up to the date of termination shall become immediately due and
              payable.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "CONFIDENTIALITY SURVIVAL",
                "IP TRANSFER PROTOCOL",
                "EXIT INTERVIEW",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#dbe7ff] text-[#5b6782] text-[12px] font-bold tracking-[1px] px-5 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </TermBlock>
        </div>
      </section>
    </main>
  );
};

const SectionTitle = ({ number, title }) => (
  <h2 className="text-[34px] md:text-[38px] font-extrabold text-[#111] mb-7">
    <span className="text-[#004cff] mr-5">{number}</span>
    {title}
  </h2>
);

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-4 text-[#474c62]">
    <CircleCheck size={16} className="text-[#004cff] mt-[5px]" />
    <span>{text}</span>
  </li>
);

const TermBlock = ({ number, title, children, highlight = false }) => (
  <div>
    <SectionTitle number={number} title={title} />

    <div
      className={`rounded-[6px] p-[38px] text-[20px] leading-[1.65] text-[#474c62] ${
        highlight
          ? "bg-[#eef3ff] border-l-[5px] border-[#2637e8]"
          : "bg-white border border-black/15"
      }`}
    >
      {children}
    </div>
  </div>
);

const InfoCard = ({ title, text }) => (
  <div className="bg-[#eef3ff] rounded-[4px] p-[34px] min-h-[160px]">
    <h3 className="text-[#2637e8] text-[22px] font-bold mb-4">{title}</h3>
    <p className="text-[18px] leading-[1.6] text-[#474c62]">{text}</p>
  </div>
);

export default TermsCondition;
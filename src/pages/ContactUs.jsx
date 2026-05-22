/* eslint-disable no-unused-vars */
import React from "react";
import bg from "../assets/bg.png";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <main className="w-full bg-white">
      {/* Hero */}
      <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="text-white text-[34px] font-bold">
          Contact Us - OSS Consulting Services
        </h1>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-white py-[55px] px-4 md:px-8 lg:px-[100px]">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-center mb-[35px]">
            <span className="inline-block text-[11px] text-[#2637e8] border border-[#2637e8]/25 rounded-full px-3 py-1 mb-3">
              Contact Us
            </span>

            <h2 className="text-[30px] font-bold text-[#1b1b1b]">
              Fell free contact us today and get your solution
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-[30px]">
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px]">
              <div className="bg-[#f4f4f7] rounded-[10px] p-[28px] min-h-[190px]">
                <IconBox icon={<MapPin size={18} />} />
                <h3 className="text-[15px] font-bold mt-6 mb-4">
                  Office Address
                </h3>
                <p className="text-[13px] leading-[1.4] text-black">
                  Plot No 47, 3rd Floor, Corporation House, 3379/47, Mankapur
                  Ring Rd, Pratap Nagar, Nagpur, Maharashtra 440026
                </p>
              </div>

              <div className="bg-[#f4f4f7] rounded-[10px] p-[28px] min-h-[190px]">
                <IconBox icon={<Phone size={18} />} />
                <h3 className="text-[15px] font-bold mt-6 mb-4">
                  Phone Number
                </h3>
                <p className="text-[13px] leading-[1.4] text-black mb-4">
                  Call us for quick assistance and consultation.
                </p>
                <p className="text-[13px] text-black">9912135070</p>
              </div>

              <div className="bg-[#f4f4f7] rounded-[10px] p-[28px] min-h-[190px]">
                <IconBox icon={<Mail size={18} />} />
                <h3 className="text-[15px] font-bold mt-6 mb-4">
                  Email Address
                </h3>
                <p className="text-[13px] leading-[1.4] text-black mb-4">
                  Send us your queries and our team will respond as soon as
                  possible.
                </p>
                <p className="text-[13px] break-all text-black">
                  hr-manager@osssconsultingservices.com
                </p>
              </div>

              <div className="bg-[#f4f4f7] rounded-[10px] p-[28px] min-h-[190px]">
                <IconBox icon={<Clock size={18} />} />
                <h3 className="text-[15px] font-bold mt-6 mb-4">
                  Working Hours
                </h3>
                <p className="text-[13px] leading-[1.5] text-black">
                  Monday – Saturday: 10:00 AM – 7:00 PM
                </p>
                <p className="text-[13px] text-red-500 mt-5">
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Form */}
            <form className="bg-white rounded-[10px] border border-black/10 p-[26px]">
              <FormInput label="Name" placeholder="Enter your full name" />
              <FormInput label="Email" placeholder="Enter your email" />
              <FormInput label="Phone" placeholder="Enter your phone number" />

              <div className="mb-[18px]">
                <label className="block text-[13px] font-semibold mb-2">
                  Comment
                </label>
                <textarea
                  placeholder="comment"
                  className="w-full h-[110px] rounded-[6px] border border-black/20 px-4 py-3 text-[13px] outline-none focus:border-[#2637e8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-[40px] rounded-[6px] bg-[#2637e8] text-white text-[13px] font-medium mt-[55px]"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

const IconBox = ({ icon }) => {
  return (
    <div className="w-[34px] h-[34px] rounded-full bg-[#e8e9ff] text-[#2637e8] flex items-center justify-center">
      {icon}
    </div>
  );
};

const FormInput = ({ label, placeholder }) => {
  return (
    <div className="mb-[16px]">
      <label className="block text-[13px] font-semibold mb-2">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-[40px] rounded-[6px] border border-black/20 px-4 text-[13px] outline-none focus:border-[#2637e8]"
      />
    </div>
  );
};

export default ContactUs;
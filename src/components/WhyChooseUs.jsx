/* eslint-disable no-unused-vars */
import React from "react";
import { Users, Lightbulb, Rocket, Handshake } from "lucide-react";
import WhyChooseTemplate from "./WhyChooseTemplate";

const whyChooseItems = [
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

const WhyChooseUs = () => {
  return (
    <WhyChooseTemplate
      badge="Why Choose Us"
      title="Delivering Innovation, Quality, and Results"
      items={whyChooseItems}
    />
  );
};

export default WhyChooseUs;
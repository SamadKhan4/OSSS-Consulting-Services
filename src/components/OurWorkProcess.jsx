/* eslint-disable no-unused-vars */
import React from "react";
import WorkProcessTemplate from "./WorkProcessTemplate";
import workProcessBg from "../assets/ourworkprocessbg.png";

const steps = [
  {
    number: "01.",
    title: "Discovery & Consultation",
    desc: "Understanding your business goals, challenges, and project requirements.",
  },
  {
    number: "02.",
    title: "Strategy & Planning",
    desc: "Creating a clear roadmap and technical strategy for successful project execution.",
  },
  {
    number: "03.",
    title: "Development & Testing",
    desc: "Designing, building, and testing high-quality digital solutions to ensure performance and reliability.",
  },
  {
    number: "04.",
    title: "Launch & Ongoing Support",
    desc: "Deploying the solution and providing continuous support, maintenance, and improvements.",
  },
];

const OurWorkProcess = () => {
  return (
    <WorkProcessTemplate
      bgImage={workProcessBg}
      badge="Our Work Process"
      title="How We Deliver Successful"
      highlight="Solutions"
      steps={steps}
    />
  );
};

export default OurWorkProcess;
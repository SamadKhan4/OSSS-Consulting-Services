/* eslint-disable no-unused-vars */
import React from 'react'

import bg from "../../assets/bg.png";
import webImage from "../../assets/ServicePage/MobileHero.png";

import KeyFeatures from "../../components/Services/KeyFeatures";
import SolutionTemplate from "../../components/Services/SolutionTemplate";
import OurWorkProcess from "../../components/OurWorkProcess";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import Appkey from "../../assets/Keyfeature/appdev.png"
import {
  Zap,
  Smartphone,
  Shield,
  Search,
  Building2,
  ShoppingCart,
  Code2,
  Wand2,
  LayoutDashboard,
} from "lucide-react";
import ServiceHero from "../../components/Services/ServiceHero";
const Appdev = () => {
   return (
    <main className="w-full bg-[#f4f6f8]">
{/* Hero */}
        <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
        >
        <h1 className="text-white text-[34px] font-bold">App Development Services</h1>
      </section>
    

      <ServiceHero
        image={webImage}
        badge="Services"
        title="Mobile App Development Services"
        description="
          At OSSS Consulting Services, we develop high-performance mobile applications that help businesses connect with customers, improve engagement, and streamline operations. Our team builds secure, scalable, and user-friendly apps designed to deliver exceptional experiences across Android and iOS platforms.
            "
        description1="Whether you need a business app, e-commerce app, or custom mobile solution, we create applications tailored to your business needs and goals."
      />

      {/* Key Features */}
      <KeyFeatures
        title="Key Features of Our Development"
        image={Appkey}
        imageTitle="App Development Services"
        features={[
          {
            icon: Zap,
            title: "User-friendly and intuitive design",
            desc: "Simple and intuitive interfaces for a smooth user experience.",
          },
          {
            icon: Smartphone,
            title: "Fast and responsive performance",
            desc: "Optimized speed and responsiveness across all devices.",
          },
          {
            icon: Shield,
            title: "Secure and scalable architecture",
            desc: "Built with strong security and designed to grow with your business.",
          },
          {
            icon: Search,
            title: "Easy maintenance and updates",
            desc: "Flexible structure for quick updates and easy management.",
          },
        ]}
      />

      {/* Solutions */}
      <SolutionTemplate
        title="Our Web Development Solutions"
        solutions={[
          {
            icon: Building2,
            title: "Android App Development",
            desc:
              "Custom Android applications built for performance, usability, and scalability.",
          },
          {
            icon: ShoppingCart,
            title: "iOS App Development",
            desc:
              "High-quality iOS applications designed to deliver smooth and secure user experiences.",
          },
          {
            icon: Code2,
            title: "Cross-Platform App Development",
            desc:
              " Cost-effective apps that work seamlessly across multiple platforms using modern frameworks.",
          },
          {
            icon: Wand2,
            title: "Custom Mobile Applications",
            desc:
              "Tailored mobile solutions developed to meet unique business requirements.",
          },
          {
            icon: LayoutDashboard,
            title: "App UI/UX Design",
            desc:
              "Modern and intuitive app interfaces that enhance user experience and engagement.",
          },
        ]}
        ctaTitle="Ready to Innovate?"
        ctaText="Let's discuss your unique requirements today."
        buttonText="Get Quote"
        buttonLink="/contact"
      />

      <OurWorkProcess />

      <WhyChooseUs />

      <Testimonials />

    </main>
  );
};
export default Appdev
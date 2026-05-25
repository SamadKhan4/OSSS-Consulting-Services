/* eslint-disable no-unused-vars */
import React from 'react'

import bg from "../../assets/bg.png";
import webImage from "../../assets/ServicePage/technical.png";

import KeyFeatures from "../../components/Services/KeyFeatures";
import SolutionTemplate from "../../components/Services/SolutionTemplate";
import OurWorkProcess from "../../components/OurWorkProcess";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import Appkey from "../../assets/Keyfeature/Tech.png"
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


const TechnicalSupport = () => {
   return (
    <main className="w-full bg-[#f4f6f8]">
{/* Hero */}
        <section
        className="w-full min-h-[170px] md:h-[210px] bg-cover bg-center flex items-center justify-center px-4 text-center"
        style={{ backgroundImage: `url(${bg})` }}
        >
        <h1 className="text-white text-[26px] md:text-[34px] leading-tight font-bold">Technical Support Services</h1>
      </section>
    

      <ServiceHero
        image={webImage}
        badge="Services"
        title="Technical Support Services"
        description="
         At OSSS Consulting Services, we provide dependable technical support services to ensure your business systems, websites, and digital platforms operate smoothly. Our team of experts offers quick troubleshooting, system maintenance, and ongoing IT assistance to minimize downtime and keep your business running efficiently.
          "
        description1="We focus on delivering reliable technical solutions that help businesses maintain productivity and ensure seamless digital operations."
      />

      {/* Key Features */}
      <KeyFeatures
        title="Key Features of Our Technical Support Services"
        image={Appkey}
        imageTitle="Technical Support Services"
        features={[
          {
            icon: Zap,
            title: "Fast Technical Support",
            desc: "Reliable assistance whenever you need it.",
          },
          {
            icon: Smartphone,
            title: "Proactive Monitoring",
            desc: "Continuous system monitoring to prevent issues.",
          },
          {
            icon: Shield,
            title: "Regular Maintenance",
            desc: "Timely updates to keep systems running smoothly.",
          },
          {
            icon: Search,
            title: "Quick Issue Resolution",
            desc: "Fast troubleshooting to minimize downtime.",
          },
        ]}
      />

      {/* Solutions */}
      <SolutionTemplate
        title="Our Technical Support Solutions"
        solutions={[
          {
            icon: Building2,
            title: "IT System Support",
            desc:
              "Comprehensive support for business systems to ensure smooth and efficient operations.",
          },
          {
            icon: ShoppingCart,
            title: "Website Maintenance & Support",
            desc:
              "Regular updates, monitoring, and maintenance to keep your website secure and fully functional.",
          },
          {
            icon: Code2,
            title: "Troubleshooting & Issue Resolution",
            desc:
              " Quick identification and resolution of technical problems to reduce downtime.",
          },
          {
            icon: Wand2,
            title: "Software & Application Support",
            desc:
              "Support for business applications and software systems to ensure optimal performance.",
          },
          {
            icon: LayoutDashboard,
            title: "System Monitoring & Maintenance",
            desc:
              "Continuous monitoring to detect and resolve issues before they affect operations.",
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
}

export default TechnicalSupport

/* eslint-disable no-unused-vars */
import React from "react";

import bg from "../../assets/bg.png";
import webImage from "../../assets/ServicePage/webdevHero.png";

import KeyFeatures from "../../components/Services/KeyFeatures";
import SolutionTemplate from "../../components/Services/SolutionTemplate";
import OurWorkProcess from "../../components/OurWorkProcess";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import WebKey from "../../assets/Keyfeature/Webdev.png"
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

const Webdev = () => {
  return (
    <main className="w-full bg-[#f4f6f8]">
{/* Hero */}
        <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
        >
        <h1 className="text-white text-[34px] font-bold">Web Development Services</h1>
      </section>
    

      <ServiceHero
        image={webImage}
        badge="Services"
        title="Web Development Services"
        description="
           At OSSS Consulting Services, we create modern, responsive, and high-performance websites that help businesses establish a strong online presence. Our web development solutions are designed to deliver exceptional user experiences, improve engagement, and support business growth.
            "
        description1="Whether you need a business website, e-commerce platform, or custom web application, our team develops scalable solutions tailored to your specific requirements."
      />

      {/* Key Features */}
      <KeyFeatures
        title="Key Features of Our Development"
        image={WebKey}
        imageTitle="Web Development Services"
        features={[
          {
            icon: Zap,
            title: "Lightning Fast Load Times",
            desc: "Optimized for Core Web Vitals to ensure zero bounce rates due to speed.",
          },
          {
            icon: Smartphone,
            title: "Mobile-First Approach",
            desc: "Responsive layouts that look stunning on smartphones, tablets, and desktops.",
          },
          {
            icon: Shield,
            title: "Enterprise Security",
            desc: "Advanced security protocols to protect your data and your users' privacy.",
          },
          {
            icon: Search,
            title: "SEO Optimization",
            desc: "Built-in search engine optimization to help your site rank higher from day one.",
          },
        ]}
      />

      {/* Solutions */}
      <SolutionTemplate
        title="Our Web Development Solutions"
        solutions={[
          {
            icon: Building2,
            title: "Business Websites",
            desc:
              "Professional, high-converting websites designed to represent your brand and generate leads .",
          },
          {
            icon: ShoppingCart,
            title: "E-commerce",
            desc:
              "Robust online stores built on modern platforms with secure payment gateways and seamless UX.",
          },
          {
            icon: Code2,
            title: "Custom Apps",
            desc:
              " Tailor-made web applications designed to solve specific business problems and automate workflows.",
          },
          {
            icon: Wand2,
            title: "Redesigns",
            desc:
              "Modernize your outdated site with fresh aesthetics and improved performance metrics.",
          },
          {
            icon: LayoutDashboard,
            title: "CMS Integration",
            desc:
              "Easy-to-manage content systems like WordPress, Strapi, or Custom Dashboards.",
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

export default Webdev;
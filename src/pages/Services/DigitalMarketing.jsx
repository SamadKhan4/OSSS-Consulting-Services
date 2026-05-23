/* eslint-disable no-unused-vars */
import React from 'react'

import bg from "../../assets/bg.png";
import webImage from "../../assets/ServicePage/Digimarketing.png";

import KeyFeatures from "../../components/Services/KeyFeatures";
import SolutionTemplate from "../../components/Services/SolutionTemplate";
import OurWorkProcess from "../../components/OurWorkProcess";
import WhyChooseUs from "../../components/WhyChooseUs";
import Testimonials from "../../components/Testimonials";
import Appkey from "../../assets/Keyfeature/Digi.png"
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

const DigitalMarketing = () => {
   return (
    <main className="w-full bg-[#f4f6f8]">
{/* Hero */}
        <section
        className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
        >
        <h1 className="text-white text-[34px] font-bold">Digital Marketing Services</h1>
      </section>
    

      <ServiceHero
        image={webImage}
        badge="Services"
        title="Digital Marketing Services"
        description="
         At OSSS Consulting Services, we provide strategic digital marketing solutions that help businesses increase online visibility, attract more customers, and grow their brand. Our team uses modern marketing techniques and data-driven strategies to deliver measurable results and long-term growth.
            "
        description1="Whether you want to improve your search rankings, build your social media presence, or generate quality leads, our digital marketing services are designed to help your business succeed in the competitive online marketplace."
      />

      {/* Key Features */}
      <KeyFeatures
        title="Key Features of Our Digital Marketing Services"
        image={Appkey}
        imageTitle="Digital Marketing Services"
        features={[
          {
            icon: Zap,
            title: "Data-driven marketing strategies",
            desc: "Marketing decisions based on real data and insights.",
          },
          {
            icon: Smartphone,
            title: "Improved search engine rankings",
            desc: "Improved visibility on search engines.",
          },
          {
            icon: Shield,
            title: "Increased website traffic and leads",
            desc: "Attract more visitors and convert them into customers.",
          },
          {
            icon: Search,
            title: "Targeted audience engagement",
            desc: "Reach the right audience with effective campaigns.",
          },
        ]}
      />

      {/* Solutions */}
      <SolutionTemplate
        title="Our Digital Marketing Solutions"
        solutions={[
          {
            icon: Building2,
            title: "Search Engine Optimization (SEO)",
            desc:
              "Improve your website’s visibility on search engines and attract organic traffic with effective SEO strategies.",
          },
          {
            icon: ShoppingCart,
            title: "Social Media Marketing",
            desc:
              "Build strong brand awareness and connect with your audience through strategic social media campaigns.",
          },
          {
            icon: Code2,
            title: "Pay-Per-Click Advertising (PPC)",
            desc:
              " Drive targeted traffic and generate leads quickly with optimized paid advertising campaigns.",
          },
          {
            icon: Wand2,
            title: "Content Marketing",
            desc:
              "Create engaging and valuable content that helps attract, inform, and convert potential customers.",
          },
          {
            icon: LayoutDashboard,
            title: "Email Marketing",
            desc:
              "Reach your customers directly with personalized email campaigns that increase engagement and conversions.",
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

export default DigitalMarketing
/* eslint-disable no-unused-vars */
import React from 'react'
import bg from "../../assets/bg.png";
import ExploreServices from '../../components/ExploreServices';
import OurWorkProcess from '../../components/OurWorkProcess';
import WhyChooseUs from '../../components/WhyChooseUs';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/Common/CTA';

const Services = () => {
  return (
    <main className="w-full bg-[#f4f6f8]">
    {/* Hero */}
      <section
            className="w-full min-h-[170px] md:h-[210px] bg-cover bg-center flex items-center justify-center px-4 text-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <h1 className="text-white text-[28px] md:text-[34px] leading-tight font-bold">Services</h1>
      </section>

    {/* Services Content */}
    <ExploreServices />

    {/* Our Process Content */}
    <OurWorkProcess />

    {/* Why Choose Us Content */}
    <WhyChooseUs />

    {/* Testimonials Content */}
    <Testimonials />

    {/* Call to Action Content */}
    <CTA />
    </main>
  )
}

export default Services

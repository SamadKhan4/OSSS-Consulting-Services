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
            className="w-full h-[210px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <h1 className="text-white text-[34px] font-bold">Services</h1>
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
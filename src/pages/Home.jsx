/* eslint-disable no-unused-vars */
import React from 'react'
import Hero from '../components/HomeSection/HeroSection'
import StatsBar from '../components/Statsbar'
import AboutUs from '../components/AboutUs'
import ExploreServices from '../components/ExploreServices'
import OurWorkProcess from '../components/OurWorkProcess'
import WhyChooseTemplate from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import BlogComponent from '../components/BlogComponent'


const Home = () => {
  return (
    <div>
        <Hero />
        <StatsBar />
        <AboutUs />
        <ExploreServices />
        <OurWorkProcess />
        <WhyChooseTemplate />  
        <Testimonials />
        <BlogComponent />
    </div>
  )
}

export default Home



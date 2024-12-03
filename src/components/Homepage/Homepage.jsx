import React from 'react'
import Header from '../Homepagecomponets/Header'
import Hero from '../Homepagecomponets/Hero'
import WhyChooseUs from '../Homepagecomponets/WhyChooseUs'
import WhoWeAre from '../Homepagecomponets/WhoWeAre'
import Services from '../Homepagecomponets/Services'
import BecomeAnAgent from '../Homepagecomponets/BecomeAnAgent'
import DataPlans from '../Homepagecomponets/DataPlans'
import Testimonials from '../Homepagecomponets/Testimonials'
import Footer from '../Homepagecomponets/Footer'

const Homepage = () => {
  return (
    <>
    <div className="font-sans">
      <Header/>
      <div id="scroll-container">
        <section id="home">
          <Hero/>        
        </section>
        <section id="features">
          <WhyChooseUs/>
        </section>
        <section id="about">
          <WhoWeAre/>
        </section>
        <section id="services">
          <Services/>
          <BecomeAnAgent/>
        </section>
        <section id="price">
          <DataPlans/>
        </section>
        <section id="testimonial">
          <Testimonials/>
        </section>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Homepage
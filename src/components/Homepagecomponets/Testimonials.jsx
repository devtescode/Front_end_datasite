import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import mobileLogo from '../../assets/Images/mobile.png';
import airtelLogo from '../../assets/Images/airtel.png';
import gloLogo from '../../assets/Images/glo.jpg';
import mtnLogo from '../../assets/Images/mtn.webp';

const testimonials = [
  { logo: mtnLogo, alt: 'MTN logo' },
  { logo: airtelLogo, alt: 'Airtel logo' },
  { logo: gloLogo, alt: 'Glo logo' },
  { logo: mobileLogo, alt: '9mobile logo' },
];


const Testimonials = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Lots of Customers Love Us</h2>
        <div className="row justify-content-center text-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3 mb-4"
              style={{ y: yRange, opacity: opacityRange }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
              style={{height:"100px", width:"100px"}}
                // src={`/placeholder.svg?height=100&width=100&text=${testimonial.logo}`}
                src={testimonial.logo}
                alt={testimonial.alt}
                className="img-fluid"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;


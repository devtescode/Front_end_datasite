import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  { logo: '9mobile', alt:'9mobile', alt: '9mobile logo' },
  { logo: 'airtel', alt: 'Airtel logo' },
  { logo: 'smile', alt: 'Smile logo' },
  { logo: 'mtn', alt: 'MTN logo' },
];

const Testimonials = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
    <section className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Lots of Customers Love Us</h2>
        <div className="row justify-content-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-3 mb-4"
              style={{ y: yRange, opacity: opacityRange }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={`/placeholder.svg?height=100&width=100&text=${testimonial.logo}`}
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


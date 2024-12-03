import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { icon: '📱', title: 'Buy Data' },
  { icon: '💼', title: 'Fund wallets' },
  { icon: '📞', title: 'Buy Airtime' },
];

const Services = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="col-md-4 mb-4"
              style={{ y: yRange, opacity: opacityRange }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="card text-center h-100">
                <div className="card-body">
                  <div className="display-4 mb-3">{service.icon}</div>
                  <h3 className="card-title">{service.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;


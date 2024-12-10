import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroImage from "../../assets/Images/Hero.png";

const features = [
  "We're Fast",
  "Automated Service",
  "Fast Customer Care Response",
  "100% Secure",
  "We Are Reliable",
];

const WhoWeAre = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6"
            style={{ y: yRange, opacity: opacityRange }}
          >
            <h2 className="mb-4">WHO WE ARE</h2>
            <p className="mb-4">
              We are among the leading telecommunication companies in Nigeria. We use cut-edge technology to carry out our operations. Our data delivery, airtime purchase and wallet funding are done automatically.
            </p>
            <ul className="list-unstyled">
              {features.map((feature, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary mt-4">Buy Services</button>
          </motion.div>
          <motion.div
            className="col-md-6"
            style={{ y: yRange, opacity: opacityRange }}
          >
            <img src={HeroImage} alt="Who We Are" className="img-fluid rounded" />
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhoWeAre;


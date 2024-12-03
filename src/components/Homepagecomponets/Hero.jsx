import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import HeroImage from "../../assets/Images/Hero.png";
import "./Hero.css";

const Hero = () => {
  const { yRange, opacityRange } = useScrollAnimation();
  const [currentText, setCurrentText] = useState("Welcome To DATASUB");

  const messages = [
    "Welcome To DATASUB",
    "Nigeria's Leading Provider of Telecommunication Services",
    "Connecting Nigeria, Seamlessly",
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setCurrentText(messages[index]);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [messages]);

  return (
    <section id="home" className=" text-white py-5" style={{ height: "100vh", backgroundColor:"#00838d" }}>
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Left side: Text with scroll animation */}
          <motion.div
            className="col-md-6 text-center text-md-start"
            style={{ transform: `translateY(${yRange}px)`, opacity: opacityRange }}
          >
            <h1 className="fw-bold mb-4 display-5">{currentText}</h1>
            <p className="lead mb-4">
            We are a licensed telecommunications provider offering services for voice and data transmission, including mobile data and airtime (VTU).
            </p>
            <div>
              <button className="btn btn-warning me-3">Login</button>
              <button className="btn btn-success">Register</button>
            </div>
          </motion.div>

          {/* Right side: Image without scroll animation */}
          <div className="col-md-6 mt-5 mt-sm-0 text-center">
            <img
              src={HeroImage}
              alt="Hero"
              className="img-fluid rounded-circle"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover', // Ensures the image covers the container area without distortion
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

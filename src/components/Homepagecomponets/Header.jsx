import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate()
  const LoginBtn=()=>{
    navigate('/login')
  }
  return (
    <>
    <motion.header
      className="bg-white shadow"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 30 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand text-primary fs-3 fw-bold" href="#">DataSub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">Price</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">Testimonial</a>
              </li>
            </ul>
            <button className="btn btn-primary ms-3" onClick={LoginBtn}>Login</button>
          </div>
        </div>
      </nav>
    </motion.header>
    </>
  );
};

export default Header;




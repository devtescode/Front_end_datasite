import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h3 className="h5 mb-3">DataSub</h3>
            <p>Your reliable plug for virtual top up, data subscription, and more.</p>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="h6 mb-3">Links</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Home</a></li>
              <li><a href="#" className="text-white-50">About</a></li>
              <li><a href="#" className="text-white-50">Features</a></li>
              <li><a href="#" className="text-white-50">Services</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="h6 mb-3">Products</h4>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white-50">Register</a></li>
              <li><a href="#" className="text-white-50">Login</a></li>
              <li><a href="#" className="text-white-50">Buy Data</a></li>
              <li><a href="#" className="text-white-50">Buy Airtime</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h4 className="h6 mb-3">Support</h4>
            <ul className="list-unstyled">
              <li>DataSub@gmail.com</li>
              <li>08064864821</li>
              <li>Ibadan/Ogbomosho Expressway, Nigeria</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;


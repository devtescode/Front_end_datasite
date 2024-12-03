import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import "./WhyChooseUs.css"
const reasons = [
  { icon: '🤖', title: 'Automated System', description: 'Our service delivery and wallet funding is automated.' },
  { icon: '💬', title: '24/7 Live Chat', description: 'Our customers are premium to us, hence we are always available.' },
  { icon: '💳', title: 'E-wallet System', description: 'Your e-wallet is the safest, easiest and fastest means of transacting.' },
];

const WhyChooseUs = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>
          <div className="row">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                className="col-md-4 mb-4"
                style={{ y: yRange, opacity: opacityRange }}
                transition={{ delay: index * 0.2 }}
              >
                {/* <div className="card h-100">
                  <div className="card-body">
                    <div className="display-4 mb-3">{reason.icon}</div>
                    <h3 className="card-title">{reason.title}</h3>
                    <p className="card-text">{reason.description}</p>
                  </div>
                </div> */}

                <div class="cardwhytochooesus  h-100">
                  <a class="card1 card-body col-md-12 col-sm-12" href="#">
                  <div className="display-5 mb-3 text-center">{reason.icon}</div>
                    <h4 className="card-title text-center title">{reason.title}</h4>
                    <p className="card-text">{reason.description}</p>
                    <div class="go-corner" href="#">
                      <div class="go-arrow">
                        →
                      </div>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;


import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BecomeAnAgent = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <motion.div
            className="col-md-6"
            style={{ y: yRange, opacity: opacityRange }}
          >
            <img src="/placeholder.svg?height=400&width=400&text=Become+An+Agent" alt="Become An Agent" className="img-fluid rounded" />
          </motion.div>
          <motion.div
            className="col-md-6"
            style={{ y: yRange, opacity: opacityRange }}
          >
            <h2 className="mb-4">Become An Agent</h2>
            <p className="mb-4">
              Join our network of outstanding entrepreneurs partnering with Dancity. Bring the Dancity 'easy-payments' experience closer to your network and earn a commission for every transaction you perform for your customers.
            </p>
            <p className="mb-4">
              We offer our Referrers the best referral program incentives to encourage entrepreneurial and managerial skill acquisition; enhance growth and development and general empowerment among our students on campuses of higher learning and youths in diaspora.
            </p>
            <p className="mb-4">
              Finally, to promote technology via the use of ICT tools in our society.
            </p>
            <button className="btn btn-primary">Login</button>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default BecomeAnAgent;


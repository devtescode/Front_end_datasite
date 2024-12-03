import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const providers = [
  { name: 'MTN', color: 'bg-warning', plans: [
    { data: '500.0MB', price: '₦125.0' },
    { data: '1.0GB', price: '₦255.0' },
    { data: '2.0GB', price: '₦500.0' },
  ]},
  { name: 'Airtel', color: 'bg-danger', plans: [
    { data: '100.0MB', price: '₦30.0' },
    { data: '300.0MB', price: '₦90.0' },
    { data: '500.0MB', price: '₦137.5' },
  ]},
  { name: 'Glo', color: 'bg-success', plans: [
    { data: '200.0MB', price: '₦53.0' },
    { data: '500.0MB', price: '₦133.0' },
    { data: '1.0GB', price: '₦265.0' },
  ]},
  { name: '9mobile', color: 'bg-info', plans: [
    { data: '500.0MB', price: '₦65.0' },
    { data: '1.0GB', price: '₦130.0' },
    { data: '1.5GB', price: '₦195.0' },
  ]},
];

const DataPlans = () => {
  const { yRange, opacityRange } = useScrollAnimation();

  return (
    <>
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Valuable Data Plan And Prices</h2>
        <div className="row">
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              className="col-md-3 mb-4"
              style={{ y: yRange, opacity: opacityRange }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card h-100">
                <div className={`card-header ${provider.color} text-white`}>
                  <h3 className="mb-0">{provider.name}</h3>
                  <p className="mb-0">Per Month</p>
                </div>
                <div className="card-body">
                  {provider.plans.map((plan, planIndex) => (
                    <div key={planIndex} className="d-flex justify-content-between mb-2">
                      <span>{plan.data}</span>
                      <span className="fw-bold">{plan.price}</span>
                    </div>
                  ))}
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

export default DataPlans;


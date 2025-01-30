import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Narbarpage/Narbar";
import NarbarTop from "../NarbarToppage/NarbarTop";

const Buydata = () => {
    const [plans, setPlans] = useState([]);
    const [formData, setFormData] = useState({
        network: "",
        dataType: "",
        plan: "",
        phoneNumber: "",
    });


    

    // Fetch data plans based on selected network
    useEffect(() => {
        if (formData.network) {
            axios.get(`http://localhost:3000/services/getuserscreatedataplans?network=${formData.network}`)
                .then(response => {
                    setPlans(response.data);
                    console.log("Filtered plans:", response.data);
                })
                .catch(error => {
                    console.error("Error fetching plans:", error);
                });
        }
    }, [formData.network]); // Runs when `network` is selected

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User selected plan:", formData);
    };

    return (
        <div>
            <Navbar />
            <NarbarTop />

            <div style={{ marginTop: "80px" }}>
                <div className="col-11 col-md-5 p-3 rounded shadow bg-light mx-auto">
                    <h4 className="mb-3 text-center">Data Purchase Form</h4>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Network</label>
                            <select name="network" className="form-control" onChange={handleChange} required>
                                <option value="">Choose Network</option>
                                <option value="MTN">MTN</option>
                                <option value="AIRTEL">AIRTEL</option>
                                <option value="GLO">GLO</option>
                                <option value="9MOBILE">9MOBILE</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Data Type</label>
                            <select name="dataType" className="form-control" onChange={handleChange} required>
                                <option value="">Choose Type</option>
                                <option value="SME">SME</option>
                                <option value="SME2">SME2</option>
                                <option value="AWOOF GIFTING">AWOOF GIFTING</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Plan</label>
                            {/* <select name="plan" className="form-control" onChange={handleChange} required>
                                <option value="">Choose Data Plan</option>
                                {plans.map((plan) => (
                                    <option key={plan._id} value={plan.name}>
                                        {plan.name} - N{plan.price} ({plan.duration} Days)
                                    </option>
                                ))}
                            </select> */}
                            <select name="plan" className="form-control" onChange={handleChange} required>
                                <option value="">Choose Data Plan</option>
                                {plans.flatMap((service) => service.plans).map((plan) => (
                                    <option key={plan._id} value={plan.name}>
                                        {plan.name} - N{plan.price} ({plan.duration} Days)
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className="mb-3">
                            <label className="form-label">Phone Number</label>
                            <textarea className="form-control" onChange={handleChange} name="phoneNumber" rows="3" placeholder="Enter phone number"></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark">Continue</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Buydata;

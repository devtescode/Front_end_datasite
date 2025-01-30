import React, { useState } from "react";
import Navbar from '../Narbarpage/Narbar';
import AdminNavbarTop from '../AdminNavbarpage/AdminNavbarTop';
import axios from "axios";

const AdminBuydata = () => {
    const [formData, setFormData] = useState({
        network: "",
        dataType: "",
        name: "",
        price: "",
        duration: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            network: formData.network,
            dataType: formData.dataType,
            plans: [{
                name: formData.name,
                price: formData.price,
                duration: formData.duration,
            }],
        };

        try {
            const response = await axios.post("http://localhost:3000/services/createdataplans", formattedData);
            alert("Data Plan Created Successfully!");
            console.log(response);

            // Clear form after successful submission
            setFormData({ network: "", dataType: "", name: "", price: "", duration: "" });
        } catch (error) {
            console.error("Error creating plan:", error);
            alert("Failed to create plan");
        }
    };

    return (
        <div>
            <Navbar />
            <AdminNavbarTop />

            <div className="container" style={{ marginTop: "80px" }}>
                <form onSubmit={handleSubmit} className="col-md-6 mx-auto p-3 rounded bg-light">
                    <h4 className="text-center">Create Data Plan</h4>
                    <div className="mb-3">
                        <label className="form-label">Network</label>
                        <select
                            name="network"
                            className="form-control"
                            value={formData.network}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose Network</option>
                            <option value="MTN">MTN</option>
                            <option value="AIRTEL">AIRTEL</option>
                            <option value="GLO">GLO</option>
                            <option value="9MOBILE">9MOBILE</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Data Type</label>
                        <select
                            name="dataType"
                            className="form-control"
                            value={formData.dataType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Choose Type</option>
                            {formData.network === "MTN" && (
                                <>
                                    <option value="SME">SME</option>
                                    <option value="SME2">SME2</option>
                                    <option value="AWOOF GIFTING">AWOOF GIFTING</option>
                                    <option value="CORPORATE GIFTING">CORPORATE GIFTING</option>
                                    <option value="DATA COUPON">DATA COUPON</option>
                                    <option value="GIFTING">GIFTING</option>
                                </>
                            )}
                            {(formData.network === "AIRTEL" ||
                                formData.network === "GLO" ||
                                formData.network === "9MOBILE") && (
                                <>
                                    <option value="AWOOF GIFTING">AWOOF GIFTING</option>
                                    <option value="CORPORATE GIFTING">CORPORATE GIFTING</option>
                                    <option value="GIFTING">GIFTING</option>
                                </>
                            )}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Plan Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="e.g. 1GB SME"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price (₦)</label>
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="e.g. 300"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Duration (Days)</label>
                        <input
                            type="number"
                            name="duration"
                            className="form-control"
                            placeholder="e.g. 30"
                            value={formData.duration}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-dark">
                        Create Plan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminBuydata;

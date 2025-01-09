import React from 'react'
import Navbar from '../Narbarpage/Narbar'
import NarbarTop from '../NarbarToppage/NarbarTop'

const Buydata = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <NarbarTop />
            </div>

            <div style={{ marginTop: "100px" }}>
                <div className="col-9 col-md-5 border p-4 rounded shadow bg-light mx-auto">
                    <h4 className="mb-3 text-center">Data Purchase Form</h4>

                    <div className="mb-3">
                        <label className="form-label">Network</label>
                        <input type="text" className="form-control" placeholder="Enter network provider" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Data Type</label>
                        <input type="text" className="form-control" placeholder="Enter data type" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Plan</label>
                        <input type="text" className="form-control" placeholder="Enter plan details" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <textarea className="form-control" rows="3" placeholder="Enter phone number"></textarea>
                    </div>

                    <button className="btn btn-dark">Continue</button>
                </div>

            </div>
        </div>
    )
}

export default Buydata
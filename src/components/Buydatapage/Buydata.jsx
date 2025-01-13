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
                        <select name="" id=""  type="text" className="form-control">
                            <option value="">Choose Network</option>
                            <option value="">MTN</option>
                            <option value="">AIRTEL</option>
                            <option value="">GLO</option>
                            <option value="">9MOBILE</option>
                        </select>
                        
                    </div>

                    

                    <div className="mb-3">
                        <label className="form-label">Data Type</label>
                        <select name="" id=""  type="text" className="form-control">
                            <option value="">Choose Type</option>
                            <option value="">SME</option>
                            <option value="">SME2</option>
                            <option value="">AWOOF GIFTING</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Plan</label>
                        <select name="" id=""  type="text" className="form-control">
                            <option value="">Choose Data Plan</option>
                            <option value="">500MB SME = N133 30Days</option>
                            <option value="">500MB SME = N133 30Days</option>
                            <option value="">500MB SME = N133 30Days</option>
                            <option value="">500MB SME = N133 30Days</option>
                            <option value="">500MB SME = N133 30Days</option>
                            
                        </select>
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
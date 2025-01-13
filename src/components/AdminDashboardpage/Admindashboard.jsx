import React from 'react'
import Navbar from '../Narbarpage/Narbar'
import AdminNavbarTop from '../AdminNavbarpage/AdminNavbarTop'

const Admindashboard = () => {
    // let admintoken = localStorage.adminToken

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <AdminNavbarTop />
            </div>

            <div className='p-3' style={{ marginTop: "70px" }}>
                <div className='text-white'>
                    <h2>
                        Welcome back, Admin
                    </h2>
                    <p>At Datasub, we keep you connected...</p>
                </div>
            </div>

            <div class="container text-center">
                <div class="row align-items-start gap-2 gap-sm-2  justify-content-center  ">
                    <div class="Db_container_width bg-white p-2">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <p>Users Balance</p>
                                </div>
                                <div className='fs-3 border text-white ' style={{ height: "50px", width: "50px", borderRadius: "50px", backgroundColor: "#00838d" }}>
                                    ₦
                                </div>
                            </div>
                        </div>
                        <div className='text-start fs-2'>
                            ₦1,000
                        </div>
                        <div className='text-start hover-underline' style={{ cursor: "pointer" }}>
                            <span
                                className="text-danger"
                                // onClick={FundwalletBtn}
                            >
                            </span>
                        </div>
                    </div>

    


                    <div class="Db_container_width bg-white p-2">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <p>Users Registered</p>
                                </div>
                                <div className='fs-3 border text-white ' style={{ height: "50px", width: "50px", borderRadius: "50px", backgroundColor: "#00838d" }}>
                                    ₦
                                </div>
                            </div>
                        </div>
                        <div className='text-start fs-2'>
                            50 Users
                        </div>
                        {/* <div className='text-start hover-underline' style={{ cursor: "pointer" }}>
                            <span style={{ color: "#00838d" }}>Referral link</span><span className='mx-1'>Click here</span>
                        </div> */}
                    </div>

                    <div class="Db_container_width bg-white p-2">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <p>Admin Whatsapp/Call</p>
                                </div>
                                <div className='fs-3 border text-white ' style={{ height: "50px", width: "50px", borderRadius: "50px", backgroundColor: "#00838d" }}>
                                    ₦
                                </div>
                            </div>
                        </div>
                        <div className='text-start fs-2'>
                            08064864821
                        </div>
                        {/* <div className='text-start hover-underline' style={{ cursor: "pointer" }}>
                            <span className='text-danger'>Chat us</span><span className='mx-1'>Here</span>
                        </div> */}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Admindashboard
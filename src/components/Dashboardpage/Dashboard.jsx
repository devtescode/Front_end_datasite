import React from 'react';
import Navbar from '../Narbarpage/Narbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ cursor: "pointer" }}>DATASUB</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    {/* Offcanvas */}
                    <div
                        class="offcanvas offcanvas-start w-75"
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">DATASUB</h5>
                            <button
                                type="button"
                                class="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="offcanvas-body justify-content-center">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        id="serviceDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="ri-numbers-line" style={{ color: "#00838d" }}></i> Service
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                        <li><a class="dropdown-item">Buy Data</a></li>
                                        <li><a class="dropdown-item">Buy Airtime</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        id="serviceDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="ri-flashlight-fill" style={{ color: "#00838d" }}></i> Pay Bills
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                        <li><a class="dropdown-item">Cable Subscription</a></li>
                                        <li><a class="dropdown-item">Electricity Payment</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        id="serviceDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="ri-wallet-line" style={{ color: "#00838d" }}></i> My Wallet
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                        <li><a class="dropdown-item">Fund Wallet</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a
                                        class="nav-link dropdown-toggle"
                                        id="serviceDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <i class="ri-user-fill" style={{ color: "#00838d" }}></i> My Account
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                        <li><a class="dropdown-item">My profile</a></li>
                                    </ul>
                                </li>
                                <div>
                                    <a class="nav-link" role="button" aria-expanded="false">
                                        <i class="ri-history-line" style={{ color: "#00838d" }}></i> History
                                    </a>
                                </div>

                                <div>
                                    <a class="nav-link" role="button" aria-expanded="false">
                                        <i class="ri-notification-line" style={{ color: "#00838d" }}></i> Notification
                                    </a>
                                </div>

                                <div>
                                    <a class="nav-link" role="button" aria-expanded="false">
                                        <i class="ri-logout-box-r-line" style={{ color: "#00838d" }}></i> LogOut
                                    </a>
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

            <div className='p-3' style={{marginTop:"70px"}}>
                <div className='text-white'>
                    <h2>
                        Welcome back, Tescode
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
                                    <p>Wallet Balance</p>
                                </div>
                                <div className='fs-3 border text-white ' style={{ height: "50px", width: "50px", borderRadius: "50px", backgroundColor: "#00838d" }}>
                                    ₦
                                </div>
                            </div>
                        </div>
                        <div className='text-start fs-2'>
                            ₦100
                        </div>
                        <div className='text-start hover-underline' style={{ cursor: "pointer" }}>
                            <span className='text-danger'>Fund</span><span className='mx-1'>Wallet</span>
                        </div>
                    </div>

                    <div class="Db_container_width bg-white p-2">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <p>User Type</p>
                                </div>
                                <div className='fs-3 border text-white ' style={{ height: "50px", width: "50px", borderRadius: "50px", backgroundColor: "#00838d" }}>
                                    ₦
                                </div>
                            </div>
                        </div>
                        <div className='text-start fs-2'>
                            Reseller
                        </div>
                        <div className='text-start hover-underline' style={{ cursor: "pointer" }}>
                            <span style={{ color: "#00838d" }}>Referral link</span><span className='mx-1'>Click here</span>
                        </div>
                    </div>

                    <div class="Db_container_width bg-white p-2">
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className=''>
                                    <p>Whatsapp/Call</p>
                                </div>
                                <div className='fs-3 border text-white ' style={{ height: "50px", width: "50px", borderRadius: "50px", backgroundColor: "#00838d" }}>
                                    ₦
                                </div>
                            </div>
                        </div>
                        <div className='text-start fs-2'>
                            08064864821
                        </div>
                        <div className='text-start hover-underline' style={{ cursor: "pointer" }}>
                            <span className='text-danger'>Chat us</span><span className='mx-1'>Here</span>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container mt-5">
                <div class="row gap-2">
                    <div class="col-11 col-md-9 border p-2" style={{ backgroundColor: "#00838d", color: "#00848db0", boxShadow: "0px 0px 2px 2px" }}>
                        <h2 className='text-white'>Notifications</h2>
                        <p className='text-white'>Payment successful your account has been credited with sum of #195 .</p>
                        <button className='btn p-2 text-white'
                        style={{backgroundColor:"#EA9F57"}}
                        >see all messages</button>
                    </div>

                    <div class="col-10 col-md-6 border p-2" style={{ backgroundColor: "#00838d", color: "#00848db0", boxShadow: "0px 0px 2px 2px" }}>
                        <h2 className='text-white'>Support Team:</h2>
                        <p className='text-white'>Have anything to say to us? Please contact our Support Team on Whatsapp</p>
                        <div className=''>
                        <div>
                            <button className='btn p-2 text-white' style={{backgroundColor:"#30BD49"}}>Whatsapp us</button>
                        </div>
                        <div>
                            <button className='btn p-2 mt-2 text-white' style={{backgroundColor:"#30BD49"}}>Join Our Whatsapp group</button>
                        </div>
                        </div>
                    </div>

                    <div class="col-9 col-md-4 border p-2" style={{ backgroundColor: "#00838d", color: "#00848db0", boxShadow: "0px 0px 2px 2px" }}>
                        <h2 className='text-white'>FAQs:</h2>
                        <p className='text-white'>
                            Please go through them to have a better knowledge of this platform
                        </p>
                        <button className='btn p-2 text-white'
                        style={{backgroundColor:"#176AEA"}}
                        >FAQs</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Dashboard;

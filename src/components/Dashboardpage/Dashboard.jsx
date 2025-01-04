import React from 'react';
import Navbar from '../Narbarpage/Narbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ cursor: "pointer" }}>DATASUB</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center gap-4" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <a class="nav-link dropdown-toggle" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <a class="nav-link dropdown-toggle" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ri-wallet-line" style={{ color: "#00838d" }}></i> My Wallet
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                    <li><a class="dropdown-item"> Fund Wallet</a></li>
                                </ul>
                            </li>
                        </ul>



                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ri-user-fill" style={{ color: "#00838d" }}></i>  My Account
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                    <li><a class="dropdown-item">My profile</a></li>
                                </ul>
                            </li>
                        </ul>

                        <div>
                            <a class="nav-link " role="button" aria-expanded="false">
                                <i class="ri-history-line" style={{ color: "#00838d" }}></i> History
                            </a>
                        </div>

                        <div>
                            <a class="nav-link " role="button" aria-expanded="false">
                                <i class="ri-notification-line" style={{ color: "#00838d" }}></i> Notification
                            </a>
                        </div>

                        <div>
                            <a class="nav-link " role="button" aria-expanded="false">
                                <i class="ri-logout-box-r-line" style={{ color: "#00838d" }}></i> LogOut
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className='p-3'>
                <div className='text-white'>
                    <h2>
                        Welcome back, Tescode
                    </h2>
                    <p>At Datasub, we keep you connected...</p>
                </div>
            </div>

            <div class="container text-center">
                <div class="row align-items-start">
                    <div class="col border">
                        One of three columns
                    </div>
                    <div class="col border">
                        One of three columns
                    </div>
                    <div class="col border">
                        One of three columns
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;

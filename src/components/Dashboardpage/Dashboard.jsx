import React from 'react';
import Navbar from '../Narbarpage/Narbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <nav class="navbar navbar-expand-lg bg-body-tertiary  p-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">DATASUB</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="serviceDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Service
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="serviceDropdown">
                                    <li><a class="dropdown-item" href="#">Buy Data</a></li>
                                    <li><a class="dropdown-item" href="#">Buy Airtime</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Dashboard;

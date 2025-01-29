import React from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNavbarTop = () => {
    const navigate = useNavigate()
    const logoutBtn=()=>{
        navigate("/adminlogin")
        localStorage.removeItem('adminToken');
    }
    const DatasubBtn =()=>{
        navigate("/admin/dashboard")
    }
    const CreateBuydata=()=>{
        navigate("/admin/data")
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary p-3 fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" onClick={DatasubBtn} style={{ cursor: "pointer" }}>DATASUB ADMIN</a>
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
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">DATASUB Admin</h5>
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
                                        <li><a class="dropdown-item" style={{ cursor: "pointer" }} onClick={CreateBuydata}>Create Buy Data</a></li>
                                        <li><a class="dropdown-item" style={{ cursor: "pointer" }}>Create Buy Airtime</a></li>
                                    </ul>
                                </li>
                            </ul>

                          
                            <ul class="navbar-nav">
                               
                                <div>
                                    <a class="nav-link" role="button" aria-expanded="false">
                                        <i class="ri-history-line" style={{ color: "#00838d" }}></i>Users History
                                    </a>
                                </div>

                                <div>
                                    <a class="nav-link" role="button" aria-expanded="false">
                                        <i class="ri-notification-line" style={{ color: "#00838d" }}></i>Send Notification
                                    </a>
                                </div>

                                <div>
                                    <a class="nav-link" role="button" aria-expanded="false" onClick={logoutBtn}>
                                        <i class="ri-logout-box-r-line" style={{ color: "#00838d" }}></i> LogOut
                                    </a>
                                </div>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default AdminNavbarTop
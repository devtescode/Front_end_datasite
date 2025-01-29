import React, { useEffect, useState } from 'react';
import Navbar from '../Narbarpage/Narbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import NarbarTop from '../NarbarToppage/NarbarTop';

const Dashboard = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState("");
    let url = "http://localhost:3000/userfunding/dashboard"
    useEffect(() => {
        let token = localStorage.token;

        if (!token) {
            console.warn("No token found, redirecting to login.");
            navigate("/login");
            return;
        }

        axios.get(url, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (!localStorage.useradminlogin || response.data.status === false) {
                    console.warn("User not logged in or invalid status, redirecting to login.");
                    navigate("/login");
                } else {
                    // Successfully received data, updating state
                    setUser(response.data.user);


                    // Debugging: Log user data
                    // console.log("User Data:", response.data.user);
                }
            })
            .catch((err) => {
                // Handle different types of errors
                if (err.response) {
                    // Server responded with a status other than 2xx
                    console.error("Error Response:", err.response.data);
                } else if (err.request) {
                    // Request was made but no response was received
                    console.error("No Response:", err.request);
                } else {
                    // Something happened in setting up the request that triggered an error
                    console.error("Error:", err.message);
                }

                // Optionally navigate to an error page or show an error message
            });
    }, [navigate]);

    const FundwalletBtn=()=> {
        const modalElement = document.getElementById('exampleModalToggle');
        if (modalElement) {
            const modal = new window.bootstrap.Modal(modalElement);
            modal.show();
        } else {
            console.error('Modal element not found!');
        }
    }

 

    return (
        <>
            <Navbar />
            <NarbarTop/>
            <div className='p-3' style={{ marginTop: "70px" }}>
                <div className='text-white'>
                    <h2>
                        Welcome back, {user.Username}
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
                            <span
                                className="text-danger"
                                onClick={FundwalletBtn}
                            >
                                Fund <span className="mx-1 text-dark">Wallet</span>
                            </span>
                        </div>
                    </div>

                    <div
                        className="modal fade"
                        id="exampleModalToggle"
                        aria-hidden="true"
                        aria-labelledby="exampleModalToggleLabel"
                        tabIndex="-1"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Fund Wallet</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className='text-start'>
                                        <label className="">Enter To Amount</label>
                                    </div>
                                    <input type="text" className='form-control' placeholder='Enter Amout' />
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
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
                            style={{ backgroundColor: "#EA9F57" }}
                        >see all messages</button>
                    </div>

                    <div class="col-10 col-md-6 border p-2" style={{ backgroundColor: "#00838d", color: "#00848db0", boxShadow: "0px 0px 2px 2px" }}>
                        <h2 className='text-white'>Support Team:</h2>
                        <p className='text-white'>Have anything to say to us? Please contact our Support Team on Whatsapp</p>
                        <div className=''>
                            <div>
                                <button className='btn p-2 text-white' style={{ backgroundColor: "#30BD49" }}>Whatsapp us</button>
                            </div>
                            <div>
                                <button className='btn p-2 mt-2 text-white' style={{ backgroundColor: "#30BD49" }}>Join Our Whatsapp group</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-9 col-md-4 border p-2" style={{ backgroundColor: "#00838d", color: "#00848db0", boxShadow: "0px 0px 2px 2px" }}>
                        <h2 className='text-white'>FAQs:</h2>
                        <p className='text-white'>
                            Please go through them to have a better knowledge of this platform
                        </p>
                        <button className='btn p-2 text-white'
                            style={{ backgroundColor: "#176AEA" }}
                        >FAQs</button>
                    </div>
                </div>
            </div>

            <div className='border bg text-white mt-5' style={{ backgroundColor: "#00838d" }}>
                <p>Recent Transaction</p>
                <table class="table table-primary table-hover table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default Dashboard;

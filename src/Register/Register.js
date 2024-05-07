import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";

const Register = () => {

  return (
    <div>
<Navbar/>
<div className="container-fluid pt-5 hero-header" style={{backgroundImage: `url("/assets/img/background.jpg")`}}>

                <div className="container pt-5">
                    <div className="row g-5 pt-5">
                        <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                            <h1 className="display-4 text-white mb-4 animated slideInRight">Register</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                                    <li className="breadcrumb-item"><a className="text-white" href="*">Home</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">Sign Up</li>
                                </ol>
                            </nav>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="modal fade" id="searchModal" tabIndex="-1">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: "rgba(20, 24, 62, 0.7)" }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn btn-square bg-white btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: "600px" }}>
                                <input type="text" className="form-control bg-transparent border-light p-3"
                                    placeholder="Type search keyword" />
                                <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <div className="container-fluid h-custom py-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="*" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                                <p className="lead fw-normal mb-0 me-3">Sign up with</p>
                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-primary btn-floating mx-1">
                                    <i className="fab fa-linkedin-in"></i>
                                </button>
                            </div>

                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">Or</p>
                            </div>

                            {/* <!-- Full Name input --> */}
                            <div className="form-outline mb-4">
                                <input type="text" id="Name" className="form-control form-control-lg"
                               
                               
                                 placeholder="Enter Your Username" />
                                <label className="form-label" htmlFor="Name">Name</label>
                            </div>

 

                            {/* Email Input */}
                            <div className="form-outline mb-4">
                                <input type="email" id="Email" className="form-control form-control-lg"
                                 
                            
                                 placeholder="Enter email" />
                                <label className="form-label" htmlFor="Email">Email</label>
                            </div>


                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="Password" className="form-control form-control-lg"
                           
                              
                                   placeholder="Confirm Password" />
                                <label className="form-label" htmlFor="Password">Password</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="Confirm-password" className="form-control form-control-lg"
                             
                                
                                 placeholder="Password" />
                                <label className="form-label" htmlFor="Confirm-password">Confirm Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="Terms&Policy" />
                                    <label className="form-check-label" htmlFor="Terms&Policy">
                                        Terms & Policy
                                    </label>
                                </div>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="submit" className="btn btn-primary btn-lg"
                                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Signup</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0"><Link to="/login"
                                    className="text-info">Already User?Login to Your Account</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

    </div>
  );
};

export default Register;
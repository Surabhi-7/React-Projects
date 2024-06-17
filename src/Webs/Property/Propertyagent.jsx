import React, { useEffect, useState } from 'react'
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import axios from 'axios';
function Propertyagent() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/propertyagent`);
        console.log(res.data);
        setData(res.data)
    }
  return (
    <>
      <div>
        <Header2 title={"Property Type"} />
         {/* Search Start */}
         <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: 35}}>
            <div className="container">
                <div className="row g-2">
                    <div className="col-md-10">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword"/>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Property Type</option>
                                    <option value="1">Property Type 1</option>
                                    <option value="2">Property Type 2</option>
                                    <option value="3">Property Type 3</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <select className="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Search End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <h1 className="mb-3">Property Agents</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                {
                     data && data.map((value, index, arr) => {
                        return (
                    <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">Full Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item rounded overflow-hidden">
                            <div className="position-relative">
                                <img className="img-fluid" src={value.agentimage} alt=""/>
                                <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4 mt-3">
                                <h5 className="fw-bold mb-0">{value.agentname}</h5>
                                <small>{value.designation}</small>
                            </div>
                        </div>
                    </div>
                </div>
                   )
                })
                }
            </div>
        </div>
         {/* Team End  */}
         {/* Call to Action Start  */}
        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded p-3">
                    <div className="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt=""/>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <div className="mb-4">
                                    <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                    <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                </div>
                                <Link to="/contact" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</Link>
                                <Link to="/appointments" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Get Appoinment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* Call to Action End */}
      <Footer />
      </div>
    </>
  );
}

export default Propertyagent;
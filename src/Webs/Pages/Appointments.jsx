import React from 'react'
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";

function Appointments() {
  return (
    <>
     <div>
        <Header2 title={"Appointments"} />
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
        {/* Appointments Start */}
          {/* Contact Start */}
          <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                    <h1 className="mb-3">Book an Appointment</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div class="row justify-content-center">
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="number" placeholder="Your Number"/>
                                            <label for="number">Your Number</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="date" className="form-control" id="date" placeholder="Scheduled Date" name="date"/>
                                            <label for="date">Scheduled Date</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                <select className="form-select py-3"  id="type" name="type">
                                    <option value>Select Property Type</option>
                                    <option value="1">Villa</option>
                                    <option value="2">Appartment</option>
                                    <option value="3">Building</option>
                                    <option value="4">Home</option>
                                </select>
                            </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    {/* Appointments End */}
    <Footer />
        </div>
    </>
  )
}

export default Appointments

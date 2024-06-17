import React, { useEffect, useState } from 'react'
import Header2 from '../Components/Header2'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Footer from '../Components/Footer';
import { toast } from 'react-toastify';

function Profile() {
    const redirect = useNavigate();
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem("uid")) {
            fetch();
        } else {
            redirect("/");
        }
    }, []);

    // fetch data from api
    const fetch = async () => {
        const res = await axios.get(
            `http://localhost:3000/user/${localStorage.getItem("uid")}`
        );
        console.log(res.data);
        setData(res.data); // set data from api in data var state
    };

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        mobile: ""
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    };

    const getform = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    };

    const validation = () => {
        var result = true;
        if (formvalue.name == "") {
            toast.error("Name Field is required");
            result = false;
            return false;
        }
        if (formvalue.email == "") {
            toast.error("Email Field is required");
            result = false;
            return false;
        }

        if (formvalue.mobile == "") {
            toast.error("Mobile Field is required");
            result = false;
            return false;
        }
        return result;
    };

    const submithandel = async (e) => {
        e.preventDefault(); // stop page reload
        if (validation()) {
            const res = await axios.patch(
                `http://localhost:3000/user/${formvalue.id}`,
                formvalue
            );
            console.log(res);
            if (res.status == 200) {
                setFormvalue({
                    ...formvalue,
                    name: "",
                    email: "",
                    mobile: ""
                });
                toast.success("Update success");
                fetch();
            }
        }
    };
    return (
        <div className="container-xxl bg-white p-0">
            <Header2 title={"Profile"} />
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
            <div className="container-xxl py-5">
                <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                <h1 className="mb-3">Profiles</h1>
                </div>
                    <div className="row g-4">
                        <div className="offset-lg-4 col-lg-4 col-md-6 offset-md-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light rounded">
                                <div className="text-center border-bottom p-4">
                                    <h5>{data.name}</h5>
                                    <span>Email : {data.email}</span>
                                    <br />
                                    <br />
                                    <span>ID : {data.id}</span>
                                    <br />
                                    <br />
                                    <span>Mobile : {data.mobile}</span>
                                    <br />
                                    <br />
                                    <button className="btn btn-primary" onClick={() => editdata(data.id)} data-bs-toggle="modal" data-bs-target="#myModal">Edit Profile</button>

                                    <div className="modal" id="myModal">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                {/* Modal Header */}
                                                <div className="modal-header">
                                                    <h4 className="modal-title">Edit Profile</h4>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                                </div>
                                                {/* Modal body */}
                                                <div className="modal-body">
                                                    <div className="container">
                                                        <form action="" method="post">
                                                            <div className="row g-3">
                                                                <div className="col-md-6">
                                                                    <div className="form-floating">
                                                                        <input type="text" className="form-control" name="name" value={formvalue.name} onChange={getform} id="name" placeholder="Your Name" />
                                                                        <label htmlFor="name">Your Name</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-floating">
                                                                        <input type="email" className="form-control" name="email" value={formvalue.email} onChange={getform} id="email" placeholder="Your Email" />
                                                                        <label htmlFor="email">Your Email</label>
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-6">
                                                                    <div className="form-floating">
                                                                        <input type="number" className="form-control" name="mobile" value={formvalue.mobile} onChange={getform} id="mobile" placeholder="Your Mobile" />
                                                                        <label htmlFor="mobile">Your Mobile</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <button onClick={submithandel} data-bs-dismiss="modal" className="btn btn-primary w-100 py-3" type="submit">Save</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                {/* Modal footer */}
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-danger close" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />
        </div>
    );

}

export default Profile

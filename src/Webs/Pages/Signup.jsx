import React, { useState } from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function Signup() {
    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    function validation(){
        var result=true;
        if (formvalue.name==""){
            toast.error("Name field is required!");
            result=false;
            return false;
        }
        if (formvalue.email==""){
            toast.error("Email field is required!");
            result=false;
            return false;
        }
        if (formvalue.password==""){
            toast.error("Password field is required!");
            result=false;
            return false;
        }
        if (formvalue.mobile==""){
            toast.error("Mobile field is required!");
            result=false;
            return false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation()){
        const res= await axios.post(`http://localhost:3000/user`,formvalue);
        setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
        toast.success("Signup Success");
        return false;
        }
    }
    return (
        <>
            <div>
                <Header2 title={"Signup"} />
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Signup</h1>
                        </div>
                        <div className="row g-4">
                        <div class="row justify-content-center">
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.5s">
                                    <form id="signupForm" method='post' onSubmit={submitHandel}>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="text" value={formvalue.name} onChange={changeHandel} className="form-control" id="name" name="name" placeholder="Your Name" />
                                                    <label for="name">Your Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="email" value={formvalue.email} onChange={changeHandel} className="form-control" id="email" name="email" placeholder="Your Email" />
                                                    <label for="email">Your Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="password" value={formvalue.password} onChange={changeHandel} className="form-control" id="password" name="password" placeholder="Password" />
                                                    <label for="password">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input type="number" value={formvalue.mobile} onChange={changeHandel} className="form-control" id="mobile" name="mobile" placeholder="Mobile No.:" />
                                                    <label for="mobile">Your Mobile Number</label>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Signup</button>
                                            </div>
                                            <Link to="/login">If you already registered then login here</Link>

                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Signup

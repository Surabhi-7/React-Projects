import React, { useEffect, useState } from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function Login() {
    const redirect=useNavigate();
    useEffect(()=>{
        if((localStorage.getItem('uid')))
            {
                redirect('/');
            }
    })
    const [formvalue,setFormvalue]=useState({
        email:"",
        password:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue, [e.target.name]:e.target.value});
        console.log(formvalue);
    }
    function validation(){
        var result=true;
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
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation()){
        const res= await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
        if (res.data.length>0){
            if (res.data[0].password==formvalue.password){
                if(res.data[0].status=="Unblock"){
                    //session create
                    localStorage.setItem('uid',res.data[0].id);
                    localStorage.setItem('uname',res.data[0].name);
                    toast.success("Login Success!");
                    redirect('/')
                }
                else{
                    toast.error("Account Blocked!");
                }
            }
            else{
                toast.error("Password incorrect!");
            }
        }
        else{
            toast.error("Email does not exist!");
        }
        }
    }
    return (
        <>
            <div>
                <Header2 title={"Login"} />
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Login</h1>
                        </div>
                        <div className="row g-4">
                        <div class="row justify-content-center">
                            <div className="col-md-6">
                                <div className="wow fadeInUp" data-wow-delay="0.5s">
                                    <form id="loginForm" method='post' onSubmit={submitHandel}>
                                        <div className="row g-3">
                                            <div className="col-md-12">
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
                                            <div className="col-3">
                                                <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                                </div>
                                                <Link to="/signup">If you are not registered then register here</Link>
                                           
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
};

export default Login;

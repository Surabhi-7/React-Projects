import React, { useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function Add_PropertyType() {
    const [formvalue,setFormvalue]=useState({
        image:"",
        type:"",
        number:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    function validation(){
        var result=true;
        if (formvalue.image==""){
            toast.error("Image field is required!");
            result=false;
            return false;
        }
        if (formvalue.type==""){
            toast.error("Type field is required!");
            result=false;
            return false;
        }
        if (formvalue.number==""){
            toast.error("Number field is required!");
            result=false;
            return false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if(validation()){
        const res= await axios.post(`http://localhost:3000/propertytype`,formvalue);
        setFormvalue({...formvalue,image:"",type:"",number:""});
        toast.success("Add Property Type Success");
        return false;
    }
}
    return (
        <>
            <ANavbar />
            <div className="container mt-5">
                <h2>Add Property Type</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form id="propertytypeForm" method='post' onSubmit={submitHandel}>
                                <div className="row g-3">
                                <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={formvalue.image} onChange={changeHandel} className="form-control" id="image" name="image" placeholder="image" />
                                            <label for="image">Image</label>
                                        </div>
                                    </div>
                                <div className="col-12">
                                <select className="form-select py-3" value={formvalue.type} onChange={changeHandel} id="type" name="type">
                                <option value>Select Property Type</option>
                                    <option value="1">Office</option>
                                    <option value="2">Villa</option>
                                    <option value="3">Appartment</option>
                                    <option value="4">Building</option>
                                    <option value="5">Home</option>
                                </select>
                            </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.number} onChange={changeHandel} className="form-control" id="number" name="number" placeholder="properties" />
                                            <label for="number">No. of Properties</label>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                    </div>
                                   

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <AFooter title={"Logout"} />
        </>
    )
}

export default Add_PropertyType


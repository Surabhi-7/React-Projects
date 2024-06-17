import React, { useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function Add_PropertyList() {
    const [formvalue,setFormvalue]=useState({
        propertyname:"",
        price:"",
        type:"",
        listingoptions:"",
        propertyimage:"",
        propertyaddress:"",
        measure:"",
        rooms:""
    })

    const changeHandel=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }
    function validation(){
        var result=true;
        if (formvalue.propertyname==""){
            toast.error("Property name field is required!");
            result=false;
            return false;
        }
        if (formvalue.price==""){
            toast.error("Price field is required!");
            result=false;
            return false;
        }
        if (formvalue.type==""){
            toast.error("Type field is required!");
            result=false;
            return false;
        }
        if (formvalue.listingoptions==""){
            toast.error("Listing options field is required!");
            result=false;
            return false;
        }
        if (formvalue.propertyimage==""){
            toast.error("Property image field is required!");
            result=false;
            return false;
        }
        var result=true;
        if (formvalue.propertyaddress==""){
            toast.error("Property address field is required!");
            result=false;
            return false;
        }
        if (formvalue.measure==""){
            toast.error("Measure field is required!");
            result=false;
            return false;
        }
        var result=true;
        if (formvalue.rooms==""){
            toast.error("Rooms field is required!");
            result=false;
            return false;
        }
        return result;
    }
    const submitHandel=async(e)=>{
        e.preventDefault();
        if (validation()) {
        const res= await axios.post(`http://localhost:3000/propertylist`,formvalue);
        setFormvalue({...formvalue,propertyname:"",price:"",type:"",listingoptions:"",propertyimage:"",propertyaddress:"",measure:"",rooms:""});
        toast.success("Add Property List Success");
        return false;
    }
}
    return (
        <>
            <ANavbar />
            <div className="container mt-5">
                <h2>Add Property List</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form id="propertylistForm" method='post' onSubmit={submitHandel}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.propertyname} onChange={changeHandel} className="form-control" id="propertyname" name="propertyname" placeholder="Property Name" />
                                            <label for="propertyname">Property Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.price} onChange={changeHandel} className="form-control" id="price" name="price" placeholder="Price" />
                                            <label htmlFor="price">Price</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                    <label htmlFor="type">Property Type</label>
                                <select className="form-select py-3" value={formvalue.type} onChange={changeHandel} id="type" name="type">
                                    <option value>Select Property Type</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Appartment">Appartment</option>
                                    <option value="3">Building</option>
                                    <option value="4">Home</option>
                                </select>
                            </div>
                            <div className="col-12">
                            <label htmlFor="listingoptions">Listing Options</label>
                                <select className="form-select py-3" value={formvalue.listingoptions} onChange={changeHandel} id="listingoptions" name="listingoptions">
                                    <option value>Listing Options</option>
                                    <option value="For Sell">For Sell</option>
                                    <option value="For Rent">For Rent</option>
                                </select>
                            </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={formvalue.propertyimage} onChange={changeHandel} className="form-control" id="propertyimage" name="propertyimage" placeholder="Image url" />
                                            <label htmlFor="propertyimage">Image</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.propertyaddress} onChange={changeHandel} className="form-control" id="propertyaddress" name="propertyaddress" placeholder="Property Address" />
                                            <label htmlFor="propertyaddress">Address</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating" value={formvalue.measure} onChange={changeHandel}> 
                                            <input type="text" className="form-control" id="measure" name="measure" placeholder="Measure" />
                                            <label htmlFor="measure">Measurement sqft</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating" value={formvalue.rooms} onChange={changeHandel}> 
                                            <input type="text" className="form-control" id="rooms" name="rooms" placeholder="No. of BHK,halls,offices,etc." />
                                            <label htmlFor="rooms">No. of BHK,halls,etc.</label>
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

export default Add_PropertyList

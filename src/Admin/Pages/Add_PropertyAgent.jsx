import React, { useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
function Add_PropertyAgent() {
    const [formvalue, setFormvalue] = useState({
        agentname: "",
        designation: "",
        agentimage: ""
    })

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function validation() {
        var result = true;
        if (formvalue.agentname == "") {
            toast.error("Agent name field is required!");
            result = false;
            return false;
        }
        if (formvalue.designation == "") {
            toast.error("Designation field is required!");
            result = false;
            return false;
        }
        if (formvalue.agentimage == "") {
            toast.error("Agent image field is required!");
            result = false;
            return false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/propertyagent`, formvalue);
            setFormvalue({ ...formvalue, agentname: "", designation: "", agentimage: "" });
            toast.success("Add Property Agent Success");
            return false;
        }
    }
    return (
        <>
            <ANavbar />
            <div className="container mt-5">
                <h2>Add Property Agent</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                            <form id="agentForm" method='post' onSubmit={submitHandel}>
                                <div className="row g-3">
                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.agentname} onChange={changeHandel} className="form-control" id="agentname" name="agentname" placeholder="Property Name" />
                                            <label for="agentname">Agent Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" value={formvalue.designation} onChange={changeHandel} className="form-control" id="designation" name="designation" placeholder="designation" />
                                            <label for="designation">Designation</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="url" value={formvalue.agentimage} onChange={changeHandel} className="form-control" id="agentimage" name="agentimage" placeholder="Image url" />
                                            <label for="agentimage">Agent Image</label>
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

export default Add_PropertyAgent

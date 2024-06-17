import React, { useEffect, useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
function Manage_Appointments() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch();
    });
    const fetch = async()=>{
        const res = await axios.get(`http://localhost:3000/appointment`);
        console.log(res.data);
        setData(res.data)
    }
    const deleteHandel=async(id)=>{
      const res = await axios.delete(`http://localhost:3000/propertyagent/${id}`);
      toast.success("Appointment Delete Success");
      return false;
    }
  return (
    <>
    <ANavbar/>
    <div>
      <div className="container mt-5">
        <h2>Manage Appointment</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Date</th>
              <th>Select Property Type</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
                    data && data.map((value,index,arr)=>{
                        return(
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.number}</td>
                                <td>{value.date}</td>
                                <td>{value.type}</td>
                                <td>{value.subject}</td>
                                <button className='btn btn-primary active'>Edit</button>
                                <button className='btn btn-danger active' onClick={()=>deleteHandel(value.id)}>Delete</button>
                            </tr>
                        )
                    })
                }
            </tbody>
          </table>
          </div>
          </div>
          <AFooter title={"Logout"}/>
          </>
  )
}

export default Manage_Appointments

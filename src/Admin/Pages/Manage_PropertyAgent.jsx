import React, { useEffect, useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_PropertyAgent() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch();
    });
    const fetch = async()=>{
        const res = await axios.get(`http://localhost:3000/propertyagent`);
        console.log(res.data);
        setData(res.data)
    }
    const deleteHandel=async(id)=>{
      const res = await axios.delete(`http://localhost:3000/propertyagent/${id}`);
      toast.success("Property Agent Delete Success");
      return false;
    }
  return (
    <>
            <ANavbar />
            <div className="container mt-5">
                <h2>Manage Property Agent</h2>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Agent Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Agent Image</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
                    data && data.map((value,index,arr)=>{
                        return(
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.agentname}</td>
                                <td>{value.designation}</td>
                                <td><img src={value.agentimage} width="100px"/></td>
                                <button className='btn btn-primary active'>Edit</button>
                                <button className='btn btn-danger active' onClick={()=>deleteHandel(value.id)}>Delete</button>
                            </tr>
                        )
                    })
                }
  </tbody>
</table>
            </div>
            <AFooter title={"Logout"} />
        </>
  )
}

export default Manage_PropertyAgent

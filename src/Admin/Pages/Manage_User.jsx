import React, { useEffect, useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
function Manage_User() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch();
    });
    const fetch = async()=>{
        const res = await axios.get(`http://localhost:3000/user`);
        console.log(res.data);
        setData(res.data)
    }
    const deleteHandel=async(id)=>{
      const res = await axios.delete(`http://localhost:3000/propertyagent/${id}`);
      toast.success("User Delete Success");
      return false;
    }
  return (
    <>
    <ANavbar/>
      <div>
        <div className="container mt-5">
          <h2>Manage Users</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Password</th>
                {/* <th>Status</th> */}
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
                                <td>{value.mobile}</td>
                                <td>{value.password}</td>
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
            <AFooter title={"Logout"}></AFooter>
            </>
  )
}

export default Manage_User

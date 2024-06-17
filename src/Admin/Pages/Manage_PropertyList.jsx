import React, { useEffect, useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';
function Manage_PropertyList() {
  const [data,setData]=useState([]);
  useEffect(()=>{
      fetch();
  });
  const fetch = async()=>{
      const res = await axios.get(`http://localhost:3000/propertylist`);
      console.log(res.data);
      setData(res.data)
  }
  const deleteHandel=async(id)=>{
    const res = await axios.delete(`http://localhost:3000/propertylist/${id}`);
    toast.success("Property List Delete Success");
    return false;
  }
    return (
        <>
            <ANavbar />
            <div className="container mt-5">
                <h2>Manage Property List</h2>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Property Name</th>
      <th scope="col">Price</th>
      <th scope="col">Type</th>
      <th scope="col">Listing Options</th>
      <th scope="col">Image</th>
      <th scope="col">Address</th>
      <th scope="col">Measurement sqft</th>
      <th scope="col">No. of BHK,halls,etc.</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
                    data && data.map((value,index,arr)=>{
                        return(
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.propertyname}</td>
                                <td>{value.price}</td>
                                <td>{value.type}</td>
                                <td>{value.listingoptions}</td>
                                <td><img src={value.propertyimage} width="100px"></img></td>
                                <td>{value.propertyaddress}</td>
                                <td>{value.measure}</td>
                                <td>{value.rooms}</td>
                                <button className='btn btn-info active'>Edit</button>
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

export default Manage_PropertyList

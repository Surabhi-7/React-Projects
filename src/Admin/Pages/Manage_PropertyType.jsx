import React, { useEffect, useState } from 'react'
import ANavbar from '../Components/ANavbar'
import AFooter from '../Components/AFooter'
import axios from 'axios';
import { toast } from 'react-toastify';

function Manage_PropertyType() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/propertytype`);
        console.log(res.data);
        setData(res.data)
    }
    const deleteHandel=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/propertytype/${id}`);
        toast.success("Property Type Delete Success");
        return false;
      }
    return (
        <>
            <ANavbar />
            <div className="container mt-5">
                <h2>Manage Property Type</h2>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Type</th>
                            <th scope="col">No. of Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((value, index, arr) => {
                                return (
                                    <tr>
                                        <td>{value.id}</td>
                                        <td><image src={value.image}/></td>
                                        <td>{value.type}</td>
                                        <td>{value.number}</td>
                                        <button className='btn btn-outline active btn-info'>Edit</button>
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

export default Manage_PropertyType

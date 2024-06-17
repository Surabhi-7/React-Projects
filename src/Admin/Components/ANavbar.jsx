import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ANavbar() {
    const redirect=useNavigate();
    useEffect(()=>{
        if(!(localStorage.getItem('aid')))
            {
                redirect('/admin-login');
            }
    })
    const adminlogout=()=>{
        localStorage.removeItem('aid');
        localStorage.removeItem('aname');
        toast.success('Logout Success');
        redirect('/admin-login');
    }
  return (
    <>
    <div>
   {/* Navbar Start */}
   <div className="container-xxl bg-white p-0">
        
        <div className="container-fluid nav-bar bg-transparent p-0">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="/img/icon-deal.png" alt="Icon" style={{width: 30, height: 30}}/>
                    </div>
                    <h1 className="m-0 text-primary">Makaan</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/dashboard" className="nav-item nav-link active">Dashboard</NavLink>

                        <div className="nav-item dropdown">
                            <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Prop List</NavLink>
                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to="/add_propertylist" className="dropdown-item">Add</NavLink>
                                <NavLink to="/manage_propertylist" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Prop Type</NavLink>
                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to="/add_propertytype" className="dropdown-item">Add</NavLink>
                                <NavLink to="/manage_propertytype" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <NavLink to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Prop Agent</NavLink>
                            <div className="dropdown-menu rounded-0 m-0">
                                <NavLink to="/add_propertyagent" className="dropdown-item">Add</NavLink>
                                <NavLink to="/manage_propertyagent" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <NavLink to="/manage_user" className="nav-item nav-link">User</NavLink>
                        <NavLink to="/manage_contact" className="nav-item nav-link">Contact Us</NavLink>
                        <NavLink to="/manage_appointment" className="nav-item nav-link">Appointments</NavLink>
                        {(
                            ()=>{
                                if(localStorage.getItem('aid')){
                                    return(
                                        <NavLink to="/aprofile" className="nav-item nav-link">Hi .. {localStorage.getItem('aname')}</NavLink>
                                    )
                                }
                            }
                        )()}
                    
                    </div>
                    <a to="javascript:void(0)" onClick={adminlogout} className="btn btn-primary d-none d-lg-block">Logout</a>
                </div>
            </nav>
        </div>
      </div>
    </div>
    
          {/* Navbar End */}
          </>
  );
}

export default ANavbar;
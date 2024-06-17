import React from 'react'
import { Link } from "react-router-dom";
function AHeader2({ title }){
  return (
    <>
    {/* Page Header Start */}
    <div className="container-fluid header bg-white p-0">
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
                <h1 className="display-5 animated fadeIn mb-4">{title}</h1>
                <nav aria-label="breadcrumb animated fadeIn">
                    <ol className="breadcrumb text-uppercase">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><a href="#">Pages</a></li>
                        <li className="breadcrumb-item text-body active" aria-current="page">{title}</li>
                    </ol>
                </nav>
            </div>
            <div className="col-md-6 animated fadeIn">
                <img className="img-fluid" src="img/header.jpg" alt="" />
            </div>
        </div>
    </div>
    {/* Page Header End */}
</>
  );
}

export default AHeader2;

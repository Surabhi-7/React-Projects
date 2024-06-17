import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Home from "./Webs/Pages/Home";
import About from "./Webs/Pages/About";
import Propertylist from "./Webs/Property/Propertylist";
import Propertytype from "./Webs/Property/Propertytype";
import Propertyagent from "./Webs/Property/Propertyagent";
import Error from "./Webs/Pages/Error";
import Testimonial from "./Webs/Pages/Testimonial";
import Contact from "./Webs/Pages/Contact";
import Login from './Webs/Pages/Login';
import Signup from './Webs/Pages/Signup';
import AFooter from './Admin/Components/AFooter';
import AdminLogin from './Admin/Pages/AdminLogin';
import AHeader2 from './Admin/Components/AHeader2';
import Dashboard from './Admin/Pages/Dashboard';
import Add_PropertyList from './Admin/Pages/Add_PropertyList';
import Manage_PropertyList from './Admin/Pages/Manage_PropertyList';
import Manage_Contact from './Admin/Pages/Manage_Contact';
import Manage_User from './Admin/Pages/Manage_User';
import Add_PropertyType from './Admin/Pages/Add_PropertyType';
import Add_PropertyAgent from './Admin/Pages/Add_PropertyAgent';
import Manage_PropertyType from './Admin/Pages/Manage_PropertyType';
import Manage_PropertyAgent from './Admin/Pages/Manage_PropertyAgent';
import Manage_Appointments from './Admin/Pages/Manage_Appointments';
import Appointments from './Webs/Pages/Appointments';
import Profile from './Webs/Pages/Profile';
import Aprofile from './Admin/Pages/Aprofile';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route path="/" element={<><Home /></>}></Route>
          <Route path='/login' element={<><Login /></>}></Route>
          <Route path='/signup' element={<><Signup /></>}></Route>
          <Route path="/about" element={<><About /></>}></Route>
          <Route path="/propertylist" element={<><Propertylist /></>}></Route>
          <Route path="/propertytype" element={<><Propertytype /></>}></Route>
          <Route path="/propertyagent" element={<><Propertyagent /></>}></Route>
          <Route path="appointments" element={<><Appointments /></>}></Route>
          <Route path="/testimonial" element={<><Testimonial /></>}></Route>
          <Route path="*" element={<><Error /></>}></Route>
          <Route path="contact" element={<><Contact /></>}></Route>
          <Route path="profile" element={<><Profile /></>}></Route>

          {
            //admin
          }

          <Route path="/admin-login" element={<><AdminLogin/></>}></Route>
          <Route path="/dashboard" element={<><Dashboard/></>}></Route>
          <Route path="/add_propertylist" element={<><Add_PropertyList/></>}></Route>
          <Route path="/add_propertytype" element={<><Add_PropertyType/></>}></Route>
          <Route path="/add_propertyagent" element={<><Add_PropertyAgent/></>}></Route>
          <Route path="/manage_propertylist" element={<><Manage_PropertyList/></>}></Route>
          <Route path="/manage_propertytype" element={<><Manage_PropertyType/></>}></Route>
          <Route path="/manage_propertyagent" element={<><Manage_PropertyAgent/></>}></Route>
          <Route path="/manage_appointment" element={<><Manage_Appointments/></>}></Route>
          <Route path="/manage_contact" element={<><Manage_Contact/></>}></Route>
          <Route path="/manage_user" element={<><Manage_User/></>}></Route>
          <Route path="/aprofile" element={<><Aprofile/></>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


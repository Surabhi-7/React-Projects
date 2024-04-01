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


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/propertylist"
            element={
              <>
                <Propertylist />
              </>
            }
          ></Route>
          <Route
            path="/propertytype"
            element={
              <>
                <Propertytype />
              </>
            }
          ></Route>
          <Route
            path="/propertyagent"
            element={
              <>
                <Propertyagent />
              </>
            }
          ></Route>
          <Route
            path="/testimonial"
            element={
              <>
                <Testimonial />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <Error />
              </>
            }
          ></Route>
          
          <Route
            path="contact"
            element={
              <>
                <Contact />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


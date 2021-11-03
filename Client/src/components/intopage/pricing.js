import React from "react";
import Navbar from "../pages/navBar";
import Footer from "../pages/footer/footer";
import Footer1 from "../pages/footer/footer1";
import "./home.css";
const Pricing = () => {
  return (
    <div>
      <Navbar />
      
      <div className="flex-container" id="a">
        <div className="flex-child magenta">
        <p className="heading">Best in Industry</p>
        <p className="con"> Doorstep Wash & Dryclean Service with Reasonable prices</p>
        <p className="con">Wash - 20/-,Press - 15/-,Fold - 10/-,Pack - 25/-</p>
       </div>
      </div>
      <Footer1 />
      <Footer/>
    </div>
  );
};
export default Pricing;

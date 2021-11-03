import React from "react";
import Navbar from "../pages/navBar";
import Footer from "../pages/footer/footer";
import "./home.css";
import Sidebar from "../pages/sidebar";
const Intro1 = () => {
  return (
    <div>
      <Navbar />
      <div className="total1"><Sidebar/>
      
      <div className="flex-container" id="a">
        <div className="flex-child magenta">
        <p className="heading">LAUNDRY SERVICE</p>
        <p className="con"> Doorstep Wash & Dryclean Service</p>
       </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Intro1;

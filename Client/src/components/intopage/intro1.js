import React from "react";
import Navbar from "../pages/navBar1";
import Footer from "../pages/footer/footer";
import "./home.css";
import Sidebar from "../pages/sidebar";

const Intro1 = () => {

  return (
    <div>
      <Navbar />
      <div className="total1"><Sidebar/>
      
      <div className="flex-container1" >
        <div className="flex-child magenta">
        <p className="heading">Laundry Service</p>
        <p className="con"> Doorstep Wash & Dryclean Service</p>
        
        <div className="firstorder">
        <a href="/order"><button className="btn btn-outline-dark p-3" href="/order">Create Order</button></a>
        
        
        </div>

       </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Intro1;

import React from "react";
import Navbar from "../pages/navBar";
import Footer from "../pages/footer/footer";
import "./home.css";
const Career = () => {
  return (
    <div>
      <Navbar />
      
      <div className="flex-container" id="a">
        <div className="flex-child magenta">
        <p className="heading">We are Hiring !!</p>
        <p className="con"> Email you resume to career@Laundry.com </p>
       </div>
      </div>
      <Footer/>
    </div>
  );
};
export default Career;

import React from "react";
import Footer from "../footer/footer";
// import Modal1 from "../modal1";
// import Modal from "../modal";
import Navbar from "../navBar1";
import Sidebar from "../sidebar";
import "./order.css";
import Ordertable from "./ordertable";
// import axios from "axios";




const CreateOrder = () => {

  return(
  <div className="total">
    <Navbar/>
    <div className="main-page">
    <Sidebar/>
    <br/>
      <div className="create-order-table">
        <div className="order-header">
          <header >
            <p>Create Order</p>
          </header>
        </div>
      <div className="hw">
    <Ordertable/>
    </div>

    </div>
  </div>
  <Footer />
</div>
        
)};
export default CreateOrder;
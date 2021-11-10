// import React,{useState} from "react";
import Footer from "../pages/footer/footer";
import Navbar from "../pages/navBar1";
import Sidebar from "../pages/sidebar";
import "./pastorders.css";
import Pastordertable from "./pastOrder";
// import orders from "../utils/orderdata";



const Pastorders = () => {
  

  // const [orderItems, setOrderItems] = useState(orders);

    return(

<div className="total">
  <Navbar/>
  <div className="main-page">
  <Sidebar/>
  <div className="create-order-table">
    <div className="order-header">              
       
      </div>
      <Pastordertable />
  </div>
</div>
<Footer />


</div>
        
)};
export default Pastorders;

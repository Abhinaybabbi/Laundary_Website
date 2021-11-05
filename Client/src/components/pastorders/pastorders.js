import React,{useState} from "react";
import { useHistory } from "react-router";
import Footer from "../pages/footer/footer";
import Navbar from "../pages/navBar1";
import Sidebar from "../pages/sidebar";
import "./pastorders.css";
import Pastordertable from "./pastOrder";
import orders from "../utils/orderdata";



const Pastorders = () => {
  const history = useHistory();
  

  const [orderItems, setOrderItems] = useState(orders);

    return(

<div className="total">
  <Navbar/>
  <div className="main-page">
  <Sidebar/>
  <div className="create-order-table">
    <div className="order-header">
        <header>
          <span>Orders | 7 </span>
        </header>  
      
        <button className="btn m-2" onClick={()=>{history.push('/order')}}>Create</button>
      </div>
      <Pastordertable orders = {orderItems}/>
  </div>
</div>
<Footer />


</div>
        
)};
export default Pastorders;
{/* <div>
<table className="orderTable">
  <thead>

    <tr className="table-header">
        <th>Order Id</th>
        <th>Order Date & Time</th>
        <th>Store Location</th>
        <th>City</th>
        <th>Total Items</th>
        <th>Price</th>
        <th>Status</th>
        <th>View</th>

    </tr>
    </thead>
    <tbody>
    <tr>
        <td>OR0001</td>
        <td>10 oct 2021, 10:15</td>
        <td>Jp Nagar</td>
        <td>Bangalore</td>
        <td>9581485650</td>
        <td>10</td>
        <td>430 rs</td>
        <td> Ready to Ship</td>
       
    </tr>    
      
    </tbody>
    
    
</table>
</div> */}
import React from "react";
import { useHistory } from "react-router";
import Footer from "../pages/footer/footer";
import Navbar from "../pages/navBar";
import Sidebar from "../pages/sidebar";
import "./pastorders.css";



const Pastorders = () => {
  const history = useHistory();

    return(

<div className="total">
  <Navbar/>
  <div className="main-page">
  <Sidebar/>

{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="logo" href="/" onClick={()=>{history.push('/')}}>LAUNDRY</a>
   
    <div className="firstpageOptions">
    <ul class="nav justify-content-end">
 
  <li class="nav-item">
    <a class="nav-link" href="#">Pricing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Careers</a>
  </li>
  <li class="nav-item">
  <div class="dropdown">
  <button class="dropbtn">User Name</button>
  <div class="dropdown-content">
  <a href="#">Account</a>
  <a href="/" onClick={()=>{history.push('/')}}>Sign out</a>
  </div>
</div>


  </li>
  
</ul>
    </div>
  </div>
</nav> */}



<div className="create-order-table">
  <div className="order-header">
  <header >
    <p>Orders | 0</p>
  </header>
  </div>
<div>
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
</div>


</div>
</div>
<Footer />


</div>
        
)};
export default Pastorders;
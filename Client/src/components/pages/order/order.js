import React from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Modal from "../modal";
import Navbar from "../navBar1";
import Sidebar from "../sidebar";
import "./order.css";




const CreateOrder = () => {
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
    <p>Create Order</p>
  </header>
  </div>
<div>
<table className="orderTable">
  <thead>

    <tr className="table-header">
        <th>Product Types</th>
        <th>Quantity</th>
        <th>Wash Type</th>
        <th>Price</th>

    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Shirts</td>
        <td>1</td>
        <td>Wash + Iron</td>
        <td>1 x 35 = 35</td>

    </tr>
    <tr>
        <td>T Shirts</td>
        <td>1</td>
        <td>Wash</td>
        <td>1 x 20 = 20</td>

    </tr>
    <tr>
        <td>Trousers</td>
        <td>0</td>
        <td>-</td>
        <td>0</td>

    </tr>
    <tr>
        <td>Jeans</td>
        <td>2</td>
        <td>Wash</td>
        <td>2 x 20 = 40</td>

    </tr>
    <tr>
        <td>Boxers</td>
        <td>0</td>
        <td>-</td>
        <td>0</td>

    </tr>
    
    <tr>
        <td>Joggers</td>
        <td>0</td>
        <td>-</td>
        <td>0</td>

    </tr>
      
    </tbody>
    
    
</table>

</div>


<div className="cancelProceed">
  <button className="btn-order" onClick={()=>{history.push('/Order')}}>Cancel</button>
  <button className="btn-order" onClick={()=>{<Modal/>}}>Proceed</button>

</div>

</div>
</div>
<Footer />


</div>
        
)};
export default CreateOrder;
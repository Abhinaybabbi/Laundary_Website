import React from "react";
import { useHistory } from "react-router";
import Footer from '.components/pages/footer/footer'



const CreateOrder = () => {
  const history = useHistory();

    return(

<div className="total">

<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
</nav>



<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand">Create Order</a>
    <form class="d-flex">
    <button><img className="searchIcon" src="https://img.icons8.com/material-rounded/24/000000/search.png"/></button>      
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>







<table className="orderTable" style={{border:"1px solid black"}} align="center">
    <tr className="orderTableText" bgcolor="#2F2F2F" color="white" align="center">
        <th style={{border:"1px solid black"}} align="center">Product Types</th>
        <th style={{border:"1px solid black"}} align="center">Quantity</th>
        <th style={{border:"1px solid black"}} align="center">Wash Type</th>
        <th style={{border:"1px solid black"}} align="center">Price</th>

    </tr>
    <tr>
        <td style={{border:"1px solid black"}} align="center">Shirts</td>
        <td style={{border:"1px solid black"}} align="center">1</td>
        <td style={{border:"1px solid black"}} align="center">Wash + Iron</td>
        <td style={{border:"1px solid black"}} align="center">1 x 35 = 35</td>

    </tr>
    <tr>
        <td style={{border:"1px solid black"}} align="center">T Shirts</td>
        <td style={{border:"1px solid black"}} align="center">1</td>
        <td style={{border:"1px solid black"}} align="center">Wash</td>
        <td style={{border:"1px solid black"}} align="center">1 x 20 = 20</td>

    </tr>
    <tr>
        <td style={{border:"1px solid black"}} align="center">Trousers</td>
        <td style={{border:"1px solid black"}} align="center">0</td>
        <td style={{border:"1px solid black"}} align="center">-</td>
        <td style={{border:"1px solid black"}} align="center">0</td>

    </tr>
    <tr>
        <td style={{border:"1px solid black"}} align="center">Jeans</td>
        <td style={{border:"1px solid black"}} align="center">2</td>
        <td style={{border:"1px solid black"}} align="center">Wash</td>
        <td style={{border:"1px solid black"}} align="center">2 x 20 = 40</td>

    </tr>
    <tr>
        <td style={{border:"1px solid black"}} align="center">Boxers</td>
        <td style={{border:"1px solid black"}} align="center">0</td>
        <td style={{border:"1px solid black"}} align="center">-</td>
        <td style={{border:"1px solid black"}} align="center">0</td>

    </tr>
    <tr>
        <td style={{border:"1px solid black"}} align="center">Joggers</td>
        <td style={{border:"1px solid black"}} align="center">0</td>
        <td style={{border:"1px solid black"}} align="center">-</td>
        <td style={{border:"1px solid black"}} align="center">0</td>

    </tr>
</table>


<div className="cancelProceed">
  <button className="cancelOrder" onClick={()=>{history.push('/createOrderPage')}}>Cancel</button>
  <button className="proceedOrder" onClick={()=>{history.push('/orderSummary')}}>Proceed</button>

</div>







  <div className="sidebar">
    <ul>
    <dt><a className="sidebarHome" href="#"><img alt="image" src="https://img.icons8.com/material-sharp/24/000000/home.png" alt="home"/></a></dt>
<dt><a className="sidebarAdd" href="/createOrder"><img onClick={()=>{history.push('/createOrder')}} src="https://img.icons8.com/ios-glyphs/24/000000/add--v1.png" alt="add"/></a></dt>
<dt><a className="sidebarList" href="#"><img src="https://img.icons8.com/material-outlined/24/000000/list.png" alt="list"/></a></dt>


    </ul>
  </div>


  <Footer />






{/* 
<footer className="footer">
  <div className="footer-content">
    <p>2021 <img className="copyrightImage" src="https://img.icons8.com/ios/15/000000/circled-c.png"/>Laundry</p>
  </div>
</footer> */}










</div>




        
    )

}
export default CreateOrder;
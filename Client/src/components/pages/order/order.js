import React, { useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Modal1 from "../modal1";
import Modal from "../modal";
import Navbar from "../navBar1";
import Sidebar from "../sidebar";
import "./order.css";




const CreateOrder = () => {
  const history = useHistory();
  const [show,setShow] = useState(false)
  const [modal,setModal] = useState(false)


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
        <th></th>

    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Shirts</td>
        <td><input type={Number} placeholder="0"></input></td>
        <td>
          <div className="washTypes">
          <div>washing</div>
          <div>iron</div>
          <div>Dryclean</div>
          <div>chemical wash</div>
          </div>
        </td>
        <td>1 x 35 = 35</td>
        <td><button>Reset</button> </td>

    </tr>
    <tr>
        <td>T Shirts</td>
        <td><input type={Number} placeholder="0"></input></td>
        <td><div className="washTypes">
          <div>washing</div>
          <div>iron</div>
          <div>Dryclean</div>
          <div>chemical wash</div>
          </div></td>
        <td>1 x 20 = 20</td>
        <td><button>Reset</button> </td>

    </tr>
    <tr>
        <td>Trousers</td>
        <td><input type={Number} placeholder="0"></input></td>
        <td><div className="washTypes">
          <div>washing</div>
          <div>iron</div>
          <div>Dryclean</div>
          <div>chemical wash</div>
          </div></td>
          <td>0</td>
        <td><button>Reset</button> </td>

    </tr>
    <tr>
        <td>Jeans</td>
        <td><input type={Number} placeholder="0"></input></td>
        <td><div className="washTypes">
          <div>washing</div>
          <div>iron</div>
          <div>Dryclean</div>
          <div>chemical wash</div>
          </div></td>
        <td>2 x 20 = 40</td>
        <td><button>Reset</button> </td>

    </tr>
    <tr>
        <td>Boxers</td>
        <td><input type={Number} placeholder="0"></input></td>
        <td><div className="washTypes">
          <div>washing</div>
          <div>iron</div>
          <div>Dryclean</div>
          <div>chemical wash</div>
          </div></td>
          <td>0</td>
        <td><button>Reset</button> </td>

    </tr>
    
    <tr>
        <td>Joggers</td>
        <td><input type={Number} placeholder="0"></input></td>
        <td><div className="washTypes">
          <div>washing</div>
          <div>iron</div>
          <div>Dryclean</div>
          <div>chemical wash</div>
          </div></td>
        <td>0</td>
        <td><button>Reset</button> </td>


    </tr>
      
    </tbody>
    
    
</table>

</div>


<div className="cancelProceed">
  <button className="btn-order" onClick={()=>{history.push('/Order')}}>Cancel</button>
  <button className="btn-order" onClick={()=>setShow(true)}>Proceed</button>
  <Modal1 onClose={()=>setShow(false)} show={show}/>
  <Modal onOpen={()=>setModal(true)} modal={modal}/> 
   

</div>

</div>
</div>
<Footer />


</div>
        
)};
export default CreateOrder;
import React, { useState , useEffect } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Modal1 from "../modal1";
import Modal from "../modal";
import Navbar from "../navBar1";
import Sidebar from "../sidebar";
import "./order.css";
import items from "../../utils/data";
import Ordertable from "./ordertable";
import axios from "axios";




const CreateOrder = () => {

  const history = useHistory();
  const [show,setShow] = useState(false)
  const [modal,setModal] = useState(false)
  const [orderItem, setOrderItems] = useState(items);
  const postData=()=>{
    axios.post('http://localhost:5000/orders')
    .then(function (response) {            
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error);
    })
}

useEffect(() => {
    postData()
  });

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
    <Ordertable items = {orderItem} />
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
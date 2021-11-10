import eyeIcon from "../Assets/eyeicon.svg";
import  Modal from "react-bootstrap/Modal";
import "./pastorder12.css"
import"../pages/newmodal.css"
// import { useHistory } from "react-router";
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { getToken } from '../pages/Utils/AuthOperations';
import Inorderitems from "../pages/order/Inorderitems";




function Ordertabledata({     _id,    order_id,    store,  info,    address,    total_quantity,    statues,    total_price,    createdAt}){
      
        const [show,setShow] = useState(false);
        const [order, setOrder] = useState([]);
        const [cancel,setCancel]= useState(false);
        async function Cancel() {
            setCancel(true);
          }
       
        
            async function clickHandle() {
                setShow(true);
                
                axios
                  .get(`http://localhost:5000/orders/${_id}`, {
                    headers: { Authorization: `Bearer ${getToken()}` },
                  })
                  .then((response)=>{            
                    setOrder(response.data.data.orders);
                    console.log(response)
                  });
              

        }
          
        async function handleClickStatus() {
            axios.put(
              `http://localhost:5000/orders/${_id}`,
              {},
              { headers: { Authorization: `Bearer ${getToken()}` } }
            );
          }
        
         
        
    

          const handleClose = () => setShow(false);



return(
    <>
    <tr key={order_id} >
        <th scope="row">{order_id}</th>
        <td>{createdAt}</td>
        <td>{address}</td>
        <td>{store.address}</td>
        <td>{store.city}</td>
        <td>{store.phone}</td>
        <td>{total_quantity}</td>
        <td>{total_price+90}</td>
        <td>{statues}</td>
        {/* <td>{order._id}</td> */}
        {/* <td>{order.status[0].statusCode}</td> */}
        <td>
            <button className="btn text-danger font-weight-bold" onClick={Cancel}>
                {statues === "Ready to Pickup" ? "Cancel Order" : "--"}
            </button>
        </td>
        <td><button className="btn" onClick={clickHandle} ><img src={eyeIcon} alt="error" /></button></td>
        
    </tr>
    <Modal
     onHide={handleClose} 
     animation={false}
     show={show} dialogClassName="modal-100w"
     
     aria-labelledby="example-custom-modal-styling-title">
   
             <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Summary
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <div className="confirm_page">
            <div class="row mainadd">
              <div class="col-lg-4">
              <h6>Store Location :</h6>
                <p>{store.location}</p>
                <p></p>
              </div>
              <div class="col-lg-4">
                <h6>Store Address :</h6>
                <p>{store.address}</p>
              </div>
              <div class="col-lg-4">
                <h6>Phone :</h6>
                <p>{store.phone}</p>
              </div>
            </div>
          </div>

             <div className="order-details">
                 <span>Order Details</span>
                 <div className="modal-body-table">
                     <table className="table">
                         <tbody>
                         {/* { order.map(
              (orderedItem) =>
                             (
                        <Inorderitems   name={orderedItem.name} type={orderedItem.value} cost={orderedItem.value.price} quantity={orderedItem.value.quantity}   />
                        
                     )
                 )} */}
                             {/* total price row  */}
                             <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Sub total:</td>
                                        <td className="style-bold">{total_price} </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Pickup Charges:</td>
                                        <td className="style-bold"> 90 </td>
                                    </tr>
                                    <tr className="total-cost-row">
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Total:</td>
                                        <td>{total_price+90}</td>
                                    </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
             <div className="modal-footer">                 
                 <div className="Address">
                    <div className="p-0 m-2 card-body">
                     <span>Address :</span>
                    </div>
                    <div className="p-2 m-1">
                        <h6>Pickup Address</h6>
                        <p className="card-text align-left">{address}</p>  </div>
                    </div>
                                  
             </div>
            
           
        </Modal.Body>
        <Modal.Footer>
        <div >
            <button className="btn btn-danger" onClick={Cancel}> Cancel</button>
                     
            </div>

        </Modal.Footer>
        </Modal>
    </>
)
}

export default Ordertabledata;
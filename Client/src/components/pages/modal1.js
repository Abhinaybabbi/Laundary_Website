import React, { useState } from "react";
import "./modal1.css";
import Modal from "./modal";

const Modal1 = props =>{
    if (!props.show){
        return null
    }
    return(
        <div className="modal">
             <div className="modal-content">
             <div className="modal-header">
                 <h4 className="modal-title">Summary</h4>
                 <button className="btn btn-danger" onClick={props.onClose}>close</button>
             </div>
             <div className="modal-addres-bar">
                 <div className="modal-address-input">
                    <input type="text" placeholder="Store Location"></input>
                     
                 </div>
                 <div className="modal-address-store">
                 <label>Store Address :</label>
                 </div>
                 <div className="modal-address-phone">
                 <label>Phone :</label>
                 </div>

             </div>
             <div className="modal-body">
                 <p>Order Details</p>
                 <div className="modal-body-table">
                     <table className="table">
                         <tbody>
                             <tr>
                                 <tr>
                                     <td> Shirt</td>
                                     <td> Washing,Iron</td>
                                     <td> 5x20 =</td>
                                     <td> 100</td>
                                 </tr>
                                 <tr>
                                     <td> Jeans</td>
                                     <td> Washing,Iron</td>
                                     <td> 5x20 =</td>
                                     <td> 100</td>
                                     
                                 </tr>
                                 <tr>
                                     <td> Joggers</td>
                                     <td> Washing,Iron</td>
                                     <td> 5x20 =</td>
                                     <td> 100</td>
                                 </tr>

                             </tr>
                             {/* total price row  */}
                             <tr>
                                 <tr>
                                     <td>sub total :</td>
                                     <td>450</td>
                                     
                                 </tr>
                                 <tr>
                                    <td> Pickup charges :</td>
                                    <td> 90</td>
                                 </tr>
                                 <tr>
                                    <td> Total :</td>
                                    <td>  Rs 590</td>
                                 </tr>



                             </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
             <div className="modal-footer">
                 <p>Address</p>
                 <div className="Address">
                     <button>
                     <h1>Home</h1>
                     <p>1-878/45, 10th street,JP Nagar,Bangalore</p>  </button>
                 </div>
                 <div>
                     <button className="btn btn-primary" onClick={
                         props.onClose
                         }> Confirm</button>
                     
                 </div>
                
             </div>
             </div>
        </div>
    )
}
export default Modal1;
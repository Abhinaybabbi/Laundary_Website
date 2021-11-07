import React from "react";
import "./modal1.css";

import Addresbar from"./addressbar";


const Modal1 = props =>{
    
    if (!props.show){
        return null
    }
    return(
        <div className="modal">
             <div className="modal-content">
             <div className="modal-header">
                 <h4 className="modal-title">Summary</h4>
                 <a href="#"><button className="btn" onClick={props.onClose}>X</button></a>
             </div>
             <Addresbar  />
             <div className="order-details">
                 <span>Order Details</span>
                 <div className="modal-body-table">
                     <table className="table">
                         <tbody>
                           
                                 <tr>
                                     <td> Shirt</td>
                                     <td> Washing,Iron</td>
                                     <td className="move-right style-bold"> 5x20 =</td>
                                     <td className="text-color style-bold"> 100</td>
                                 </tr>
                                 <tr>
                                     <td> Jeans</td>
                                     <td> Washing,Iron</td>
                                     <td className="move-right style-bold"> 5x20 =</td>
                                     <td className="text-color style-bold"> 100</td>
                                 </tr>
                                 <tr>
                                     <td> Joggers</td>
                                     <td> Washing,Iron</td>
                                     <td className="move-right style-bold"> 5x20 =</td>
                                     <td className="text-color style-bold"> 100</td>
                                 </tr>

                             
                             {/* total price row  */}
                             <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Sub total:</td>
                                        <td className="style-bold"> 300 </td>
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
                                        <td> RS 390 </td>
                                    </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
             <div className="modal-footer1">                 
                 <div className="Address">
                    <div className="p-0 m-2 card-body">
                     <span>Address :</span>
                    </div>
                    <div className="p-2 m-1 card  custom-card col-md-4">
                        <h4>Home</h4>
                        <p className="card-text align-left">1-878/45, 10th street,JP Nagar,Bangalore</p>  </div>
                    </div>
                                  
             </div>
             <div className="modal-footer">
                     <button className="btn custom-btn-confirm" onClick={ props.onClose  }> Confirm</button>
                     
            </div>
             </div>
        </div>
    )
}
export default Modal1;

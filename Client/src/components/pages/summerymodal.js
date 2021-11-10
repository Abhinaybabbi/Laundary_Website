import React from "react";
import "./modal1.css";
// import Inorderitems from ""


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
             <div className=" p-1 m-2">
             <div className="store-details-element"> 
            <span className="style-bold">Phone:</span>
            <span>{props.store.phone}</span>
        </div>
        <div className="store-details-element">
            <span className="style-bold">Store Address:</span>
            <span>{props.store.address}</span>
        </div>
             </div>

             <div className="order-details">
                 <span>Order Details</span>
                 <div className="modal-body-table">
                     <table className="table">
                         <tbody>
                         {props.info.length > 0 &&
                  props.info.map(
                     (inorderitem)=>inorderitem.value.quantity >0 && (inorderitem.value.wash || inorderitem.value.iron || inorderitem.value.fold || inorderitem.value.bleach )
                      && (
                        <Inorderitems   name={inorderitem.name} type={inorderitem.value} cost={inorderitem.value.price} quantity={inorderitem.value.quantity}   />
                        
                     )
                 )}
                             {/* total price row  */}
                             <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Sub total:</td>
                                        <td className="style-bold">{props.total_price} </td>
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
                                        <td>{props.total_price+90}</td>
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
                        <h4>Pickup Address</h4>
                        <p className="card-text align-left">{props.address}</p>  </div>
                    </div>
                                  
             </div>
             <div className="modal-footer">
                     <button className="btn btn-danger" onClick={ props.onClose }> Cancel</button>
                     
            </div>
             </div>
        </div>
    )
}
export default Modal1;

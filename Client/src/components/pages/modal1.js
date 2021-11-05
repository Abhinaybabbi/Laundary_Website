import React,{useState} from "react";
import "./modal1.css";
import stores from "../utils/storedata";
import Addresbar from"./addressbar";


const Modal1 = props =>{
    const [store, setStore] = useState(stores);
    if (!props.show){
        return null
    }
    return(
        <div className="modal">
             <div className="modal-content">
             <div className="modal-header">
                 <h4 className="modal-title">Summary</h4>
                 <a><button className="btn" onClick={props.onClose}>X</button></a>
             </div>
             <Addresbar stores = {store} />
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
             <div className="modal-footer1">
                 
                 <div className="Address">
                 <p>Address :</p>
                     <button>
                     <h1>Home</h1>
                     <p>1-878/45, 10th street,JP Nagar,Bangalore</p>  </button>
                     <input className='add-address' type="text" placeholder="enter your address"></input>
                 </div>               
             </div>
             <div className="modal-footer">
                     <button className="btn btn-primary" onClick={ props.onClose  }> Confirm</button>
                     
                 </div>
             </div>
        </div>
    )
}
export default Modal1;
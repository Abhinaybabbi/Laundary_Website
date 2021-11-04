import React from "react";
import "./modal.css";
import { useHistory } from "react-router";

const Modal = props =>{
    const history = useHistory();
    if (!props.modal){
        return null
    }
    return(
        <div className="modal1">
             <div className="modal1-content">
             <div>

             </div>
             <div>
                 <h1>Your order is Successful</h1>
             </div>
             <div>
                 <button className="btn" onClick={()=>{history.push('/pastorders')}} > Go to orders</button>
             </div>
             </div>
        </div>
    )
}
export default Modal;
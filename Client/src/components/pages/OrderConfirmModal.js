import React from "react";
import "./modal.css";
import order from "../Assets/check-mark.png";
import { useHistory } from "react-router";

const OrderConfirmModal = (props) =>{
    const history = useHistory();
    if (!props.show){
        return null
    }
    return(
        <div className="modal" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
       
            <img className="checkmark" src={order}/>
            <br/>
            <br/>
            
            <h4>Your order is Successfully.</h4>
            <br/>
            <p>You can track the delivery in the "Orders" section.</p>
            <button className="ordersuccessfull" onClick={()=>{history.push('/pastorders')}} > Go to orders</button>

            
       
       
      </div>
      
      
    )
}
export default OrderConfirmModal;

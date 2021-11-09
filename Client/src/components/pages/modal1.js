import React, { useState } from "react";
import "./modal1.css";
import OrderConfirmModal from "./OrderConfirmModal";
import Storename from"./addressSelector";
// import { useHistory } from "react-router";
import axios from "axios";
import {getToken} from "./Utils/AuthOperations";
import Inorderitems from "./order/Inorderitems";

// const selectstore = { }
const Modal1 = (props) =>{
    const [show,setShow]= useState(false)
    // const history = useHistory();


    const storedetails = [
        {
            id:1,
            location:"Kothapet",
            phone:"+91 99999999",
            city:"Hyderabad",
            Address: "1-874/305 jaipur colony near Busstop ",
    
        },
        {
            id:2,
            location:"Dilsukhnagar",
            phone:"+91 988745999",
            city:"Hyderabad",
            Address: "4-874/A5 watson street near Bank of America ",
    
        },
        {
            id:3,
            location:"Malakpet",
            phone:"+91 957415439",
            city:"Hyderabad",
            Address: "A45/1-05 Bank colony near MetroStation ",
    
        },
    ];



    const confirmOrder=()=>{
        setShow(true);
        // const storeselected=[];
        // storeselected.push({store: store })
        
        const placeOrderData=[];
        props.coData.forEach((order)=>{
            placeOrderData.push({ item: order.name, ...order.value});
        })
        axios.post(
            "http://localhost:5000/orders",
            {
                info:placeOrderData,
                address: "Hyderabad",
                status: "Ready to Pickup",
                store:"store address",
            },
            { headers : { Authorization: `Bearer ${getToken()}`}}
        );
        console.log("order posted to API")
        console.log(placeOrderData)

    }
    // function handlestore(props){
    //      return;    
    //   }

    
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
                <div className="store-details">
                    <div>
                   
                        <select className="form-select-style" aria-label="Default select example">
                        { storedetails.map((store)=>(
                            <Storename id={store.id}
                            location={store.location}
                            // selectedstore={handlestore}
                             />
                            
                           
                        )
                        )}                             
                        </select>
                       
                    </div>
                    <div className="store-details-element"> 
                        <span className="style-bold">Phone:</span>
                        <span>+91 99999999</span>
                    </div>
                    <div className="store-details-element">
                        <span className="style-bold">Store Address:</span>
                        <span>Near phone booth 10th road</span>
                    </div>
                </div>
             <div className="order-details">
                 <h5>Order Details</h5>
                 <table>
                 <tr> <th>Item Name</th><th>Service Type</th><th>Cost </th><th> </th><th>    </th></tr>
                 </table>
                  {props.coData.length > 0 &&
                  props.coData.map(
                     (inorderitem)=>inorderitem.value.quantity >0 && (inorderitem.value.wash || inorderitem.value.iron || inorderitem.value.fold || inorderitem.value.bleach )
                      && (
                        <Inorderitems   name={inorderitem.name} type={inorderitem.value} cost={inorderitem.value.price} quantity={inorderitem.value.quantity}   />
                        
                     )
                 )}
                 <div className="modal-body-table">
                     <table className="table">
                         <tbody>
                                                        
                             {/* total price row  */}
                             <tr>       <td></td>
                                        <td></td>
                                        <td className="move-right">Sub total:</td>
                                        <td className="style-bold m-1">Rs {props.ordertotal} /- </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Pickup Charges:</td>
                                        <td className="style-bold">Rs 90 /-</td>
                                    </tr>
                                    <tr className="total-cost-row">
                                        <td></td>
                                        <td></td>
                                        <td className="move-right">Total:</td>
                                        <td > Rs {props.ordertotal + 90} /- </td>
                                    </tr>
                         </tbody>
                     </table>
                 </div>
             </div>
             <div className="modal-footer1">                 
                 <div className="Address">
                    <div className="p-0 m-2 card-body">
                     <p className="style-bold m-1">Address :</p>
                    </div>
                    <div className="p-2 m-1 card  custom-card col-md-4">
                             <p className="card-text align-left">1-878/45, 10th street,JP Nagar,Bangalore</p>  </div>
                    </div>
                                  
             </div>
             <div className="modal-footer p-1">
                     <button className="btn custom-btn-confirm" onClick={confirmOrder}> Confirm</button>
                     <OrderConfirmModal onClose={()=>setShow(false)} show={show}/>
                     
            </div>
             </div>
        </div>
    )
}
export default Modal1;

import React, { useState } from "react";
import "./modal1.css";
import OrderConfirmModal from "./OrderConfirmModal";
import "./newmodal.css"
// import Storename from"./addressSelector";
// import { useHistory } from "react-router";
import axios from "axios";
import {getToken} from "./Utils/AuthOperations";
import Inorderitems from "./order/Inorderitems";

// const selectstore = { }
const Modal1 = (props) =>{
    const [show,setShow]= useState(false)
    const [useraddress,setUseraddress]=useState("")
    const [option,setOption] = useState()

    let address=""
    let phone=""
    let store=[]
    let city=""
    let location=""

    if(option==="dilsukhnagar"){
        address ="1-5-74/Dilsukhnagar"
        phone="+91 98955654"
        store={address :"1-5-74/Dilsukhnagar",
        phone:"+91 98955654",city:"Hyderabad",location:"dilsukhnagar"};
        console.log(store);
    }else if (option=== "malakpet"){
        address = "1-5-74/malakpet near busstop"
        phone="+91 989515664"
        store={address : "1-5-74/malakpet near busstop",
        phone:"+91 989515664",city:"Hyderabad",location:"malakpet"};
        console.log(store);

    }else if (option=== "lbnagar"){
        address = "1-5-74/ lb nagar"
        phone="+91 956625654"
        store={address : "1-5-74/ lb nagar",
        phone:"+91 956625654",city:"Hyderabad",location:"lbnagar"};
        console.log(store);

    }
    

function handleChange(event){
    setOption(event.target.value)
}


    // const history = useHistory();


   


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
                address: useraddress,
                statues: "Ready to Pickup",
                store:store,
                
            },
            { headers : { Authorization: `Bearer ${getToken()}`}}
        );
        console.log("order posted to API")
        console.log(address)

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
                   
                    <select  className="form-select-style" aria-label="Default select example" name='store selector' value={option} onChange={handleChange}>
                        <option value="dilsukhnagar">dilsukhnagar</option>
                        <option value="malakpet">malakpet</option>
                        <option value="lbnagar">lbnagar</option>                        
                    </select>
                       
                    </div>
                    <div className="store-details-element"> 
                        <span className="style-bold">Phone:</span>
                        <span>{phone}</span>
                    </div>
                    <div className="store-details-element">
                        <span className="style-bold">Store Address:</span>
                       
                        <span>{address}</span>
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
                 
                    <div className="p-0 m-2 card-body">
                     <p className="style-bold m-1">Address :</p>
                    </div>
                    <div className="Address">
                    {/* <div className="p-2 m-1 card  custom-card col-md-4 shadow p-3 mb-5 bg-white rounded" >
                             <p className="card-text align-left" onClick={(e)=>setAddress(e.target.value)}>1-878/45, 10th street,JP Nagar,Bangalore</p>
                             
                    </div> */}
                   
                             
                             <input  className="Address-input" placeholder="Enter Address here" type="text" value={useraddress} onChange={(e)=>setUseraddress(e.target.value)}></input> 
                   
                             
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


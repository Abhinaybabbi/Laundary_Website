import Modal1 from '../pages/summerymodal';
import React, { useState,useEffect } from 'react';
import eyeIcon from "../Assets/eyeicon.svg";
import axios from "axios";
import { getToken } from '../pages/Utils/AuthOperations';

const PastOrder = ({ _id, order_id, phone,address, total_quantity, status,  total_price,  createdDate,})=> {
    const [show,setShow] = useState(false);
    const [orders, setOrders] = useState([])
    const [cancel,setCancel]= useState(false);

// const [modal1, setModal1] = useState(false);
async function Cancel() {
    setCancel(true);
  }


    useEffect(() => {
        axios.get('http://localhost:5000/orders',{ 
            headers : { 
                "Content-Type":"application/json",
                Authorization: `Bearer ${getToken()}`,
        
        },
        
        })
            .then((response)=>{            
            console.log(response.data)
            setOrders(response.data.data.orders);
        })
            .catch(function (error) {
            console.log(error);
        })
      });
      async function clickHandle() {
        setShow(true);
        axios
          .get(`http://localhost:5000/orders/`, {
            headers: { Authorization: `Bearer ${getToken()}` },
          })
          .then((res) => {
            setOrders(res.data.data.details);
          });
      }
    

    return (
        <div>
            <table className="table">
                <thead className="table-dark">
                    <tr className="table-header">
                        <th>Order Id</th>
                        <th>Order Date & Time</th>
                        <th>Store Address</th>
                        <th>City</th>
                        <th>Store phone</th>
                        <th>Total Items</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                        <th>View</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {orders.map(order=>{
                        return(
                            <tr key={order.order_id} >
                                <th scope="row">{order.order_id}</th>
                                {/* <td>{order.name}</td> */}
                                <td>{order.address}</td>
                                <td>{order.total_price}</td>
                                <td>{order.total_quantity}</td>
                                <td>10</td>
                                <td>{order.statues}</td>
                                {/* <td>{order.status[0].statusCode}</td> */}
                                <td>
                                    <p class="text-danger font-weight-bold" onClick={Cancel}>
                                        {order.statues === "Pending" ? "Cancel Order" : "--"}
                                    </p>
                                </td>
                                <td><button className="btn" onClick={clickHandle}><img src={eyeIcon} alt="error" /></button></td>
                                <Modal1 onClose={()=>setShow(false)} show={show}/>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/* { Modal1 && <Modal1 changeParentval={()=>{setModal1(false)}} />} */}
                
        </div>
      
    );
}


export default PastOrder;
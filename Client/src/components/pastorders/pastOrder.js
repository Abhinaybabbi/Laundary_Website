import "./pastorder12.css"
import { useHistory } from "react-router";
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { getToken } from '../pages/Utils/AuthOperations';
import Ordertabledata from './ordertabledata';
const PastOrder = ()=> {
    const history = useHistory();
    // const [show,setShow] = useState(false);
    const [orders, setOrders] = useState([])
    // const [count,setCount]=useState(0)

// const [modal1, setModal1] = useState(false);



    useEffect(() => {
        
        axios.get('http://localhost:5000/orders',{ 
            headers : { 
                "Content-Type":"application/json",
                Authorization: `Bearer ${getToken()}`,
        
        },
        
        })
            .then((response)=>{            
            setOrders(response.data.data.orders);
            console.log(response)
            // setCount(orders.length);
        })
            .catch(function (error) {
            console.log(error);
        })
      },[]);
 

    return (
        <div className="pastorder-main">
            <span className="span1"> <br/><br/><h5>Orders: </h5> <button className="btn m-2" onClick={()=>{history.push('/order')}}>Create</button> </span>
            <table className="table">
                <thead className="table-dark">
                    <tr className="table-header">
                        <th>Order Id</th>
                        <th>Order Date & Time</th>
                        <th>Pickup Address</th>
                        <th>Store Address</th>
                        <th>City</th>
                        <th>Store phone</th>
                        <th>Total Items</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>cancel Order</th>
                        
                        <th>View</th>
                        
                    </tr>
                </thead>
                <tbody>

                    {orders.map((order)=>(
                        <Ordertabledata key={order.order_id} {...order}/>
                        
    ))}
                </tbody>
            </table>
            {/* { Modal1 && <Modal1 changeParentval={()=>{setModal1(false)}} />} */}
                
        </div>
      
    );
}


export default PastOrder;
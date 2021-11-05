import Modal1 from '../pages/summerymodal';
import React, { useState,useEffect } from 'react';
import eyeIcon from "../Assets/eyeicon.svg";
import axios from "axios";

const PastOrder = ({ orders })=> {
    const [show,setShow] = useState(false)

// const [modal1, setModal1] = useState(false);

    const getData=()=>{
        axios.get('http://localhost:5000/orders')
        .then(function (response) {            
            console.log(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    useEffect(() => {
        getData()
      });
    

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

                    {orders.map((order,index)=>{
                        return(
                            <tr key={index} >
                                <th scope="row">{order.orderId}</th>
                                <td>{order.dateTime}</td>
                                <td>{order.storeAddress.address}</td>
                                <td>{order.storeAddress.location}</td>
                                <td>{order.storeAddress.phone}</td>
                                <td>10</td>
                                <td>{order.total}</td>
                                <td>{order.status[0].statusCode}</td>
                                <td> <a href="#">cancel</a> </td>
                                <td><button className="btn" onClick={()=>{setShow(true)}}><img src={eyeIcon} alt="error" /></button></td>
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
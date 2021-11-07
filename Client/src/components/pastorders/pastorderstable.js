// import React, { useState } from "react";

import "./pastorders.css";


const orderstable = ({ items }) => {
    return(
        <table className="orderTable">
  <thead>

    <tr className="table-header">
        <th>Order Id</th>
        <th>Order Date & Time</th>
        <th>Store Location</th>
        <th>City</th>
        <th>Total Items</th>
        <th>Price</th>
        <th>Status</th>
        <th>View</th>

    </tr>
    </thead>
    <tbody>
    {items.map((orderitems)=>{
                    const{id,title,image,discription} = orderitems;
                    return( 
    <tr key={id}>
        <td>OR0001</td>
        <td>10 oct 2021, 10:15</td>
        <td>Jp Nagar</td>
        <td>Bangalore</td>
        <td>9581485650</td>
        <td>10</td>
        <td>430 rs</td>
        <td> Ready to Ship</td>
       
    </tr>
        );
    })};
    </tbody>    
    
    </table>
        
);
};
export default ordertable;
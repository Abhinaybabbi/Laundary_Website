// import React, { useState } from "react";
import wash1 from "../icons/wash-1.svg";
import iron1 from "../icons/iron-1.svg";
import dryclean1 from "../icons/dryclean.svg";
import bleach1 from "../icons/bleach.svg";
import "./order.css";
// import { useState } from "react";


const Ordertable = ({ items }) => {
    // const [wash, setWash] = useState(false);
    // const [iron, setIron] = useState(false);
    // const [dryclean, setDryclean] = useState(false);
    // const [chemical, setChemical] = useState(false);
    

    // const handleOnChangewash = () => {
    //     setWash(!wash);
       
       
        
    //   };
    //   const handleOnChangedryclean = () => {
    //     setDryclean(!dryclean);
        
    //   };
    //   const handleOnChangeiron = () => {
    //     setIron(!iron);
        
    //   };
    //   const handleOnChangechemical = () => {
    //     setChemical(!chemical);
        
    //   };
    return(
        <table className="orderTable">
            <thead>
                <tr className="table-header">
                    <th>Product Types</th>
                    <th>Quantity</th>
                    <th>Wash Type</th>
                    <th>Price</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
            {items.map((orderitems)=>{
                    const{id,title,image,discription} = orderitems;
                    return( <tr key={id}>
                                {/* <articale key ={id} className="order-items"> */}
                                <td className="item">
                                    <div><img src = {image} alt={title} className='photo'/></div>
                                    <div><h5>{title}</h5> <p>{discription}</p></div>
                                </td>                            
                                <td><input className="item-quantity"  placeholder="0"></input></td>
                                <td><div className="washTypes">
                                <div><button className="btn" type="checkbox" id="wash"    name="service"   value="20" ><img className="service-type" src={wash1} alt="wash"/>    </button></div>
                                <div><button className="btn"type="checkbox" id="iron"     name="service"   value="20" ><img className="service-type" src={iron1} alt="wash"/>    </button></div>
                                <div><button className="btn"type="checkbox" id="dryclean" name="service"   value="20" ><img className="service-type" src={dryclean1} alt="wash"/></button></div>
                                <div><button className="btn"type="checkbox" id="chemical" name="service"   value="20" ><img className="service-type" src={bleach1} alt="wash"/>  </button></div>
                                </div></td>
                                <td>0</td>
                                <td><button className="btn">Reset</button> </td>
                                {/* </articale> */}
                            </tr>
                    );
                })};
                
                
              
           
       
    </tbody>
    </table>
        
);
};
export default Ordertable;
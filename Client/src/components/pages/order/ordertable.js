import React,{useCallback, useState} from "react";
import Ordercomponent from "./ordercomponent";
import Modal1 from "../modal1";
// import OrderConfirmModal from "../OrderConfirmModal";
import "./order.css"
import { useHistory } from "react-router";

// import Summaryorder from "./summaryorder";

const order = { orderId: "orderId", userId: "userId", details: new Map() };


let coData = [];

function Ordertable() {
  const history = useHistory();
  const [show,setShow] = useState(false)
  function handleCB(props){
    order.details.set(props.name,props.value);
    coData = [...order.details].map(([name,value])=>({
      name,value   })); return;    
  }

  const orderComponents = [
    {
        id:1,
        name:"Shirt",
        image:"./images/Shirt.jpg",
        type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",

    },
    {
        id:2,
        name:"TShirt",
        image:"./images/Tshirt.jpg",
        type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",

    },
    {
        id:3,
        name:"Trousers",
        image:"./images/Trousers.jpg", 
        type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",
        

    },
    {
        id:4,
        name:"Jeans",
        image:"./images/jeans.jpg",
         type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",

    },
    {
        id:5,
        name:"Boxers",
        image:"./images/boxers.jpg", 
        type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",

    },
    {
        id:6,
        name:"Joggers",
        image:"./images/joggers.jpg",
         type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",

    },

    {
        id:7,
        name:"Others",
        image:"./images/cloths.jpg", 
        type:"boolean",
        discription: "Lorem Ipsum is simply dummy text of the ",

    },


];
  return ( <div className="ordertable123">
    <span><h5>Create Order</h5></span>
  <table className="table">
              <thead className="table-dark">
                <tr className="table-header">
                  <th></th>
                  <th>Product Types</th>
                  <th>Quantity </th>
                  <th>Wash Type</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orderComponents.map((orderItem) => (
                  <Ordercomponent
                    id={orderItem.id}
                    image={orderItem.image}
                    description={orderItem.description}
                    name={orderItem.name}
                    handleClick={handleCB}
                  />
                ))}
              </tbody>
            </table>
            <div className="cancelProceed">

    <button className="btn-order" onClick={()=>{history.push('/homepage')}}>Cancel</button>
    <button className="btn-order" onClick={()=>setShow(true)}>Proceed</button>
    <Modal1 onClose={()=>setShow(false)} show={show}
     ordertotal={coData.map((order)=>order.value.price).reduce((acc,val)=> acc + parseInt(val,10),0)}
     coData={coData} />
      {/* <OrderConfirmModal onClose={()=>setShow(false)} show={show} /> */}
    {/* <Modal onOpen={()=>setModal(true)} modal={modal}/>  */}
    
    </div>
           
          </div>
  )
}

export default Ordertable;

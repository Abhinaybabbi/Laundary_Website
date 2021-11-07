import React from "react";
import Ordercomponent from "./ordercomponent";
// import Summaryorder from "./summaryorder";

const order = { orderId: "orderId", userId: "userId", details: new Map() };
const orderedDate = [];

function Ordertable() {
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
  return ( <div>
  <table className="ordertable">
              <thead>
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
                    // handleClick={handleCallback}
                  />
                ))}
              </tbody>
            </table>
           
          </div>
  )
}

export default Ordertable;

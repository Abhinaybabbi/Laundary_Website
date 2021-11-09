import React, { useState, useEffect } from "react";
import Wash from "../../Assets/wash.png";
import Wash1 from "../../Assets/wash1.png";
import Iron from "../../Assets/iron.png";
import Iron1 from "../../Assets/iron1.png";
import Liquid1 from "../../Assets/liquid1.png";
import Fold from "../../Assets/fold.png";
import Liquid from "../../Assets/liquid.png";
import Fold1 from "../../Assets/fold1.png";
import "./order.css";

function Ordercomponent(props) {
  const [wash, setWash] = useState(false);
  const [iron, setIron] = useState(false);
  const [bleach, setBleach] = useState(false);
  const [fold, setFold] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState("---");
  const washCost = 20;
  const ironCost = 15;
  const foldCost = 10;
  const bleachCost = 25;

  function costCalculation() {
    console.log(quantity, wash, iron, bleach);
    let cost = 0;
    if (wash) {
      cost += quantity * washCost;
    }
    if (iron) {
      cost += quantity * ironCost;
    }

    if (bleach) {
      cost += quantity * bleachCost;
    }
    if (fold) {
      cost += quantity * foldCost;
    }
    setPrice(cost);
  }

  function washChange() {
    setWash(!wash);
  }
  function ironChange() {
    setIron(!iron);
  }

  function bleachChange() {
    setBleach(!bleach);
  }
  function foldChange() {
    setFold(!fold);
  }
  useEffect(() => {
    costCalculation();
    props.handleClick({
      name: props.name,
      value: {
        quantity: quantity,
        wash: wash,
        iron: iron,
        fold: fold,
        bleach: bleach,
        price: price,
      },
    });
  });

  return (
    <tr key={props.id}>
      <td>{props.id}</td>
      <td>
        <div className="row">
          <div className="col-lg-2">
            <img name="item"
              type="text"
              src={`${props.image}`}
              alt="shirt"
              className="photo"
            />
          </div>
          <div className="col-lg-10">
            <h5>{props.name}</h5>
            <p>lorum inpdfi fdse ndsfjfonffi{props.discription}</p>
          </div>
        </div>
      </td>
      <td>
        <input
          type="text"
          name="quantity"
          className="item-quantity"
          placeholder="Qty"
          // value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);

          }}
          
        />
      </td>
      <td>
        <div className="row">
          <div className="col-lg-3">
            <img
              type="Boolean"
              name="wash"
              src={wash ? Wash1 : Wash}
              onClick={() => {
                washChange();
              }}
              alt="wash"
            />
          </div>
          <div className="col-lg-3">
            <img
              type="Boolean"
              name="iron"
              src={iron ? Iron1 : Iron}
              onClick={() => {
                ironChange();
              }}
              alt="iron"
            />
          </div>
          <div className="col-lg-3">
            <img
              type="Boolean"
              name="fold"
              src={fold ? Fold1 : Fold}
              onClick={() => {
                foldChange();
              }}
              alt="fold"
            />
          </div>
          <div className="col-lg-3">
            <img
              type="Boolean"
              name="bleach"
              src={bleach ? Liquid1 : Liquid}
              onClick={() => {
                bleachChange();
              }}
              alt="bleach"
            />
          </div>
        </div>
      </td>
      <td><p>{quantity} X Service = {price}</p></td>
      <td>
        
      </td>
    </tr>
  );
}

export default Ordercomponent;

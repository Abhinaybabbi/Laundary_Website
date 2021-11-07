import Modal1 from '../pages/summerymodal';
import React, { useState,useEffect } from 'react';
import eyeIcon from "../Assets/eyeicon.svg";
import axios from "axios";

const PastOrder = ({ orders })=> {
    const [show,setShow] = useState(false);
    const [persons, setPersons] = useState([])

// const [modal1, setModal1] = useState(false);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{            
            console.log(response.data)
            setPersons(response.data);
        })
            .catch(function (error) {
            console.log(error);
        })
      },[]);
    

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

                    {persons.map(person=>{
                        return(
                            <tr key={person.id} >
                                <th scope="row">{person.id}</th>
                                <td>{person.name}</td>
                                <td>{person.address.street}</td>
                                <td>{person.address.city}</td>
                                <td>{person.address.zipcode}</td>
                                <td>10</td>
                                <td>{person.phone}</td>
                                {/* <td>{order.status[0].statusCode}</td> */}
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
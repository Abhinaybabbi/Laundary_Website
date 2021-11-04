import React from "react";
import "./navBar.css";

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      
        <h3 className="navbar-brand" style={{color:"rgba(88, 97, 174, 1)",marginLeft:"100px"}}>LAUNDRY</h3>
        <div className="collapse navbar-collapse">

        <ul className="navbar-nav ml-auto" >
        
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
        <button className ="btn" id="btn">Pricing</button>
        </li>
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
        <button className ="btn" id="btn">Career</button>
        </li>
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
            <button className ="btn signin"  style={{width:"213px"}} >User Name</button>
        </li>
        

        </ul>
        </div>
       
      </nav>

  );
};
export default Navbar;

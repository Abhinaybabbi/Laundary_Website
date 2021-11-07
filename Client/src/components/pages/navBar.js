import React from "react";
import "./navBar.css";

const Navbar = () => {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow" > 
      
        <h3 className="navbar-brand" style={{color:"rgba(88, 97, 174, 1)",marginLeft:"100px"}}>LAUNDRY</h3>
        <div className="collapse navbar-collapse">

        <ul className="navbar-nav ml-auto" >
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
            <button className ="btn" id="btn"><a href="/home" className="nav-link">Home</a></button>
        </li>
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
        <button className ="btn" id="btn"><a href="/pricing" className="nav-link">Pricing</a></button>
        </li>
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
        <button className ="btn" id="btn"><a href="/career"className="nav-link">Career</a></button>
        </li>
        <li className="nav-item">
        <button className="btn signin"><a href="/" className="nav-link" >Sign In</a></button>
        </li>

        </ul>
        </div>
       
      </nav>

  );
};
export default Navbar;

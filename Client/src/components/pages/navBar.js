import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <h3 className="navbar-brand" style={{color:"rgba(88, 97, 174, 1)",marginLeft:"100px"}}>LAUNDRY</h3>
        <div className="collapse navbar-collapse">

        <ul className="navbar-nav ml-auto" >
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
            <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
            <a href="/" className="nav-link">Pricing</a>
        </li>
        <li className="nav-item" style={{border:" 1px solid rgba(227, 227, 227, 1)"}}>
        <a href="/" className="nav-link">Career</a> 
        </li>
        <li className="nav-item">
        <a href="/" className="nav-link" style={{background:"rgba(88, 97, 174, 1)",color:"rgba(255, 255, 255, 1)"}}>Sign In</a> 
        </li>

        </ul>
        </div>
       
      </nav>
    </div>
  );
};
export default Navbar;

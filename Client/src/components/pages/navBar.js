import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
        <h3 className="navbar-brand">LAUNDRY</h3>
        <div className="collapse navbar-collapse">

        <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a href="/" className="nav-link">Pricing</a>
        </li>
        <li className="nav-item">
        <a href="/" className="nav-link">Career</a> 
        </li>
        <li className="nav-item">
        <a href="/" className="nav-link">Signin</a> 
        </li>

        </ul>
        </div>
       
      </nav>
    </div>
  );
};
export default Navbar;

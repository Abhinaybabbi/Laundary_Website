import React from "react";
import "./navBar.css";
import { useHistory } from "react-router";

const Navbar = () => {
  const history = useHistory();
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
      
        <a href="/homepage"><h3 className="navbar-brand" onClick={()=>{history.push('/homepage')}} style={{color:"rgba(88, 97, 174, 1)",marginLeft:"100px"}}>LAUNDRY</h3></a>
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
            <div class="dropdown-content">
          <a href="/">Account</a>
          <a href="/"onClick={()=>{history.push('/')}}>Sign out</a>
          </div>
        </li>
        <li class="nav-item">
        <div class="dropdown">
        <button class="dropbtn">User Name</button>
        <div class="dropdown-content">
        <a href="#">Account</a>
        <a href="/" onClick={()=>{history.push('/')}}>Sign out</a>
        </div>
        </div>
        </li>
      
        </ul>
        </div>
       
      </nav>

  );
};
export default Navbar;

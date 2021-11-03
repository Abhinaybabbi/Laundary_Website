import React from "react";
import "./sidebar.css";
import { useHistory } from "react-router";


const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
    <ul>
    <dt>
      <a className="sidebarHome" href="#"><img onClick={()=>{history.push('/homepage')}} alt="image" src="https://img.icons8.com/material-sharp/24/000000/home.png" alt="home"/></a>
    </dt>
    <dt>
      <a className="sidebarAdd" href="/createOrder"><img onClick={()=>{history.push('/order')}} src="https://img.icons8.com/ios-glyphs/24/000000/add--v1.png" alt="add"/></a>
    </dt>
    <dt>
      <a className="sidebarList" href="#"><img onClick={()=>{history.push('/pastorders')}} src="https://img.icons8.com/material-outlined/24/000000/list.png" alt="list"/></a>
    </dt>


    </ul>
  </div>
  );
};
export default Sidebar;

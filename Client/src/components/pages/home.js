import React from "react";
import Navbar from "./navBar";
import Footer from "./footer";
const Home = ()=>{
    return(
       
        <div>      
         <Navbar/>
        <h1>Signin Page</h1>
        <a href='/register' ><h1>Register</h1></a>
       <Footer/>
       </div>
    )
}
export default Home
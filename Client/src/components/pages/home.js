import React from "react";
import Navbar from "./navBar";
import Footer from "./footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="container">
         <div className="container1">        
          <h2>SIGN IN </h2>
             <form >
                
                 <input placeholder="Mobile/Email" type="text" /><br/>
                 <input placeholder="Password" type="text" />
                <p className="pass">Forget Password?</p>

             </form>
             </div>
         </div> */}

      {/* <h1>Signin Page</h1>
        <a href='/register' ><h1>Register</h1></a>
       <Footer/> */}

      <div class="flex-container">
        <div class="flex-child magenta">
        <p className="heading">LAUNDRY SERVICE</p>
        <p className="con">
Doorstep Wash & Dryclean Service</p>

<p className="acc">Don’t Have An Account?</p>

<a  href = "/register"> <input  type="submit" value="Register"  /> </a>

       </div>

        <div className="flex-child green ">
        <h2>SIGN IN </h2>
        <div className="sign_form">
             <form >
                
                 <input placeholder="Mobile/Email" type="text" /><br/>
                 <input placeholder="Password" type="text" />
                <p className="pass">Forget Password?</p>

             </form>
             </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

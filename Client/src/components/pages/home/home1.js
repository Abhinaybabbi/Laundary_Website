import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navBar";
import Footer from "../footer/footer"
import Footer1 from "../footer/footer1";
import Lock from "../../Assets/images/signin/padlock.svg"
import { setToken } from "../../utils/authOperations";

import './home.css'
const Home = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
    const login = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/signin", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({
                email,
                password
            }) // body data type must match "Content-Type" header
          });
        const{ Data }=await response.json(); // parses JSON response into native JavaScript objects
        setToken(Data.token);
        if(Data.token){
            window.location.href="/order";
        }else{
            window.location.href="/";
       
        }
        
    }
    return (
        <div>
          <Navbar />
    
          <div className="flex-container">
            <div
              className="flex-child"
              style={{ background: "rgba(255, 255, 255, 1)" }}
            >
              <p className="heading">LAUNDRY SERVICE</p>
              <p className="con">Doorstep Wash & Dryclean Service</p>
    
              <p className="acc">Don’t Have An Account?</p>
    
              <a href="/register">
                {" "}
                <input type="submit" value="Register" />{" "}
              </a>
            </div>
    
            <div
              className="flex-child"
              style={{ background: "rgba(185, 192, 253, 0.102)" }}
            >
              <h2>SIGN IN </h2>
              <div className="sign_form">
                <form onSubmit={e => login(e)}>
                  <input
                    placeholder="Mobile/Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <br />
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <img
                    alt="lockp"
                    src={Lock}
                    style={{ marginTop: "-56px", marginLeft: "304px" }}
                  />
                  <p className="pass">Forget Password?</p>
        
                  <button className="sign_IN" type="submit">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Footer1 />
          <Footer />
        </div>
      );
    };
    export default Home;
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navBar";
import Footer from "../footer/footer"
import Footer1 from "../footer/footer1";
import Lock from "../../Assets/images/signin/padlock.svg"
import './home.css'
import axios from "axios";
import { getToken, setToken } from "../Utils/AuthOperations";


function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const history = useHistory();
  function signinsub(e) {
    e.preventDefault();
    console.log("Hello");
    console.log(email, password);
    axios
      .post("http://localhost:5000/signin", {
        email: email,
        password: password,
      })
      .then((response) => {
        {
          const { data } = response;
          setToken(data.token);
          localStorage.setItem("user",JSON.stringify(data.user))
          console.log("Token: ", data.token);
          setUser(response.data);
          setToken(response.data.token);
          console.log("token", getToken());
          history.push("/homepage");
        }
    
      })
      .catch((e) => {
        console.log(e);
       
      });
    if (user) {
      return;
    }
    console.log(user);
  }


  return (
    <div>
      <Navbar />

      <div className="flex-container">
        <div
          className="flex-child"
          style={{ background: "rgba(255, 255, 255, 1)" }}
        >
          <p className="heading">Laundry Service</p>
          <p className="con">Doorstep Wash & Dryclean Service</p>

          <p className="acc">Don’t Have An Account?</p>

          <a href="/register">
            {" "}
            <input className="login-input" type="submit" value="Register" />{" "}
          </a>
        </div>

        <div className="flex-child"
          style={{ background: "rgba(185, 192, 253, 0.102)" }}>
          
          
          <div className="sign_form">
            <form>
              <input className="login-input"
              id="phone"
              name="email"
                placeholder="Mobile/Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <input className="login-input"
              name="password"
              id="pwd"
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
    
              <button className="sign_IN"  onClick={signinsub}>
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
export default Signin;

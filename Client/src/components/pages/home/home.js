import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../navBar";
import Footer from "../footer/footer"
import Footer1 from "../footer/footer1";
import Lock from "../../Assets/images/signin/padlock.svg"
import './home.css'

const Home = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const PostData = () => {
    
    if (!/^((^<>()\[\]\\.,;:\s@"]+(\.^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      console.log("invalid password");
      return;
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
           
           localStorage.setItem("jwt",data.token)
           localStorage.setItem("user",JSON.stringify(data.user))
           console.log("signed in success");
           history.push("/order");
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
      
      
  };

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
            <form>
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
    
              <button className="sign_IN"  onClick={() => PostData()}>
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

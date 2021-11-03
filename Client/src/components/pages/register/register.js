import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../navBar";
import "./register.css";
import Footer from "../../pages/footer/footer";
import Footer1 from "../../pages/footer/footer1";

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [stateplace, setStateplace] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [pincode, setPincode] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((s[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      console.log("invalid email");
      return;
    }
    fetch("/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
        phone,
        stateplace,
        address,
        district,
        pincode,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data.message);
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [tnc, setTnc] = useState(false);
  function getFormData(e) {
    console.warn(tnc);
    e.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-lg-4">
          <div
            className="cont"
            style={{ background: "rgba(255, 255, 255, 1)" }}
          >
            <p className="heading_register">LAUNDRY SERVICE</p>
            <p className="content1">Doorstep Wash & Dryclean Service</p>

            <p className="content2">Already Have Account</p>
            <a href="/">
              <input className="submit_sign" type="submit" value="Sign In" />
            </a>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card" style={{ border: "none" }}>
            <div
              className="card-body"
              style={{
                width: "1038px",
                height: "550px",

                background:
                  "rgba(248, 249, 255, 1) 0% 0% no-repeat padding-box",
                opacity: "1",
              }}
            >
              <h3 className="card-title1">REGISTER</h3>

              <form onSubmit={getFormData}>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="password"
                      className="form_input"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="State"
                      value={stateplace}
                      onChange={(e) => setStateplace(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="District"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}/>

                    {/* <div style={{border:"2px solid blue"}}>
                      <select style={{width: "100%"}}>
                        <option placeholder="State">State</option>
                        <option >Awesome!</option>
                      </select>
                    </div> */}
                  </div>
                </div>
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form_input"
                      placeholder="Pincode"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                    />
                  </div>
                </div>
                <input
                  type="checkbox"
                  style={{ marginRight: "10px" }}
                  onChange={(e) => setTnc(e.target.checked)}
                />
                <span>
                  I agree to Terms & Condition receiving marketing and
                  promotional materials
                </span>
                <br />
                <br />
                <button
                  className="register1"
                  onClick={() => PostData()}
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer />
    </div>
  );
};
export default Register;

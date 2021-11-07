import React, { useState } from "react";
import { useHistory } from "react-router";
import Navbar from "../navBar";
import "./register.css";
import Footer from "../../pages/footer/footer";
import axios from "axios";
import Footer1 from "../../pages/footer/footer1";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [stateplace, setStateplace] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  
  function createRegister() {
    axios
      .post("http://localhost:5000/register", {
        name: name,
        email: email,
        phone: phone,
        stateplace: stateplace,
        district: district,
        address: address,
        pincode: pincode,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    history.push("/");
  }
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
            <p className="heading_register">Laundry Service</p>
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
                <input className="checkbox"
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
                  onClick={createRegister}
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

import React from "react";
import "./footer1.css";
import fb from "../../Assets/images/signin/facebook.svg";
import insta from "../../Assets/images/signin/instagram.svg";
import linked from "../../Assets/images/signin/linkedin.svg";

const Footer1 = () => {
  return (
    <div>
      <div className="footer1">
        <h4 className="refer">Now Refer & Earn ₹500 for every referral*</h4>
        <p className="termsCon">* Terms and conditions will be applied</p>
      </div>

      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mt-md-0 mt-3">
              <h5 className="text-uppercase">ABOUT US</h5>
              <p>Doorstep Wash & Dryclean Service</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-1 mb-md-0 mb-2">
              <h5 className="text-uppercase">Home</h5>
              <ul className="list-unstyled">
                <li>
                  <span href="#!">Sign In</span>
                </li>
                <li>
                  <span href="#!">Register</span>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-md-0 mb-2">
              <h5>Pricing</h5>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
              <h5>Career</h5>
              <ul className="list-unstyled">
                <li>
                  <span href="#!">Blogs</span>
                </li>
                <li>
                  <span href="#!">Crete</span>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
              <h5>Contact</h5>
            </div>

            <div className="col-md-2 mb-md-0 mb-2">
              <h5>SOCIAL MEDIA</h5>
              <div
                className="imageContainer"
                style={{ display: "flex", columnGap: "15px" }}
              >
                <img src={insta} alt="inst" />

                <img src={fb} alt="fb" />

                <img src={linked} alt="linkedin" />
              </div>

              <div className="media_links"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;

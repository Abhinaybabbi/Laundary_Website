import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        className="page-footer font-small"
        style={{
          border: "1px solid rgba(112, 112, 112, 1)",
        }}
      >
        <div
          className="footer-copyright text-center py-3"
          style={{
            background: "rgba(24, 40, 56, 1)",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          2021 © Laundry
        </div>
      </footer>
    </div>
  );
};
export default Footer;

import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="F__left">
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-facebook"></i>
      </div>
      <div className="F__right">
        <h3> &copy; Munsif Ali Misri {new Date().getFullYear()}</h3>
      </div>
    </div>
  );
}

export default Footer;

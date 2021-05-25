import React from "react";
import { NavLink } from "react-router-dom";
import "./sidedrawer.css";
function Sidedrawer({ show, click }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <NavLink exact to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="sidedrawer__cartItemCounter">0</span>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/">
            Shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidedrawer;

import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
function Navbar({ click }) {
  console.log(click);
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h3>MERN SHOPPING APP</h3>
      </div>
      {/* links */}
      <div className="navbar__links">
        <ul className="navbar__ul">
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li className="cartLi">
            <NavLink to="/cart">
              <i className="shopping_cart_icon fas fa-shopping-cart"></i>
              Cart
              <span className="cartLogo__counter">0</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* responsve hamburger */}
      <div className="hamburger" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* cart Icon */}
    </div>
  );
}

export default Navbar;

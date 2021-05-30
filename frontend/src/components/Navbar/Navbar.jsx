import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
function Navbar({ click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  function cartItemsCount() {
    return cartItems.reduce((qty, prod) => qty + Number(prod.qty), 0);
  }
  return (
    <div className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h3>SMART LAPTOP STORE</h3>
      </div>
      {/* links */}
      <div className="navbar__links">
        <ul className="navbar__ul">
          <li>
            <NavLink exact to="/" activeClassName="activeLink">
              Shop
            </NavLink>
          </li>
          <li className="cartLi">
            <NavLink exact to="/cart" activeClassName="activeLink">
              Cart
              <i className="shopping_cart_icon fas fa-shopping-cart"></i>
              <div className="cartLogo__counter">{cartItemsCount()}</div>
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

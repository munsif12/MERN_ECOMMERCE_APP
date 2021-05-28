import React from "react";
import { NavLink } from "react-router-dom";
import "./sidedrawer.css";

import { useSelector } from "react-redux";
function Sidedrawer({ show, click }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  function cartItemsCount() {
    return cartItems.reduce((qty, prod) => qty + Number(prod.qty), 0);
  }
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
              <span className="sidedrawer__cartItemCounter">
                {cartItemsCount()}
              </span>
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

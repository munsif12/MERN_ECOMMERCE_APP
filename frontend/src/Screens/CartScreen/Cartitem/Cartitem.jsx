import React from "react";
import { NavLink } from "react-router-dom";
import "./Cartitem.css";
function Cartitem() {
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img
          src="https://image.shutterstock.com/image-vector/laptop-blank-screen-silver-color-260nw-1382811209.jpg"
          alt=""
          srcset=""
        />
      </div>
      <NavLink exact to={`/product/${12}`} className="cartItem__name">
        <p>product 1</p>
      </NavLink>
      <p className="cartItem__price">120.00</p>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <button className="cartItem__deleteBtn">
        Del
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Cartitem;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Cartitem.css";
function Cartitem({
  id,
  imgUrl,
  name,
  price,
  countInStock,
  qty,
  qtyChangeHandler,
  removeItemFromCart,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  function CheckWindowWidth() {
    setWindowWidth(window.innerWidth);
    // console.log(window.innerWidth); testing
  }
  useEffect(() => {
    window.addEventListener("resize", CheckWindowWidth);
    return () => {
      document.removeEventListener("resize", CheckWindowWidth);
    };
  }, [windowWidth]);
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={imgUrl} alt={name} srcset="" />
      </div>
      <NavLink exact to={`/product/${id}`} className="cartItem__name">
        <p>{name}</p>
      </NavLink>
      <p className="cartItem__price">{price} Rs</p>
      <select
        value={qty}
        onChange={(e) => qtyChangeHandler(id, e.target.value)}
      >
        {[...Array(countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        {windowWidth <= 500 ? null : "Delete"}
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Cartitem;

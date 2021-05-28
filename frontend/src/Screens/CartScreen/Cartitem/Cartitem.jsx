import React from "react";
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
  return (
    <div className="cartItem">
      <div className="cartItem__image">
        <img src={imgUrl} alt={name} srcset="" />
      </div>
      <NavLink exact to={`/product/${id}`} className="cartItem__name">
        <p>{name}</p>
      </NavLink>
      <p className="cartItem__price">{price}</p>
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
          console.log("deleted");
        }}
      >
        Del
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Cartitem;

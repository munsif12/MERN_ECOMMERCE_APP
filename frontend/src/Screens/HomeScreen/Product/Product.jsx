import React from "react";
import { NavLink } from "react-router-dom";
import "./Product.css";
function Product({ id, item, description, price, imgUrl }) {
  return (
    <div className="product">
      <img src={imgUrl} alt="" srcset="" />
      <div className="product__info">
        <p className="info__name">{item}</p>
        <p className="info__desc">{description.substring(0, 100)}</p>
        <p className="info__price">{price}</p>
        <NavLink exact to={`/product/${id}`} className="info__viewProduct">
          View Product
        </NavLink>
      </div>
    </div>
  );
}

export default Product;

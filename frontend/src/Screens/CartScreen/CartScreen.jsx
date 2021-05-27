import React from "react";
import Cartitem from "./Cartitem/Cartitem";
import "./CartScreen.css";
function CartScreen() {
  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        <h2>Shopping Cart</h2>
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <Cartitem />
      </div>
      <div className="cartScreen__right">
        <div className="cartScreen__info">
          <p>Subtotal 0 item</p>
          <p>$20.00</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;

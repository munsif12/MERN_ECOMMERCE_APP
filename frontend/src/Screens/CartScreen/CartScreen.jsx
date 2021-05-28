import React from "react";
import Cartitem from "./Cartitem/Cartitem";
import "./CartScreen.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/CartActions";
function CartScreen() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  const { cartItems, loading, error } = items;
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  function getCartItemsCount() {
    return cartItems.reduce((qty, prod) => Number(prod.qty) + qty, 0);
  }
  function getCartSubTotal() {
    return cartItems.reduce((price, prod) => prod.price * prod.qty + price, 0);
  }
  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            <h2>Cart is Empty You havent added ny item to your Cart</h2>
            <NavLink to="/">Go Shopping!</NavLink>
          </div>
        ) : loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          { error }
        ) : (
          cartItems.map((prod) => (
            <Cartitem
              id={prod.product}
              name={prod.name}
              imgUrl={prod.imageUrl}
              price={prod.price}
              countInStock={prod.countInStock}
              qty={prod.qty}
              qtyChangeHandler={qtyChangeHandler}
              removeItemFromCart={removeItemFromCart}
            />
          ))
        )}
      </div>
      <div className="cartScreen__right">
        <div className="cartScreen__info">
          <p>Cart Items : {getCartItemsCount()}</p>
          <p>Total : {getCartSubTotal()}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;

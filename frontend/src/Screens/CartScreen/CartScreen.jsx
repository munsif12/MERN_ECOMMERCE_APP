import React, { useState } from "react";
import Cartitem from "./Cartitem/Cartitem";
import "./CartScreen.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/CartActions";
import Loading from "../../components/Loading/Loading";
function CartScreen() {
  const [showThanks, seTshowThanks] = useState(false);
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
  function showThanksFun() {
    const getState = document.getElementById("showThanks");
    getState.style.display = `${showThanks ? "block" : "none"}`;
  }
  return (
    <div className="cartScreen">
      <div className="cartScreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            <h2>Cart is Empty You hav'nt added any item to your Cart</h2>
            <NavLink to="/" className="goShopping">
              Go Shopping!
            </NavLink>
          </div>
        ) : loading ? (
          <Loading />
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
          <p>
            Cart Items : <span>{getCartItemsCount()}</span>
          </p>
          <p>
            Total : <span>{getCartSubTotal()} Rs</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              showThanks ? seTshowThanks(false) : seTshowThanks(true);
              showThanksFun();
            }}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
      <div
        className="gradientBackgound"
        style={{
          display: `${showThanks ? "block" : "none"}`,
        }}
      ></div>
      <div
        id="showThanks"
        className="showThanks"
        style={{ display: `${showThanks ? "block" : "none"}` }}
      >
        <div className="closeBill" onClick={() => seTshowThanks(false)}>
          <i className="far fa-window-close"></i>
        </div>
        <div className="thanksMsg">
          <h2>Thanks For Shopping With Us </h2>
        </div>
        <div className="totalbillmsg">
          <h3>Total Bill :</h3>
        </div>
        <div className="totalBill">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((prod, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.qty}</td>
                    <td>{prod.qty * prod.price} Rs</td>
                  </tr>
                );
              })}
              <tr>
                <td>Sub Total</td>
                <td>{"//"}</td>
                <td>{"//"}</td>
                <td>{getCartItemsCount()}</td>
                <td className="totalAmount">{getCartSubTotal()} Rs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shopeMoreWrapper">
          <NavLink to="/" className="shopeMore">
            Shope More{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;

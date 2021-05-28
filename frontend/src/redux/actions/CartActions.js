import * as actiontypes from "../constants/cartConstant";
import axios from "axios";
const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: actiontypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imgUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItem", JSON.stringify(getState().cart.cartItems));
};
const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actiontypes.REMOVE_FROM_CART,
    payload: id,
  });
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
export { addToCart, removeFromCart };

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducer/CartReducer";
import {
  getProductdetails,
  getproductReducer,
} from "./reducer/ProductReducers";
const rootReducer = combineReducers({
  cart: cartReducer,
  getProducts: getproductReducer,
  getProductDetails: getProductdetails,
});
const middleWare = [thunk];
//to remain cartItems into localStorage
const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};
//end
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;

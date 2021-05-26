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
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);
export default store;

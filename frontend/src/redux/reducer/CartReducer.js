import * as actionTypes from "../constants/cartConstant";
const initialState = {
  cartItems: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const itemExists = state.cartItems.find(
        (x) => x.product === item.product
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === itemExists.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      const itemsRemaining = state.cartItems.filter(
        (x) => x.product !== action.payload
      );
      // console.log(itemsRemaining); for testing
      return {
        ...state,
        cartItems: itemsRemaining,
      };
    default:
      return state;
  }
};
export default cartReducer;

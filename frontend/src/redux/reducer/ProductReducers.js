import * as actionTypes from "../constants/productConstants";
const initialState = {
  products: [],
};
const getproductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      // console.log("working");
      // console.log(action.payload); //was for testing purpose bocz reducer was not working
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const getProductdetails = (state = { product: {} }, action) => {
  // console.log(action.type); for testing puproses
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      // console.log("sucess");
      // console.log(action.payload); for testing purpose
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};

export { getProductdetails, getproductReducer };

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductScreen.css";

//reacr-tostify for notifiacation
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//actions
import { getProductDetails as getProductDetailsAction } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/CartActions";
import Loading from "../../components/Loading/Loading";
function ProductScreen({ match, history }) {
  const [Qty, setQty] = useState(1); // quantity of available items in the stock for select option
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const checkForItemExistance = useSelector((state) => state.cart);
  const { product, loading, error } = productDetails;
  const { cartItems } = checkForItemExistance;
  useEffect(() => {
    // dispatch(getProductDetailsAction(match.params.id));
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetailsAction(match.params.id));
    }
  }, [dispatch, product, match]);
  function addToCartItem() {
    //check if item already exist in the stock
    const ifItemExists = cartItems.some((prod) => product._id === prod.product);
    // console.log(ifItemExists);
    if (!ifItemExists) {
      dispatch(addToCart(product._id, Qty));
      history.push("/cart");
    } else {
      toast.success("Item already present in the cart!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  return (
    <div className="productScreen">
      {loading ? (
        <Loading />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productScreen__left">
            <div className="left__image">
              <img src={product.imgUrl} alt="" srcset="" />
              {/* {console.log(product.imgUrl)} testing*/}
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p className="left__price">Price : {product.price} Rs</p>
              <p className="left__desc">{product.description}</p>
            </div>
          </div>
          <div className="productScreen__right">
            <div className="right__info">
              <p>
                Price :<span>{product.price} Rs</span>
              </p>
              <p>
                Status :
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Quantity :
                <select value={Qty} onChange={(e) => setQty(e.target.value)}>
                  {/* //bit confued loking forward to implement */}
                  {[...Array(product.countInStock).keys()].map((val) => (
                    <option key={val + 1} value={val + 1}>
                      {val + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartItem}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default ProductScreen;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ProductScreen.css";

//actions
import { getProductDetails as getProductDetailsAction } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/CartActions";
function ProductScreen({ match, history }) {
  const [Qty, setQty] = useState(1); // quantity of available items in the stock for select option
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.getProductDetails);
  const { product, loading, error } = productDetails;
  useEffect(() => {
    // dispatch(getProductDetailsAction(match.params.id));
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetailsAction(match.params.id));
    }
  }, [dispatch, product, match]);
  return (
    <div className="productScreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productScreen__left">
            <div className="left__image">
              <img src={product.imgUrl} alt="" srcset="" />
              {console.log(product.imgUrl)}
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p className="left__price">{product.price}</p>
              <p className="left__desc">{product.description}</p>
            </div>
          </div>
          <div className="productScreen__right">
            <div className="right__info">
              <p>
                Price:
                <span>{product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty:
                <select value={Qty} onChange={(e) => e.target.value}>
                  {/* //bit confued loking forward to implement */}
                  {[...Array(product.countInStock).keys()].map((val) => (
                    <option key={val + 1} value={val + 1}>
                      {val + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button">Add product</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductScreen;

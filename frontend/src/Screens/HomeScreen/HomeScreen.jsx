import React, { useEffect } from "react";
import "./HomeScreen.css";
import Product from "./Product/Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import Loading from "../../components/Loading/Loading";
function HomeScreen() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="homeScreen">
      <h1 className="homeScreen__heading">Products</h1>
      <div className="homeScreen__products">
        {loading ? (
          <Loading />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          products.map((prod) => (
            <Product
              id={prod._id}
              item={prod.name}
              description={prod.description}
              price={prod.price}
              imgUrl={prod.imgUrl}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;

import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//importing screens
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import CartScreen from "./Screens/CartScreen/CartScreen";
import Sidedrawer from "./components/Sidedrawer/Sidedrawer";
// components
import Navbar from "./components/Navbar/Navbar";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";

function App() {
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  // console.log(sideMenuToggle); testing
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar click={() => setSideMenuToggle(true)} />
      {/* Sidedrawer */}
      <Sidedrawer
        show={sideMenuToggle}
        click={() => setSideMenuToggle(false)}
      />
      {/* Backdrop */}
      <Backdrop show={sideMenuToggle} click={() => setSideMenuToggle(false)} />

      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      <Footer />
      {/*  */}
    </div>
  );
}

export default App;

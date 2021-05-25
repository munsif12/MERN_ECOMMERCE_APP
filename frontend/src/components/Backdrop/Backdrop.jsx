import React from "react";
import "./Backdrop.css";
function Backdrop({ show, click }) {
  console.log(show);
  return show && <div className="backdrop" onClick={click}></div>;
}

export default Backdrop;

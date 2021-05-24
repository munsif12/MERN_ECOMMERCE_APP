import React from "react";
import "./sidedrawer.css";
function Sidedrawer({ show }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return <div className={sideDrawerClass.join(" ")}></div>;
}

export default Sidedrawer;

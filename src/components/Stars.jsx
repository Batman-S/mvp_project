import React from "react";
import staricon from "../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";

export const Stars = () => {
  const isClicked = () => {
    return <Link to="/Profile"></Link>;
  };
  return (
    <Link to="/api">
      <div className="icongroup">
        <img className="staricon" src={staricon}></img>
        <img className="staricon" src={staricon}></img>
        <img className="staricon" src={staricon}></img>
      </div>
    </Link>
  );
};

import React from "react";
import staricon from "../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";

export const Stars = () => {
  
  return (
    <Link to="/profile">
      <div className="icongroup">
        <img className="staricon" src={staricon}></img>
        <img className="staricon" src={staricon}></img>
        <img className="staricon" src={staricon}></img>
      </div>
    </Link>
  );
};

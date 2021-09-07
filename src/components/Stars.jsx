import React from "react";
import staricon from "../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";

export const Stars = () => {
  return (
    <div>
      <Link to="/login">
        <div className="icongroup">
          <img className="staricon1" src={staricon}></img>
          <img className="staricon2" src={staricon}></img>
          <img className="staricon3" src={staricon}></img>
        </div>
      </Link>

      
    </div>
  );
};

import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import staricon from "../../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";

export const OneStarCount = ({ starList }) => {
  return (
    <div className="starcount-container">
      <Link to="/onestarinfo">
        <div className="starcount">
          <img className="countstaricon" src={staricon} />
        </div>
      </Link>
      <h1 className="countvalue">{starList.length}</h1>
    </div>
  );
};

export default OneStarCount;

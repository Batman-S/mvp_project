import staricon from "../../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export const ThreeStarCount = ({ starList }) => {
  return (
    <div className="starcount-container">
      <Link to="/threestarinfo">
        <div className="starcount">
          <img className="countstaricon" src={staricon} />
          <img className="countstaricon" src={staricon} />
          <img className="countstaricon" src={staricon} />
         
        </div>
      </Link>
      <h1 className="countvalue">{starList.length}</h1>
      
    </div>
  );
};

export default ThreeStarCount;

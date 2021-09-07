import staricon from "../../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../../App";

export const ThreeStarCount = ({ starList }) => {
  return (
    <div>
      <Link to="/threestarinfo">
        <div className="starcount">
          <img className="countstaricon" src={staricon} />
          <img className="countstaricon" src={staricon} />
          <img className="countstaricon" src={staricon} />
        </div>
      </Link>
      {starList.length}
    </div>
  );
};

export default ThreeStarCount;

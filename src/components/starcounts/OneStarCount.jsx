import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import staricon from "../../images/MichelinStarW.svg.png";
import { Link } from "react-router-dom";

export const OneStarCount = ({ starList }) => {
  return (
    <div>
      <Link to="/onestarinfo">
        <div className="starcount">
          <img className="countstaricon" src={staricon} />
        </div>
      </Link>
      {starList.length}
    </div>
  );
};

export default OneStarCount;

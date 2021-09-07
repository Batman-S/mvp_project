import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RestaurantInfo } from "../RestaurantInfo";
const _ = require("lodash");

export const ThreeStarInfo = () => {
  const fullList = useContext(ThemeContext);
  const threeStarList = _.filter(fullList, { starvalue: 3 });

  return (
    <div>
      {" "}
      {threeStarList.map((store) => {
        return <RestaurantInfo name={store.name} date={store.datevisited} />;
      })}
      <div>
        <Link to="/profile">
          <Button variant="warning">Return to Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default ThreeStarInfo;

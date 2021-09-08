import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RestaurantInfo } from "../RestaurantInfo";
const _ = require("lodash");

export const OneStarInfo = () => {
  const fullList = useContext(ThemeContext);
  const oneStarList = _.filter(fullList, { starvalue: 1 });

  return (
    <div>
      {oneStarList.map((store) => {
        return (
          <RestaurantInfo
            key={store.id}
            name={store.name}
            date={store.datevisited}
          />
        );
      })}
      <div>
        <Link to="/profile">
          <Button variant="warning">Return to Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default OneStarInfo;

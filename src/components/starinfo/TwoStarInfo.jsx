import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import { RestaurantInfo } from "../RestaurantInfo";

const _ = require("lodash");

export const TwoStarInfo = () => {
  const fullList = useContext(ThemeContext);
  const twoStarList = _.filter(fullList, { starvalue: 2 });

  return (
    <div>
      {twoStarList.map((store) => {
        return <RestaurantInfo key={store.id} name={store.name} date={store.datevisited} />;
      })}

      <div>
        <Link to="/profile">
          <Button variant="warning">Return to Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default TwoStarInfo;

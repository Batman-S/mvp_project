import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
const _ = require("lodash");

export const TwoStarInfo = () => {
  const fullList = useContext(ThemeContext);
  const twoStarList = _.filter(fullList, { starvalue: 2 });

  return (
    <div>
      {twoStarList.map((store) => {
        return (
          <Card>
            <Card.Title>{store.name}</Card.Title>
            <Card.Body>
              <Card.Text>Date Visited: {store.datevisited}</Card.Text>
              <Card.Text>Michelin Stars: {store.starvalue}</Card.Text>
            </Card.Body>
          </Card>
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

export default TwoStarInfo;

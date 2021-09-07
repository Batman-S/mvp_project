import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const _ = require('lodash');

export const OneStarInfo = () => {
  const fullList = useContext(ThemeContext);
  const oneStarList = _.filter(fullList, { "starvalue" : 1 });
  
  return <div> {oneStarList.map((store) => {
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
  </div>;
};

export default OneStarInfo;

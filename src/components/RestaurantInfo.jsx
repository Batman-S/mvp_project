import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { ThemeContext } from "../App";


export const RestaurantInfo = ({name, date}) => {
  return (
    <div>
      <Card className="text-center text-white blockquote fs-6 border-1 m-md-auto">
        
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Date Visited: {date}
          </Card.Text>
        </Card.Body>
       
      </Card>
    </div>
  );
};

export default RestaurantInfo;

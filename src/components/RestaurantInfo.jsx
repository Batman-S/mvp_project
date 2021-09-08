import React, { useContext, useState } from "react";
import { Card, Button, Modal, OverlayTrigger } from "react-bootstrap";
import { ThemeContext } from "../App";
import UserNotes from "./UserNotes";
import { Link } from "react-router-dom";

export const RestaurantInfo = ({ name, date }) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(true);
  };

  return (
    <div>
      <Card className="text-center text-white blockquote fs-6 border-1 m-md-auto">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Date Visited: {date}</Card.Text>
          <Link
            to={{
              pathname: "/usernotes",
              aboutProps: {
                name: name,
                date: date,
              },
            }}
          >
            <Button>Notes</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RestaurantInfo;

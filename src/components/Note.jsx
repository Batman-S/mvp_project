import React from "react";
import { Card } from "react-bootstrap";

const _ = require("lodash");
export const Note = ({ note }) => {
  const { datecreated, notedetails, name } = note;
  return (
    <div>
      <Card className="text-center text-white blockquote fs-6 border-1 m-md-auto">
        <Card.Body>
          <Card.Title>Date Visited: {datecreated}</Card.Title>
          <Card.Text>{notedetails}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Note;

//name, notedetails, datecreated

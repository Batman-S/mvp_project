import React, { useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { Stars } from "./Stars";


export const Test = () => {
  return (
    <div className="homepage">
      <Stars />
      <div>
        <h1 className="starbellytitle">StarBelly</h1>
      </div>
    </div>
  );
};

export default Test;

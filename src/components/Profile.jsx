import React, { useState } from "react";
import StarCounts from "./starcounts/StarCounts";
import CityCount from "./CityCount";
import { Button, Offcanvas, Form, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import axios from "axios";
const _ = require("lodash");

export const Profile = () => {
  const [show, setShow] = useState(false);
  const [newStarCount, setNewStarCount] = useState("");
  const [newLocation, setNewLocation] = useState("Test");
  const [newRestName, setNewRestName] = useState("");
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (event) => {
    const restaurants = await axios.get("/api/restaurants");
    const targetRestaurant = _.filter(restaurants.data, { name: newRestName });
    const targetRestId = targetRestaurant[0].id;

    await axios.post("/api/users_visited_restaurants", {
      user_id: 1,
      restaurant_id: targetRestId,
    });
  };
  const handleName = (event) => {
    setNewRestName(event.target.value);
  };

  return (
    <div className="profile">
      <StarCounts />
      <CityCount />
      <OverlayTrigger
        key="right"
        placement="right"
        overlay={
          <Tooltip id={`tooltip-right`}>
            Just use the restaurant name!
          </Tooltip>
        }
      >
        <Button variant="warning" onClick={handleShow}>
          Add Visit
        </Button>
      </OverlayTrigger>

      <Offcanvas show={show} onHide={handleClose} placement="bottom">
        <Offcanvas.Header
          className="offcanvhead"
          closeButton
          closeVariant="white"
        >
          <Offcanvas.Title>Don't you live a tasty life?</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvbody">
          <Form onSubmit={handleSubmit}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalRestaurant"
            >
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Restaurant Name"
                  onChange={handleName}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" variant="warning">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Profile;

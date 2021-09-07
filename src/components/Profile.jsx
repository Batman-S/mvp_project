import React, { useState, useContext, useEffect } from "react";
import StarCounts from "./starcounts/StarCounts";
import { useAuth } from "./auth/contexts/AuthContext";
import CityCount from "./CityCount";
import { ThemeContext } from "../App";
import {
  Button,
  Offcanvas,
  Form,
  Col,
  Row,
  OverlayTrigger,
  Tooltip,
  Alert,
  Card,
} from "react-bootstrap";
import axios from "axios";
const _ = require("lodash");

export const Profile = () => {
  const fullList = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [newStarCount, setNewStarCount] = useState("");
  const [newLocation, setNewLocation] = useState("Test");
  const [newRestName, setNewRestName] = useState("");
  const [mostVisited, setMostVisited] = useState("Japan");

  useEffect(() => {
    const currentMax = _.filter(fullList, { location: mostVisited }).length;

    //sad life, hardcode for mvp
    if (_.filter(fullList, { location: "Thailand" }).length > currentMax) {
      setMostVisited("Thailand");
    }
  }, [fullList]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = async (event) => {
    const restaurants = await axios.get("/api/restaurants");
    const targetRestaurant = _.filter(restaurants.data, { name: newRestName });
    const targetRestId = targetRestaurant[0].id;

    axios.post("/api/users_visited_restaurants", {
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
      <CityCount mostVisited={mostVisited} />
      <OverlayTrigger
        key="top"
        placement="top"
        overlay={
          <Tooltip className="overlay" id={`tooltip-top`}>
            Just use the restaurant name!
          </Tooltip>
        }
      >
        <div className="addbtn-container">
          <Button
            className="addbtn"
            variant="success"
            size="lg"
            onClick={handleShow}
          >
            Add Visit
          </Button>
        </div>
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

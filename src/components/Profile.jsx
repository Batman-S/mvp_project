import React, { useState, useContext, useEffect } from "react";
import StarCounts from "./starcounts/StarCounts";
import { useAuth } from "./auth/contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import CityCount from "./CityCount";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { makeStyles, ThemeProvider, createTheme } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
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
import { set } from "lodash";
const _ = require("lodash");

export const Profile = () => {
  const fullList = useContext(ThemeContext);
  const { logout, currentUser } = useAuth();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [newStarCount, setNewStarCount] = useState("");
  const [newLocation, setNewLocation] = useState("Test");
  const [newRestName, setNewRestName] = useState("");
  const [mostVisited, setMostVisited] = useState("Japan");
  const [error, setError] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[900],
      },
    },
  });

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

  const handleLogout = async () => {
    setError("");

    try {
      await logout;
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="profile">
        <div className="appbar">
          <AppBar variant="elevation" color="primary">
            <Toolbar color="primary" className="appbar">
              <Typography variant="h6" className="appbar">
                {currentUser.email}
              </Typography>
              <Button onClick={handleLogout}>Log Out</Button>
            </Toolbar>
          </AppBar>
        </div>

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
    </ThemeProvider>
  );
};

export default Profile;

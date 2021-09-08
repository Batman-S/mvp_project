import React from "react";
import Note from "./Note";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Offcanvas,
  Tooltip,
} from "react-bootstrap";
import { set } from "lodash";

const _ = require("lodash");

const UserNotes = (props) => {
  const [targetUserNotes, setTargetUserNotes] = useState([]);
  const [addedNote, setAddedNote] = useState(false);
  const [userNote, setUserNote] = useState("");
  const [show, setShow] = useState(false);
  const name = props.location.aboutProps.name;

  useEffect(() => {
    (async () => {
      await getNotes();
      setAddedNote(false);
    })();
  }, []);

  const handleSubmit = async (event) => {
      event.preventDefault();
    const restaurants = await axios.get("/api/restaurants");
    const targetRestaurant = _.filter(restaurants.data, { name: name });
    const targetRestId = targetRestaurant[0].id;
    setAddedNote(true);
    await axios.post("/api/users_notes_restaurants", {
      user_id: 1,
      notedetails: userNote,
      restaurant_id: targetRestId,
    });
    
     
      
      
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleChange = (event) => {
    setUserNote(event.target.value);
  };

  const getNotes = async () => {
    const notes = await axios.get("/api/users_notes_restaurants");
    const targetNotes = _.filter(notes.data, {
      name: name,
    });
    setTargetUserNotes(targetNotes);
  };

  if (targetUserNotes.length > 0) {
    return (
      <div>
        {targetUserNotes.map((note) => {
          return <Note note={note} restname={name} key={note.id} />;
        })}
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Tooltip className="overlay" id={`tooltip-top`}>
              What dishes did you have?
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
              Add Note
            </Button>
          </div>
        </OverlayTrigger>

        <Offcanvas show={show} onHide={handleClose} placement="bottom">
          <Offcanvas.Header
            className="offcanvhead"
            closeButton
            closeVariant="white"
          >
            <Offcanvas.Title>Gimme the deets</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvbody">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextRestaurant"
              >
                <Form.Label column sm="2">
                  Restaurant
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={name ? name : "Default"}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  The Deets
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="textarea"
                    style={{ height: "160px", width: "450px" }}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Button type="submit" variant="primary" size="lg">
                Add Note
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  } else {
    return (
      <div>
        <OverlayTrigger
          key="top"
          placement="top"
          overlay={
            <Tooltip className="overlay" id={`tooltip-top`}>
              What dishes did you have?
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
              Add Note
            </Button>
          </div>
        </OverlayTrigger>

        <Offcanvas show={show} onHide={handleClose} placement="bottom">
          <Offcanvas.Header
            className="offcanvhead"
            closeButton
            closeVariant="white"
          >
            <Offcanvas.Title>Gimme the deets</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvbody">
            <Form onSubmit={handleSubmit}>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextRestaurant"
              >
                <Form.Label column sm="2">
                  Restaurant
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={name ? name : "Default"}
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formPlaintextPassword"
              >
                <Form.Label column sm="2">
                  The Deets
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    as="textarea"
                    style={{ height: "160px", width: "450px" }}
                    onChange={handleChange}
                  />
                </Col>
              </Form.Group>
              <Button type="submit" variant="primary" size="lg">
                Add
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
};

export default UserNotes;

import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { GoogleMap } from "react-google-maps";
import "../styles.css";

const GuessModal = () => {
  const [show, setShow] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [guessedMarker, setGuessedMarker] = useState();

  const handleClose = () => setShow(false);

  const handleSubit = () => {
    setGuessed(true);
  };

  const handleShow = () => setShow(true);

  const guessMap = () => {
    var center = {};

    if (guessed) {
      center = { lat: 47.551495, lng: -101.002014 };
    } else {
      center = { lat: 0, lng: 0 };
    }

    const options = {
      zoom: 1,
      scaleControl: true,
      center: center,
      disableDefaultUI: true,
    };
    const map = new window.google.maps.Map(
      document.getElementById("map"),
      options
    );
  };

  useEffect(() => {
    if (show) {
      guessMap();
    }
  }, [show, guessed]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Make a guess
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="main-modal">
        <Modal.Header closeButton>
          <Modal.Title>Make Your Guess!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              width: "100%",
              height: "500px",
            }}
            id="map"
          ></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GuessModal;

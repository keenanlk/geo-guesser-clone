import React, { useEffect, useState } from "react";
import MapContainer from "../components/MapContainer";
import Loader from "../components/Loader";
import { Button } from "react-bootstrap";
import GuessModal from "../components/GuessModal";

const GameScreen = (props) => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [guessedLatitude, setGuessedLatitude] = useState();
  const [guessedLongitude, setGuessedLongitude] = useState();
  const [status, setStatus] = useState();
  const [scriptReady, setScriptReady] = useState(false);

  const getCoordinates = (callback) => {
    const lat = (Math.random() * (90 - -90) + -90).toFixed(5) * 1;
    const lng = (Math.random() * (180 - -180) + -180).toFixed(5) * 1;
    const sv = new window.google.maps.StreetViewService();

    sv.getPanorama(
      {
        location: new window.google.maps.LatLng(lat, lng),
        radius: 500,
      },
      callback
    );
  };

  const HandleCallback = (data, status) => {
    if (status === "OK") {
      setLatitude(data.location.latLng.lat());
      setLongitude(data.location.latLng.lng());
      setStatus("OK");
    } else {
      getCoordinates(HandleCallback);
    }
  };

  useEffect(() => {
    const addMapsScript = async () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=initMap`;
      script.async = true;
      script.onload = () => {
        setScriptReady(true);
      };
      document.body.appendChild(script);
    };

    if (scriptReady) {
      getCoordinates(HandleCallback);
    }

    if (!window.google) {
      addMapsScript();
    } else {
      setScriptReady(true);
    }
  }, [scriptReady]);

  return (
    <div>
      {!status ? (
        <Loader />
      ) : (
        <>
          <h1>gamescreen</h1>
          <GuessModal />
          <MapContainer center={{ lat: latitude, lng: longitude }} />{" "}
        </>
      )}
    </div>
  );
};

export default GameScreen;

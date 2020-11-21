import React from "react";
import MapContainer from "../components/MapContainer";

const GameScreen = (props) => {
  return (
    <div>
      <h1>gamescreen</h1>
      <MapContainer center={{ lat: 46.81248, lng: -100.758689 }} />
    </div>
  );
};

export default GameScreen;

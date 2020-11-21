import React, { useEffect, useState } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  StreetViewPanorama,
  SteetViewService,
  OverlayView,
} from "react-google-maps";
import { Container } from "react-bootstrap";

const MyMapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  //<GoogleMap defaultZoom={12} defaultCenter={props.center}>
  <StreetViewPanorama
    defaultPosition={props.center}
    visible
    options={{ addressControl: false }}
  ></StreetViewPanorama>
  //</GoogleMap>
));

const MapContainer = (props) => {
  const isMarkerShown = false;
  console.log(process.env.GOOGLE_API_KEY);
  return <MyMapComponent isMarkerShown={isMarkerShown} center={props.center} />;
};

export default MapContainer;

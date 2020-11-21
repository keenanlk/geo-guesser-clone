import React from "react";
import { Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";

const HomeScreen = () => {
  return (
    <FormContainer>
      <h1>Let's Play</h1>
      <Button>Start a new game</Button>
    </FormContainer>
  );
};

export default HomeScreen;

import React from "react";
import { Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useHistory } from "react-router-dom";

const HomeScreen = () => {
  const history = useHistory();
  return (
    <FormContainer>
      <h1>Let's Play</h1>
      <Button onClick={() => history.push("/game")}>Start a new game</Button>
    </FormContainer>
  );
};

export default HomeScreen;

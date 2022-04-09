import React from "react";
import { Button, Container } from "@chakra-ui/react";
import "./keyboard.css";

const Keyboard = () => {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "<<",
  ];

  const keyboard = keys.map((key, index) => {
    return (
      <Button
        className="key-container"
        key={index}
        onClick={() => {
          console.log("clicked");
        }}
      >
        {key}
      </Button>
    );
  });
  return <Container className="key-container">{keyboard}</Container>;
};

export default Keyboard;

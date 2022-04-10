import React from "react";
import { Flex } from "@chakra-ui/react";

const WrongGuess = ({ wrongGuess }) => {
  let wrongGuesses = 0;
  return (
    <Flex justify={"flex-start"} marginTop={"50"}>
      <div>Wrong Guesses: {wrongGuesses}/6</div>
      {wrongGuess.map((letter, index) => (
        <span key={index}>{`${letter} ,`}</span>
      ))}
    </Flex>
  );
};

export default WrongGuess;

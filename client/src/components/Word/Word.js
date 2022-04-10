import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import "./word.css";

const Word = ({ correctGuess, selectedWord }) => {
  return (
    <div>
      <Flex justify={"center"} marginTop={"100"}>
        {selectedWord.split("").map((letter, index) => {
          return (
            <span className="letter" key={index}>
              {correctGuess.includes(letter) ? letter : ""}
            </span>
          );
        })}
      </Flex>
    </div>
  );
};
export default Word;

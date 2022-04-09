import React from "react";
import { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Keyboard from "../Keyboard";
import Timer from "../Timer";

const Word = () => {
  const [correctGuess, setCorrectGuess] = useState([]);

  const words = ["TEST", "BILLY", "WIZARD"];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  const wordToGuess = selectedWord.split("").fill("_").join(" ");

  return (
    <div>
      <Timer />
      <Flex justify={"center"}>
        <Text fontSize={"80px"}>{wordToGuess}</Text>
      </Flex>
      <Keyboard />
    </div>
  );
};
export default Word;

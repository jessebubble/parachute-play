import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import Keyboard from "../Keyboard/Keyboard";
import Timer from "../Timer";

const Word = () => {
  const words = ["TEST", "BILLY", "WIZARD"];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  const wordToGuess = selectedWord.split("").fill("_").join(" ");

  return (
    <div>
      <Timer />
      <Flex justify={"center"} marginTop={"100"}>
        <Text fontSize={"80px"}>{wordToGuess}</Text>
      </Flex>
      <Keyboard />
    </div>
  );
};
export default Word;

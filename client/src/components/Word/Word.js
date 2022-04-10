import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Word = ({ correctGuess, wrongGuess, keys }) => {
  const words = ["TEST", "BILLY", "WIZARD"];

  const getRandomWord = () => {
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    const wordToGuess = selectedWord.split("").fill("_").join(" ");
    return wordToGuess;
  };

  return (
    <div>
      <Flex justify={"center"} marginTop={"100"}>
        <Text fontSize={"80px"}>{getRandomWord()}</Text>
      </Flex>
    </div>
  );
};
export default Word;

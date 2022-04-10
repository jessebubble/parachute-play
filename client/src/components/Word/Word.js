import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Word = ({ correctGuess, wrongGuess, keys, selectedWord }) => {
  return (
    <div>
      <Flex justify={"center"} marginTop={"100"}>
        <Text fontSize={"80px"}>{selectedWord}</Text>
      </Flex>
    </div>
  );
};
export default Word;

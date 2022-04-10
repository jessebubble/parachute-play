import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const WrongGuess = ({ wrongGuess }) => {
  return (
    <Flex justify={"flex-start"} marginTop={"50"}>
      <Text fontSize={"60px"}>
        {wrongGuess.map((letter, index) => (
          <span key={index}>{`${letter} ,`}</span>
        ))}
      </Text>
    </Flex>
  );
};

export default WrongGuess;

import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Word from "../Word/Word";
import Parachute from "../Parachute";
import Monsters from "../Monsters";

const GameLogic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  let wrongGuesses = 0;

  const playGame = () => {
    setIsPlaying(!isPlaying);
  };

  const newGame = () => {};

  const startGame = (
    <Button size={"lg"} onClick={playGame}>
      Play
    </Button>
  );

  if (!isPlaying) {
    return (
      <Flex justify={"center"} marginTop={"300"}>
        {startGame}
      </Flex>
    );
  } else {
    return (
      <Flex>
        <div>
          <Parachute />
          <Monsters />
        </div>
        <div>
          <Word />
        </div>
      </Flex>
    );
  }
};

export default GameLogic;

import React, { useState, useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Word from "../Word/Word";
import Parachute from "../Parachute";
import Monsters from "../Monsters";
import Keyboard from "../Keyboard/Keyboard";
import Timer from "../Timer/Timer";
import WrongGuess from "../WrongGuess/WrongGuess";

const GameLogic = ({ key, selectedWord }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [correctGuess, setCorrectGuess] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const [showNotify, setShowNotify] = useState(false);

  const playGame = () => {
    setIsPlaying(!isPlaying);
  };

  const startGame = (
    <Button size={"lg"} onClick={playGame}>
      Play
    </Button>
  );

  useEffect(() => {
    const handleKeyInput = (e) => {
      const { key, keyCode } = e;
      if (isPlaying && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctGuess.includes(letter)) {
            setCorrectGuess((current) => [...current, letter]);
          } else {
            //(setShowNotify);
          }
        } else {
          if (!wrongGuess.includes(letter)) {
            setWrongGuess((current) => [...current, letter]);
          } else {
            //(setShowNotify);
          }
        }
      }
    };
  });

  if (!isPlaying) {
    return (
      <Flex justify={"center"} marginTop={"300"}>
        {startGame}
      </Flex>
    );
  } else {
    return (
      <Flex justify={"center"}>
        <div>
          <Parachute wrongGuess={wrongGuess} />
          <Monsters />
        </div>
        <div>
          <WrongGuess wrongGuess={wrongGuess} />
          <Timer />
          <Word correctGuess={correctGuess} />
          <Keyboard />
        </div>
      </Flex>
    );
  }
};

export default GameLogic;

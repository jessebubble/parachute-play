import React, { useState, useEffect } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import Word from "../Word/Word";
import Parachute from "../Parachute";
import Monsters from "../Monsters";
import Keyboard from "../Keyboard/Keyboard";
import Timer from "../Timer/Timer";
import WrongGuess from "../WrongGuess/WrongGuess";
import Popup from "../Popup/Popup";
import Notification from "../Notification/Notification";
import { Notifications } from "../../utils/notifications";

const words = ["TEST", "BILLY", "WIZARD"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const GameLogic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [correctGuess, setCorrectGuess] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const [showNotify, setShowNotify] = useState(false);
  // const wordToGuess = selectedWord.split("").fill("_").join(" ");

  const playGame = () => {
    setIsPlaying(!isPlaying);
  };

  const startGame = (
    <Button colorScheme='cyan' variant='outline' size={"lg"} onClick={playGame}>
      Play
    </Button>
  );

  const playAgain = () => {
    setIsPlaying(!isPlaying);
    setCorrectGuess([]);
    setWrongGuess([]);
  };

  useEffect(() => {
    const handleKeyInput = (e) => {
      const { key, keyCode } = e;
      if (isPlaying && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();
        if (selectedWord.includes(letter)) {
          if (!correctGuess.includes(letter)) {
            setCorrectGuess((current) => [...current, letter]);
          } else {
            Notifications(setShowNotify);
          }
        } else {
          if (!wrongGuess.includes(letter)) {
            setWrongGuess((current) => [...current, letter]);
          } else {
            Notifications(setShowNotify);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyInput);
    return () => window.removeEventListener("keydown", handleKeyInput);
  }, [correctGuess, wrongGuess, isPlaying]);

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
          <Word correctGuess={correctGuess} selectedWord={selectedWord} />
          <Keyboard />
        </div>
        <Popup
          correctGuess={correctGuess}
          wrongGuess={wrongGuess}
          setIsPlaying={setIsPlaying}
          playAgain={playAgain}
          selectedWord={selectedWord}
        />
        <Notification showNotify={showNotify} />
      </Flex>
    );
  }
};

export default GameLogic;

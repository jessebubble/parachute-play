import React, { useState, useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
import Word from "../Word/Word";
import Parachute from "../Parachute";
import Monsters from "../Monsters";
import Keyboard from "../Keyboard/Keyboard";
import Timer from "../Timer/Timer";
import WrongGuess from "../WrongGuess/WrongGuess";
import Popup from "../Popup/Popup";
import Notification from "../Notification/Notification";

const words = ["TEST", "BILLY", "WIZARD"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const GameLogic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [correctGuess, setCorrectGuess] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const [showNotify, setShowNotify] = useState(false);
  const wordToGuess = selectedWord.split("").fill("_").join(" ");

  const playGame = () => {
    setIsPlaying(!isPlaying);
  };

  const startGame = (
    <Button size={"lg"} onClick={playGame}>
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
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctGuess.includes(letter)) {
            setCorrectGuess((current) => [...current, letter]);
          } else {
            Notification(setShowNotify);
          }
        } else {
          if (!wrongGuess.includes(letter)) {
            Notification((current) => [...current, letter]);
          } else {
            Notification(setShowNotify);
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
          <Word correctGuess={correctGuess} selectedWord={wordToGuess} />
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

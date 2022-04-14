import React, { useState, useEffect } from "react";
import { Button, Flex, Container } from "@chakra-ui/react";
import Word from "../Word/Word";
import Parachute from "../Parachute";
import Monsters from "../Monsters";
import Timer from "../Timer/Timer";
import WrongGuess from "../WrongGuess/WrongGuess";
import Popup from "../Popup/Popup";
import Notification from "../Notification/Notification";
import { Notifications } from "../../utils/notifications";
import "./gameLogic.css";

const words = ["GITHUB", "MONSTER", "WIZARD", "BANJO"];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const GameLogic = () => {
  const [startButton, setStartButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [correctGuess, setCorrectGuess] = useState([]);
  const [wrongGuess, setWrongGuess] = useState([]);
  const [showNotify, setShowNotify] = useState(false);
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "ENTER",
  ];

  const keyboard = keys.map((key, index) => {
    return (
      <Button
        colorScheme="cyan"
        variant="solid"
        className="key-container"
        key={index}
        disabled={false}
        onClick={() => {
          if (selectedWord.includes(key)) {
            if (!correctGuess.includes(key)) {
              setCorrectGuess((current) => [...current, key]);
            } else {
              Notifications(setShowNotify);
            }
          } else {
            if (!wrongGuess.includes(key)) {
              setWrongGuess((current) => [...current, key]);
            } else {
              Notifications(setShowNotify);
            }
          }
        }}
      >
        {key}
      </Button>
    );
  });

  const playGame = () => {
    setStartButton(true);
  };

  const startGame = (
    <Button colorScheme="cyan" variant="outline" size={"lg"} onClick={playGame}>
      Play
    </Button>
  );

  const playAgain = () => {
    setIsPlaying(true);
    setCorrectGuess([]);
    setWrongGuess([]);
    selectedWord = words[Math.floor(Math.random() * words.length)];
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

  if (startButton === false) {
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
          <WrongGuess wrongGuess={wrongGuess} display="flex" />
          <Timer display="flex" />
          <Word correctGuess={correctGuess} selectedWord={selectedWord} />
          <Container className="key-container" marginTop={"50"}>
            {keyboard}
          </Container>
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

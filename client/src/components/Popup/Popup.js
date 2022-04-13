import React, { useEffect } from "react";
import "./popup.css";
import { checkGameState } from "../../utils/checkGameState";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Popup = ({
  correctGuess,
  wrongGuess,
  selectedWord,
  setIsPlaying,
  playAgain,
}) => {
  const { isOpen, onClose } = useDisclosure();

  let message = "";
  let revealWord = "";
  let playing = true;

  if (checkGameState(correctGuess, wrongGuess, selectedWord) === "won") {
    message = "Correct! You win!";
    playing = false;
  } else if (
    checkGameState(correctGuess, wrongGuess, selectedWord) === "lost"
  ) {
    message = "Sorry, you lost!";
    revealWord = `The word was ${selectedWord}`;
    playing = false;
  }

  useEffect(() => setIsPlaying(playing));

  return (
    <div
      className="popup-container"
      style={message !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{message}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;

import React, { useEffect } from "react";
import "./popup.css";
import { checkGameState } from "../../utils/checkGameState";
import { Alert, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";

const Popup = ({
  correctGuess,
  wrongGuess,
  selectedWord,
  setIsPlaying,
  playAgain,
}) => {
  let message = "";
  let revealWord = "";
  let playing = true;
  let displayPopup = false;

  if (checkGameState(correctGuess, wrongGuess, selectedWord) === "won") {
    message = "Correct! You win!";
    playing = false;
    displayPopup = true;
  } else if (
    checkGameState(correctGuess, wrongGuess, selectedWord) === "lost"
  ) {
    message = "Sorry, you lost!";
    revealWord = `The word was ${selectedWord}`;
    playing = false;
    displayPopup = true;
  }

  useEffect(() => setIsPlaying(playing));

  if (displayPopup === true) {
    return (
      <div>
        <Alert
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          right={"20rem"}
          textAlign="center"
          height="150px"
        >
          {message}
          <AlertTitle>{revealWord}</AlertTitle>
          <Button onClick={playAgain}>Play Again</Button>
        </Alert>
      </div>
    );
  }
};

export default Popup;

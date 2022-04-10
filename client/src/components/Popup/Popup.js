import React, { useEffect } from "react";
import { checkGameState } from "../../utils/checkGameState";
import { Flex, Button } from "@chakra-ui/react";

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

  if (checkGameState(correctGuess, wrongGuess, selectedWord) === "win") {
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
    <Flex>
      <h2>{message}</h2>
      <h3>{revealWord}</h3>
      <Button onClick={playAgain}>Play Again?</Button>
    </Flex>
  );
};

export default Popup;

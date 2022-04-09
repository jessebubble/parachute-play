import React from "react";
import { useState, useEffect } from "react";

const Word = () => {
  const [playing, setPlaying] = useState(true);
  const [correctGuess, setCorrectGuess] = useState([]);

  const guesses = 0;
  const words = ["TEST", "BILLY", "WIZARD"];
  let selectedWord = words[Math.floor(Math.random() * words.length)];
  const wordToGuess = selectedWord.split("").fill("_").join(" ");

  return (
    <div>
      <p>{wordToGuess}</p>
    </div>
  );
};
export default Word;

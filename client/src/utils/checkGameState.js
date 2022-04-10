export function checkGameState(correct, wrong, word) {
  let status = "win";

  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });
  if (wrong.length === 6) {
    status = "lost";
  }
  return status;
}

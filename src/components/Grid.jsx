import React from "react";
import Row from "./Row";

function Grid({ guesses, currentGuess, turn }) {
  return (
    <div className="mb-2">
      {guesses.map((guess, i) => {
        if (turn === i) {
          return <Row key={i} currentGuess={currentGuess} />;
        }
        return <Row key={i} guess={guess} />;
      })}
    </div>
  );
}

export default Grid;

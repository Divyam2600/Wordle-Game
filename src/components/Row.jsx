import React from "react";

function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((letter, i) => (
          <div key={i} className={`box ${letter.colour}`}>
            {letter.key}
          </div>
        ))}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((letter, i) => (
          <div key={i} className="box filled">
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map((_, i) => (
          <div className="box" key={i}></div>
        ))}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
}

export default Row;

import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";

function Keypad({ usedKeys }) {
  const [letters, setLetters] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => {
        setLetters(json);
      });
  }, []);

  return (
    <div className="keypad">
      <p>
        {letters &&
          letters.slice(0, 10).map((letter) => {
            const colour = usedKeys[letter.key];
            return (
              <button
                key={letter.key}
                value={letter.key}
                className={`key ${colour}`}
              >
                {letter.key}
              </button>
            );
          })}
      </p>
      <p>
        {letters &&
          letters.slice(10, 19).map((letter) => {
            const colour = usedKeys[letter.key];
            return (
              <button
                key={letter.key}
                value={letter.key}
                className={`key ${colour}`}
              >
                {letter.key}
              </button>
            );
          })}
      </p>
      <p>
        <button className="key w-16 text-base">Enter</button>
        {letters &&
          letters.slice(19, 26).map((letter) => {
            const colour = usedKeys[letter.key];
            return (
              <button
                key={letter.key}
                value={letter.key}
                id="key"
                className={`key ${colour}`}
              >
                {letter.key}
              </button>
            );
          })}
        <button className="key w-16">DEL</button>
      </p>
    </div>
  );
}

export default Keypad;

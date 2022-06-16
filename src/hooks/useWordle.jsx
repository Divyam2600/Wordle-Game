import React, { useState } from "react";

function useWordle(solution) {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess ia a string
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  // format a guess into an array of letter objects
  // e.g. [{key: 'a', color: 'yellow'}
  function formatGuess() {
    let solutionArray = [...solution];
    let formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, colour: "grey" };
    });

    // find any green letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray[i] === letter.key) {
        formattedGuess[i].colour = "green";
        solutionArray[i] = null;
      }
    });
    // find any yellow letters
    formattedGuess.forEach((letter, i) => {
      if (solutionArray.includes(letter.key) && letter.colour !== "green") {
        formattedGuess[i].colour = "yellow";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });
    return formattedGuess;
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  function addNewGuess(formattedGuess) {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((previousGuess) => {
      let newGuess = [...previousGuess];
      newGuess[turn] = formattedGuess;
      return newGuess;
    });
    setHistory((previousHistory) => {
      return [...previousHistory, currentGuess];
    });
    setTurn((previousTurn) => {
      return previousTurn + 1;
    });
    setUsedKeys((previousUsedKeys) => {
      let newKeys = { ...previousUsedKeys };

      formattedGuess.forEach((letter) => {
        const currentColour = newKeys[letter.key];
        if (letter.colour === "green") {
          newKeys[letter.key] = "green";
          return;
        }
        if (letter.colour === "yellow" && currentColour != "green") {
          newKeys[letter.key] = "yellow";
          return;
        }
        if (
          letter.colour === "grey" &&
          currentColour != "green" &&
          currentColour != "yellow"
        ) {
          newKeys[letter.key] = "grey";
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess("");
  }

  // handle keyup event & track current guess
  // if user presses enter, add the new guess
  function handleKeyUp({ key }) {
    if (key === "Enter") {
      // only add guess if number of turns is less than 5
      if (turn > 5) {
        console.log("you used all your guesses");
        return;
      }
      // not allowing duplicate words
      if (history.includes(currentGuess)) {
        console.log("You have already written that word");
        return;
      }
      // check that the word is exactly equal to 5 characters
      if (currentGuess.length != 5) {
        console.log("Word must be 5 characters long");
        return;
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (key === "Backspace") {
      setCurrentGuess((previous) => {
        return previous.slice(0, -1);
      });
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((previous) => {
          return previous + key;
        });
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp };
}

export default useWordle;

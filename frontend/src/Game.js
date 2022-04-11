import React, { useState, useEffect } from "react";
import Headers from "./Components/Headers";
import Figure from "./Components/Figure";
import WrongLetters from "./Components/WrongLetters";
import Word from "./Components/Word";
import Popup from "./Components/Popup";
import Notification from "./Components/Notification";
import { showNotification as show } from "./Helpers/Helpers";
import { useNavigate } from "react-router-dom";
import "./Game.css";

const words = ["application", "programming", "interface", "wizard"];
let selectedWord = words[Math.floor(Math.random() * words.length)];
// let playable = true; reuse with =>  const [playable, setPlayabel] = useState(true);
//const correctLetters = []; =>   const [correctLetters, setCorrectLetters] = useState([]);
//const wrongLetters = []; =>   const [wrongLetters, setWrongLetters] = useState([]);

function Game() {
  const navigate = useNavigate();
  const [playable, setPlayabel] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [points, setPoints] = useState(0);

  // Keydown letter press
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        /* 65 and 90 is letter keys*/

        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          // Checking if selected word include letter, if it doesn't include letter t than add letter if not than show notification letter twice
          if (!correctLetters.includes(letter)) {
            
            setCorrectLetters((currentLetters) => [
              /* this take current letters and create new array*/
              ...currentLetters,
              letter,
            ]);
           
          } else {
            show(setShowNotification);
         
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [
              ...wrongLetters,
              letter,
            
            ]); 
            setPoints(prevPoints => prevPoints + 1);
            console.log(points);/* this take current letters and create new array*/
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayabel(true);

    // Empty arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Headers />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word
          selectedWord={selectedWord}
          correctLetters={correctLetters}
        />{" "}
        {/* in app we need to pass the props down   */}
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayabel}
        playAgain={playAgain}
      />{" "}
      {/*Need to check right letters, wrong letter */}
      <Notification showNotification={showNotification} />
      {/* Show message if letter are use twice*/}
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn btn-primary  mb-3 mt-5"
      >
        Login
      </button>
    </>
  );
}

export default Game;

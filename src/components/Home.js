import React, { useState } from "react";
import { Breakout } from "./breakout/Breakout";
import { Game3 } from "./game3/Game3";
import { Hangman } from "./hangman/Hangman";

export const Home = () => {
  const [game, setGame] = useState("");

  const play = (game) => {
    switch (game) {
      case "breakout":
        {
          setGame(game);
        }
        break;
      case "hangman":
        {
          setGame(game);
        }
        break;
      case "game3":
        {
          setGame(game);
        }
        break;
      default: {
        setGame("");
      }
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>Breakout</h2>
          <button onClick={() => play("breakout")}>Play</button>
        </div>
        <div>
          <h2>Hangman</h2>
          <button onClick={() => play("hangman")}>Play</button>
        </div>
        <div>
          <h2>Game3</h2>
          <button onClick={() => play("game3")}>Play</button>
        </div>
      </div>
      <div>
        {game == "breakout" ? (
          <Breakout />
        ) : game == "game3" ? (
          <Game3 />
        ) : game == "hangman" ? (
          <Hangman />
        ) : null}
      </div>
    </>
  );
};

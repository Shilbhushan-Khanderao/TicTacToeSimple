"use client";
import React, { useState } from "react";
import Tile from "./Tile";
import Info from "./Info";

function Board() {
  const winningCombo = {
    combo: [0, 1, 2],
    combo: [3, 4, 5],
    combo: [6, 7, 8],
    combo: [0, 3, 6],
    combo: [1, 4, 7],
    combo: [2, 5, 8],
    combo: [0, 4, 8],
    combo: [2, 4, 6],
  };

  const playerO = "O";
  const playerX = "X";
  const [playerTurn, setPlayerTurn] = useState(playerX);

  const handleTileClick = () => {
    if (playerTurn === playerX) {
      setPlayerTurn(playerO);
    } else {
      setPlayerTurn(playerX);
    }
  };
  return (
    <div className="board">
      <div className="board-row">
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="board-row">
        <Tile />
        <Tile />
        <Tile />
      </div>
      <div className="board-row">
        <Tile />
        <Tile />
        <Tile />
      </div>
      <Info />
    </div>
  );
}

export default Board;

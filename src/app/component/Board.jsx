"use client";
import React, { useState } from "react";
import Tile from "./Tile";
import Info from "./Info";

function Board() {
  const [tile, setTile] = useState(Array(9).fill(null));
  const [XplayerTurn, setXPlayerTurn] = useState(true);

  const handleTileClick = (i) => {
    if (checkWinner(tile) || tile[i]) {
      return;
    }
    const nextTiles = tile.slice();
    if (XplayerTurn) {
      nextTiles[i] = "X";
    } else {
      nextTiles[i] = "O";
    }
    setTile(nextTiles);
    setXPlayerTurn(!XplayerTurn);
  };

  function checkWinner(tile) {
    const winningCombo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombo.length; i++) {
      const [a, b, c] = winningCombo[i];
      if (tile[a] && tile[a] === tile[b] && tile[a] === tile[c]) {
        return tile[a];
      }
    }
    return null;
  }

  const winner = checkWinner(tile);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (XplayerTurn ? "X" : "O");
  }

  const resetBoard = () => {
    setTile(Array(9).fill(null));
    setXPlayerTurn(true);
  };

  return (
    <div className="board">
      <div className="board-row">
        <Tile tile={tile[0]} handleTileClick={() => handleTileClick(0)} />
        <Tile tile={tile[1]} handleTileClick={() => handleTileClick(1)} />
        <Tile tile={tile[2]} handleTileClick={() => handleTileClick(2)} />
      </div>
      <div className="board-row">
        <Tile tile={tile[3]} handleTileClick={() => handleTileClick(3)} />
        <Tile tile={tile[4]} handleTileClick={() => handleTileClick(4)} />
        <Tile tile={tile[5]} handleTileClick={() => handleTileClick(5)} />
      </div>
      <div className="board-row">
        <Tile tile={tile[6]} handleTileClick={() => handleTileClick(6)} />
        <Tile tile={tile[7]} handleTileClick={() => handleTileClick(7)} />
        <Tile tile={tile[8]} handleTileClick={() => handleTileClick(8)} />
      </div>
      <div className="btn-div">
        <button className="btn" onClick={resetBoard}>
          Reset
        </button>
      </div>
      <Info status={status} />
    </div>
  );
}

export default Board;

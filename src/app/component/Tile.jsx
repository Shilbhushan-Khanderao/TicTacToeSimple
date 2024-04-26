import React from "react";

function Tile({ handleTileClick, tile }) {
  return (
    <div className="tile" onClick={handleTileClick}>
      {tile}
    </div>
  );
}

export default Tile;

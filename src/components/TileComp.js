import React from "react";
import "../App.css";

function TileComp({ title }) {
  return (
    <div className="Tile">
      <div className="TileTitle">
        <h1>{title}</h1>
      </div>
      <div>
        <p>Goal 1</p>
        <p>Goal 2</p>
        <p>Goal 3</p>
        <p>Goal 4</p>
      </div>
    </div>
  );
}

export default TileComp;

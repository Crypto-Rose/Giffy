import React from "react";
import Gif from "../Gifs/Gif";
import "./ListOfGifs.css";

function ListOfGifs({ gifs }) {
  return (
    <div className="gifs">
      {gifs.map((singleGit) => (
        <Gif key={singleGit.id} {...singleGit} />
      ))}
    </div>
  );
}

export default ListOfGifs;

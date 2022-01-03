import React, { useEffect, useState } from "react";
import getGifs from "../../services/getGifs";
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

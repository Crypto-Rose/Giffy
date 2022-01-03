import React, { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "../components/Gif";
import "../css/ListOfGifs.css";

function ListOfGifs({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((response) => {
      setGifs(response);
    });
  }, [keyword]);

  return (
    <div className="gifs">
      {gifs.map((singleGit) => (
        <Gif key={singleGit.id} {...singleGit} />
      ))}
    </div>
  );
}

export default ListOfGifs;

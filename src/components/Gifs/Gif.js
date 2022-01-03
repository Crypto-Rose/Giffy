import React from "react";
import { Link } from "wouter";

function Gif(props) {
  const { title, id, url } = props;
  return (
    <div className="images">
      <Link to={`/detail/${id}`}>
        <a href={`#${id}`}>
          <h3>{title}</h3>
          <img src={url} alt={title} />
        </a>
      </Link>
    </div>
  );
}

export default Gif;

import React from "react";
import { Link } from "wouter";
import "../css/Home.css";

const MOST_POPULAR = ["Cats", "Dogs", "Pizza", "Books"];

const Home = () => {
  return (
    <div>
      <ul className="menu">
        {MOST_POPULAR.map((ele) => (
          <li>
            <Link to={`/search/${ele}`}>{ele}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

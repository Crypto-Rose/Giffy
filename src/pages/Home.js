import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import "../css/Home.css";
import useGifs from "../hooks/useGifs";

const MOST_POPULAR = ["Cats", "Dogs", "Pizza", "Books"];

const Home = () => {
  const [keyWord, setKeyWord] = useState('')
  const [path, pushLocation] = useLocation()
  const  {loading, gifs} =  useGifs()

  const handleSubmit = (e) => {
    e.preventDefault()
    pushLocation(`/search/${keyWord}`)
    console.log('keyWord', keyWord);
     
  };

  const handleChange = (e) => {
    setKeyWord(e.target.value)
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Search a git here guys" value={keyWord} type='text' onChange={handleChange}/>
        <input type="submit" value="Search"/>
      </form>
      <ListOfGifs gifs={gifs} />
      <ul className="menu">
        {MOST_POPULAR.map((ele) => (
          <li key={ele}>
            <Link to={`/search/${ele}`}>{ele}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

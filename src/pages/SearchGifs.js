import React from "react";
import ListOfGifs from "../components/ListOfGifs/ListOfGifs";
import Spinner from "../components/Spinner";
import useGifs from "../hooks/useGifs";

function SearchGifs({ params }) {
  const { keyword } = params;
  console.log('keyword', keyword);
  const { loading, gifs } = useGifs({keyword})
  

  return <>{loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}</>;
}

export default SearchGifs;

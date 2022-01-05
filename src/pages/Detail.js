import React, { useContext } from "react";
import StaticContext from "../context/StaticContext";

const Detail = ({ params }) => {
  const context = useContext(StaticContext);
  console.log(context);
  const { id } = params;
  return <div>Hola{id}</div>;
};

export default Detail;

import React from "react";

const Detail = ({ params }) => {
  const { id } = params;
  return <div>Hola{id}</div>;
};

export default Detail;

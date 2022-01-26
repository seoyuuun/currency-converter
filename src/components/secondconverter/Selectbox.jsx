import React from "react";
import { optionObject } from "./optionObject";

function Selectbox({ handleKeyword }) {
  const handleChange = (e) => {
    handleKeyword(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      {optionObject.map((object) => {
        return <option key={object.id}>{object.title}</option>;
      })}
    </select>
  );
}

export default Selectbox;

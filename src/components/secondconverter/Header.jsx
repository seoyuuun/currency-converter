import React, { useState } from "react";
import Selectbox from "./Selectbox";
import "./Header.scss";
import { inputComma, rmComma } from "../../utils/comma";

const Header = ({ handleKeyword, setInput }) => {
  const [price, setPrice] = useState(0);

  function handleInput(event) {
    setInput(rmComma(event.target.value));
    setPrice(inputComma(event.target.value));
  }

  return (
    <section className="header">
      <form action="">
        <input
          type="text"
          value={price}
          // onChange={(e) => setPrice(inputComma(e.target.value))}
          onChange={handleInput}
        />
      </form>
      <Selectbox handleKeyword={handleKeyword} />
    </section>
  );
};

export default Header;

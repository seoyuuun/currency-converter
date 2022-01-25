import React, { useState } from 'react';
import Selectbox from './Selectbox';
import './Header.scss';
import { inputComma } from '../../utils/comma';

const Header = () => {
  const [price, setPrice] = useState(0);

  return (
    <section className="header">
      <form action="">
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(inputComma(e.target.value))}
        />
      </form>
      <Selectbox />
    </section>
  );
};

export default Header;

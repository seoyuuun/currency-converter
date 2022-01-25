import React from 'react';
import { optionObject } from './optionObject';

function Selectbox() {
  return (
    <select>
      {optionObject.map((object) => {
        return <option key={object.id}>{object.title}</option>;
      })}
    </select>
  );
}

export default Selectbox;

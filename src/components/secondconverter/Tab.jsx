import React, { useState } from 'react';
import { optionObject } from './optionObject';
import './Tab.scss';
import Contents from './Contents';

function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  const selectMenuHandler = (index) => {
    console.log(index);
    setCurrentTab(index);
  };

  return (
    <div className="wrapper">
      <ul className="TabMenu">
        {optionObject.map((el, index) => {
          return (
            <li
              key={index}
              className={`${
                index === currentTab ? 'submenu focused' : 'submenu'
              }`}
              onClick={() => selectMenuHandler(index)}
              role="presentation"
            >
              {el.title}
            </li>
          );
        })}
      </ul>
      {/* <div className="Desc">
        <p>{optionObject[currentTab].content}</p>
      </div> */}
      <Contents title={optionObject[currentTab].content}></Contents>
    </div>
  );
}

export default Tab;

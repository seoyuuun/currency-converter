import React, { useState } from "react";
import { optionObject } from "./optionObject";
import "./Tab.scss";
import Contents from "./Contents";

function Tab({ keyword, total, setOption }) {
  const [currentTab, setCurrentTab] = useState(0);

  const test = "USD";

  const selectMenuHandler = (index, title) => {
    console.log(index);
    console.log({ keyword });
    setCurrentTab(index);
    setOption(title);
  };

  return (
    <div className="wrapper">
      <ul className="TabMenu">
        {optionObject.map((el, index) => {
          if (`${el.title}` !== `${keyword}`) {
            console.log("진입");
            return (
              <li
                key={index}
                className={`${
                  index === currentTab ? "submenu focused" : "submenu"
                }`}
                onClick={() => selectMenuHandler(index, el.title)}
              >
                {el.title}
              </li>
            );
          }
        })}
      </ul>
      <Contents title={optionObject[currentTab].value} total={total}></Contents>
    </div>
  );
}

export default Tab;

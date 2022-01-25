import React from "react";
// import style from "scss";

function Input() {
  return (
    <div>
      <input placeholder="" />
    </div>
  );
}

const OPTIONS = [
  { value: "USA", title: "USD" },
  { value: "CANADA", title: "CAD" },
  { value: "KOREA", title: "KRW" },
  { value: "HONGKONG", title: "HKD" },
  { value: "JAPAN", title: "JPY" },
  { value: "CHINA", title: "CHNY" },
];

function Select(props) {
  return (
    <select>
      {props.options.map((option => (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

function Header() {
  return (
    <>
      <Input />
      <Select options={OPTIONS} />
    </>
  );
}

export default Header;

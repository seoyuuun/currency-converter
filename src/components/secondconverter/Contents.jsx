import React from "react";
import { formatDate } from "../../utils/date";
// import './Contents.scss';

const Contents = ({ title, total }) => {
  const today = formatDate();

  return (
    <section className="contents">
      <header>
        <h3>
          {title}
          {total}20000
        </h3>
      </header>
      <section>
        <p>기준일 :</p>
        <p>{today}</p>
      </section>
    </section>
  );
};

export default Contents;

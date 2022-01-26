import React, { useState, useEffect } from "react";
import { addComma } from "../utils/comma";
import "./FirstConverter.scss";
import useData from "../hooks/useData";

const countryToCurrencyDict = {
  한국: "KRW",
  일본: "JPY",
  필리핀: "PHP",
};

function FirstConverter() {
  const [inputs, setInputs] = useState("");
  const [countryOption, setCoutryOption] = useState("한국");
  const toCurrency = countryToCurrencyDict[countryOption]; // KRW
  const [exchangeRateDict, setExchangeRateDict] = useState(null);
  const exchangeRate = exchangeRateDict && exchangeRateDict[`USD${toCurrency}`]; // USDKRW
  const [total, setTotal] = useState("");

  // hooks
  const { data } = useData();

  const selectHandler = (e) => {
    setCoutryOption(e.target.value);
    setTotal("");
  };

  useEffect(() => {
    setExchangeRateDict(data);
  }, [data]);

  const handleToAmountChange = (e) => {
    e.preventDefault();
    const calculate = inputs * exchangeRate;

    if (inputs === "" || inputs < 0 || inputs > 10000 || inputs % 1 !== 0) {
      alert("송금액이 바르지 않습니다.");
    } else {
      const result = addComma(calculate);
      setTotal(result);
    }
  };

  const inputHandler = (e) => {
    const { value } = e.target;
    setInputs(value);
  };

  return (
    <section className="firstConverter">
      <h1>환율 계산</h1>
      <div className="converter-wrapper">
        <div className="converter-country">송금국가 : 미국(USD)</div>
        <label className="converter-seletor" htmlFor="coutries">
          수취국가 :
          <select className="converter-seletor-option" onChange={selectHandler}>
            <option value="한국">한국(KRW)</option>
            <option value="일본">일본(JPY)</option>
            <option value="필리핀">필리핀(PHP)</option>
          </select>
        </label>
        <div className="converter-exchange-rate">
          환율 : {exchangeRate}
          {toCurrency} /USD
        </div>
        <form className="converter-sending-wrapper">
          <label htmlFor="cost">
            송금액 :
            <input
              className="converter-sending"
              type="text"
              id="cost"
              required
              onChange={inputHandler}
              value={inputs}
            />
          </label>
          <span>USD</span>
          <div>
            <input
              className="submit-button"
              type="submit"
              value="Submit"
              onClick={handleToAmountChange}
            />
          </div>
        </form>
      </div>
      {data && (
        <div className="converter-total">
          수취금액은
          {`${total} ${toCurrency}`}
          입니다.
        </div>
      )}
    </section>
  );
}

export default FirstConverter;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { addComma } from "../utils/comma";

const countryToCurrencyDict = {
  한국: "KRW",
  일본: "JPY",
  필리핀: "PHP",
};

function FirstConverter() {
  // input에 숫자만 담는 state
  const [inputs, setInputs] = useState("");
  // select 나라 옵션
  const [countryOption, setCoutryOption] = useState("한국");
  console.log("countryOption", countryOption);
  // 수취 국가 통화 단위
  const toCurrency = countryToCurrencyDict[countryOption]; // KRW
  console.log("toCurrency", toCurrency);
  // 환율
  const [exchangeRateDict, setExchangeRateDict] = useState(null);

  const exchangeRate = exchangeRateDict && exchangeRateDict[`USD${toCurrency}`]; // USDKRW
  console.log("exchangeRate", exchangeRate);

  // 총 계산값
  const [total, setTotal] = useState("");

  // 3. 셀렉트 박스에서 value 값 받아와서 setCountry 에 저장
  const selectHandler = e => {
    setCoutryOption(e.target.value);
    setTotal("");
  };

  // 0. data를 받아올 useEffect
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `http://api.currencylayer.com/live?access_key=${process.env.REACT_APP_CURRENCYLAYER_API_KEY}`,
        );
        const { data } = response;
        setExchangeRateDict(data.quotes);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  // 1. 수취금액 계산 함수
  const handleToAmountChange = e => {
    e.preventDefault();
    const calculate = inputs * exchangeRate;

    if (inputs === "" || inputs < 0 || inputs > 10000 || inputs % 1 !== 0) {
      // 바른 숫자가 아니라면 <= 조건식 추가하기
      alert("송금액이 바르지 않습니다.");
    } else {
      const result = addComma(calculate);
      setTotal(result);
    }
    // setTotal(result.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ","));
  };

  // 2. 수취금액 1000 단위로 끊어주는 정규식 함수
  const inputHandler = e => {
    const { value } = e.target;
    // const num = value.replace(/[^0-9]/g, "");
    setInputs(value);
  };

  return (
    <section>
      <h1>환율 계산</h1>
      <h5>송금국가: 미국(USD)</h5>
      <label htmlFor="coutries">
        수취국가:
        <select onChange={selectHandler}>
          <option value="한국">한국(KRW)</option>
          <option value="일본">일본(JPY)</option>
          <option value="필리핀">필리핀(PHP)</option>
        </select>
      </label>
      <h5>
        환율 : {exchangeRate}
        {toCurrency} /USD
      </h5>
      <form>
        <label htmlFor="cost">
          송금액:
          <input
            type="text"
            id="cost"
            required
            onChange={inputHandler}
            value={inputs}
          />
        </label>
        <div>
          <input type="submit" onClick={handleToAmountChange} />
        </div>
      </form>
      <div>
        수취금액은
        {`${total} ${toCurrency}`}
        입니다.
      </div>
    </section>
  );
}

export default FirstConverter;

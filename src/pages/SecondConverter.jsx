import Tab from '../components/secondconverter/Tab';
import Header from '../components/secondconverter/Header';
import './SecondConverter.scss';
import { useState, useEffect } from 'react';
import { addComma } from '../utils/comma';
import useData from '../hooks/useData';

const SecondConverterPage = () => {
  const [total, setTotal] = useState('');
  const [input, setInput] = useState('');
  const [keyword, setKeyword] = useState('USD');
  const [option, setOption] = useState('CAD');
  const [exchangeRateDict, setExchangeRateDict] = useState(null);

  const exchangeRate = exchangeRateDict && exchangeRateDict[`USD${option}`]; 

  // hooks
  const { data } = useData();

  // 0. data를 받아올 useEffect
  useEffect(() => {
    setExchangeRateDict(data);
  }, [data]);
  function handleKeyword(e) {
    setKeyword((i) => (i = e));
  }
  // 1. 환율 업데이트
  useEffect(() => {
    setExchangeRateDict(data);
  }, [option]);

  const handleToAmountChange = () => {
    const calculate = input * exchangeRate;
    if (input === '' || input < 0 || input % 1 !== 0) {
      alert('송금액이 바르지 않습니다.');
    } else {
      const result = addComma(calculate);
      result==="NaN" ? setTotal("Load..") : setTotal(result);

    }
  };
  return (
    <section className="wrap">
      <section className="container">
        <Header handleKeyword={handleKeyword} setInput={setInput}></Header>
        <Tab
          keyword={keyword}
          setOption={setOption}
          total={total}
          handleChange={handleToAmountChange}
        ></Tab>
      </section>
    </section>
  );
};
export default SecondConverterPage;
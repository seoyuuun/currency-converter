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

  const exchangeRate = exchangeRateDict && exchangeRateDict[`USD${keyword}`]; // USDKRW

  // hooks
  const { data } = useData();

  // 0. data를 받아올 useEffect
  useEffect(() => {
    setExchangeRateDict(data);
  }, [data]);
  function handleKeyword(e) {
    setKeyword((i) => (i = e));
    handleToAmountChange();
  }
  // 1. 환율 업데이트
  useEffect(() => {
    setExchangeRateDict(data);
  }, [keyword]);

  const handleToAmountChange = () => {
    const calculate = input * exchangeRate;
    if (input === '' || input < 0 || input % 1 !== 0) {
      // 바른 숫자가 아니라면 <= 조건식 추가하기
      alert('송금액이 바르지 않습니다.');
    } else {
      const result = addComma(calculate);
      setTotal(result);
    }
  };

  return (
    <section className="wrap">
      <section className="container">
        <Header handleKeyword={handleKeyword} setInput={setInput}></Header>
        <Tab keyword={keyword} setOption={setOption} total={total}></Tab>
      </section>
    </section>
  );
};
export default SecondConverterPage;

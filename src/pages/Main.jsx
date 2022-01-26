import FirstConverter from './FirstConverter';
import SecondConverterPage from './SecondConverter';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

export const MainPage = () => {
  const [mode, setMode] = useState('Go to Tab Select Converter');
  let navigate = useNavigate();
  const handleMode = () => {
    if (mode === 'Go to Tab Select Converter') {
      setMode('Go to Select Box Converter');
    } else {
      setMode('Go to Tab Select Converter');
    }
  };

  return (
    <>
      {mode === 'Go to Tab Select Converter' ? (
        <FirstConverter />
      ) : (
        <SecondConverterPage />
      )}
      <button className="Btnmode" onClick={handleMode}>
        {mode}
      </button>
    </>
  );
};

export default MainPage;

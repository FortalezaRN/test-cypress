import React from 'react';

interface Props{
  value: string;
  setValue: Function;
  handleIncome: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  handleOutcome: ((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const FormCalc = ({value, setValue, handleIncome, handleOutcome}: Props) => {
  return (
    <section className="calc-form">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="btns">
        <button className="income" onClick={handleIncome}>Recebi</button>
        <button className="outcome" onClick={handleOutcome}>Gastei</button>
      </div>
    </section>
  );
}

export default FormCalc;

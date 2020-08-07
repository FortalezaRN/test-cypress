import React, { useState, MouseEvent } from 'react';
import Header from './components/Header';
import CalcForm from './components/CalcForm';
import ListTransactions from './components/ListTransactions';
import Score from './components/Score';
import './App.css';

interface Transactions {
  value: number;
  type: string;
}

const App = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [value, setValue] = useState('');

  function handleIncome(e: MouseEvent<HTMLButtonElement>) {
    const income = {
      value: parseFloat(value),
      type: 'income'
    }
    setTransactions([...transactions, income])
  }
  function handleOutcome(e: MouseEvent<HTMLButtonElement>) {
    const outcome ={
      value: parseFloat(value),
      type: 'outcome'
    }
    setTransactions([...transactions, outcome]);
    console.log(transactions);
    
  }

  return (
    <>
      <Header />
      <main>
        <CalcForm
          value={value}
          setValue={setValue}
          handleIncome={handleIncome}
          handleOutcome={handleOutcome}
        />
        <Score transactions={transactions} />
        <ListTransactions transactions={transactions} />
      </main>
    </>
  );
}

export default App;

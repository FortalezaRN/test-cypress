import React, { useEffect, useState } from 'react';
import formatValue from '../../utils/formatValue';

interface Transactions {
  value: number;
  type: string;
}
interface Props {
  transactions: Transactions[]
}
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

const Score = ({ transactions }: Props) => {
  
  const [balance, setBalance] = useState<Balance>({
    income: 0,
    outcome: 0,
    total: 0,
  });

  useEffect(() => {
    const { income, outcome } = transactions.reduce(
      (accumulator: Balance, transaction: Transactions) => {
        const value = transaction.value;
        switch (transaction.type) {
          case 'income':
            accumulator.income += value;
            break;
          case 'outcome':
            accumulator.outcome += value;
            break;
          default:
            break;
        }
        return accumulator;
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );

    const total = income - outcome;

    setBalance({
      income,
      total,
      outcome
    })
    
  }, [transactions])

  return (
    <section className="score">
      <div className="income">
        <h2>Entrada</h2>
        <p>{formatValue(balance.income)}</p>
      </div>
      <div className="outcome">
        <h2>Saída</h2>
        <p>{formatValue(balance.outcome)}</p>
      </div>
      <div className="total">
        <h2>Total</h2>
        <p>{formatValue(balance.total)}</p>
      </div>
    </section>
  );
}

export default Score;

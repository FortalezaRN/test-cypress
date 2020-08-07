import React from 'react';
import formatValue from '../../utils/formatValue';

interface Transactions {
  value: number;
  type: string;
}
interface Props {
  transactions: Transactions[]
}

const ListTransactions = ({ transactions }: Props) => {
  return (
    <section className="list-transactions">
      <h1>Transições</h1>
      <ul>
        { transactions.map( (transaction, i) => (
          <li key={i} className={transaction.type}> {formatValue(transaction.value)} </li>
        ))}
      </ul>
    </section>
  );
}

export default ListTransactions;
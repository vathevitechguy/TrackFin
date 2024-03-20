import React from 'react';
import TransactionLabel from '../../components/TransactionLabel/TransactionLabel';

const dummyExpenses = [
  { id: 1, name: 'Groceries', amount: 50, type: 'expense' },
  { id: 2, name: 'Rent', amount: 1000, type: 'expense' },
  { id: 3, name: 'Groceries', amount: 50, type: 'expense' },
  { id: 4, name: 'Rent', amount: 1000, type: 'expense' },
  { id: 5, name: 'Groceries', amount: 50, type: 'expense' },
  { id: 6, name: 'Rent', amount: 1000, type: 'expense' },
];

const DisplayExpenses = () => {
  return (
    <div>
      {dummyExpenses.length === 0 ? (
        <div>No Expenses for this month. Add expenses</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {dummyExpenses.map((expense) => (
            <TransactionLabel key={expense.id} transaction={expense} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayExpenses;

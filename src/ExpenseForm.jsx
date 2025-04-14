import React, { useState } from 'react';

function ExpenseList({ expenses }) {
  return (
    <div>
      <h3>Expenses</h3>
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} - ${expense.amount}
            </li>
          ))}
        </ul>
    </div>
  );
}

function AddExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const newExpense = {
      description: description, 
      amount: parseFloat(amount), 
    };

    onAddExpense(newExpense); 

    setDescription(''); 
    setAmount(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Expense</h3>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

function ExpenseForm() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, { ...newExpense, id: Date.now() }]);
  };

  return (
    <div>
      <h2>Expense Tracker</h2>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default ExpenseForm;
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import SearchBar from "./SearchBar";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  function deleteExpense(index) {
    const updatedExpenses = expenses.filter((expense, i) => i !== index);
    setExpenses(updatedExpenses);
  }
  

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseTable expenses={filteredExpenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;

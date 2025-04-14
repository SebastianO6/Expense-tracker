import React, { useState } from "react";

const ExpenseTable = ({ expenses, deleteExpense }) => {
  const [sortField, setSortField] = useState(null);
  const [ascending, setAscending] = useState(true);

  const handleSort = (field) => {
    setAscending(sortField === field ? !ascending : true);
    setSortField(field);
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField].toLowerCase();
    const valB = b[sortField].toLowerCase();
    return ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
  });

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("name")}>Expense</th>
          <th onClick={() => handleSort("description")}>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.map((exp, index) => (
          <tr key={index}>
            <td>{exp.name}</td>
            <td>{exp.description}</td>
            <td>{exp.category}</td>
            <td>${exp.amount}</td>
            <td>{exp.date}</td>
            <td><button onClick={() => deleteExpense(index)}>❌</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;

import React, { useState } from "react";

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    setFormData({ name: "", description: "", category: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Expense Name" value={formData.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input name="amount" type="number" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <input name="date" type="date" value={formData.date} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ExpenseForm;

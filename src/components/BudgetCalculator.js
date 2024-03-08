import React, { useState } from "react";

function BudgetCalculator() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(parseFloat(e.target.value));
  };

  const handleExpensesChange = (e) => {
    setExpenses(parseFloat(e.target.value));
  };

  const calculateBudget = () => {
    setBudget(income - expenses);
  };

  return (
    <div>
      <h2>Budget Calculator</h2>
      <div>
        <label htmlFor="income">Income:</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={handleIncomeChange}
        />
      </div>
      <div>
        <label htmlFor="expenses">Expenses:</label>
        <input
          type="number"
          id="expenses"
          value={expenses}
          onChange={handleExpensesChange}
        />
      </div>
      <button onClick={calculateBudget}>Calculate Budget</button>
      <div>
        <h3>Remaining Budget: ${budget}</h3>
      </div>
    </div>
  );
}

export default BudgetCalculator;

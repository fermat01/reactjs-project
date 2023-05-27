import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Table (Wooden)",
    amount: 950,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e6",
    title: "Dinner Table ",
    amount: 950,
    date: new Date(2022, 4, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyData);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  /*
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started learn React js !"),
    React.createElement(Expenses, { items: expenses })
  );
  */
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;

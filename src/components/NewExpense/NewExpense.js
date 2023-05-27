import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // child to parent component communication
    setIsEditing(false); // to cancel editing button
  };
  const startEditingHandler = (expenseData) => { 
    setIsEditing(true);
  }
  const stopEditingHandler = () => { 
    setIsEditing(false);

  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}> Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={savedExpenseDataHandler} onCancel ={stopEditingHandler} />}
    </div>
  );
};
export default NewExpense;

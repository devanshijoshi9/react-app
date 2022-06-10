import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    // 3 useState for 3 different values
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Only 1 useState for 3 different values.
    /* const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    }); */

    const titleChangeHandler = (event) => {

        setEnteredTitle(event.target.value);

        // Sometimes it doesn't work when the state is depends on prev state.
        /* setUserInput({
            // To keep 2 object key value as it is.
            ...userInput,
            enteredTitle: event.target.value,
        }); */

        // Use function based approach when state is depends on previous state 
        /* setUserInput((prevState) => { 
            return { ...prevState, enteredTitle: event.target.value }
        }); */
    };

    const amountChangeHandler = (event) => {

        setEnteredAmount(event.target.value);

        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });

        setUserInput((prevState) => { 
            return { ...prevState, enteredAmount: event.target.value }
        }); */
    };

    const dateChangeHandler = (event) => {

        setEnteredDate(event.target.value);

        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        });

        setUserInput((prevState) => { 
            return { ...prevState, enteredDate: event.target.value }
        }); */
    };

    const submitHandler = (event) => {
        // Prevent the default form behaviour that is automatically submit the form to server and that Reload the page
        // We want to do it using JS. (No reload)
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        //Pass Expense data to NewExpense component.
        props.onSaveExpenseData(expenseData);

        // Clear the data after form submit.
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={ titleChangeHandler }
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount:</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date:</label>
                    <input
                        type="date"
                        value={enteredDate}
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
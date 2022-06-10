import React, { useState } from 'react';
import './ExpenseItem.css';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ( props ) => {

    // setTitle is function where we can change the state of the variable.
    const [ title, setTitle ] = useState(props.title);

    const clickHandler = () => {
        setTitle('updated');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={ props.date } />
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>{ props.amount } Rs.</div>
            </div>
            <button onClick={ clickHandler }>Click title</button>
        </Card>
    );
}

export default ExpenseItem;

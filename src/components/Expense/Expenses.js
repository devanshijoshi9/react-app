import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'; 
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  return (
    <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map((expense) => (
          <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
          />
        ))}
        {/* <ExpenseItem
          title  = {expenses[0].title}
          amount = {expenses[0].amount}
          date   = {expenses[0].date}
        />
        <ExpenseItem
          title  = {expenses[1].title}
          amount = {expenses[1].amount}
          date   = {expenses[1].date}
        />
        <ExpenseItem
          title  = {expenses[2].title}
          amount = {expenses[2].amount}
          date   = {expenses[2].date}
        /> */}
    </Card>
  );
}

export default Expenses;

import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem'; 

function Expenses() {

  const expenses = [
    { 
      id: 1,
      title: 'Mobile Recharge',
      amount: 700,
      date: new Date(2021, 4, 15)
    },
    { 
      id: 2,
      title: 'Gas Bill',
      amount: 1000,
      date: new Date(2021, 4, 20)
    },
    { 
      id: 1,
      title: 'Electricity Bill',
      amount: 500,
      date: new Date(2021, 5, 13)
    }
  ]
  return (
    <Card className="expenses">
        <ExpenseItem
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
        />
    </Card>
  );
}

export default Expenses;

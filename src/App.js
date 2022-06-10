import Expense from './components/Expense/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {

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
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense />
      <Expense items={expenses} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map(e => (
          <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
        ))};
      </Card>
    </div>
  );
}

export default Expenses;

import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props);
  
  const clickHandler = () => {
    setTitle({
      title: 'Updated!',
      amount: props.amount + 50,
    });
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title.title}</h2>
        <div className='expense-item__price'>${title.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;

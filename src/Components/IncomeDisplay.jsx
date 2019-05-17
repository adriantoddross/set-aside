import React from 'react';
import './IncomeDisplay.css';

export default function incomeDisplay(props) {
     return (
         <div className="income-display">
             <h2>{props.description}</h2>
             <p>{props.amount}</p>
         </div>
     );
}
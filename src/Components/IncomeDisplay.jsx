import React from 'react';
import './IncomeDisplay.css';

export default function incomeDisplay(props) {
     return (
         <div>
             <p>{props.amount}</p>
             <h2>{props.description}</h2>
         </div>
     );
}
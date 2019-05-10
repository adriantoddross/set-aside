import React from 'react';
import Form from './FormContainer';
import IncomeDisplay from './IncomeDisplay';
import formatToDollar from '../Utils/FormatToDollar.js';

export default function SetAside (props) {
    const taxWithheld = formatToDollar.format(1500);
    const netIncome = formatToDollar.format(3000);

    return ( 
        <div className='App'>
            <Form/>
            <IncomeDisplay
                amount={taxWithheld}
                description="Amount to withhold"
            />
            <IncomeDisplay
                amount={netIncome}
                description="Net income"
            />
        </div>
    );
};
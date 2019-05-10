import React from 'react';
import Form from './FormContainer';
import IncomeDisplay from './IncomeDisplay';
import formatToDollar from '../Utils/FormatToDollar.js';

export default function SetAside (props) {
    const withhold = formatToDollar.format(1500);
    const netincome = formatToDollar.format(3000);

    return ( 
        <div className='App'>
            <Form/>
            <IncomeDisplay
                amount={withhold}
                description="Amount to withhold"
            />
            <IncomeDisplay
                amount={netincome}
                description="Net income"
            />
        </div>
    );
};
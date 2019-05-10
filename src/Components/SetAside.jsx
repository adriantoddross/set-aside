import React from 'react';
import Form from './FormContainer';
import IncomeDisplay from './IncomeDisplay';

export default function SetAside (props) {

    return ( 
        <div className='App'>
            <Form/>
            <IncomeDisplay
                amount={1500}
                description="Amount to withhold"
            />
            <IncomeDisplay
                amount={3000}
                description="Net income"
            />
        </div>
    );
};
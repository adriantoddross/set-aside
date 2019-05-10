import React, {Component} from 'react';
import Form from './FormContainer';
import IncomeDisplay from './IncomeDisplay';
import formatToDollar from '../Utils/FormatToDollar.js';

export default class SetAside extends Component {
    constructor(props) {
        super(props);

        this.getFormData = this.getFormData.bind(this)
    };

    getFormData(data) {
        console.log(data);
    }

    render() {
        const taxWithheld = formatToDollar.format(1500);
        const netIncome = formatToDollar.format(3000);
        
        return ( 
            <div className='App'>
                <Form handleFormData={this.getFormData}/>
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
    }
    
};
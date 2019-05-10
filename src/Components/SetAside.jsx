import React, {Component} from 'react';
import Form from './FormContainer';
import IncomeDisplay from './IncomeDisplay';
import formatToDollar from '../Utils/FormatToDollar.js';
import getPercentage from '../Utils/Percentage';

export default class SetAside extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grossIncome: 0,
            tax: 0,
            taxWithheld: 0,
            netIncome: 0
        }
        this.getFormData = this.getFormData.bind(this);
        this.calculateAmounts = this.calculateAmounts.bind(this);
    };

    calculateAmounts(data) {
        const withheld = getPercentage(data.grossIncome, data.tax);
        const net = data.grossIncome - withheld;
        this.setState({netIncome: net, taxWithheld: withheld});
    }

    getFormData(data) {
        this.setState({...data}, () => {
            this.calculateAmounts(data);
        });
    }

    render() {
        const taxWithheld = formatToDollar.format(this.state.taxWithheld);
        const netIncome = formatToDollar.format(this.state.netIncome);
        
        
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
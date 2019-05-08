import React, {Component} from 'react';

import Select from './Select';
import Button from './Button';
import Input from './Input';

export default class FormContainer extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            grossIncome: 0,
            netIncome: 0,
            taxWithheld: 0
        }
    }
  
    /* This life cycle hook gets executed when the component mounts */
  
    handleFormSubmit() {
      // Form submission logic
    }
    handleClearForm() {
      // Logic for resetting the form
    }
    render() {
        const gross = this.state.grossIncome;
        const net = this.state.netIncome;
        const taxes = this.state.taxWithheld;

      return (
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input 
            type= "number"
            title= "Gross Income"
            name= "grosspay"
            value= {this.state.grossIncome}
            placeholder= "Enter your gross income"
            handleChange= {this.handleIncome}
          />  {/* Gross income */}
          <Select /> {/* Percentage to withhold */} 
          <Button /> { /*Clear form */ }
          <Button /> { /*Submit */ }
        </form>
      );
    }
  }

import React, {Component} from 'react';

import Select from './Select';
import Button from './Button';
import Input from './Input';

export default class FormContainer extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            grossIncome: 0,
            tax: 0,
            taxOptions: [35,40]
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
        this.handleIncome = this.handleIncome.bind(this)
        this.handleTax = this.handleTax.bind(this)
    }
  
    /* This life cycle hook gets executed when the component mounts */
  
    handleFormSubmit(e) {
      e.preventDefault();
      let userData = this.state;

      console.log(userData);
    }
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        grossIncome: 0,
        tax: 0,
      })
    }
    handleIncome(e) {
        e.preventDefault();

        const income = e.target.value;
        this.setState({grossIncome: income})
    }
    handleTax(e) {
        e.preventDefault();

        const percentange = e.target.value;
        this.setState({tax: percentange})
    }

    render() {
        const grosspay = this.state.grossIncome;
        const taxes = this.state.taxWithheld;
        const taxOptions = this.state.taxOptions;

      return (
        <form className="container" onSubmit={this.handleFormSubmit}>
          <Input 
            type= "number"
            title= "Gross Income"
            name= "gross"
            value= {grosspay}
            placeholder= "Enter your gross income"
            handleChange= {this.handleIncome}
          />  {/* Gross income */}
          <Select 
            title= "Amount to Withhold"
            name= "tax"
            options= {taxOptions}
            value= {taxes}
            placeholder= "Percentage to set aside"
            handleChange={this.handleTax}
          /> {/* Percentage to withhold */} 
          <Button 
            title="Clear form"
            action={this.handleClearForm}
          /> { /*Clear form */ }
          <Button 
            title="Submit"
            action={this.handleFormSubmit}
          /> { /*Submit form*/ }
        </form>
      );
    }
  }

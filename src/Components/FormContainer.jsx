import React, {Component} from 'react';

import Select from './Select';
import Button from './Button';
import Input from './Input';

export default class FormContainer extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            grossIncome: 0,
            tax: 40,
            taxOptions: [40,35]
        }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
        this.handleIncome = this.handleIncome.bind(this)
        this.handleTax = this.handleTax.bind(this)
    }
  
    /* This life cycle hook gets executed when the component mounts */
  
    handleFormSubmit(e) {
      e.preventDefault();

      let userData = Object.assign({}, {grossIncome: this.state.grossIncome, tax: this.state.tax});
      userData.grossIncome = parseInt(userData.grossIncome);
      console.log(userData);
    }
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        grossIncome: 0,
        tax: 40,
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
        const taxes = this.state.tax;
        const taxOptions = this.state.taxOptions;

      return (
        <div>
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
              value={taxes}
              placeholder= "Percentage to set aside"
              handleChange={this.handleTax}
            /> {/* Percentage to withhold */} 
            <Button 
              title="Clear form"
              action={this.handleClearForm}
              valid="true"
            /> { /*Clear form */ }
            <Button 
              title="Submit"
              action={this.handleFormSubmit}
              valid={(grosspay > 0 ? true : false)}
            /> { /*Submit form*/ }
          </form>
        </div>
      );
    }
  }

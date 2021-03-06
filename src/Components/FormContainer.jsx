import React, {Component} from 'react';
import './FormContainer.css';

import Select from './Select';
import Button from './Button';
import Input from './Input';

// Created by reading through: https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

export default class FormContainer extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            grossIncome: "",
            tax: 30,
            taxOptions: [30, 25]
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
      this.props.handleFormData(userData);
    }
    handleClearForm(e) {
      e.preventDefault();
      this.setState({
        grossIncome: "",
        tax: 40,
      })
    }
    handleIncome(e) {
        e.preventDefault();

        const income = parseInt(e.target.value, 10) || "";
        this.setState({grossIncome: income})
    }
    handleTax(e) {
        e.preventDefault();

        const percentange = parseInt(e.target.value, 10);
        this.setState({tax: percentange})
    }

    render() {
        const grosspay = this.state.grossIncome;
        const taxes = this.state.tax;
        const taxOptions = this.state.taxOptions;

      return (
        <div className="form-container">
          <form className="form-parent" onSubmit={this.handleFormSubmit}>
            <ul>
              <li>
                <Input 
                  type= "number"
                  title= "Gross Income"
                  name= "gross"
                  value= {grosspay}
                  placeholder= "Enter your gross income"
                  handleChange= {this.handleIncome}
                />  
              </li>
              <li>
                <Select 
                  title= "Tax Rate"
                  name= "tax"
                  options= {taxOptions}
                  value={taxes}
                  placeholder= "Percentage to set aside"
                  handleChange={this.handleTax}
                />
              </li>
              {/* <li>
                <Button 
                  title="Clear form"
                  action={this.handleClearForm}
                  valid="true"
                />
              </li> */}
              <li>
                <Button 
                  title="Submit"
                  action={this.handleFormSubmit}
                  valid={(grosspay > 0 ? true : false)}
                /> { /*Submit form*/ }
              </li>
            </ul> 
          </form>
        </div>
      );
    }
  }

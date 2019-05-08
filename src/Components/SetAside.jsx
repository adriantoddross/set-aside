import React, { Component } from 'react';

export default class SetAside extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            grossIncome: 0,
            netIncome: 0,
            taxWithheld: 0
        }
    }

    render() {
         
        const gross = this.state.grossIncome;
        const net = this.state.netIncome;
        const taxes = this.state.taxWithheld;

        return ( 
            <div className='App'>
            </div>
        );
    }
}
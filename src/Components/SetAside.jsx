import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import GetPercentage from '../Utils/Percentage';

export default class SetAside extends React.Component() {
    constructor(props) {
        super(props);
        this.state = {
            grossincome: 0,
            netincome: 0,
            taxwithheld: 0
        }
    }

    render() {
        return(
            <div>

            </div>
        );
    }
}
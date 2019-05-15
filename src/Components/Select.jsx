import React from 'react';

export default function Select(props) {
    return (
        <div className="form-group">
            <label className="form-label" htmlFor={props.name}> {props.title} </label>
            <select className="form-select"
              name={props.name}
              value={props.value}
              onChange={props.handleChange}
              >
              <option className="form-option" value="" disabled>{props.placeholder}</option>
              {props.options.map(option => {
                return (
                  <option
                    className="form-options"
                    key={option}
                    value={option}
                    label={option}>{option}
                  </option>
                );
              })}
            </select>
      </div>
    );
}
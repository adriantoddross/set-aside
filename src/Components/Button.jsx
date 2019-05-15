import React from 'react';
import './Button.css';

export default function Button(props) {
    return (
        <div className="form-submit">
            <button
                className="form-button" 
                style= {props.style} 
                onClick= {props.action}
                disabled= {!props.valid}
            >    
                {props.title} 
            </button>
        </div>
    );
}
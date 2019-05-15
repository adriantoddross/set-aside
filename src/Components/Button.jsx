import React from 'react';

export default function Button(props) {
    return (
        <div className="form-submit">
            <button 
                style= {props.style} 
                onClick= {props.action}
                disabled= {!props.valid}
            >    
                {props.title} 
            </button>
        </div>
    );
}
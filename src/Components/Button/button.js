import React from 'react'
import './Button.css';


function Button(props) {
    return (
        <div>
            <button>{props.label}</button>
        </div>
    )
}

export default Button
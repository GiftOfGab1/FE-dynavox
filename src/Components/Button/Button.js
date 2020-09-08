import React from 'react'
import './Button.css';


function Button(props) {
    // const { voiceSpeed, setVoiceSpeed, value, name, onClick } = props
    const { value, name, onClick } = props
    return (
        <div>
            <button 
                name={name}
                value={value}
                onClick={onClick}>{props.label}
            </button>
        </div>
    )
}

export default Button
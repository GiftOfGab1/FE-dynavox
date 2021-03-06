import React from 'react'
import './Button.css';
import PropTypes from 'prop-types';


function Button(props) {
    const { value, name, onClick } = props
    return (
        <div className='button-container'>
            <button  className={props.label}
                name={name}
                value={value}
                onClick={onClick}>
            {props.name}
            </button>
        </div>
    )
}

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  onClick: PropTypes.func,
  label: PropTypes.string
}

export default Button
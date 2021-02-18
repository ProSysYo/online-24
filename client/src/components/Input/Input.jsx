import React from 'react'
import PropTypes from 'prop-types';

import styles from './Input.module.css'

const Input = ({id, label, placeholder, error, ...attrs}) => {
    const classes = styles.input + (error ? ' ' + styles.error : '')    
    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.inputLabel} htmlFor={id}>{label}</label> }
            <input                
                name={id}
                id={id}
                className={classes}
                placeholder={placeholder}
                {...attrs}
            />
            {error && <span className={styles.inputError}>{error}</span>}
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
}

export default Input

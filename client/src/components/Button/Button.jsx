import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.css'

const Button = ({
    children, onClick, disabled, danger, ...atrs
}) => {   

    const classes = `${styles.btn} ${danger ? styles.btnDanger : !disabled ? styles.btnDefault : ''}`

    return (
        <button 
            className={classes}
            disabled={disabled}
            onClick={onClick}
            {...atrs}
        >
            {children}
        </button>        
    )
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool, 
    danger: PropTypes.bool   
}

export default Button

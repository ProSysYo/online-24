import React from 'react'
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon'
import styles from './IconButton.module.css'

const IconButton = ({
    iconName, iconSize, text
}) => {
    const classNames = styles.btn + ' ' + (!text? styles.btnIcon : styles.btnIconText)

    return (
        <button className={classNames}>
            <Icon name={iconName} size={iconSize}/> 
            {text && <p className={styles.btnText}>{text}</p>}
        </button>
    )
}
IconButton.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number,
    text: PropTypes.string
}

export default IconButton

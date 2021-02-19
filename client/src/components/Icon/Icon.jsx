import React from 'react'
import PropTypes from 'prop-types';

const Icon = ({
    name, size, ...atrs
}) => {

    const classes = `fa fa-${name}`

    const iconSize = size ? {fontSize: `${size}px`} : null
    return (
        <i
            className={classes}
            style={iconSize}
            {...atrs}
        />       
    )
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number
}

export default Icon

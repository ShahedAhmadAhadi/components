import React from 'react';
import PropTypes from 'prop-types'

function Button({
    size,
    icon,
    disabled,
    className,
    style,
    fillMode,
    ...other
}) {
    switch (size) {
        case 'large':
            size = 'btn-lg';
            break;
        case 'small':
            size = 'btn-sm';
            break;
        case undefined:
        case '':
        case 'medium':
            size = 'btn-md';
            break;
        default:
            size = 'btn-md';
            console.error(
                'Wrong value for prop size: available values are [large, meduim, small]'
            );
            break;
    }
    switch (fillMode) {
        case 'flat':
            fillMode = 'btn-flat';
            break;
        case 'outline':
            fillMode = 'btn-outline';
            break;
        case 'link':
            fillMode = 'btn-link';
            break;
        case 'solid':
            fillMode = 'btn-solid';
            break;
        case '':
        case undefined:
        default:
            fillMode = 'btn-default';
            break;
    }
    return (
        <React.Fragment>
            <button
                className={`default-style ${size} ${fillMode} btn ${className} ${
                    disabled ? 'btn-disabled' : ''
                }`}
                style={style}
                {...other}>
                {icon && <span className={`${icon} icon`}></span>}
                {other.children && <span className={``}>{other.children}</span>}
            </button>
        </React.Fragment>
    );
}

Button.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    fillMode: PropTypes.oneOf(['outline', 'flat', 'link', 'solid', 'default']),
}

export default Button;

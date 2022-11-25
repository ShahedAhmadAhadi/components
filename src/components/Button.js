import React from 'react'

function Button({ size, icon, disabled, className, style, ...other }) {
    switch (size) {
        case 'large':
            size = 'btn-lg'
            break
        case 'small':
            size = 'btn-sm'
            break
        case undefined:
        case '':
        case 'medium':
            size = 'btn-md'
            break
        default:
            size = 'btn-md'
            console.error('Wrong value for prop size: available values are [large, meduim, small]')
            break;
    }

    return (
        <React.Fragment>
            <button className={`default-style ${size} btn ${className} ${disabled ? 'btn-disabled': ''}`} style={style} {...other} >
                {icon && (<span></span>)}
                <span className={``}>{other.children}</span>
            </button>
        </React.Fragment>
    )
}

export default Button
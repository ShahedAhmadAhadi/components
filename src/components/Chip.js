import React from 'react'
import Button from './Button'

function Chip({ removable, size, ...other }) {
    switch (size) {
        case 'large':
            size = 'chip-lg'
            break
        case 'small':
            size = 'chip-sm'
            break
        case undefined:
        case '':
        case 'medium':
            size = 'chip-md'
            break
        default:
            size = 'chip-md'
            console.error('Wrong value for prop size: available values are [large, meduim, small]')
            break;
    }
    return (
        <React.Fragment>
            <Button className={`${size}`} {...other}>
                <span className='btn'>
                    {other.children}
                {removable && <span className='removable icon'>&times;</span>}
                    </span>
            </Button>
        </React.Fragment>
    )
}
// &#10799;

export default Chip
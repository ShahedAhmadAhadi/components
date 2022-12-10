import React from 'react'
import Button from './Button'

function Chip({ text, value, removable, size, removeIcon, selected, selectedIcon, children, ...other }) {
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
            <Button className={`${size} ${selected ? "chip-selected": ''}`} {...other}>
                <span className='btn'>
                    {selectedIcon && selected && (<span className={`${selectedIcon} icon`}></span>)}
                    {other.children || text}
                    {removable && <span className={`${removeIcon? `${removeIcon}`: 'removable'} icon`}>{removeIcon ? '': <>&times;</>}</span>}
                    </span>
            </Button>
        </React.Fragment>
    )
}
// &#10799;

export default Chip
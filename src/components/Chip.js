import React from 'react'
import Button from './Button'

function Chip({ text, value, removable, remove, size, removeIcon, selected, selectedIcon, children, className, ...other }) {
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
            <Button className={`${size} ${selected ? "chip-selected": ''} ${className}`} {...other}>
                <span className='btn'>
                    {selectedIcon && selected && (<span className={`${selectedIcon} icon`}></span>)}
                    {other.children || text}
                    {removable && <span onClick={remove? (e) => remove(e, other.id) : undefined} className={`${removeIcon? `${removeIcon}`: 'removable'} icon`}>{removeIcon ? '': <>&times;</>}</span>}
                    </span>
            </Button>
        </React.Fragment>
    )
}
// &#10799;

export default Chip
import React from 'react';
import Button from './Button';

function Chip({
    text,
    value,
    removable,
    remove,
    size,
    style,
    removeIcon,
    selected,
    selectedIcon,
    selectedStyle,
    selectedClassName,
    removableStyle,
    removableClassName,
    selectedRemovableStyle,
    selectedRemovableClassName,
    children,
    className,
    dataItem,
    ...other
}) {
    dataItem = '';
    switch (size) {
        case 'large':
            size = 'chip-lg';
            break;
        case 'small':
            size = 'chip-sm';
            break;
        case undefined:
        case '':
        case 'medium':
            size = 'chip-md';
            break;
        default:
            size = 'chip-md';
            console.error(
                'Wrong value for prop size: available values are [large, meduim, small]'
            );
            break;
    }
    return (
        <React.Fragment>
            <Button
                style={
                    selected && selectedStyle
                        ? { ...style, ...selectedStyle }
                        : { ...style }
                }
                className={`${size} ${selected ? 'chip-selected' : ''} ${
                    selectedClassName && selected ? selectedClassName : ''
                } ${className}`}
                {...other}>
                <span className="btn">
                    {selectedIcon && selected && (
                        <span className={`${selectedIcon} icon`}></span>
                    )}
                    {other.children || text}
                    {removable && (
                        <span
                            onClick={
                                remove ? (e) => remove(e, other.id) : undefined
                            }
                            style={
                                selected && selectedRemovableStyle
                                    ? {
                                          ...removableStyle,
                                          ...selectedRemovableStyle,
                                      }
                                    : { ...removableStyle }
                            }
                            className={`${
                                removeIcon ? `${removeIcon}` : 'removable'
                            } icon ${
                                selectedRemovableClassName && selected
                                    ? selectedRemovableClassName
                                    : removableClassName
                            }`}>
                            {removeIcon ? '' : <>&times;</>}
                        </span>
                    )}
                </span>
            </Button>
        </React.Fragment>
    );
}
// &#10799;

export default Chip;

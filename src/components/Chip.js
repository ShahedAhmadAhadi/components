import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button';


const Chip = ({
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
}) => {
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
  )
}

Chip.propTypes = {
    text: PropTypes.string,
    value: PropTypes.string,
    removable: PropTypes.bool,
    remove: PropTypes.func,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    style: PropTypes.object,
    removeIcon: PropTypes.string,
    selected: PropTypes.bool,
    selectedIcon: PropTypes.string,
    selectedStyle: PropTypes.object,
    selectedClassName: PropTypes.string,
    removableStyle: PropTypes.object,
    removableClassName: PropTypes.string,
    selectedRemovableStyle: PropTypes.object,
    selectedRemovableClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    dataItem: PropTypes.string,
}

export default Chip
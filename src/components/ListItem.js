import React from 'react';
import {keyGenerator} from './index'

// This Component is for rendering array of primitives or array of objects returns li element with values in arrays
function ListItem({
    textField,
    data = [],
    value,
    selected,
    className,
    selectedStyleClassName,
    ...other
}) {
    // if length = 0 in array below will return empty
    // if array has primitives the keyGenerator would generate key for every item
    // if array has objects first check if object has key (id) and set id as key of list items if not the keyGenerator would genrate key for every item
    return (
        <React.Fragment>
            {!data.length && <li className="option-item-empty">empty</li>}
            {typeof data[0] === 'string' &&
                data.map((item) => (
                    <li
                        className={`option-item  ${
                            selected === item
                                ? `${selectedStyleClassName || 'selected'}`
                                : ''
                        } ${className}`}
                        onClick={() => value(item)}
                        {...other}
                        key={keyGenerator()}>
                        {item}
                    </li>
                ))}
            {typeof data[0] === 'object' &&
                data.map((item) => (
                    <li
                        className={`option-item ${
                            selected === item ? 'selected' : ''
                        } ${className}`}
                        onClick={() => {
                            value(item);
                        }}
                        key={item.id ? item.id : keyGenerator()}
                        {...other}>
                        {item[textField]}
                    </li>
                ))}
        </React.Fragment>
    );
}

export default ListItem;

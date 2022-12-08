import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import Input from './Input';
import ListItem from './ListItem';

// This is a DropDownList component activating dropdown by focus event on Button component
function Drop({
    /* This component need data prop if no data passed value of data would be an empty array. data prop name is changed to initialData cause 
    data is used as state for in component
    data props in component is handled is data is array of primitives or array of objects
    */
    data: initialData = [],
    // need defaultItem to show the dropdown text(name) if not passed it would be dropdown with no text on it
    defaultItem,
    // textField: if array of objects are passed then to check which key is used for ListItems
    textField,
    // prop value is used to pass the value that is already selected
    value: propValue,
    // filterable Boolean value if it is needed to filter data
    filterable,
    className,
    // required Boolean value. this property just adds wrong class to Button component
    required,
    // childrenClassName used for passing className to ListItem component
    childrenClassName,
    // childrenStyle used for passing style props to ListItem component
    childrenStyle,
    // selectedStyleClassName used for passing selectedStyleClassName to ListItem component
    selectedStyleClassName,
    ...other
}) {
    const [data, setData] = useState(initialData);
    const [value, setValue] = useState(propValue);
    const [filter, setFilter] = useState(null);
    const inputRef = useRef(null);

    // if onChange is passed to return the value and executed onChange
    useEffect(() => {
        if (other.onChange) {
            other.onChange(value);
        }
    });

    /* below useEffect is used in filtering data. data is filtered in initialData and set into value state, initialData is never changed
        this is because initialData after filtering won't know what was the data passed.
        The filter state value is taken from Input Component value.
        If no value for filter then data is set to initialData prop that was passed.
        initialData could be of two type array of primitives or array of objects.
        With array of objects the textField is compulsory or else the error will be objects cannot be rendered in DOM.
        */
    // useEffect(() => {
    //     if (filterable) {
            
    //         inputRef.current.focus()
    //     }
    // }, [filterable])
    
    useEffect(() => {
        try {
            const newData = initialData.filter((e) =>
                e[textField].startsWith(filter)
            );
            setData(newData);
            if (!filter) {
                setData(initialData);
            }
        } catch (error) {
            const newData = initialData.filter((e) => e.startsWith(filter));
            setData(newData);
            if (!filter) {
                setData(initialData);
            }
            console.log(data);
        }
    }, [filter, textField]);

    return (
        <React.Fragment>
            <ul
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`option-wrapper`}>
                <Button
                    onClick={() => {inputRef.current.focus()}}
                    className={`select option-item ${className} ${
                        required && !value ? 'wrong' : ''
                    }`}
                    {...other}>
                    <span className="select-default-text">
                        {value
                            ? typeof value == 'string'
                                ? value
                                : value[textField]
                            : defaultItem}
                    </span>
                    <span className="select-caret">&#119119;</span>
                </Button>
                <div className="div">
                    {filterable && (
                        <li
                            className="option-item sticky top-0 mb-1.5"
                            key={'search-list-items'}>
                            <img
                                className="search-icon"
                                src="search.svg"
                                alt="search-icon"
                            />
                            <Input
                                // onBlur={(e) => inputBlurHandler(e)}
                                onChange={(e) => {
                                    setFilter(e.target.value);
                                }}
                                value={filter}
                                ref={inputRef}
                                className="filter-input pl-8 "
                            />
                        </li>
                    )}
                    <ListItem
                        selectedStyleClassName={selectedStyleClassName}
                        className={childrenClassName}
                        style={childrenStyle}
                        data={data}
                        textField={textField}
                        selected={value}
                        value={(item) => setValue(item)}
                    />
                </div>
            </ul>
        </React.Fragment>
    );
}

export default Drop;

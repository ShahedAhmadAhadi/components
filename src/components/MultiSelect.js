import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import Input from './Input';
import ListItem from './ListItem';

const MultiSelect = ({
    data: initialData = [],
    defaultItem,
    textField,
    value: propValue,
    className,
    required,
    childrenClassName,
    childrenStyle,
    selectedStyleClassName,
    ...other
}) => {
    const [data, setData] = useState(initialData);
    const [value, setValue] = useState(propValue);
    const [filter, setFilter] = useState(null);
    const inputRef = useRef(null);

    useEffect(() => {
        if (other.onChange) {
            other.onChange(value);
        }
    });
    
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
                <Input
                    // onClick={() => {inputRef.current.focus()}}
                    className={`${className} ${
                        required && !value ? 'wrong' : ''
                    }`}
                    {...other}>
                    {/* <span className="select-default-text">
                        {value
                            ? typeof value == 'string'
                                ? value
                                : value[textField]
                            : defaultItem}
                    </span>
                    <span className="select-caret">&times;</span> */}
                </Input>
                <div className="div">
                    
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
    )
}

export default MultiSelect
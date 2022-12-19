import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import Chip from './Chip';
import ChipList from './ChipList';
import Input from './Input';
import ListItem from './ListItem';

const MultiSelect = ({
    data: initialData = [],
    defaultItem,
    textField,
    value: propValue = [],
    className,
    required,
    childrenClassName,
    childrenStyle,
    selectedStyleClassName,
    ...other
}) => {
    const [data, setData] = useState(initialData);
    const [value, setValue] = useState([...propValue]);
    // const [selected, setSelected] = useState('')

    useEffect(() => {
        if (other.onChange) {
            other.onChange(value);
        }
    });
    useEffect(() => {
        // console.log(value)
    })
    const selection = (item) => {
        setValue(prevState => { console.log(prevState); return [...prevState, item] })
        const newData = value.filter((e) =>  {return JSON.stringify(e) !== JSON.stringify(item)} );
        console.log(newData, item)
    }
    const selectedValue = <ChipList data={value} chip={props => { return <Chip removable={true} {...props} /> }}></ChipList>
    // console.log(value)
    return (
        <React.Fragment>
            <ul
                onClick={(e) => {
                    e.stopPropagation();
                }}
                className={`option-wrapper`}>
                <div>{selectedValue && selectedValue}</div>
                <Input
                    // onClick={() => {inputRef.current.focus()}}
                    className={`${className} ${required && !value ? 'wrong' : ''
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
                        // value={(item) => setValue(prevState => { console.log(prevState); return [...prevState, { text: item }] })}
                        value={(item) => selection({text :item})}
                    />
                </div>
            </ul>
        </React.Fragment>
    )
}

export default MultiSelect
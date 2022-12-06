import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Button from './Button'
import Input from './Input'
import ListItem from './ListItem'

function Drop({ data, defaultItem, textField, value: propValue, filterable }) {
    const [value, setValue] = useState(propValue)
    const inputRef = useRef(null)
    useEffect(() => {
        if (filterable) {
            inputRef.current.focus()
        }
        console.log(value)
    })
    defaultItem = 'data'
    console.log(value)
    return (
        <React.Fragment>
            <ul onClick={(e) => { e.stopPropagation() }} className={`option-wrapper`}>
                <Button className={'select option-item'}>
                    <span className='select-default-text'>{value ? typeof value == 'string' ? value : value[textField] : defaultItem}</span><span className='select-caret'>&#119119;</span>
                    </Button>
                {/* {filterable && <li className='option-item' key={'search-list-items'}><img className='search-icon' src='search.svg' alt='search-icon' /><Input
                    onBlur={(e) => inputBlurHandler(e)}
                    ref={inputRef} id="search-input" className='filter-input pl-8' /></li>} */}
                <div className='div'>
                <ListItem data={data} textField={textField} value={(item) => setValue(item)} />

                </div>
            </ul>
        </React.Fragment>
    )
}

export default Drop
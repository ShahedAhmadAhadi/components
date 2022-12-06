import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Button from './Button'
import Input from './Input'
import ListItem from './ListItem'

function Drop({ data: initialData, defaultItem, textField, value: propValue, filterable = true }) {
    const [data, setData] = useState(initialData)
    const [value, setValue] = useState(propValue)
    const [filter, setFilter] = useState(null)
    const inputRef = useRef(null)
    useEffect(() => {
        if (filterable) {
            // inputRef.current.focus()
        }
        // console.log(value())
    }, [filterable])

    useEffect(() => {
        if (textField) {
            console.log(initialData)
            const newData = initialData.filter(e => e[textField].startsWith(filter))
            setData(newData)
            if (!filter) {
                setData(initialData)
            }
        } else {
            const newData = initialData.filter(e => e.startsWith(filter))
            setData(newData)
            if (!filter) {
                setData(initialData)
            }
        }
    }, [filter, initialData])


    const filterOnChange = () => {
        console.log(filter)
        const newData = data.filter(e => e.startsWith(filter))
        setData(newData)
        if (!filter) {
            setData(initialData)
        }
    }
    // console.log(filter, 'filter')
    defaultItem = 'data'
    return (
        <React.Fragment>
            <ul onClick={(e) => { e.stopPropagation() }} className={`option-wrapper`}>
                <Button className={'select option-item'}>
                    <span className='select-default-text'>{value ? typeof value == 'string' ? value : value[textField] : defaultItem}</span><span className='select-caret'>&#119119;</span>
                </Button>
                <div className='div overflow-auto relative'>
                    {filterable && <li className='option-item sticky top-0' key={'search-list-items'}><img className='search-icon' src='search.svg' alt='search-icon' /><Input
                        // onBlur={(e) => inputBlurHandler(e)}
                        onChange={(e) => { setFilter(e.target.value) }} value={filter} ref={inputRef} id="search-input" className='filter-input pl-8' /></li>}
                    <ListItem data={data} textField={textField} selected={value} value={(item) => setValue(item)} />
                </div>
            </ul>
        </React.Fragment>
    )
}

export default Drop
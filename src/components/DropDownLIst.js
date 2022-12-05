import React, {forwardRef, useEffect, useRef, useState} from 'react'
import Button from './Button'
import Input from './Input'

function DropDownLIst(data, defaultItem, textField, filterable = true) {
    const [height, setHeight] = useState('hidden')
    const [value, setValue] = useState(null)
    const inputRef = useRef(null)
    const keyGenerator = () => {
        let randNums = Math.round(Math.random() * 9000 + 999)
        let key = ['', '-', randNums]
        const alphaNumGenerator = () => {
            let randAlpha = Math.ceil(Math.random() * 26)
            return randAlpha
        }
        for (let i = 0; i < 4; i++) {
            let oneAlphaNum = alphaNumGenerator()
            key[0] += String.fromCharCode(oneAlphaNum + 64)
        }
        return key.join('')
    }
    const onChangeHandler = () => {

    }
    useEffect(() => {
        if (filterable) {
            inputRef.current.focus()
        }
        console.log(value)
    })

    const clickHandler = (e) => {
        setHeight('flex')
        if (filterable) {
            inputRef.current.focus()
        }
    }
    const blurHandler = (className) => {
        if (filterable) {
            setHeight('flex')
        }else{
            setHeight('hidden')

        }
        console.log('first')
    }
    const inputBlurHandler = (e) => {
        console.log('input')
        e.stopPropagation()
        setHeight('hidden')
    }
    const liClickHandler = (item) => {
        // setValue()
        console.log(item)
    }
    data = [{ item: 'red', id: 1 }]
    // data = ['blue', 'red']
    textField = 'item'
    defaultItem = 'data'
    return (
        <React.Fragment>
            <div id='drop-down' className=' relative' onClick={clickHandler} onBlur={() => blurHandler('hidden')}>
                <Button className={'select'}><span className='select-default-text'>{defaultItem}</span><span className='select-caret'>&#119119;</span>
                </Button>
                <ul className={`option-wrapper ${height} h-max`}>
                    {filterable && <li className='option-item' key={keyGenerator()}><img className='search-icon' src='search.svg' alt='search-icon' /><Input onBlur={(e) => inputBlurHandler(e)}  ref={inputRef} id="search-input" className='filter-input pl-8' /></li>}
                    {textField && data && data.map(item => (<li className='option-item' value={item} onClick={() => setValue(item)} key={item.id ? item.id : keyGenerator()}>{item[textField]}</li>))}
                    {!textField && data && data.map(item => (<li className='option-item' onMouseOver={() => liClickHandler(item)} key={keyGenerator()}>{item}</li>))}
                </ul>
            </div>
            {/* <select className='default-style select' value={defaultItem} onChange={() => onChangeHandler()}>
                <option>basket</option>
                <option></option>
                <option>basket</option>
                <option>basket</option>
            </select> */}
        </React.Fragment>
    )
}

export default DropDownLIst
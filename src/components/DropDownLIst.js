import React, {forwardRef, useEffect, useRef, useState} from 'react'
import Button from './Button'
import Input from './Input'

function DropDownLIst(data, defaultItem, textField, filterable = true) {
    const [height, setHeight] = useState('0')
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

    //   inputRef.current.focus()
    })

    const clickHandler = (e) => {
        console.log('laifdji')
    }
    
    const focusHandler = () => {
        console.log('l')
        setHeight('h-max')
    }
    const blurHandler = () => {
        console.log('first')
        setHeight('0')
    }
    // data = [{ item: 'red' }]
    data = ['blue', 'red']
    // textField = 'item'
    defaultItem = 'data'
    return (
        <React.Fragment>
            <div id='drop-down' className=' relative' onClick={clickHandler}>
                <Button onFocus={focusHandler} onBlur={() => blurHandler()} className={'select'}><span className='select-default-text'>{defaultItem}</span><span className='select-caret'>&#119119;</span>
                </Button>
                <ul className={`option-wrapper ${height}`}>
                    {filterable && <li className='option-item' key={keyGenerator()}><img className='search-icon' src='search.svg' alt='search-icon' /><Input ref={inputRef} id="search-input" className='filter-input' /></li>}
                    {textField && data && data.map(item => (<li className='option-item' onClick={clickHandler} key={item.id ? item.id : keyGenerator()}>{item[textField]}</li>))}
                    {!textField && data && data.map(item => (<li className='option-item' onClick={clickHandler} key={keyGenerator()}>{item}</li>))}
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
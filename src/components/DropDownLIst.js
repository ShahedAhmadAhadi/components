import React from 'react'
import Button from './Button'

function DropDownLIst(data, defaultItem, textField, filterable = true) {
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
    // data = [{ item: 'red' }]
    data = ['blue', 'red']
    // textField = 'item'
    defaultItem = 'data'
    return (
        <React.Fragment>
            <div className=' relative w-full'>
                <Button className={'select'}><span className='select-default-text'>{defaultItem}</span><span className='select-caret'>&#119119;</span>
                </Button>
                <ul className='option-wrapper'>
                    {filterable && <li className='option-item' key={keyGenerator()}><img className='icon' src='search.svg' alt='search-icon' /><input className='filter-input' /></li>}
                    {textField && data && data.map(item => (<li className='option-item' key={item.id ? item.id : keyGenerator()}>{item[textField]}</li>))}
                    {!textField && data && data.map(item => (<li className='option-item' key={keyGenerator()}>{item}</li>))}
                </ul>
            </div>
            {/* <select className='default-style select' value={defaultItem} onChange={() => onChangeHandler()}>
                <option>basketsdfjlkfjjjjjjjjjjjjjeuwoiuwijljljoixujoivjoewnoixcoiwern,xcnvoiweiuo</option>
                <option>basket</option>
                <option></option>
                <option>basket</option>
                <option>basket</option>
            </select> */}
        </React.Fragment>
    )
}

export default DropDownLIst
import React, {forwardRef, useEffect, useRef, useState} from 'react'
import Button from './Button'
import Input from './Input'
import ListItem from './ListItem'

function DropDownLIst({data, defaultItem, textField, value: propValue, filterable = true}) {
    const [height, setHeight] = useState('hidden')
    const [value, setValue] = useState(propValue)
    const inputRef = useRef(null)
    
    
    const onChangeHandler = () => {

    }
    useEffect(() => {
        if (filterable) {
            inputRef.current.focus()
        }
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
            setTimeout(() => {
                setHeight('hidden')
                
            }, 100);
        }
    }
    const inputBlurHandler = (e) => {
        e.stopPropagation()
        setTimeout(() => {
            setHeight('hidden')
        }, 100);
    }
    const liClickHandler = (item) => {
        // setValue()
        console.log(item)
    }
    defaultItem = 'data'
    return (
        <React.Fragment>
            <div id='drop-down' className=' relative' onClick={clickHandler}
             onBlur={() => blurHandler('hidden')}
             >
                <Button className={'select'}><span className='select-default-text'>{value ? typeof value == 'string' ? value: value[textField] : defaultItem}</span><span className='select-caret'>&#119119;</span>
                </Button>
                <ul onClick={(e) => {e.stopPropagation()}} className={`option-wrapper ${height} h-max`}>
                    {filterable && <li className='option-item' key={'search-list-items'}><img className='search-icon' src='search.svg' alt='search-icon' /><Input 
                    onBlur={(e) => inputBlurHandler(e)}
                      ref={inputRef} id="search-input" className='filter-input pl-8' /></li>}
                    <ListItem data={data} textField={textField} value={(item) => setValue(item)} />
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
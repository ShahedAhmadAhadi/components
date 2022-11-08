import React, { useEffect, useState } from 'react'
import inputStyle from './Input.module.css'

function Input(props) {
    props = {name: 'ali', type: 'text',  minLength: 10, maxLength: 20, pattern: "[A-Za-z]+", value: '23sf'}
    const {name, label, pattern, value, style, ...other } = props
    // const [valid, setValid] = useState(true)
    const [inputValue, setInputValue] = useState(value)
    const [defaultStyle, setDefaultStyle] = useState(inputStyle)
    function onInputChange(e) {
        let val = e.target.value
        setInputValue(val)
    }
    useEffect(() => {
        console.log(pattern)
        let match = inputValue.match(pattern)
        // try {
        //     if (match[0] !== match.input){
        //         // setDefaultStyle(inputStyle.auto + inputStyle.wrong)
        //     } else {
        //         console.log('okay')
        //     }
        // } catch (error) {
        //     console.log('first')
        // }
        // console.log(inputValue)
    }, [pattern, inputValue])
    
    return (
        <React.Fragment>
            <form>
                <input className={defaultStyle.auto} style={style} onChange={e => onInputChange(e)} pattern={"[A-Za-z]+"} name={name} {...other} value={inputValue} />
                <input type={'submit'} pattern />
            </form>
        </React.Fragment>
    )
}

export default Input
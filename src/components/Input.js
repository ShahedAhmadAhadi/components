import React, { forwardRef, useEffect, useState } from 'react';
import './Input.css';

const Input = forwardRef(function Input({ name, label, pattern, value, style, onChange, className, required, styleOnError, labelStyle, labelStyleError, ...other }, ref) {
    const [inputValue, setInputValue] = useState(value || '');
    const [inValid, setInValid] = useState(false);
    if (label) {
        other.placeholder = ''
    }
    function onInputChange(e) {
        if (typeof onChange === 'function') {
            onChange(e)
        }
        let val = e.target.value;
        setInputValue(val);
    }
    if (inValid) {
        style = {...style, ...styleOnError}
        labelStyle = {...labelStyle, ...labelStyleError}
    }else {
        style = {...style}
        labelStyle = {...labelStyle}
    }
    useEffect(() => {
        if (required && !inputValue) {
            setInValid(true)
        } else {
            setInValid(false)
        }
    }, [inputValue, required])

    useEffect(() => {
        if (pattern && inputValue) {
            try {
                if (inputValue.match(pattern)[0] !== inputValue.match(pattern).input) {
                    setInValid(true)
                } else {
                    setInValid(false)
                }  
            } catch (error) {
                setInValid(true)
            }
        }
    }, [inputValue, pattern]);
    return (
        <React.Fragment>
            {!label && (
                <div className={`wrapper p-0`} style={{ padding: '0' }}>
                    <input
                        value={inputValue}
                        className={`${inValid ? 'wrong' : ''} auto ${className}`}
                        style={style}
                        onChange={onInputChange}
                        pattern={'[A-Za-z]+'}
                        name={name}
                        ref={ref}
                        {...other}
                    />
                </div>
            )}
            {label && (
                <div className={`wrapper `}>
                    <input
                        value={inputValue}
                        className={`${inValid ? 'wrong' : ''} auto ${className}`}
                        style={style}
                        onChange={(e) => onInputChange(e)}
                        pattern={'[A-Za-z]+'}
                        ref={ref}
                        name={name}
                        {...other}
                    />
                    <label style={labelStyle} className={`${inValid ? 'wrong_label' : ''} label ${inputValue ? 'label_value' : ''}`}>{label}</label>
                </div>
            )}
        </React.Fragment>
    );
})

export default Input;

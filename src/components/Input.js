import React, { forwardRef, useEffect, useState } from 'react';
import propTypes from 'prop-types'

/* 
    Here forwardRef is used for handling the ref prop. 
    This Input component returns conditionaly for label prop if passed returns div > input, label and label not passed returns div > input
*/
const Input = forwardRef(function Input(
    /**
     * @typedef {Object} Input - Input Component
     * @property 
     */
    {
        name,
        label,
        pattern,
        value,
        style,
        onChange,
        className,
        required,
        styleOnError,
        labelStyle,
        labelStyleError,
        wrapperStyle,
        wrapperClassName,
        children,
        ...other
    },
    ref
) {
    // State below is used for making the inputs react controlled components
    const [inputValue, setInputValue] = useState(value || '');
    // state below is boolean for indicating if value is matched the pattern prop then retruns true or else invalid
    const [inValid, setInValid] = useState(false);
    // here if label is passed then placeholder is set to empty
    if (label) {
        other.placeholder = '';
    }
    // this is for running onChange method added by props with the onChange in input elements already available
    function onInputChange(e) {
        if (typeof onChange === 'function') {
            onChange(e);
        }
        let val = e.target.value;
        setInputValue(val);
    }
    // this change styles of elements conditionally on inValid state and style from props are added to it too.
    if (inValid) {
        style = { ...style, ...styleOnError };
        labelStyle = { ...labelStyle, ...labelStyleError };
    } else {
        style = { ...style };
        labelStyle = { ...labelStyle };
    }
    // useEffect below states inValid for required prop passed
    useEffect(() => {
        if (required && !inputValue) {
            setInValid(true);
        } else {
            setInValid(false);
        }
    }, [inputValue, required]);
    // useEffect below states inValid for pattern prop pa
    useEffect(() => {
        if (pattern && inputValue) {
            try {
                if (
                    inputValue.match(pattern)[0] !==
                    inputValue.match(pattern).input
                ) {
                    setInValid(true);
                } else {
                    setInValid(false);
                }
            } catch (error) {
                setInValid(true);
            }
        }
    }, [inputValue, pattern]);
    return (
        <React.Fragment>
            {!label && (
                <div
                    className={`wrapper default-style p-0 ${wrapperClassName}`}
                    style={wrapperStyle}>
                    {children && children}
                    <input
                        value={inputValue}
                        className={`${
                            inValid ? 'wrong' : ''
                        } input w-full ${className}`}
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
                <div
                    className={`wrapper ${wrapperClassName}`}
                    style={wrapperStyle}>
                    {/* {children && children} */}
                    <input
                        value={inputValue}
                        className={`${
                            inValid ? 'wrong' : ''
                        } default-style input w-full ${className}`}
                        style={style}
                        onChange={(e) => onInputChange(e)}
                        pattern={'[A-Za-z]+'}
                        ref={ref}
                        name={name}
                        {...other}
                    />
                    <label
                        style={labelStyle}
                        className={`${inValid ? `wrong-label` : ''} label ${
                            inputValue ? 'label-value' : ''
                        }`}>
                        {label}
                    </label>
                </div>
            )}
        </React.Fragment>
    );
});

Input.propTypes ={
    name: propTypes.string,
    label: propTypes.string,
    pattern: propTypes.string, // This should be pattern like js patterns
    value: propTypes.string, // This is used to change state of inputValue if passed it would be default value of the Input component
    style: propTypes.object, // passed straight as style for wrapper div tag
    onChange: propTypes.func, // for handling onChange passed by component and already the value has onChange so if passed it will run both
    className: propTypes.string,
    required: propTypes.bool,
    styleOnError: propTypes.object, // change the style when it don't match the pattern or required
    labelStyle: propTypes.object, // style for label if have one
    labelStyleError: propTypes.object, // changes for label when it don't match the pattern or required
    wrapperStyle: propTypes.object, // changes styles for the div tag that is surounding the input or input, label
    wrapperClassName: propTypes.string, // ClassName for div tag that is surounding the input or input, label
    children: propTypes.node,
}

export default Input;

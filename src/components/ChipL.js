import React, { useCallback, useEffect, useState } from 'react'
import Chip from './Chip'
import ChipItem from './ChipItem'
import { keyGenerator } from './index'


const ChipL = (props) => {
    // let customData;
    const newData = props.data.map(item => ({dataItem: {...item}, text:`${props.textField? item[props.textField]: item.text}`, value: `${props.textField? item[props.valueField]: item.value}`, key: item.id || keyGenerator()}))
    // const [data, setData] = useState(newData)
    // if (initialData !== a) {
    //     console.log(a, initialData)
    // }
    const newProps = {...props, newData}
    // const a = Object.assign(initialData)
    // useEffect(() => {
    //     console.log('use')
    //     setData(newData)
    // }, [initialData])
    // let customData = {...initialData}
    // useEffect(() => {
    //     setData(a)
    //     // initialData  = a
    //     console.log(a, 'sjdfljiej')
    // })
    
    // initialData.map(i => {return i.key? i: { ...i, key: keyGenerator(), id: i.key}} )
        // setData(customData)
        
    // if (initialData) {
    //     initialData.map(i => {return i.key = i.id || keyGenerator()})
    // }
    // chip()
    // console.log(chip())
    // console.log(data)
    // console.log(chip(data[1]))
    
    // console.log(data)
    return (
        <React.Fragment>
            <ChipItem {...newProps} />
        </React.Fragment>
    )
}

export default ChipL
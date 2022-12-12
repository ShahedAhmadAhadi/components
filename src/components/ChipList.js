import React, { useState } from 'react'
import {keyGenerator} from './index'


const ChipList = ({ data: initialData, selection, defaultData, textField, valueField, onDataChange, chip, ...props }) => {
    // chip()
    // console.log(chip())
    // console.log(data)
    // console.log(chip(data[1]))
    const remove = (key) => {
        console.log('remove', key)
        let removeItem = data.filter((i) => {return i.key !== key});
        setData(removeItem)
    }
    const [data, setData] = useState(initialData)
    console.log(data)
    return (
        <React.Fragment>
            {data && data.map(item => { item.key=(`${item.id || keyGenerator()}`); item.id=item.key; item.remove=remove; return chip(item)})}
        </React.Fragment>
    )
}

export default ChipList
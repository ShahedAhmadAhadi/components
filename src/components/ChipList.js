import React, { useEffect, useState } from 'react'
import Chip from './Chip'
import { keyGenerator } from './index'


const ChipList = ({ data: initialData, selection, defaultData, textField, valueField, onDataChange, chip, ...props }) => {
    const [data, setData] = useState(initialData)
    // chip()
    // console.log(chip())
    // console.log(data)
    // console.log(chip(data[1]))
    useEffect(() => {

    }, [])

    const select = (key) => {
        
    }

    const remove = (key) => {
        console.log('remove', key)
        let removeItem = data.filter((i) => { return i.key !== key });
        setData(removeItem)
    }
    console.log(data)
    return (
        <React.Fragment>
            {data && chip && data.map(item => { item.key = (`${item.id || keyGenerator()}`); item.id = item.key; item.remove = remove; return chip(item) })}
            {/* {data && !chip && data.map(item => {retrun <Chip onClick={() => select(item)} selected={selection} {...item} />})} */}
            {data && !chip && data.map(item => { item.key={`${item.id || keyGenerator()}`}; return <Chip onClick={() => select(item)} selected={selection} {...item} />})}
        </React.Fragment>
    )
}

export default ChipList
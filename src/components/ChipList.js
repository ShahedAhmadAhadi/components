import React, { useEffect, useState } from 'react'
import Chip from './Chip'
import { keyGenerator } from './index'


const ChipList = ({ data: initialData, selection, defaultData, textField, valueField, onDataChange, chip, ...props }) => {
    // initialData.map(i => {return i.key? i: { ...i, key: keyGenerator(), id: i.key}} )
    if (initialData) {
        initialData.map(i => {return i.key = i.id || keyGenerator()})
    }
    const [data, setData] = useState(initialData)
    // chip()
    // console.log(chip())
    // console.log(data)
    // console.log(chip(data[1]))
    if (textField) {
        data.map(i => )
    } else {
        
    }
    const select = (item) => {
        switch (selection) {
            case 'multiple':
                if (item.selected) {
                    let deSelectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: false } : i });
                    setData(deSelectedItem)
                } else {
                    let selectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: true } : i });
                    setData(selectedItem)
                }
                break;
                case 'single':
                if (item.selected) {
                    let deSelectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: false } : i });
                    setData(deSelectedItem)
                } else {
                    let selectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: true } : {...i, selected: false} });
                    setData(selectedItem)
                }
                break
            default:
                break
        }
    }

    const remove = (e, key) => {
        e.stopPropagation()
        let removeItem = data.filter((i) => { return i.key !== key });
        setData(removeItem)
    }
    console.log(data)
    return (
        <React.Fragment>
            {/* {data && chip && data.map(item => { item.key = (`${item.id || keyGenerator()}`); item.id=item.key; item.remove = remove; return chip(item) })} */}
            {data && chip && data.map(item => { item.remove=((e) => remove(e, item.key)); item.onClick=(() => select(item)); return chip(item) })}
            {/* {data && !chip && data.map(item => {retrun <Chip onClick={() => select(item)} selected={selection} {...item} />})} */}
            {/* {data && !chip && data.map(item => { item.key = `${item.id || keyGenerator()}`; return <Chip onClick={() => select(item)} {...item} /> })} */}
            {data && !chip && data.map(item => {return <Chip onClick={() => select(item)} {...item} /> })}
        </React.Fragment>
    )
}

export default ChipList
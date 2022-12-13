import React, { useCallback, useEffect, useState } from 'react'
import Chip from './Chip'
import { keyGenerator } from './index'


const ChipL = ({ data: initialData, selection, defaultData, textField, valueField, onDataChange, chip, ...props }) => {
    // let customData;
    // const [data, setData] = useState()
    // let customData = {...initialData}
    useEffect(() => {
        initialData.map(item => ({dataItem: {...item}, text:`${textField? item[textField]: item.text}`, value: `${textField? item[valueField]: item.value}`, key: item.id || keyGenerator()}))
        // setData(customData)
    }, [initialData])
    
    // initialData.map(i => {return i.key? i: { ...i, key: keyGenerator(), id: i.key}} )
        // setData(customData)
        
    // if (initialData) {
    //     initialData.map(i => {return i.key = i.id || keyGenerator()})
    // }
    // chip()
    // console.log(chip())
    // console.log(data)
    // console.log(chip(data[1]))
    const select = (item) => {
        switch (selection) {
            case 'multiple':
                if (item.selected) {
                    let deSelectedItem = initialData.map((i) => { return i.key === item.key ? { ...i, selected: false } : i });
                    initialData = deSelectedItem
                } else {
                    let selectedItem = initialData.map((i) => { return i.key === item.key ? { ...i, selected: true } : i });
                    initialData = selectedItem
                }
                break;
                case 'single':
                if (item.selected) {
                    let deSelectedItem = initialData.map((i) => { return i.key === item.key ? { ...i, selected: false } : i });
                    initialData = deSelectedItem
                } else {
                    let selectedItem = initialData.map((i) => { return i.key === item.key ? { ...i, selected: true } : {...i, selected: false} });
                    initialData = selectedItem
                }
                break
            default:
                break
        }
    }

    const remove = (e, key) => {
        e.stopPropagation()
        let removeItem = initialData.filter((i) => { return i.key !== key });
        initialData = removeItem
    }
    // console.log(data)
    return (
        <React.Fragment>
            {/* {data && chip && data.map(item => { item.key = (`${item.id || keyGenerator()}`); item.id=item.key; item.remove = remove; return chip(item) })} */}
            {initialData && chip && initialData.map(item => { item.remove=((e) => remove(e, item.key)); item.onClick=(() => select(item)); return chip(item) })}
            {/* {data && !chip && data.map(item => {retrun <Chip onClick={() => select(item)} selected={selection} {...item} />})} */}
            {/* {data && !chip && data.map(item => { item.key = `${item.id || keyGenerator()}`; return <Chip onClick={() => select(item)} {...item} /> })} */}
            {initialData && !chip && initialData.map(item => {return <Chip onClick={() => select(item)} {...item} /> })}
        </React.Fragment>
    )
}

export default ChipL
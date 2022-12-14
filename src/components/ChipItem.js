import React, { useEffect, useState } from 'react'
import Chip from './Chip';

const ChipItem = (props) => {
    const [data, setData] = useState(props.newData)
    useEffect(() => {
        setData(props.newData)
    }, [JSON.stringify(props.data)])
        
    console.log(props)
    const select = (item) => {
        switch (props.selection) {
            case 'multiple':
                if (item.selected) {
                    let deSelectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: false } : i });
                    setData(deSelectedItem)
                    // initialData = deSelectedItem
                } else {
                    let selectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: true } : i });
                    setData(selectedItem)
                    // initialData = selectedItem
                }
                break;
                case 'single':
                if (item.selected) {
                    let deSelectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: false } : i });
                    setData(deSelectedItem)
                    // initialData = deSelectedItem
                } else {
                    let selectedItem = data.map((i) => { return i.key === item.key ? { ...i, selected: true } : {...i, selected: false} });
                    setData(selectedItem)
                    // initialData = selectedItem
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

    return (
        <React.Fragment>
            {/* {data && chip && data.map(item => { item.key = (`${item.id || keyGenerator()}`); item.id=item.key; item.remove = remove; return chip(item) })} */}
            {data && props.chip && data.map(item => { item.remove=((e) => remove(e, item.key)); item.onClick=(() => select(item)); return props.chip(item) })}
            {/* {data && !chip && data.map(item => {retrun <Chip onClick={() => select(item)} selected={selection} {...item} />})} */}
            {/* {data && !chip && data.map(item => { item.key = `${item.id || keyGenerator()}`; return <Chip onClick={() => select(item)} {...item} /> })} */}
            {data && !props.chip && data.map(item => {return <Chip onClick={() => select(item)} {...item} /> })}
        </React.Fragment>
    )
}

export default ChipItem
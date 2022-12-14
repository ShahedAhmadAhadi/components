/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chip from './Chip';
import { keyGenerator } from './index';

const ChipList = ({
    data: initialData,
    selection,
    defaultData,
    textField,
    valueField,
    onDataChange,
    chip,
    value,
    ...props
}) => {
    let customData = initialData.map((item) => ({
        dataItem: { ...item },
        text: `${textField ? item[textField] : item.text}`,
        value: `${textField ? item[valueField] : item.value}`,
        selected: item.selected,
        key: item.id || keyGenerator(),
    }));
    const [data, setData] = useState(customData);
    console.log(data);
    const check = JSON.stringify(initialData);
    useEffect(() => {
        setData(customData);
    }, [check]);
    const select = (item) => {
        switch (selection) {
            case 'multiple':
                if (item.selected) {
                    let deSelectedItem = data.map((i) => {
                        return i.key === item.key
                            ? { ...i, selected: false }
                            : i;
                    });
                    setData(deSelectedItem);
                } else {
                    let selectedItem = data.map((i) => {
                        return i.key === item.key
                            ? { ...i, selected: true }
                            : i;
                    });
                    setData(selectedItem);
                }
                break;
            case 'single':
                if (item.selected) {
                    let deSelectedItem = data.map((i) => {
                        return i.key === item.key
                            ? { ...i, selected: false }
                            : i;
                    });
                    setData(deSelectedItem);
                } else {
                    let selectedItem = data.map((i) => {
                        return i.key === item.key
                            ? { ...i, selected: true }
                            : { ...i, selected: false };
                    });
                    setData(selectedItem);
                }
                break;
            default:
                break;
        }
    };
    const remove = (e, key) => {
        e.stopPropagation();
        let removeItem = data.filter((i) => {
            return i.key !== key;
        });
        setData(removeItem);
        value(removeItem);
    };
    return (
        <React.Fragment>
            {data &&
                chip &&
                data.map((item) => {
                    item.remove = (e) => remove(e, item.key);
                    item.onClick = () => select(item);
                    item.disabled = item.dataItem.disabled;
                    item.className = props.className;
                    item.selectedClassName = props.selectedClassName;
                    item.style = props.style;
                    item.selectedStyle = props.selectedStyle;
                    item.removableStyle = props.removableStyle;
                    item.removableClassName = props.removableClassName;
                    item.selectedRemovableStyle = props.selectedRemovableStyle;
                    item.selectedRemovableClassName =
                        props.selectedRemovableClassName;
                    return chip(item, 'li');
                })}
            {data &&
                !chip &&
                data.map((item) => {
                    console.log(item);
                    return (
                        <Chip
                            onClick={() => select(item)}
                            {...item}
                            {...props}
                        />
                    );
                })}
        </React.Fragment>
    );
};

ChipList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
    selection: PropTypes.oneOf(['single', 'multiple', 'none']),
    textField: PropTypes.string,
    valueField: PropTypes.string,
    onDataChange: PropTypes.func,
    chip: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default ChipList;

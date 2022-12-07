import React from 'react';

function ListItem({ textField, data, value, selected, className, selectedStyleClassName, ...other }) {
    const keyGenerator = () => {
        let randNums = Math.round(Math.random() * 9000 + 999);
        let key = ['', '-', randNums];
        const alphaNumGenerator = () => {
            let randAlpha = Math.ceil(Math.random() * 26);
            return randAlpha;
        };
        for (let i = 0; i < 4; i++) {
            let oneAlphaNum = alphaNumGenerator();
            key[0] += String.fromCharCode(oneAlphaNum + 64);
        }
        return key.join('');
    };
    if (typeof data[0] === 'string') {

    }
    return (
        <React.Fragment>
            {!data.length && <li className='option-item-empty'>empty</li>}
            {typeof data[0] === 'string' &&
                data.map((item) => (
                    <li
                        className={`option-item  ${selected === item ? `${selectedStyleClassName || 'selected'}` : ''} ${className}`}
                        onClick={() => value(item)}
                        {...other}
                        key={keyGenerator()}>
                        {item}
                    </li>
                ))}
            {typeof data[0] === 'object' &&
                data.map((item) => (
                    <li
                        className={`option-item ${selected === item ? 'selected' : ''} ${className}`}
                        onClick={() => { value(item); }}
                        key={item.id ? item.id : keyGenerator()}
                        {...other}
                    >
                        {item[textField]}
                    </li>
                ))}
        </React.Fragment>
    );
}

export default ListItem;

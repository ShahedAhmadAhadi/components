import React from 'react';

function ListItem({ textField, data, value, ...other }) {
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
    return (
        <React.Fragment>
            {textField &&
                data &&
                data.map((item) => (
                    <li
                        className="option-item"
                        onClick={() => value(item)}
                        key={item.id ? item.id : keyGenerator()}
                        {...other}
                        >
                        {item[textField]}
                    </li>
                ))}
            {!textField &&
                data &&
                data.map((item) => (
                    <li
                        className="option-item"
                        onClick={() => value(item)}
                        {...other}
                        key={keyGenerator()}>
                        {item}
                    </li>
                ))}
        </React.Fragment>
    );
}

export default ListItem;

import React from 'react'

function DropDownLIst(data,defaultItem, textField) {
    const keyGenerator = () => {
        let randNums = Math.round(Math.random() * 9000 + 999)
        let key = ['', '-', randNums]
        const alphaNumGenerator = () => {
            let randAlpha = Math.ceil(Math.random() * 26 )
            return randAlpha
        }
        for (let i = 0; i < 4; i++) {
            let oneAlphaNum = alphaNumGenerator()
            key[0] += String.fromCharCode(oneAlphaNum + 64)
        }
        return key.join('')
    }
    data = [{item: 'red'}]
    // data = ['blue', 'red']
    textField = 'item'
    return (
    <React.Fragment>
        <ul>
            {textField && data && data.map(item => (<li key={item.id ? item.id: keyGenerator()}>{item[textField]}</li>))}
            {!textField && data && data.map(item => (<li key={keyGenerator()}>{item}</li>))}
        </ul>
        <select className=''>
            <option>basket</option>
            <option>basket</option>
            <option>basket</option>
            <option>basket</option>
            <option>basket</option>
        </select>
    </React.Fragment>
  )
}

export default DropDownLIst
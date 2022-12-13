import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Chip from './components/Chip';
import ChipList from './components/ChipList';
import DropDownLIst from './components/DropDownList';
import Input from './components/Input';

function App() {
  const inp = useRef(null)
  useEffect(() => {
    // inp.current.focus()
  }, [])
  const [value, setValue] = React.useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // const data = [{ a: 'red', id: 1 }, { a: 'green', id: 2 }, { a: 'blue', id: 3 }]
  const data = ['blue', 'red', 'green', 'black', 'white', 'pink', 'yellow', 'orange', 'gray', 'blo', 'blu']
  // const data = []
  const textField = 'a'

  const fruits = [
    {
      text: "Berry",
      value: "berry",
      disabled: false,
    },
    {
      text: "Apple",
      value: "apple",
      disabled: true,
    },
    {
      text: "Strawberry",
      value: "strawberry",
      disabled: false,
    },
    {
      text: "Banana",
      value: "banana",
      disabled: true,
    },
    {
      text: "Kiwi",
      value: "kiwi",
      disabled: false,
    },
  ];

  return (
    <div className="App">
      <Input ref={inp} pattern='[A-Za-z]+' className="style-on-error:bg-red-500" styleOnError={{ border: '1px solid green' }} />
      <Input label="name" pattern='[A-Za-z]+' className="text-blue-300 border-cyan-600 focus:border-yellow-500" />
      <br></br>
      <br></br>
      <DropDownLIst selectedStyleClassName={'bg-yellow-200'} childrenClassName={'text-pink-600'} fillMode={'outline'} required={true} filterable={true} defaultItem={'Select Color ...'} textField={textField} data={data} className={'rounded-full'} onChange={(val) => setValue(val)} value={value} />
      <br></br>
      <Button fillMode={''} disabled className={''} icon={'bi bi-wallet2'}></Button>
      <Button fillMode={'flat'} className={'a'} icon={'bi bi-wallet2'}></Button>
      <Button fillMode={'outline'} className={''} icon={'bi bi-wallet2'}></Button>
      <Chip className={'bg-red-50'} size={'small'} removable={true} icon={'bi bi-wallet2'}  text='white' selectedIcon={'bi bi-wallet'} selected> </Chip>
      <ChipList data={fruits} chip={(props) =>{console.log('props', props); return <Chip removable={true} className={'bg-red-200'} {...props} />}}></ChipList> 
      <div className="example-config">Selected Value: {value}</div>
      {/* <DropDownLIst data={data} onChange={handleChange}></DropDownLIst> */}
      <Button fillMode={'link'} className={''} icon={'bi bi-wallet2'}>button</Button>
    </div>
  );
}

export default App;

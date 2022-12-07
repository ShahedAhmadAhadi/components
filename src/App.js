import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Drop from './components/Drop';
import DropDownLIst from './components/DropDownLIst';
import Input from './components/Input';

function App() {
  const inp = useRef(null)

  useEffect(() => {
    // inp.current.focus()
  }, [])


  const [value, setValue] = React.useState(null);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const data = [{ a: 'red', id: 1 }, { a: 'green', id: 2 }, { a: 'blue', id: 3 }]
  // const data = ['blue', 'red', 'green', 'black', 'white', 'pink', 'yellow', 'orange', 'gray', 'blo', 'blu']
  // const data = []
  const textField = 'a'

  return (
    <div className="App">
      <Input ref={inp} pattern='[A-Za-z]+' className="style-on-error:bg-red-500" styleOnError={{border: '1px solid green'}} />
      <Input label="name" pattern='[A-Za-z]+' className="text-blue-300 border-cyan-600 focus:border-yellow-500" />
      <br></br>
      <br></br>
      <Drop textField={textField} data={data} />
      <br></br>
      <Button fillMode={''} disabled className={''} icon={'bi bi-wallet2'}></Button>
      <Button fillMode={'flat'} className={'a'} icon={'bi bi-wallet2'}></Button>
      <Button fillMode={'outline'} className={''} icon={'bi bi-wallet2'}></Button>
      <div className="example-config">Selected Value: {value}</div>
      {/* <DropDownLIst data={data} onChange={handleChange}></DropDownLIst> */}
      <Button fillMode={'link'} className={''} icon={'bi bi-wallet2'}>button</Button>
    </div>
  );
}

export default App;

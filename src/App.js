import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Input from './components/Input';

function App() {
  const inp = useRef(null)

  useEffect(() => {
    inp.current.focus()
  }, [])
  
  
  
  return (
    <div className="App flex flex-col">
      <Input className="border border-solid border-teal-500" pattern='[A-Za-z]+' />
        <Input label={'name'} pattern='[A-Za-z]+' labelStyle={{backgroundColor: '#32aec3aa'}} labelStyleError={{color: 'yellow'}} styleOnError={{border: '1px solid blue'}} style={{border: '1px solid green'}} />
        {/* <Input value="" styleOnError={{border:'1px solid blue'}} onChange={(e) => (setValue(e.target.value))} type={'text'} className={'bg-slate-200 '} style={{backgroundColor: '#aa459088'}} required={true} /> */}
        <Input ref={inp} type={'text'} className={'bg-slate-200 border-orange-900 focus:border-green-900'} style={{color: 'blue'}} pattern='[A-Za-z]+' placeholder={'something'} />
    </div>
  );
}

export default App;

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
      <Input ref={inp} pattern='[A-Za-z]+' className="style-on-error:bg-red-500" styleOnError={{border: '1px solid green'}} />
      <Input label="name" pattern='[A-Za-z]+' className="text-blue-300 border-cyan-600 focus:border-yellow-500" />
      {/* <Input className="text-red-600 bg-slate-500 border-4 border-red-600 focus:border-blue-500" />
      <Input className="border border-solid border-teal-500 focus:border-gray-600" pattern='[A-Za-z]+' />
      <Input label={'name'} pattern='[A-Za-z]+' labelStyle={{ backgroundColor: '#32aec3aa' }} labelStyleError={{ color: 'yellow' }} styleOnError={{ border: '1px solid blue' }} style={{ border: '1px solid green' }} />
      <Input ref={inp} type={'text'} className={'bg-slate-200 border-pink-600 focus:border-green-500'} style={{ color: 'blue' }} pattern='[A-Za-z]+' placeholder={'something'} /> */}
    </div>
  );
}

export default App;

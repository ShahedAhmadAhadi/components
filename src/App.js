import React, { useEffect, useRef } from 'react';
import './App.css';
import Button from './components/Button';
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
      <br></br>
      <br></br>
      <br></br>
      <Button>button</Button>
    </div>
  );
}

export default App;

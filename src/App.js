import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Chip from './components/Chip';
import ChipL from './components/ChipL';
import ChipList from './components/ChipList';
import DropDownLIst from './components/DropDownList';
import Input from './components/Input';
import MultiSelect from './components/MultiSelect';

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
      id: 1
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
      selected: true,
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
  const monthsData = [
    {
      text: "December",
      value: "1",
    },
    {
      text: "January",
      value: "2",
    },
    {
      text: "February",
      value: "3",
    },
    {
      text: "June",
      value: "4",
    },
    {
      text: "July",
      value: "5",
    },
    {
      text: "August",
      value: "6",
    },
  ];
  const colorMap = {
    1: "#B4E5F4",
    2: "#B4E5F4",
    3: "#B4E5F4",
    4: "#F0C88B",
    5: "#F0C88B",
    6: "#F0C88B",
  };
  const winterMonths = ["1", "2", "3"];
  const MonthChip = (props) => {
    // console.log(props, 'sldjifioejoiejl')
    // Winter!!!!
    return (
      <Chip
        {...props}
        disabled={winterMonths.some((f) => f === props.value)}
        style={{
          backgroundColor: colorMap[props.value],
        }}
      />
    );
  };

  const meals = [
    {
      name: "Pizza",
      icon: "🍕",
      data: [
        {
          name: "Ketchup",
        },
        {
          name: "Mustard",
        },
        {
          name: "Mayonnaise",
        },
      ],
    },
    {
      name: "Sushi",
      icon: "🍣",
      data: [
        {
          name: "Wasabi",
        },
        {
          name: "Ginger",
        },
        {
          name: "Soy sauce",
        },
      ],
    },
    {
      name: "Burger",
      icon: "🍔",
      data: [
        {
          name: "Onions",
        },
        {
          name: "Avocado",
        },
        {
          name: "Eggs",
        },
      ],
    },
  ];
  const sport = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Field Hockey",
    "Football",
    "Table Tennis",
    "Tennis",
    "Volleyball",
  ];
  const [meal, setMeal] = useState(meals[1]);
  const handleClick = (name) => {
    let newMeal = meals.find((m) => m.name === name);
    setMeal(newMeal);
    // console.log(newMeal)
  };
  return (
    <div className="App">
      <Input ref={inp} pattern='[A-Za-z]+' className="style-on-error:bg-red-500" styleOnError={{ border: '1px solid green' }} />
      <Input label="name" pattern='[A-Za-z]+' className="text-blue-300 border-cyan-600 focus:border-yellow-500" />
      <br></br>
      {meals.map((m, index) => {
            return (
              <div key={index}>
                <Button
                  selected={meal.name === m.name}
                  onClick={handleClick.bind(undefined, m.name)}
                >
                  <span>{m.icon}</span>
                  {m.name}
                </Button>
              </div>
            );
          })}
      <h4>Add more:</h4>
      {/* {console.log(meal)} */}
        <ChipList
          // key={meal.name}
          selection="multiple"
          data={meal.data}
          textField="name"
          valueField="name"
          removable={true}
          style={{backgroundColor: 'white', padding: '8px'}} selectedStyle={{backgroundColor: 'black', color: 'white'}} removableStyle={{backgroundColor: 'black', color: 'white'}} selectedRemovableStyle={{backgroundColor: 'white', color: 'black'}}
        />
        <ChipList data={sport}></ChipList>
      <br></br>
      <DropDownLIst selectedStyleClassName={'bg-yellow-200'} childrenClassName={'text-pink-600'} fillMode={'outline'} required={true} filterable={true} defaultItem={'Select Color ...'} textField={textField} data={data} className={'rounded-full'} onChange={(val) => setValue(val)} value={value} />
      <br></br>
      <MultiSelect data={sport} />
      <ChipList
        selection="multiple"
        data={monthsData}
        chip={MonthChip}
        // onDataChange={handleMonthChange}
      />
      <Button fillMode={''} disabled className={''} icon={'bi bi-wallet2'}></Button>
      <Button fillMode={'flat'} className={'a'} icon={'bi bi-wallet2'}></Button>
      <Button fillMode={'outline'} className={''} icon={'bi bi-wallet2'}></Button>
      <Chip className={'bg-red-50'} size={'small'} removable={true} icon={'bi bi-wallet2'}  text='white' selectedIcon={'bi bi-wallet'} selected> </Chip>
      <ChipList className={'bg-red-200 p-2'} selectedClassName={'bg-red-400'} removableClassName={'bg-yellow-200 text-black'} selectedRemovableClassName={'bg-gray-800 text-white'} selection={'multiple'} data={fruits} chip={(props) =>{ return <Chip removable={true} {...props} />}}></ChipList> 
      {/* <ChipList  data={fruits} selection={'single'} removable={true}></ChipList>  */}
      <div className="example-config">Selected Value: {value}</div>
      {/* <DropDownLIst data={data} onChange={handleChange}></DropDownLIst> */}
      <Button fillMode={'link'} className={''} icon={'bi bi-wallet2'}>button</Button>
    </div>
  );
}

export default App;
